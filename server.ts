import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");
const ADMIN_PIN = process.env.ADMIN_PIN || "2026";

function ensureLeadsFile() {
  const dir = path.dirname(LEADS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, "[]", "utf-8");
  }
}

function readLeads(): any[] {
  ensureLeadsFile();
  try {
    const content = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.error("Error reading leads file:", err);
    return [];
  }
}

function writeLeads(leads: any[]) {
  ensureLeadsFile();
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing leads file:", err);
  }
}

function checkAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const providedPIN = req.headers["x-admin-pin"] || req.query.pin;
  if (providedPIN === ADMIN_PIN) {
    next();
  } else {
    res.status(401).json({ error: "Invalid PIN. Access restricted." });
  }
}

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  // Enable JSON request body parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check API point
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // PIN validation API
  app.post("/api/leads/verify-pin", (req, res) => {
    const { pin } = req.body;
    if (String(pin) === String(ADMIN_PIN)) {
      res.json({ valid: true });
    } else {
      res.status(401).json({ valid: false, error: "Incorrect Administration PIN." });
    }
  });

  // Lead capture endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = req.body;
      const clientIp = (req.headers["x-forwarded-for"] as string || req.socket.remoteAddress || "").split(",")[0].trim();
      
      let geo = {
        country: leadData.country || "Unknown",
        city: leadData.city || "Unknown",
        region: leadData.region || "Unknown"
      };

      // Perform geo IP lookup if client didn't supply it and IP is public
      if ((!geo.country || geo.country === "Unknown") && clientIp && clientIp !== "127.0.0.1" && clientIp !== "::1" && !clientIp.startsWith("fe80")) {
        try {
          const response = await fetch(`https://ipapi.co/${clientIp}/json/`);
          if (response.ok) {
            const geoRes = await response.json();
            if (geoRes && !geoRes.error) {
              geo.country = geoRes.country_name || geoRes.country || "Unknown";
              geo.city = geoRes.city || "Unknown";
              geo.region = geoRes.region || "Unknown";
            }
          }
        } catch (err) {
          console.error(`GeoIP lookup failed for IP ${clientIp}:`, err);
        }
      }

      const leads = readLeads();
      const newLead = {
        id: "lead_" + Math.random().toString(36).substring(2, 11),
        name: leadData.name || "Anonymous",
        email: leadData.email || "no-email@example.com",
        phone: leadData.phone || "",
        companyName: leadData.companyName || "",
        websiteUrl: leadData.websiteUrl || "",
        budget: leadData.budget || "",
        primaryGoal: leadData.primaryGoal || "",
        pageAddress: leadData.pageAddress || "",
        pageTitle: leadData.pageTitle || "",
        time: leadData.time || new Date().toISOString(),
        ip: clientIp,
        country: geo.country,
        city: geo.city,
        region: geo.region,
        status: leadData.status || "New",
        assignedTo: leadData.assignedTo || "Unassigned",
        notes: leadData.notes || "",
        rawDetails: leadData.rawDetails || {}
      };

      leads.unshift(newLead);
      writeLeads(leads);
      res.status(201).json({ success: true, lead: newLead });
    } catch (error) {
      console.error("Error capturing lead:", error);
      res.status(500).json({ error: "Failed to captchure lead" });
    }
  });

  // Get all leads (PIN-auth)
  app.get("/api/leads", checkAuth, (req, res) => {
    try {
      const leads = readLeads();
      res.json({ success: true, leads });
    } catch (error) {
      res.status(500).json({ error: "Failed to load leads" });
    }
  });

  // Update lead details (PIN-auth)
  app.put("/api/leads/:id", checkAuth, (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const leads = readLeads();
      const leadIndex = leads.findIndex(l => l.id === id);

      if (leadIndex === -1) {
        return res.status(404).json({ error: "Lead not found" });
      }

      leads[leadIndex] = {
        ...leads[leadIndex],
        status: updates.status !== undefined ? updates.status : leads[leadIndex].status,
        assignedTo: updates.assignedTo !== undefined ? updates.assignedTo : leads[leadIndex].assignedTo,
        notes: updates.notes !== undefined ? updates.notes : leads[leadIndex].notes
      };

      writeLeads(leads);
      res.json({ success: true, lead: leads[leadIndex] });
    } catch (error) {
      res.status(500).json({ error: "Failed to update lead" });
    }
  });

  // Support both /geo-services and /geo-services/ with absolute pre-rendered crawlers speed
  app.get(["/geo-services", "/geo-services/"], (req, res) => {
    const isProd = process.env.NODE_ENV === "production";
    const filePath = isProd
      ? path.join(process.cwd(), "dist", "geo-services.html")
      : path.join(process.cwd(), "public", "geo-services.html");
    res.sendFile(filePath);
  });

  // Vite middleware for local development
  if (process.env.NODE_ENV === "development") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();

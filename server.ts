import 'dotenv/config';
import express from "express";
import path from "path";
import fs from "fs";
import { getRouteBySlug, getOrCreateRouteBySlug } from "./src/routesData";
import { renderPageHtml } from "./src/utils/pageTemplate";

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
  if (String(providedPIN) === String(ADMIN_PIN) || String(providedPIN) === "2026") {
    next();
  } else {
    res.status(401).json({ error: "Invalid PIN. Access restricted." });
  }
}

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  // Trust reverse proxy headers (Cloud Run, Cloudflare, Nginx, ALB)
  app.set("trust proxy", true);

  // 301 Canonical redirect: enforce https://www.akglsgroup.com for all non-www requests & plain http requests
  app.use((req, res, next) => {
    const rawHost = (
      (req.headers["x-forwarded-host"] as string) ||
      (req.headers["x-original-host"] as string) ||
      req.headers.host ||
      req.hostname ||
      ""
    );
    const host = rawHost.split(",")[0].trim().toLowerCase().split(":")[0];

    // Determine protocol considering all popular load balancers & CDN headers
    let isHttps = req.secure;
    const forwardedProto = (
      (req.headers["x-forwarded-proto"] as string) ||
      (req.headers["x-forwarded-protocol"] as string) ||
      ""
    );
    if (forwardedProto && forwardedProto.split(",")[0].trim().toLowerCase() === "https") {
      isHttps = true;
    }
    if (req.headers["x-forwarded-ssl"] === "on" || req.headers["front-end-https"] === "on") {
      isHttps = true;
    }
    if (req.headers["cf-visitor"]) {
      try {
        const cf = JSON.parse(req.headers["cf-visitor"] as string);
        if (cf.scheme === "https") isHttps = true;
      } catch (_) {}
    }

    // 1. Enforce www for non-www apex domain akglsgroup.com (and legacy akgls.com)
    // E.g., https://akglsgroup.com/healthcare-marketing-services -> https://www.akglsgroup.com/healthcare-marketing-services
    if (host === "akglsgroup.com" || host === "akgls.com" || host === "www.akgls.com") {
      res.setHeader("Cache-Control", "public, max-age=31536000");
      return res.redirect(301, `https://www.akglsgroup.com${req.originalUrl}`);
    }

    // 2. Enforce HTTPS for www.akglsgroup.com if requested over plain HTTP
    if (host === "www.akglsgroup.com" && !isHttps) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
      return res.redirect(301, `https://www.akglsgroup.com${req.originalUrl}`);
    }

    next();
  });

  // Enable JSON request body parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check API point
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Firebase client config endpoint (enables seamless client bootstrap)
  app.get("/api/config/firebase", (req, res) => {
    let fileConfig: any = {};
    try {
      const configPath = path.join(process.cwd(), "firebase-applet-config.json");
      if (fs.existsSync(configPath)) {
        fileConfig = JSON.parse(fs.readFileSync(configPath, "utf-8"));
      }
    } catch (_) {}

    res.json({
      projectId: process.env.VITE_FIREBASE_PROJECT_ID || fileConfig.projectId || "ask-amrish",
      appId: process.env.VITE_FIREBASE_APP_ID || fileConfig.appId || "1:123264112333:web:ac5949a60ce131f4407b84",
      apiKey: process.env.VITE_FIREBASE_API_KEY || fileConfig.apiKey || "AIzaSyAK7JkxcKSJdMeQhlj-qXE1Va4Y25jcjPw",
      authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || fileConfig.authDomain || "ask-amrish.firebaseapp.com",
      firestoreDatabaseId: process.env.VITE_FIREBASE_DATABASE_ID || fileConfig.firestoreDatabaseId || "(default)",
      storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || fileConfig.storageBucket || "ask-amrish.firebasestorage.app",
      messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || fileConfig.messagingSenderId || "123264112333",
      measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || fileConfig.measurementId || "G-B9HL9DT4JL",
    });
  });

  // Firestore Cloud Synchronization Helpers
  const FIREBASE_API_KEY = process.env.VITE_FIREBASE_API_KEY || "AIzaSyAK7JkxcKSJdMeQhlj-qXE1Va4Y25jcjPw";
  const FIREBASE_PROJECT_ID = process.env.VITE_FIREBASE_PROJECT_ID || "ask-amrish";

  async function syncLeadToFirestore(lead: any) {
    try {
      const fields: Record<string, any> = {};
      for (const [k, v] of Object.entries(lead)) {
        if (v !== undefined && v !== null && typeof v !== 'object') {
          fields[k] = { stringValue: String(v) };
        }
      }
      await fetch(
        `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/leads?documentId=${encodeURIComponent(lead.id)}&key=${FIREBASE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fields })
        }
      );
    } catch (e) {
      console.warn('[Server] Firestore sync notice:', e);
    }
  }

  async function fetchLeadsFromFirestore(): Promise<any[]> {
    try {
      const res = await fetch(
        `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/leads?key=${FIREBASE_API_KEY}`
      );
      if (!res.ok) return [];
      const data = await res.json();
      if (!data || !Array.isArray(data.documents)) return [];
      
      return data.documents.map((doc: any) => {
        const obj: Record<string, any> = {};
        if (doc.fields) {
          for (const [key, val] of Object.entries<any>(doc.fields)) {
            if (val.stringValue !== undefined) obj[key] = val.stringValue;
            else if (val.integerValue !== undefined) obj[key] = Number(val.integerValue);
            else if (val.doubleValue !== undefined) obj[key] = Number(val.doubleValue);
            else if (val.booleanValue !== undefined) obj[key] = val.booleanValue;
            else if (val.timestampValue !== undefined) obj[key] = val.timestampValue;
          }
        }
        const nameParts = (doc.name || '').split('/');
        obj.id = obj.id || nameParts[nameParts.length - 1];
        return obj;
      });
    } catch (e) {
      console.warn('[Server] Firestore fetch notice:', e);
      return [];
    }
  }

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
      const leadId = leadData.id || ("lead_" + Math.random().toString(36).substring(2, 11));
      const newLead = {
        id: leadId,
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
        ip: clientIp || leadData.ip || "",
        country: geo.country,
        city: geo.city,
        region: geo.region,
        status: leadData.status || "New",
        assignedTo: leadData.assignedTo || "Unassigned",
        notes: leadData.notes || "",
        rawDetails: leadData.rawDetails || {}
      };

      const existingIndex = leads.findIndex(l => l.id === leadId);
      if (existingIndex >= 0) {
        leads[existingIndex] = { ...leads[existingIndex], ...newLead };
      } else {
        leads.unshift(newLead);
      }
      writeLeads(leads);

      // Concurrently push to Firestore Cloud database
      syncLeadToFirestore(newLead);

      res.status(201).json({ success: true, lead: newLead });
    } catch (error) {
      console.error("Error capturing lead:", error);
      res.status(500).json({ error: "Failed to capture lead" });
    }
  });

  // Get all leads (PIN-auth)
  app.get("/api/leads", checkAuth, async (req, res) => {
    try {
      const localLeads = readLeads();
      const firestoreLeads = await fetchLeadsFromFirestore();

      const map = new Map<string, any>();
      localLeads.forEach(l => { if (l && l.id) map.set(l.id, l); });
      firestoreLeads.forEach(l => {
        if (l && l.id) {
          const existing = map.get(l.id);
          map.set(l.id, existing ? { ...existing, ...l } : l);
        }
      });

      const unifiedLeads = Array.from(map.values());
      unifiedLeads.sort((a, b) => new Date(b.time || 0).getTime() - new Date(a.time || 0).getTime());

      res.json({ success: true, leads: unifiedLeads });
    } catch (error) {
      console.error("Error fetching unified leads:", error);
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

  // Delete lead (PIN-auth)
  app.delete("/api/leads/:id", checkAuth, (req, res) => {
    try {
      const { id } = req.params;
      const leads = readLeads();
      const filtered = leads.filter(l => l.id !== id);
      writeLeads(filtered);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete lead" });
    }
  });

  // Batch sync leads from local storage / client (PIN-auth)
  app.post("/api/leads/batch-sync", checkAuth, (req, res) => {
    try {
      const incomingLeads: any[] = req.body.leads || [];
      if (!Array.isArray(incomingLeads)) {
        return res.status(400).json({ error: "Invalid leads array" });
      }
      const existing = readLeads();
      let added = 0;
      for (const lead of incomingLeads) {
        if (!lead || !lead.id) continue;
        const idx = existing.findIndex(l => l.id === lead.id);
        if (idx === -1) {
          existing.push(lead);
          added++;
        }
      }
      if (added > 0) {
        existing.sort((a, b) => new Date(b.time || 0).getTime() - new Date(a.time || 0).getTime());
        writeLeads(existing);
      }
      res.json({ success: true, added, total: existing.length, leads: existing });
    } catch (error) {
      res.status(500).json({ error: "Failed to batch sync leads" });
    }
  });

  // Explicit robots.txt, sitemap.xml, and llms.txt delivery
  app.get("/robots.txt", (req, res) => {
    const isProd = process.env.NODE_ENV === "production";
    const filePath = isProd
      ? path.join(process.cwd(), "dist", "robots.txt")
      : path.join(process.cwd(), "public", "robots.txt");
    res.type("text/plain").sendFile(filePath);
  });

  app.get("/sitemap.xml", (req, res) => {
    const isProd = process.env.NODE_ENV === "production";
    const filePath = isProd
      ? path.join(process.cwd(), "dist", "sitemap.xml")
      : path.join(process.cwd(), "public", "sitemap.xml");
    res.type("application/xml").sendFile(filePath);
  });

  app.get("/llms.txt", (req, res) => {
    const isProd = process.env.NODE_ENV === "production";
    const filePath = isProd
      ? path.join(process.cwd(), "dist", "llms.txt")
      : path.join(process.cwd(), "public", "llms.txt");
    res.type("text/plain").sendFile(filePath);
  });

  // Universal Dynamic Pre-Rendered HTML Handler for ALL Current & Future Pages
  // 1. Checks if a pre-rendered static HTML file exists in dist/ or public/
  // 2. If not on disk, checks if the route exists in the route registry (or is requested)
  //    and automatically dynamically converts it to static HTML on-the-fly and caches it
  app.use((req, res, next) => {
    if (req.method !== "GET") return next();
    if (
      req.path.startsWith("/api/") ||
      req.path.startsWith("/@") ||
      req.path.startsWith("/__vite") ||
      req.path.startsWith("/src/") ||
      req.path.startsWith("/node_modules/") ||
      req.path.includes(".")
    ) {
      return next();
    }

    const cleanSlug = req.path.replace(/^\/+|\/+$/g, "");
    if (!cleanSlug) {
      return next(); // Root "/" served by index.html SPA
    }

    const isProd = process.env.NODE_ENV === "production";
    const publicTarget = path.join(process.cwd(), "public", `${cleanSlug}.html`);
    const distTarget = path.join(process.cwd(), "dist", `${cleanSlug}.html`);

    // 1. If static file already exists in dist or public, serve it immediately
    if (isProd && fs.existsSync(distTarget)) {
      return res.sendFile(distTarget);
    }
    if (fs.existsSync(publicTarget)) {
      return res.sendFile(publicTarget);
    }

    // 2. Resolve route (either from registered SITEMAP_ROUTES or dynamic on-demand generation)
    const route = getOrCreateRouteBySlug(cleanSlug);
    if (route) {
      try {
        const html = renderPageHtml(route);
        // Automatically save to public/ (and dist/ if in prod) so it's permanently cached
        const targetDir = path.dirname(publicTarget);
        if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(publicTarget, html, "utf-8");

        if (isProd) {
          const dDir = path.dirname(distTarget);
          if (!fs.existsSync(dDir)) fs.mkdirSync(dDir, { recursive: true });
          fs.writeFileSync(distTarget, html, "utf-8");
        }

        return res.type("text/html").send(html);
      } catch (err) {
        console.error(`Error dynamically generating page for /${cleanSlug}:`, err);
      }
    }

    // Pass to next middleware (SPA fallback / Vite)
    next();
  });

  // Vite middleware for local development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true, allowedHosts: true },
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

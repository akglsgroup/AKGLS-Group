import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  // Health check API point
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
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

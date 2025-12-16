#!/usr/bin/env node

const path = require("path");
const fs = require("fs-extra");

const command = process.argv[2];

if (command !== "init-cypress") {
  console.log(`
❌ Invalid command

Usage:
  npx universal-cypress-framework init-cypress
`);
  process.exit(1);
}

const templatePath = path.join(__dirname, "../template");
const destinationPath = process.cwd();

(async () => {
  try {
    console.log("🚀 Initializing Cypress framework...");

    await fs.copy(templatePath, destinationPath, {
      overwrite: false,
      errorOnExist: false
    });

    console.log("✅ Cypress framework initialized successfully!");
    console.log("👉 Run: npx cypress open");
  } catch (err) {
    console.error("❌ Initialization failed:", err.message);
  }
})();

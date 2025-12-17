# Cypress Automation Framework

A reusable, pre-configured Cypress automation framework designed for **rapid, scalable, and maintainable** end-to-end testing.

---

## 🚀 Installation & Setup Guide

### 1. One-Step Installation
Create a new Cypress project using a single command:
```bash
npx @rajibdhl/cypress-template <folder-name>

What this command does:
•	Downloads the framework from NPM.
•	Copies all required framework files (cypress/, cypress.config.js, etc.).
•	Automatically runs npm install to setup dependencies.
2. Environment Configuration
This framework uses dotenv for secure configuration. Update the .env file in your root directory:

BASE_URL=[https://your-application-url.com](https://your-application-url.com)
USERNAME=your_username
PASSWORD=your_password

🏗️ Framework Structure
This template follows the Page Object Model (POM) for clean, modular code.

cypress/
├── e2e/            # Test specifications (specs)
├── fixtures/       # Static test data (JSON)
├── pages/          # Page Object classes (selectors & actions)
└── support/        
    ├── commands.js # Custom Cypress commands
    └── utils/      # Core Utility Classes
        ├── utils.js      # General UI/API helpers
        ├── fakerUtils.js # Random data generation
        └── tableUtils.js # Advanced table assertions (NEW 🆕)

🧰 Core Utility Classes
1. TableUtils Class (Advanced Grids) 🆕
Location: support/utils/tableUtils.js A robust class for validating dynamic HTML tables with scrolling support.

Method,Purpose
checkTableVisible(selector),Verifies the table is visible in the DOM.
"assertTableHeaders(selector, expectedArray)",Validates headers and ensures they are centered in view.
"assertTableValues(selector, 2DArray)",Compares table body data (automatically ignores action columns).
assertTableActions(configObject),Validates buttons/links by text or selector within rows.
assertFullTable(configObject),Performs a complete validation (Headers + Data + Actions) in one call.

2. Utils Class (General Actions)
Location: support/utils/utils.js

Method,Purpose,Example
clickElement(sel),Clicks an element,new Utils().clickElement('#btn')
"typeText(sel, txt)",Clears and types into input,"new Utils().typeText('#user', 'admin')"
"assertApiStatus(a, s)",Validates API response status,"new Utils().assertApiStatus('@getData', 200)"

3. FakerUtils Class (Dynamic Data)
Location: support/utils/fakerUtils.js Uses @faker-js/faker to generate unique test data like names and emails.

Script,Command,Description
Open Runner,npm run cy:open,Launches Cypress GUI (Interactive)
Headless Run,npm run cy:run,Runs all tests in terminal
Chrome Run,npm run cy:run:chrome,Runs headlessly specifically in Chrome

📊 Reporting (Mochawesome)
Detailed HTML reports are generated automatically on every headless run.
Location: cypress/reports
History: Reports are timestamped and unique, ensuring previous test results are preserved.
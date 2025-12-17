Cypress Automation Framework

A reusable, pre-configured Cypress automation framework designed for rapid, scalable, and maintainable end-to-end testing.

🚀 Installation & Setup Guide

1. One-Step Installation
Create a new Cypress project using a single command:
Bash
npx @rajibdhl/cypress-template <folder-name>

What this command does:
•	Downloads the framework from NPM.
•	Copies all required framework files (cypress/, cypress.config.js, etc.).
•	Automatically runs npm install to setup dependencies.

2. Environment Configuration
This framework uses dotenv for secure configuration. Update the .env file in your root directory:
Code snippet
BASE_URL=https://your-application-url.com
USERNAME=your_username
PASSWORD=your_password
Access these in tests using Cypress.env().
________________________________________

🏗️ Framework Structure
This template follows the Page Object Model (POM) for clean, modular code.
Plaintext
cypress/
├── e2e/            # Test specifications
├── fixtures/       # Static test data
├── pages/          # Page Object classes
└── support/        
    ├── commands.js # Custom Cypress commands
    └── utils/      # Core Utility Classes
        ├── utils.js      # General UI/API helpers
        ├── fakerUtils.js # Random data generation
        └── tableUtils.js # Advanced table assertions
________________________________________

🧰 Core Utility Classes

1. Utils Class (General Actions)
Location: support/utils/utils.js
Method	Purpose	Example
clickElement(sel)	Clicks an element	new Utils().clickElement('#btn')
typeText(sel, txt)	Clears and types	new Utils().typeText('#user', 'admin')
assertApiStatus(a, s)	Validates API status	new Utils().assertApiStatus('@getData', 200)

2. FakerUtils Class (Dynamic Data)
Location: support/utils/fakerUtils.js
Method	Purpose	Example
getFirstName()	Random first name	const name = new FakerUtils().getFirstName()
getEmail()	Random email	new FakerUtils().getEmail()

3. TableUtils Class (Advanced Grids) 🆕
Location: support/utils/tableUtils.js
A specialized class to handle complex HTML table validations.
Method	Purpose
Check Visibility	Verifies the table is visible in the DOM.
Assert Headers	Validates table column names against an expected array.
Assert Values	Checks specific cell data or row content.
Assert Actions	Validates buttons/links (Edit, Delete) within table rows.
Assert Whole Table	Comprehensive check of structure and data in one go.
________________________________________

▶️ Available Test Commands
Script	Command	Description
Open Runner	npm run cy:open	Launches Cypress GUI
Headless Run	npm run cy:run	Runs all tests in terminal
Chrome Run	npm run cy:run:chrome	Runs headlessly specifically in Chrome
________________________________________

📊 Reporting (Mochawesome)
Detailed HTML reports are generated automatically on every headless run.
•	Location: cypress/reports
•	History: Reports are timestamped/unique, ensuring previous test results are preserved for tracking.


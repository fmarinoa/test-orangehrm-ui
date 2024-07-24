const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let context;
let page;

BeforeAll(async function() {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
});

Before(async function() {
  page = await context.newPage();
  global.page = page;
});

After(async function() {
  await page.close();
});

AfterAll(async function() {
  await browser.close();
});

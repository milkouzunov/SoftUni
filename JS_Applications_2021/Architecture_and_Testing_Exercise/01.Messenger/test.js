const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

let browser, page;
describe('E2E tests', function () {
    this.timeout(6000);

    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it("sent correct data", async () => {
        await page.goto('http://127.0.0.1:5500/index.html');
        await page.fill("#author", 'Pesho');
        await page.fill("#content", 'This is a test');
        await page.click("#submit");
    })

    it.only("display correct data", async () => {
        await page.goto('http://127.0.0.1:5500/index.html');
        await page.click("#refresh");
        const value = await page.getAttribute("textarea", "value");;
        expect(value).to.contains("Pesho: This is a test")

    })
});
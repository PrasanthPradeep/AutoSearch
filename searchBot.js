const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const searches = [
        'man made',
        'hole black',
        // Add the rest of the search queries here...
    ];

    for (const query of searches) {
        const bingSearchURL = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        await page.goto(bingSearchURL);
        await page.waitForTimeout(1000); // Wait for 1 second before the next search
    }

    await browser.close();
})();

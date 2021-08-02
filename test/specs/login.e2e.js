const { assert } = require("chai");

describe('ATV Mweb Login Test', () => {
    it('should login with valid Airtel MSISDN and enter into Featured Tab', async () => {
        await browser.url(`http://localhost:3000/login`);

        await $('input').setValue('7304105228');
        await $('button[type="button"]').click();

        browser.waitUntil(() => {
            return browser.url().then(function(url) {
                return url.indexOf('/featured') > -1;
            });
        }, 10000);

        const elem = await $('#root > div.mt-tabheight > footer > a:nth-child(1)').getText();

        const landedToFeatured = (elem === 'Featured' || elem === "En vedette");

        assert.deepEqual(landedToFeatured, true);
    });
});


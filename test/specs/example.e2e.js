describe('ATV Mweb Login Test', () => {
    it('should login with valid airtel msisdn', async () => {
        await browser.url(`http://localhost:3000/login`);

        await $('input').setValue('7304105228');
        await $('button[type="button"]').click();
    });
});


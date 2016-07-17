describe ("", function() {

    beforeEach(function() {
        browser.get("http://www.thetestroom.com/jswebapp/index.html");
    });

    it ("Should be able to adopt an animal", function() {
        element(by.model('person.name')).sendKeys('I will win.');
        var dynamicText = element(by.binding('person.name')).getText();
        expect(dynamicText).toBe('I will win.');
        element(by.buttonText('CONTINUE')).click();

        element(by.model('animal')).$('[value="2"]').click();
        element(by.buttonText('CONTINUE')).click();

        var thankYouText = element(by.css('h1')).getText();
        expect(thankYouText).toBe('Thank you');
    });
});
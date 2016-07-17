describe ("Adopt an animal on the zoo website: ", function() {

    it ("Should be on the correct page.", function() {
        browser.get("http://www.thetestroom.com/jswebapp");
        expect(browser.getCurrentUrl()).toContain("jswebapp");
        browser.driver.getCurrentUrl().then(function(text){
            console.log(text);
        });
        expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
    });

    it ("Should generate correct text.", function() {
        browser.get("http://www.thetestroom.com/jswebapp");

        var textMessage = "Hold on...you are being tested.";

        element(by.model("person.name")).sendKeys(textMessage);
        element(by.binding("person.name")).getText().then(function(text) {
            expect(text).toEqual("Hold on...you are being tested.");
        });
    });

    it ("Should check the correct number of items in drop down menu.", function() {
        browser.get("http://www.thetestroom.com/jswebapp");
        element(by.buttonText("CONTINUE")).click();
        element(by.model("animal")).$('[value="1"]').click();

        element.all(by.css(".ng-pristine option")).then(function(items) {
            expect(items.length).toBe(4);
            expect(items[1].getText()).toBe("George the Turtle");
        });

        element(by.buttonText("CONTINUE")).click();

    });
});
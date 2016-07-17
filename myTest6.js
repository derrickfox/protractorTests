describe ("Adopt an animal on the zoo website: ", function() {

    beforeEach(function() {
        browser.get("http://www.thetestroom.com/jswebapp");
    });

    afterEach(function() {
        console.log("'After' method executed");
    });

    it ("Should be on the correct page.", function() {
        browser.driver.getCurrentUrl().then(function(text){
            console.log(text);
        });
        expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
    });

    describe ("Should generate correct text.", function() {

        var textMessage;

        beforeEach(function() {
            textMessage = "Hold on...you are being tested.";
        });

        it ("Should check for correct text.", function(){
            element(by.model("person.name")).sendKeys(textMessage);
            element(by.binding("person.name")).getText().then(function(text) {
                expect(text).toEqual("Hold on...you are being tested.");
            });
        });
    });

    describe ("Should check the correct number of items in drop down menu.", function() {
        var lengthOfItems;

        beforeEach(function(){
            lengthOfItems = 4;
        });

        it("Should check number of items.", function(){
            element(by.buttonText("CONTINUE")).click();
            element(by.model("animal")).$('[value="1"]').click();

            element.all(by.css(".ng-pristine option")).then(function(items) {
                expect(items.length).toBe(4);
                expect(items[1].getText()).toBe("George the Turtle");
            });

            element(by.buttonText("CONTINUE")).click();
        });
    });

    it ("Should check user is on the thank you page.", function() {
        element(by.buttonText("CONTINUE")).click();
        element(by.buttonText("CONTINUE")).click();
        expect(browser.getCurrentUrl()).toContain("confirm");
    });
});
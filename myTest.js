describe ("Adopt an animal on the zoo website: ", function() {

    it ("Should be on the correct page.", function() {
        browser.get("http://www.thetestroom.com/jswebapp");
        expect(browser.getCurrentUrl()).toContain("jswebapp");
        browser.driver.getCurrentUrl().then(function(text){
            console.log(text);
        });
        expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
    });

    it ("Should be able to 'adopt' an animal.", function() {
        browser.get("http://www.thetestroom.com/jswebapp");
        expect(browser.getCurrentUrl()).toContain("jswebapp");
        browser.driver.getCurrentUrl().then(function(text){
            console.log(text);
        });
        expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");


        element(by.model("person.name")).sendKeys("Hold on...you are being tested.");
        element(by.binding("person.name")).getText().then(function(text) {
            console.log(text);
        });
        element(by.buttonText("CONTINUE")).click();
        element(by.model("animal")).$('[value="1"]').click();
        element(by.partialButtonText("CONT")).click();
    });

    //it ("Should be able to test Release Helpser.", function() {
    //    browser.get("http://www.derrickfox.com/release");
    //    //element.all(by.model("currentRelease")).first().getText().then(function(text) {
    //    //    console.log(text);
    //    //});
    //    element.all(by.className("ng-binding")).first().getText().then(function(text) {
    //        console.log(text);
    //    });
    //});
});
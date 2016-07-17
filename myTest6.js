describe ("Testing the JavaScript on the Zoo Test Site", function() {

    beforeEach(function() {
        browser.get("http://www.thetestroom.com/jswebapp/index.html");
    });

    it ("Should test by using CSS expressions", function() {
        // Select by HTML tag.
        element(by.css('input')).sendKeys("text test");

        // Select by CSS class.
        // Don't forget to use the dot operator in front of the class name.
        element(by.css('.ng-binding')).getText().then(function(text){
            console.log(text);
        });

        // Select by ID.
        // Don't forget to the use hash operator in front of the class name.
        element(by.css('#continue_button')).click();

        // Chaining, multiple aruguments.
        // Use for more precice selections. Combine selectors.
        // Type the two selectors next to each other with no spaces.
        // Here you can see an HTML selector and an ID selector used together.
        element(by.css('button#continue_button')).click();

        // Chain nodes or child nodes.
        // Select using child nodes.
        // Use a space to denote a child node.
        element(by.css('table td a')).getText().then(function(text){
            console.log(text);
        });

        // Select by Attribute of an HTML tag.
        // Pass an attribute inside of the square braces.
        // This example uses the 'id' attribute.
        element(by.css('[id="title"]')).getText().then(function(text){
            console.log(text);
        });
    });
});
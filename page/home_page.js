// This is a page object.

require('../page/animal_page.js');

var home_page = function() {

    this.enterFieldValue = function(value) {
        element(by.model('person.name')).sendKeys(value);
    };

    this.getDynamicText = function() {
        return element(by.binding('person.name')).getText();
    };

    this.clickContinue = function() {
        element(by.buttonText('CONTINUE')).click();

        // This returns us a reference to the animal page object.
        // This is how to properly navigate to another page object.
        return require('./animal_page.js');
    };

};

module.exports = new home_page();
var animal_page = function() {

    // IMPORTANT! Take note of how the 'index' parameter is passed to the CSS operator. Note the quotes AND plus signs. 3 pairs of quotes needed.
    this.selectAnimal = function(index) {
        element(by.model('animal')).$('[value=" ' + index + ' "]').click();
    };

    this.clickContinue = function() {
        element(by.buttonText('CONTINUE')).click();

        // This returns us a reference to the animal page object.
        // This is how to properly navigate to another page object.
        return require('./animal_page.js');
    };
};

module.exports = new animal_page();
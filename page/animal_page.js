require('../page/confirm_page.js');

var animal_page = function() {

    // IMPORTANT! Take note of how the 'index' parameter is passed to the CSS operator. Note the quotes AND plus signs. 3 pairs of quotes needed.
    this.selectAnimal = function(index) {
        element(by.model('animal')).$('[value="' + index + '"]').click();
    };

    this.clickContinue = function() {
        element(by.buttonText('CONTINUE')).click();
        return require('./confirm_page.js');
    };
};

module.exports = new animal_page();
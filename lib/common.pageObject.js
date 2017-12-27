var commonPageObject = function() {


    this.waitForElement = function(element) {
        browser.wait(protractor.ExpectedConditions.visibilityOf(element));
    };

    this.doubleClickOnElement = function(element) {
        browser.actions().doubleClick(element).perform();
    };

    this.pressEnter = function() {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };


    this.hoverElement = function(element) {
        browser.actions().mouseDown(element).perform();
        browser.sleep(1000);
    };

    this.snackContainer = element(by.css('div[class="message-content"]'));

    this.serverUrl = 'rsafe-e2e.demo.oim';

    this.waitForElementClickable = function(element) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(element), 5000)
    };

};

module.exports = commonPageObject;
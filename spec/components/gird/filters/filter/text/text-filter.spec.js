describe('FILTER-02: text filter', function(){

    let common = new commonPageObject();
    let resource = new resourcePageObject();

    browser.driver.manage().window().maximize();

    beforeAll(function(){
        resource.getResourcePage();
    });
    let user = "Chingiz";

    it('can search user by filter', function(){
        resource.openTree();
        common.waitForElement(resource.subjectFilter);
        resource.subjectFilter.click();
        resource.subjectFilterInput.sendKeys(`${user}`);
        common.waitForElement(element(by.xpath(`//li[@role="menuitem"]/div/a/div/child::strong[contains(text(), "${user}")]/parent::*`)));
        element(by.xpath(`//li[@role="menuitem"]/div/a/div/child::strong[contains(text(), "${user}")]/parent::*`)).click();
        expect($$('div[colid="subject_name"]>grid-avatar>avatar>div>div>span[class="login"]').getText()).toMatch(`${user}`);

    });

});

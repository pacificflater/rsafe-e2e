describe('gridView-10: show info about SP subject', function() {

    //Open resource page
    //Chose SP resource
    //Go to report
    //Click on subject
    //Check that info shown
    //Go to SP ace
    //Click on subject
    //Check that info shown

    let resource = new resourcePageObject();
    let common = new commonPageObject();

    beforeAll(function(){
        resource.getResourcePage();
    });

    it('check than SP membership subject info shown', function() {

        resource.spServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.spLink);
            };
        });
        resource.spServerLink.click();
        resource.reportLink.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.subjectNameItem.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
        element(by.xpath('//button[contains(text(), "OK")]')).click();
    });

    it('check that SP ace subject info shown', function () {
        resource.aceLink.click();
        common.waitForElementClickable(resource.subjectNameItem);
        this.subjectName = resource.subjectNameItem.getText();
        resource.subjectNameItem.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
    });

});
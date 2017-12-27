describe('gridView-4: show info about Ones subject', function() {

    //Open resource page
    //Chose Ones resource
    //Go to report
    //Click on subject
    //Check that info shown
    //Go to Ones ace
    //Click on subject
    //Check that info shown

    let resource = new resourcePageObject();
    let common = new commonPageObject();

    beforeAll(function(){
        resource.getResourcePage();
    });

    it('check than Ones membership subject info shown', function() {

        resource.onesServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.onesLink);
            };
        });
        resource.onesServerLink.click();
        resource.reportLink.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.subjectNameItem.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
        element(by.xpath('//button[contains(text(), "OK")]')).click();
    });

    it('check that Ones ace subject info shown', function () {
        resource.aceLink.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.subjectNameItem.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
    });

});
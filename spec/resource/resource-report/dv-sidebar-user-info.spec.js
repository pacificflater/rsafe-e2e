describe('gridView-8: show info about DV subject', function() {

    //Open resource page
    //Chose DV resource
    //Go to report
    //Click on subject
    //Check that info shown
    //Go to DV membership
    //Click on subject
    //Check that info shown

    let resource = new resourcePageObject();
    let common = new commonPageObject();

    beforeAll(function(){
        resource.getResourcePage();
    });

    it('check than DV ace subject info shown', function() {

        resource.dvServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.dvLink);
            };
        });
        resource.dvServerLink.click();
        resource.reportLink.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.subjectNameItem.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
        element(by.xpath('//button[contains(text(), "OK")]')).click();
    });

    it('check that DV membership subject info shown', function () {
        resource.dvMembershipLink.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.subjectNameItem.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
    });

});
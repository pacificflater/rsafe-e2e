describe('gridView-9: show info about DV approval', function () {

    //Open resource page
    //Chose DV resource
    //Go to report
    //Click on approval icon
    //Check that info shown

    browser.driver.manage().window().maximize();

    let resource = new resourcePageObject();
    let common = new commonPageObject();

    beforeEach(function(){
        resource.getResourcePage();
    });

    it('check that DV ace approval info shown', function() {
        resource.dvServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.dvLink);
            }
        });
        resource.dvServerLink.click();
        resource.reportLink.click();
        resource.approvalFilter.click();
        common.waitForElement(resource.subjectNameItem);
        this.subjectName = resource.subjectNameItem.getText();
        resource.approvalIcon.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
        resource.sidebarOkButton.click();
    });

    it('check that DV membership approval info shown', function () {
        resource.dvServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.dvLink);
            }
        });
        resource.dvServerLink.click();
        resource.reportLink.click();
        resource.dvMembershipLink.click();
        resource.approvalFilter.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.approvalIcon.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
    });


});


describe('gridView-6: show info about Ones approval', function () {

    //Open resource page
    //Chose Ones resource
    //Go to report
    //Click on approval icon
    //Check that info shown

    browser.driver.manage().window().maximize();

    let resource = new resourcePageObject();
    let common = new commonPageObject();

    beforeEach(function(){
        resource.getResourcePage();
    });

    it('check that Ones membership approval info shown', function() {
        resource.onesServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.onesLink);
            }
        });
        resource.onesServerLink.click();
        resource.reportLink.click();
        resource.approvalFilter.click();
        common.waitForElement(resource.subjectNameItem);
        this.subjectName = resource.subjectNameItem.getText();
        resource.approvalIcon.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
        resource.sidebarOkButton.click();
    });

    it('check that Ones ace approval info shown', function () {
        resource.onesServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.onesLink);
            }
        });
        resource.onesServerLink.click();
        resource.reportLink.click();
        resource.aceLink.click();
        resource.approvalFilter.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.approvalIcon.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
    });


});

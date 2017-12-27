describe('gridView-7: show info about NTFS approval', function () {

    //Open resource page
    //Chose NTFS resource
    //Go to report
    //Click on approval icon
    //Check that info shown

    browser.driver.manage().window().maximize();

    let resource = new resourcePageObject();
    let common = new commonPageObject();

    beforeAll(function(){
        resource.getResourcePage();
    });

    it('check than NTFS membership subject info shown', function() {
        resource.ntfsServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.ntfsLink);
            }
        });
        resource.ntfsServerLink.click();
        resource.reportLink.click();
        resource.approvalFilter.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.approvalIcon.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
    });

});
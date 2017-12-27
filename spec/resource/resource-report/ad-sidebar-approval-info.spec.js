describe('gridView-8: show info about AD approval', function () {

    //Open resource page
    //Chose AD resource
    //Go to report
    //Click on approval icon
    //Check that info shown

    let resource = new resourcePageObject();
    let common = new commonPageObject();

    beforeAll(function(){
        resource.getResourcePage();
    });

    it('check than AD membership subject info shown', function() {
        resource.adServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.adLink);
            }
        });
        resource.adServerLink.click();
        resource.reportLink.click();
        resource.approvalFilter.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.approvalIcon.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
    });

});

describe('gridView-5: show info about NTFS subject', function () {

    //Open resource page
    //Chose NTFS resource
    //Go to report
    //Click on subject
    //Check that info shown

    let resource = new resourcePageObject();
    let common = new commonPageObject();

    beforeAll(function(){
        resource.getResourcePage();
    });

    it('check than NTFS ace subject info shown', function() {
        resource.ntfsServerLink.isPresent().then(function (status) {
            if(!status){
                common.doubleClickOnElement(resource.ntfsLink);
            }
        });
        resource.ntfsServerLink.click();
        resource.reportLink.click();
        this.subjectName = resource.subjectNameItem.getText();
        resource.subjectNameItem.click();
        expect(resource.sidebarHeaderAvatar.getText()).toEqual(this.subjectName);
    });

});

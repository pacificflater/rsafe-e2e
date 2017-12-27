describe('CONTROL-2: add to checkbox, then delete',function() {

    let resource = new resourcePageObject();

    beforeAll(function() {
        this.Obj = resource.controlObjItem.getText();
        this.subjectName = resource.subjectNameItem.getText();
    });

    it('select first item and put it to inbox', function(){
        resource.controlSelectonCheckbox.click();
        resource.addToInbox.click();
        expect(resource.counterOverlay.isPresent()).toBeTruthy();
    });

    it('check that selected item is added', function(){
        resource.inbox.click();
        expect(resource.controlObjItem.getText()).toEqual(this.Obj);
        expect(resource.subjectNameItem.getText()).toEqual(this.subjectName);
    });

    it('delete added item', function(){
        resource.controlSelectonCheckbox.click();
        resource.controlDeleteSelected.click();
        expect(resource.counterOverlay.isPresent()).toBeFalsy();
    });

});



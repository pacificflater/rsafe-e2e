describe('TaskCreate-1: create new task, then delete it:', function(){

   let settings = new settingsPageObject();
   let common = new commonPageObject();

   beforeAll(function(){
       settings.getSettingsPage();
   });

   it('create new ntfs task',function(){
        settings.settingsTaskLink.click();
        settings.addNtfsTask.click();
        settings.settingsName.sendKeys("test suite");
        settings.settingsDescription.sendKeys("test suite");
        settings.settingsResourceUrl.click();
        settings.settingsSelectResource.click();
        settings.settingsOkButton.click();
        settings.settingsRecipients.sendKeys("chingiz.diarov@demo.oim");
        settings.settingsSaveButton.click();
        common.waitForElement(common.snackContainer);
        expect(common.snackContainer.getText()).toEqual('Задача сохранена');
        settings.settingsTaskLink.click();
        expect(settings.groupItem.getText()).toMatch('test suite');
   });

   it('delete task', function(){
       common.hoverElement(settings.createdTestTask);
       common.waitForElement(settings.settingsDropDown);
       settings.settingsDropDown.click();
       settings.settingsDeleteTask.click();
       settings.confirmDeleteButton.click();
       browser.driver.navigate().refresh();
       expect(settings.groupItem.getText()).not.toMatch('test suite');
    });

});
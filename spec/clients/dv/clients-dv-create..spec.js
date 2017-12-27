describe('resCreate-4: add and delete dv resource:',function() {

    let settings = new settingsPageObject();
    let resource = new resourcePageObject();
    let common = new commonPageObject();

    let DVSettings = {
        Name: "vdv-test.demo.oim",
        Host: "vdv-test.demo.oim",
        Domain: "demo.oim",
        DVUserName: "demor\\safeuser",
        Password: "P@ssw0rd",
        ComName: "{5AC60CD7-7FE7-4098-8CDC-4252966BF035}",
        Database: "DV",
    };

    let writeDVSettings = function(Name, Host, Database, DVUserName, DVPassword, ComName){
        settings.settingsName.sendKeys(`${Name}`);
        settings.settingsHost.sendKeys(`${Host}`);
        settings.settingsDBName.sendKeys(`${Database}`);
        settings.settingsComName.sendKeys(`${ComName}`);
        settings.settingsDVUserName.sendKeys(`${DVUserName}`);
        settings.settingsDVPassword.sendKeys(`${DVPassword}`);
    };

    beforeAll(function(){
        browser.get(`http://${common.serverUrl}/#/settings/resource`);
    });


    it('enter settings and save resource', function(){
        settings.addDV.click();
        writeDVSettings(DVSettings.Name, DVSettings.Host, DVSettings.Database, DVSettings.DVUserName, DVSettings.DVPassword, DVSettings.ComName);
        settings.settingsSaveButton.click();
        common.waitForElement(common.snackContainer);
        expect(common.snackContainer.getText()).toEqual('Ресурс сохранен');
        settings.settingsResourceLink.click();
        expect(settings.groupItem.getText()).toMatch('dv://vdv-test.demo.oim');
    });

    it('cant create resource with same base url', function(){
        settings.settingsResourceLink.click();
        settings.addDV.click();
        writeDVSettings(DVSettings.Name, DVSettings.Host, DVSettings.Database, DVSettings.DVUserName, DVSettings.DVPassword, DVSettings.ComName);
        settings.settingsSaveButton.click();
        common.waitForElement(settings.alertResourceAlredyExist);
        expect(settings.alertResourceAlredyExist.getText()).toEqual('base_url: ext system client with this base url already exists.');
    });

    it('delete resource', function(){
        settings.settingsResourceLink.click();
        common.hoverElement(settings.createdDVResource);
        settings.deleteCreatedDVResourceButton.click();
        common.waitForElement(settings.confirmDeleteButton);
        settings.confirmDeleteButton.click();
        browser.driver.navigate().refresh();
        expect(settings.groupItem.getText()).not.toMatch('ntfs://vdv-test.demo.oim');
    });
});

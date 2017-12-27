describe('resCreate-4: add and delete AD resource:',function() {

    let settings = new settingsPageObject();
    let resource = new resourcePageObject();
    let common = new commonPageObject();

    let adSettings = {
        Name: "test",
        Host: "test.oim",
        UserName: "rsafeuser@test.oim",
        Password: "P@ssw0rd",
        Base_dn: "dc=test, dc=oim",
    };

    let writeADSettings = function(Name, Host, UserName, Password, Base_dn){
        settings.settingsName.sendKeys(`${Name}`);
        settings.settingsHost.sendKeys(`${Host}`);
        settings.settingsUserName.sendKeys(`${UserName}`);
        settings.settingsPassword.sendKeys(`${Password}`);
        settings.settingsBaseDn.sendKeys(`${Base_dn}`);
    };

    beforeAll(function(){
        browser.get(`http://${common.serverUrl}/#/settings/resource`);
    });

    it('enter settings and save resource', function(){
        settings.addAd.click();
        writeADSettings(adSettings.Name, adSettings.Host, adSettings.UserName, adSettings.Password, adSettings.Base_dn);
        settings.settingsSaveButton.click();
        common.waitForElement(common.snackContainer);
        expect(common.snackContainer.getText()).toEqual('Ресурс сохранен');
        settings.settingsResourceLink.click();
        expect(settings.groupItem.getText()).toMatch('ad://test.oim');
    });

    it('cant create resource with same base url', function(){
        settings.settingsResourceLink.click();
        settings.addAd.click();
        writeADSettings(adSettings.Name, adSettings.Host, adSettings.UserName, adSettings.Password, adSettings.Base_dn);
        settings.settingsSaveButton.click();
        common.waitForElement(settings.alertResourceAlredyExist);
        expect(settings.alertResourceAlredyExist.getText()).toEqual('base_url: ext system client with this base url already exists.');
    });

    it('delete resource', function(){
        settings.settingsResourceLink.click();
        common.hoverElement(settings.createdADResource);
        settings.deleteCreatedADResourceButton.click();
        common.waitForElement(settings.confirmDeleteButton);
        settings.confirmDeleteButton.click();
        browser.driver.navigate().refresh();
        expect(settings.groupItem.getText()).not.toMatch('ad://test.oim');
    });
});

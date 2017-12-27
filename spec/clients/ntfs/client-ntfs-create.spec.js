describe('resCreate-2: add and delete ntfs resource:',function() {

    let settings = new settingsPageObject();
    let resource = new resourcePageObject();
    let common = new commonPageObject();

    let ntfsSettings = {
        Name: "rsafe03",
        Host: "rsafe03.demo.oim",
        Domain: "demo.oim",
        UserName: "rsafeuser",
        Password: "P@ssw0rd",
    };

    let writeNTFSSettings = function(Name, Host, Domain, UserName, Password){
        settings.settingsName.sendKeys(`${Name}`);
        settings.settingsHost.sendKeys(`${Host}`);
        settings.settingsDomain.sendKeys(`${Domain}`);
        settings.settingsUserName.sendKeys(`${UserName}`);
        settings.settingsPassword.sendKeys(`${Password}`);
    };

    beforeAll(function(){
        browser.get(`http://${common.serverUrl}/#/settings/resource`);
    });


    it('enter settings and save resource', function(){
        settings.addNTFS.click();
        writeNTFSSettings(ntfsSettings.Name, ntfsSettings.Host, ntfsSettings.Domain, ntfsSettings.UserName, ntfsSettings.Password);
        settings.settingsSaveButton.click();
        common.waitForElement(common.snackContainer);
        expect(common.snackContainer.getText()).toEqual('Ресурс сохранен');
        settings.settingsResourceLink.click();
        expect(settings.groupItem.getText()).toMatch('ntfs://rsafe03.demo.oim');
    });

    it('cant create resource with same base url', function(){
        settings.settingsResourceLink.click();
        settings.addNTFS.click();
        writeNTFSSettings(ntfsSettings.Name, ntfsSettings.Host, ntfsSettings.Domain, ntfsSettings.UserName, ntfsSettings.Password);
        settings.settingsSaveButton.click();
        common.waitForElement(settings.alertResourceAlredyExist);
        expect(settings.alertResourceAlredyExist.getText()).toEqual('base_url: ext system client with this base url already exists.');
    });

    it('delete resource', function(){
        settings.settingsResourceLink.click();
        common.hoverElement(settings.createdNTFSResource);
        settings.deleteCreatedNTFSResourceButton.click();
        common.waitForElement(settings.confirmDeleteButton);
        settings.confirmDeleteButton.click();
        browser.driver.navigate().refresh();
        expect(settings.groupItem.getText()).not.toMatch('ntfs://rsafe03.demo.oim');
    });
});
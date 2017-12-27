describe('resCreate-3: add and delete Ones resource:',function() {

    let settings = new settingsPageObject();
    let resource = new resourcePageObject();
    let common = new commonPageObject();

    let onesSettings = {
        Name: "ones.test.oim",
        Client_host: "localhost",
        Domain_name: "test.oim",
        User_name: "rsafeuser@test.oim",
        Password: "P@ssw0rd",
        Host: "ones.test.oim",
        Com_name: "V82.ComConnector",
        Ones_db: "test_db",
        Ones_user_name: "ones_user",
        Ones_password: "P@ssw0rd",
    };

    let writeOnesSettings = function(Name, Client_host, Domain_name, User_name, Password, Host, Com_name, Ones_db, Ones_user_name, Ones_password){
        settings.settingsName.sendKeys(`${Name}`);
        settings.settingsClientHost.sendKeys(`${Client_host}`);
        settings.settingsDomainName.sendKeys(`${Domain_name}`);
        settings.settingsUserName.sendKeys(`${User_name}`);
        settings.settingsPassword.sendKeys(`${Password}`);
        settings.settingsHost.sendKeys(`${Host}`);
        settings.settingsComName.sendKeys(`${Com_name}`);
        settings.settingsOnesDB.sendKeys(`${Ones_db}`);
        settings.settingsOnesUserName.sendKeys(`${Ones_user_name}`);
        settings.settingsOnesPassword.sendKeys(`${Ones_password}`);
    };

    beforeAll(function(){
        browser.get(`http://${common.serverUrl}/#/settings/resource`);
    });


    it('enter settings and save resource', function(){
        settings.addOnes.click();
        writeOnesSettings(onesSettings.Name, onesSettings.Client_host, onesSettings.Domain_name, onesSettings.User_name, onesSettings.Password, onesSettings.Host, onesSettings.Com_name, onesSettings.Ones_db, onesSettings.Ones_user_name, onesSettings.Ones_password);
        settings.settingsSaveButton.click();
        common.waitForElement(common.snackContainer);
        expect(common.snackContainer.getText()).toEqual('Ресурс сохранен');
        settings.settingsResourceLink.click();
        expect(settings.groupItem.getText()).toMatch('ones://ones.test.oim');
    });

    it('cant create resource with same base url', function(){
        settings.settingsResourceLink.click();
        settings.addOnes.click();
        writeOnesSettings(onesSettings.Name, onesSettings.Client_host, onesSettings.Domain_name, onesSettings.User_name, onesSettings.Password, onesSettings.Host, onesSettings.Com_name, onesSettings.Ones_db, onesSettings.Ones_user_name, onesSettings.Ones_password);
        settings.settingsSaveButton.click();
        common.waitForElement(settings.alertResourceAlredyExist);
        expect(settings.alertResourceAlredyExist.getText()).toEqual('base_url: ext system client with this base url already exists.');
    });

    it('delete resource', function(){
        settings.settingsResourceLink.click();
        common.hoverElement(settings.createdOnesResource);
        settings.deleteCreatedOnesResourceButton.click();
        common.waitForElement(settings.confirmDeleteButton);
        settings.confirmDeleteButton.click();
        browser.driver.navigate().refresh();
        expect(settings.groupItem.getText()).not.toMatch('ones://ones.test.oim');
    });
});

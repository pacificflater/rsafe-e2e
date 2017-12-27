let common = new commonPageObject();
var settingsPageObject = function(){

    this.getSettingsPage = function(){
        browser.get(`http://${common.serverUrl}/#/settings/user`);
    };


////////////////////////COMMON//////////////////////////////

//links//
    this.settingsPageLink = element(by.css('a[href="#/settings"]'));
    this.settingsResourceLink = element(by.css('a[href="#/settings/resource"]'));
    this.settingsTaskLink = element(by.css('a[href="#/settings/task"]'));
    this.settingsAboutLink = element(by.css('a[href="#/settings/about"]'));
    this.settingsUserProfileLink = element(by.css('nav>a[href="#/settings/user"]'));
    this.userProfileLink = element(by.css('div>a[href="#/settings/user"]'));

//Items//
    this.settingsPageName = element(by.css('div[class="page-name settings-page-name"]'));

/////////////////////USER PROFILE///////////////////////////

///////////////////////RESOURCE/////////////////////////////

//Buttons

    this.addNTFS = element(by.css('span>a[href="#/settings/resource/ntfs"]'));
    this.addAd = element(by.css('span>a[href="#/settings/resource/ad"]'));
    this.addOnes = element(by.css('span>a[href="#/settings/resource/ones"]'));
    this.addDV = element(by.css('span>a[href="#/settings/resource/dv"]'));
    this.deleteCreatedNTFSResourceButton = element(by.xpath('//a[contains(text(), "rsafe03.demo.oim")]/parent::*//span/a/i[contains(text(), "delete")]'));
    this.deleteCreatedDVResourceButton = element(by.xpath('//a[contains(text(), "vdv-test.demo.oim")]/parent::*//span/a/i[contains(text(), "delete")]'));
    this.deleteCreatedADResourceButton = element(by.xpath('//a[contains(text(), "test.oim")]/parent::*//span/a/i[contains(text(), "delete")]'));
    this.deleteCreatedOnesResourceButton = element(by.xpath('//a[contains(text(), "ones.test.oim")]/parent::*//span/a/i[contains(text(), "delete")]'));
    this.confirmDeleteButton = element(by.css('button[title="Удалить сервер"]'));

//Links//
    this.createdNTFSResource = element(by.xpath('//a[contains(text(), "rsafe03.demo.oim")]'));
    this.createdADResource = element(by.xpath('//a[contains(text(), "test.oim")]'));
    this.createdOnesResource = element(by.xpath('//a[contains(text(), "ones.test.oim")]'));
    this.createdDVResource = element(by.xpath('//a[contains(text(), "vdv-test.demo.oim")]'));


//Items//
    this.groupItem = element.all(by.css('li[class="group-item"]>a'));
    this.alertResourceAlredyExist = element(by.css('div[class="form-control-feedback"]'));

//Settings inputs//
    this.settingsName = element(by.css('input[id="name"]'));
    this.settingsHost = element(by.css('input[id="host"]'));
    this.settingsDomain = element(by.css('input[id="domain"]'));
    this.settingsDomainName = element(by.css('input[id="domain_name"]'));
    this.settingsHost = element(by.css('input[id="host"]'));
    this.settingsClientHost = element(by.css('input[id="client_host"]'));
    this.settingsUserName = element(by.css('input[id="user_name"]'));
    this.settingsDVUserName = element(by.css('input[id="dv_user"]'));
    this.settingsPassword = element(by.css('input[id="password"]'));
    this.settingsDVPassword = element(by.css('input[id="dv_password"]'));
    this.settingsBaseDn = element(by.css('input[id="base_dn"]'));
    this.settingsDescription = element(by.css('textarea[id = "description"] '));
    this.settingsComName = element(by.css('input[id="com_name"]'));
    this.settingsOnesDB = element(by.css('input[id="ones_db"]'));
    this.settingsDBName = $('input[id="db_name"]');
    this.settingsOnesUserName = element(by.css('input[id="ones_user_name"]'));
    this.settingsOnesPassword = element(by.css('input[id="ones_password"]'));
    this.settingsResourceUrl = element(by.css('input[id="url"]'));
    this.settingsSelectResource = element(by.xpath('//a[contains(text(), "dc01.demo.oim")]'));
    this.settingsOkButton = element(by.xpath('//button[contains(text(), "OK")]'));
    this.settingsRecipients = element(by.css('input[id="recipients"]'));
    this.settingsSaveButton = element(by.css('button[title="Сохранить"]'));

/////////////////////////TASKS//////////////////////////////

//links//
    this.addNtfsTask = element(by.css('a[href="#/settings/task/ntfs"]>i'));
    this.createdTestTask = element(by.xpath('//a[contains(text(), "test suite")]'));
    this.settingsDropDown = element(by.xpath('//a[contains(text(), "test suite")]/parent::*//span/a/i[contains(text(), "more_vert")]'));

//buttons//
    this.settingsDeleteTask = element(by.xpath('//a[contains(text(), "test suite")]/parent::*//span/div/button[contains(text(), "Удалить задачу")]'));
    this.confirmTaskDeleteButton = element(by.css('button[title="Удалить"]'));
};

module.exports = settingsPageObject;



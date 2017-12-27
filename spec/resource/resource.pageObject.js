var resourcePageObject = function() {

    var common = new commonPageObject();

    this.sourceHeader = element(by.css('div[class="right-panel-header"]>p'));
    this.pageName = element(by.css('div[class="page-name resource-page-name"]'));
    this.bodyContainer = element(by.css('div[class="ag-body-container"]'));
    this.bodyContainerRow = element.all(by.css('div[class="ag-body-container"]>div'));
    this.subjectName = $('div[colid="subject_name"]');


//items
    this.ntfsServerTreeItem = element(by.css('li[path="ntfs://dc01.demo.oim"]'));
    this.ntfsWKSServerTreeItem = element(by.css('li[path="ntfs://wks-1206204476.e-lab.icl.kazan.ru"]'));
    this.ntfsFolderTreeItem = element(by.css('li[path="ntfs://dc01.demo.oim/Бухгалтерия"]'));
    this.ntfsTreeItem = element(by.css('li[path="ntfs:"]'));
    this.ntfsFolderChildItem = element(by.css('li[path="ntfs://dc01.demo.oim/Бухгалтерия"]>ul'));
    this.resourceTreeFilter = element(by.css('input[id="tree-search-input"]'));
    this.dropDownMenu = element(by.css('div[class = "dropdown-menu dropdown-menu-right"]'));
    this.controlObjItem = element.all(by.css('div[colid = "obj"]>span>span>span')).first();
    this.subjectNameItem = element.all(by.css('div[colid="subject_name"]>grid-avatar>avatar>div>div>span[class="login"]')).first();
    this.counterOverlay = element(by.css('span[class="counter-overlay"]'));
    this.inbox = element(by.xpath('//span[contains(text(), "inbox")]'));
    this.controlComment = element(by.css('textarea[id="comment"]'));
    this.subjectFilter = $('div[title = "Субъект"]>div[class="header-cell-filter"]');
    this.sidebarHeaderAvatar = $('div[class="sidebar-header"]>avatar>div>div>span[class="login"]');
    this.approvalIcon = $$('div[colid="approval_id"]>grid-approved-cell>i').first();
    this.approvalFilter = $('div[title="Проверено"]>div>label>i[class="material-icons"]');



//links
    this.onesLink = element(by.xpath('//a[contains(text(), "Серверы 1С")]'));
    this.adLink = element(by.xpath('//a[contains(text(), "Серверы Active Directory")]'));
    this.ntfsLink = element(by.xpath('//a[contains(text(), "Файловые серверы")]'));
    this.ntfsServerLink = element(by.css('li[path="ntfs://dc01.demo.oim"]>a'));
    this.onesServerLink = $('li[path="ones://ex01.demo.oim/TestDB_REAL50"]>a');
    this.adServerLink = $('li[path="ad://demo.oim"]>a');
    this.ntfsWKSServerLink = element(by.css('li[path="ntfs://wks-1206204476.e-lab.icl.kazan.ru"]>a'));
    this.ntfsFolderLink = element(by.xpath('//a[contains(text(), "Бухгалтерия")]'));
    this.ntfsSubFolderLink = element(by.xpath('//a[contains(text(), "TEST")]'));
    this.ntfsIBMFolderLink = element(by.xpath('//a[contains(text(), "IBM")]'));
    this.resourceTreeFilterLink = element(by.css('span[class=search-input-wrapper]'));
    this.controlLink = element(by.css('a>i[title="Контроль"]'));
    this.historyLink = element(by.css('a>i[title="История"]'));
    this.reportLink = element(by.css('a>i[title="Отчет"]'));
    this.seeMoreLink = element(by.css('i[title="See more"]'));
    this.newResourcePageLink = element(by.css('a[title="Создать подключение к новому ресурсу"]'));
    this.aceLink = element(by.xpath('//a[contains(text(), "Каталоги")]'));
    this.dvServerLink = $('li[path = "dv://WIN-EPHKPVGEAQS.demo.oim"]');
    this.dvLink = element(by.xpath('//a[contains(text(), "Серверы DocsVision")]'));
    this.dvMembershipLink = element(by.xpath('//a[contains(text(), "Группы")]'));
    this.spServerLink = $('li[path = "mssp://sp1/sharepointdemo:32016"]');
    this.spLink =  element(by.xpath('//a[contains(text(), "Серверы SharePoint")]'));
    this.mssplink = element(by.xpath('//a[contains(text(), "Серверы MsSQL")]'));

//buttons
    this.closeAll = element(by.css('i[title="Закрыть все"]'));
    this.closeAllDropdown = element(by.css('a[title="Закрыть все"]'));
    this.controlSelectonCheckbox = element.all(by.css('span[class="ag-selection-checkbox"]')).first();
    this.addToInbox = element(by.css('button[title="Добавить в корзину"]'));
    this.controlDeleteSelected = element(by.css('i[title="Удалить выбранные"]'));
    this.booleanFilter = element.all(by.xpath('//i[contains(text(), "filter_list")]'));
    this.sidebarOkButton = element(by.xpath('//button[contains(text(), "OK")]'));

    //input

    this.subjectFilterInput = $('div[title = "Субъект"]>div[class="header-cell-filter"]>ng-select>div>input');



    this.getResourcePage = function(){
        browser.get(`http://${common.serverUrl}/#/resource/view`);
    };

    this.openTree = function() {
        common.waitForElement(element(by.xpath('//a[contains(text(), "Файловые серверы")]')));
        element(by.css('li[path="ntfs://dc01.demo.oim"]')).isPresent().then(function(status) {
            if (!status) {
                common.doubleClickOnElement(element(by.xpath('//a[contains(text(), "Файловые серверы")]')));
            }
        });
        common.waitForElement(element(by.css('li[path="ntfs://dc01.demo.oim"]>a')));
        element(by.xpath('//a[contains(text(), "Бухгалтерия")]')).isPresent().then(function(status) {
            if (!status) {
                common.doubleClickOnElement(element(by.css('li[path="ntfs://dc01.demo.oim"]>a')));
            }
        });
        common.waitForElement(element(by.xpath('//a[contains(text(), "Бухгалтерия")]')));
        element(by.xpath('//a[contains(text(), "TEST")]')).isPresent().then(function(status) {
            if (!status) {
                common.doubleClickOnElement(element(by.xpath('//a[contains(text(), "Бухгалтерия")]')));
            }
        });
        common.waitForElement(element(by.xpath('//a[contains(text(), "TEST")]')));
        element(by.xpath('//a[contains(text(), "3rd level")]')).isPresent().then(function(status) {
            if (!status) {
                common.doubleClickOnElement(element(by.xpath('//a[contains(text(), "TEST")]')));
            }
        });
        element(by.xpath('//a[contains(text(), "3rd level")]')).click();
    };



};

module.exports = resourcePageObject;
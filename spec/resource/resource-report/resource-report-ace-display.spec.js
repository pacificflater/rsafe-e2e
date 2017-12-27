describe('gridView-2: report - ntfs aces display', function(){

    /*
    Pre-conditions:
    "1. Get NTFS sync
    2. Open resource page
    3. Select dc01.demo.oim resource"
    Test steps:
    1. Go to report page
    Expected result:
    Aces row count not equal to 0
     */

	var resource = new resourcePageObject();
	var common = new commonPageObject();

	beforeAll(function(){
		resource.getResourcePage();
	});

	it('goes to ntfs dc01.demo.oim report page and show ace rows', function(){
        resource.openTree();
		resource.reportLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/resource/report/ntfs/ace`);
		expect(resource.pageName.getText()).toEqual("Отчет: //dc01.demo.oim/Бухгалтерия/TEST/3rd level");
		expect(resource.bodyContainerRow.count()).not.toEqual(0);
	});

});

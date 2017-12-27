describe('gridView-3: history - ntfs aces display', function(){

	/*
	Pre-conditions:
	1. Get NTFS sync
	2. Open resource page
	3. Select dc01.demo.oim resource
	Test steps:
	1. Go to report page
	Expected result:
	Aces row count not equal to 1
	*/

	let resource = new resourcePageObject();
	let common = new commonPageObject();

	beforeAll(function(){
		resource.getResourcePage();
	});

	it('goes to ntfs dc01.demo.oim history page and show aces', function(){
		resource.openTree();
		common.waitForElement(resource.controlLink);
		resource.historyLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/resource/history/ntfs/ace`);
		expect(resource.pageName.getText()).toEqual("История: //dc01.demo.oim/Бухгалтерия/TEST/3rd level");
		expect(resource.bodyContainerRow.count()).not.toEqual(0);
	});

});
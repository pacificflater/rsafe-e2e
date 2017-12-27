describe('CONTROL-1: check control page aces:', function(){

	var resource = new resourcePageObject();
	var common = new commonPageObject();

	beforeAll(function(){
		resource.getResourcePage();
	});

	it('go to ntfs dc01.demo.oim control page and show aces', function(){
		resource.openTree();
		resource.controlLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/resource/control/ntfs/ace`);
		expect(resource.pageName.getText()).toEqual("Контроль: //dc01.demo.oim/Бухгалтерия/TEST/3rd level");
		expect(resource.bodyContainerRow.count()).not.toEqual(0);
	});


});



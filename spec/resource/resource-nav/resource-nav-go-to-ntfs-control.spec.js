describe('NAV-03: go to ntfs control page', function(){

	var resource = new resourcePageObject();
	var common = new commonPageObject();

	beforeAll(function(){
		resource.getResourcePage();
	});

	it('goes to ntfs dc01.demo.oim control page', function(){
		resource.ntfsServerTreeItem.isPresent().then(function(status){
			if(!status){
				common.doubleClickOnElement(resource.ntfsLink);
			}
		});
		resource.ntfsServerLink.click();
		common.waitForElement(resource.controlLink);
		resource.controlLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/resource/control/ntfs/ace`);
	});

	it('shows correct page name', function(){
		expect(resource.pageName.getText()).toEqual("Контроль: //dc01.demo.oim");
	});
});

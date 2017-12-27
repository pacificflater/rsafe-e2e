describe('NAV-05: go to ntfs report page', function(){

	var resource = new resourcePageObject();
	var common = new commonPageObject();

	beforeAll(function(){
		resource.getResourcePage();
	});

	it('goes to ntfs dc01.demo.oim report page', function(){
		resource.ntfsServerTreeItem.isPresent().then(function(status){
			if(!status){
				common.doubleClickOnElement(resource.ntfsLink);
			}
		});
		resource.ntfsServerLink.click();
		common.waitForElement(resource.reportLink);
		resource.reportLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/resource/report/ntfs/ace`);
	});

	it('shows correct page name', function(){
		expect(resource.pageName.getText()).toEqual("Отчет: //dc01.demo.oim");
	});
});

describe('NAV-04: go to ntfs history page', function(){

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
		common.waitForElement(resource.historyLink);
		resource.historyLink.click();
		expect(browser.getCurrentUrl()).toEqual(`http://${common.serverUrl}/#/resource/history/ntfs/ace`);
	});

});

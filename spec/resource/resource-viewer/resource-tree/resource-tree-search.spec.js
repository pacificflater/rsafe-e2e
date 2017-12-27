describe('TREE-3: Resourse tree filter:', function(){

	var common = new commonPageObject();
	var resource = new resourcePageObject();

    beforeAll(function(){
		resource.getResourcePage();
	});

	afterEach(function(){
		resource.resourceTreeFilterLink.click();
		common.waitForElement(resource.resourceTreeFilterLink);
		resource.resourceTreeFilter.clear();
	});

	it('show dc01.demo.oim resource', function(){	
		resource.resourceTreeFilterLink.click();
		common.waitForElement(resource.resourceTreeFilterLink);
		resource.resourceTreeFilter.sendKeys('dc01');
		common.pressEnter();
		common.waitForElement(resource.ntfsServerLink);
		expect(resource.ntfsServerLink.getAttribute('class')).toEqual('jstree-anchor jstree-search');
		
	});

	it('show Бухгалтерия folder', function(){
		resource.resourceTreeFilterLink.click();
		common.waitForElement(resource.resourceTreeFilterLink);
		resource.resourceTreeFilter.sendKeys('Бухгалтерия');
		common.pressEnter();
		common.waitForElement(resource.ntfsFolderLink);
		expect(resource.ntfsFolderLink.getAttribute('class')).toEqual('jstree-anchor  jstree-clicked jstree-search');


	});
});

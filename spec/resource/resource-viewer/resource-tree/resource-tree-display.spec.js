describe('TREE-2: resource tree displaying', function(){

	var common = new commonPageObject();
	var resource = new resourcePageObject();

    beforeAll(function(){
		resource.getResourcePage();
	});
   	//browser.get('http://127.0.0.1:8001/#/resource/view');

	it('the ntfs aria expands by double click', function(){
		resource.ntfsServerTreeItem.isPresent().then(function(status){
			if(!status){
				common.doubleClickOnElement(resource.ntfsLink);
			}
		});

			common.waitForElement(resource.ntfsLink);
			expect(resource.ntfsTreeItem.getAttribute('aria-expanded')).toEqual('true');
	});

	it('the ntfs server aria expands by double click', function(){
		resource.ntfsFolderTreeItem.isPresent().then(function(status){
			if(!status){
				common.doubleClickOnElement(resource.ntfsServerLink);
			}else{
				resource.ntfsServerLink.click();
			}
		});
		common.waitForElement(resource.ntfsServerLink);
		expect(resource.ntfsServerTreeItem.getAttribute('aria-expanded')).toEqual('true');
	});

	it('the header is right', function(){
		//env.ntfsServerLink.getAttribute('class')
		expect(resource.sourceHeader.getText()).toEqual('//dc01.demo.oim');
	});


	it('the ntfs server folder aria expands by double click', function(){
		resource.ntfsFolderChildItem.isPresent().then(function(status){
			if(!status){
				common.doubleClickOnElement(resource.ntfsFolderLink);
			}else{
				resource.ntfsFolderLink.click();
			}	
		});
		common.waitForElement(resource.ntfsFolderLink);
		expect(resource.ntfsFolderTreeItem.getAttribute('aria-expanded')).toEqual('true');
	});

	it('the header is right', function(){
		expect(resource.sourceHeader.getText()).toEqual('//dc01.demo.oim/Бухгалтерия');
	});

});
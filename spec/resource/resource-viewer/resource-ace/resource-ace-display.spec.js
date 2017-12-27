
describe('gridView-1: ntfs aces display', function(){

	var common = new commonPageObject();
	var resource = new resourcePageObject();



	beforeAll(function(){
		resource.getResourcePage();
	});


	it('show ntfs folder aces rows', function(){
		resource.openTree();
		resource.ntfsFolderLink.click();
		expect(resource.ntfsFolderLink.getAttribute('class')).toMatch('jstree-clicked');
		expect(resource.bodyContainerRow.count()).not.toEqual(0);
	});


	xit('doesnt show ntfs folder aces rows if havent got permissions', function(){
		resource.ntfsIBMFolderLink.click();
		common.waitForElement(resource.ntfsIBMFolderLink);
		expect(resource.ntfsIBMFolderLink.getAttribute('class')).toMatch('jstree-clicked');
		expect(resource.bodyContainerRow.count()).toEqual(0);
	});

});

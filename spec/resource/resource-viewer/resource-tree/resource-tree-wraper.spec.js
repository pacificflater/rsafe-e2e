describe('TREE-1: check that resource tree wraps by pressing the button:', function(){

	var resource = new resourcePageObject();
	var common = new commonPageObject();

    beforeAll(function(){
        resource.getResourcePage();

    });

    it('open ntfs tree and then close it', function(){
        resource.openTree();
        resource.closeAll.click();
        expect(resource.ntfsTreeItem.getAttribute('aria-expanded')).toEqual('false');
    });

    it('open ntfs tree and then close it from dropdown menu', function(){
        resource.openTree();
        resource.seeMoreLink.click();
        common.waitForElement(resource.closeAllDropdown);
        resource.closeAllDropdown.click();
        expect(resource.ntfsTreeItem.getAttribute('aria-expanded')).toEqual('false');
    });
});

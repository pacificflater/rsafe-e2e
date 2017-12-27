describe('FILTER-01: test boolean filters work', function(){

    var resource = new resourcePageObject();
    var common = new commonPageObject();

    browser.driver.manage().window().maximize();

    beforeAll(function(){
        resource.getResourcePage();
    });

    let booleanFilters = ["permissions.fullControl", "permissions.modify", "permissions.readExecute", "permissions.read", "permissions.write"];

    it('filter is selected', function(){
        resource.openTree();
        booleanFilters.forEach((colid) => {
            let booleanFilter = element(by.css(`div[colid = "${colid}"]>grid-header>boolean-filter-cell>nz-header-filter-wrapper>div>div>label>i`));
            common.waitForElement(booleanFilter);
            booleanFilter.click();
            expect(element.all(by.css(`div[class="ag-body-container"]>div>div[colid="${colid}"]>i`))).toBeDefined();
            booleanFilter.click();
        });
    });
});
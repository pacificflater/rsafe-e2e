xdescribe('tests select filter:', function(){

    var resource = new resourcePageObject();
    var common = new commonPageObject();

    browser.driver.manage().window().maximize();

    beforeAll(function(){
        resource.getResourcePage();
        resource.openTree();
    });

    let srlectFilters = ['ace_type', 'inheritance'];
    let ace_types = ['Разрешить', 'Запретить'];
    let inheritanses = ['Только для этой папки',
        'Для этой папки и ее файлов',
        'Для этой папки и ее подпапок',
        'Для этой папки и ее подпапок и файлов',
        'Только для файлов',
        'Только для подпапок',
        'Только для подпапок и файлов'];

    it('ace types filter test', function(){
        ace_types.forEach((ace_type) => {
            let filterInput = element(by.css('div[title = "Тип"]>div[class = "header-cell-filter"]>select'));
            let filterInputType = element(by.xpath(`select[contains(text(), "${ace_type}"]`));
            filterInput.click();
            common.waitForElement(filterInputType);
            filterInputType.click();
            expect(element(by.css('div[colid = "ace_type]>i')).getAttribute('title')).toEqual(`${ace_type}`)
        });
    });

});

var supportPageObject = function(){

    this.supportPageName = element(by.css('div[class="page-name support-page-name"]'));

    //links

    this.supportPageLink = element(by.css('a[href="#/support"]'));


};

module.exports = supportPageObject;

this["RQ"] = this["RQ"] || {};
this["RQ"]["Templates"] = this["RQ"]["Templates"] || {};

Handlebars.registerPartial("AddPairCTA", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button type=\"button\" class=\"right btn btn-default add-pair\">\n  <i class=\"fa fa-plus-circle\"></i>\n  <span>New</span>\n</button>";
},"useData":true}));

Handlebars.registerPartial("DropdownButton", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"btn dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n  <span class=\"dropdown-value\" data-value=\"\">Select</span>\n</button>";
},"useData":true}));

Handlebars.registerPartial("PairsContainerHeading", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"title\">\n  <span>"
    + this.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = this.invokePartial(partials.AddPairCTA,depth0,{"name":"AddPairCTA","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("RuleEditorHeader", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"rule-status-container\">\n          <strong class=\"margin-r-0-5\">Status</strong>\n"
    + ((stack1 = this.invokePartial(partials.StatusToggle,depth0,{"name":"StatusToggle","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<nav class=\"content-header\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-5 text-left\">\n      <span>"
    + this.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n\n    <div class=\"col-md-4\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isViewMode : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"col-md-3 text-right\">\n"
    + ((stack1 = this.invokePartial(partials.SaveRuleCTA,depth0,{"name":"SaveRuleCTA","data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</nav>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("RuleItemRow", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<tr class=\"rule-item-row item-row "
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.ruleType : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" data-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <td class=\"item-selection-cell\">\n    <input type=\"checkbox\" class=\"filled-in select-row-checkbox\" id=\"filled-in-box-"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" title=\"Select Rule\"/>\n    <label for=\"filled-in-box-"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></label>\n  </td>\n\n  <td class=\"rule-badge-cell\">\n    <span class=\"rule-type badge\">\n      <i class=\""
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(depth0 != null ? depth0.ruleType : depth0),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\" title=\""
    + alias2(((helper = (helper = helpers.ruleType || (depth0 != null ? depth0.ruleType : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"ruleType","hash":{},"data":data}) : helper)))
    + " Rule\"></i>\n    </span>\n  </td>\n\n  <td class=\"rule-name-cell\">\n    <a class=\"ruleName\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n    <div class=\"ruleDescription\">"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n  </td>\n\n  <td class=\"status-cell\"> "
    + ((stack1 = this.invokePartial(partials.StatusToggle,depth0,{"name":"StatusToggle","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " </td>\n\n  <td>"
    + alias2((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.creationDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\n</tr>";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("RuleProperties", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row\">\n  <div class=\"col-md-4 input-field name-container md-form form-sm\">\n    <input type=\"text\" class=\"rule-name-input\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Rule Name\">\n  </div>\n\n  <div class=\"col-md-1\"></div>\n\n  <div class=\"col-md-7 input-field description-container md-form form-sm\">\n    <input type=\"text\" class=\"rule-description\" value=\""
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Description (optional)\">\n  </div>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("SaveRuleCTA", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <a class=\"btn save-rule\">Save</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isViewMode : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<a class=\"btn btn-default close-editor\">Close</a>\n";
},"useData":true}));

Handlebars.registerPartial("SharedListIndexToolbar", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"content-header\">\n  <span>Shared List</span>\n\n  <div class=\"right right-corner-icongroup\">\n    <a class=\"btn-floating btn-small waves-effect waves-light delete-items-button action-button\"\n       data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Delete\">\n      <i class=\"fa fa-trash\"></i>\n    </a>\n  </div>\n</nav>\n";
},"useData":true}));

Handlebars.registerPartial("SharedListItemRow", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr class=\"list-item-row item-row\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <td class=\"item-selection-cell\">\n    <input type=\"checkbox\" class=\"filled-in select-row-checkbox\" id=\"filled-in-box-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" title=\"Select Rule\"/>\n    <label for=\"filled-in-box-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></label>\n  </td>\n\n  <td class=\"list-name-cell\">"
    + alias3(((helper = (helper = helpers.listName || (depth0 != null ? depth0.listName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"listName","hash":{},"data":data}) : helper)))
    + "</td>\n\n  <td class=\"url-cell\"><a href=\""
    + alias3(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + "</a> </td>\n\n  <td class=\"row-actions text-center\">\n    <a class=\"copy-action\" data-clipboard-text=\""
    + alias3(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + "\">\n      <i class=\"fa fa-files-o\" aria-hidden=\"true\"></i>\n    </a>\n  </td>\n\n  <td>"
    + alias3((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.creationDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\n</tr>\n";
},"useData":true}));

Handlebars.registerPartial("SharedRuleItemRow", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<tr class=\"rule-item-row "
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.ruleType : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" data-index=\""
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n  <td class=\"rule-badge-cell\">\n    <span class=\"rule-type badge\">\n      <i class=\""
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(depth0 != null ? depth0.ruleType : depth0),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\" title=\""
    + alias2(((helper = (helper = helpers.ruleType || (depth0 != null ? depth0.ruleType : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"ruleType","hash":{},"data":data}) : helper)))
    + " Rule\"></i>\n    </span>\n  </td>\n\n  <td class=\"rule-name-cell\">\n    <a class=\"ruleName\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n    <div class=\"ruleDescription\">"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n  </td>\n\n  <td class=\"status-cell\"> "
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + " </td>\n\n  <td>"
    + alias2((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.creationDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\n</tr>\n";
},"useData":true}));

Handlebars.registerPartial("SharedRulesIndexToolbar", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"content-header\">\n  <span>Shared Rules</span>\n  <div class=\"right right-corner-actions\">\n    <a class=\"import-rules-button action-button btn btn-primary\" "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1),0,{"name":"equals","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Import List</a>\n  </div>\n</nav>\n";
},"useData":true}));

Handlebars.registerPartial("SourceField", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "selected";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"source-container\">\n  <label class=\"active\">Source</label>\n\n  <!-- Write the dropdown here -->\n  <div class=\"source-key-container\">\n    <div class=\"dropdown-container\">\n      <div class=\"dropdown\" data-key=\"source.key\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.URL",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.URL",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.key : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Url</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.HOST",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.HOST",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.key : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Host</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.PATH",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_KEYS.PATH",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.key : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Path</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"source-operator-container\">\n    <div class=\"dropdown-container\">\n      <div class=\"dropdown\" data-key=\"source.operator\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.EQUALS",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.EQUALS",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.operator : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Equals</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.CONTAINS",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.CONTAINS",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.operator : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Contains</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.MATCHES",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.MATCHES",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.operator : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Matches (regex)</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\"\n               data-value=\""
    + alias2((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.WILDCARD_MATCHES",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n               "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.RULE_OPERATORS.WILDCARD_MATCHES",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.operator : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Matches (wildcard)</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <input type=\"text\" class=\"form-control source-value-input\" data-key=\"source.value\" value=\""
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.value : stack1), depth0))
    + "\" placeholder=\""
    + alias2(((helper = (helper = helpers.sourcePlaceholder || (depth0 != null ? depth0.sourcePlaceholder : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"sourcePlaceholder","hash":{},"data":data}) : helper)))
    + "\" />\n\n  <span class=\"fa fa-trash-o delete-pair action-icon\"></span>\n</div>";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("StatusToggle", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "checked";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Switch -->\n<span class=\"switch square\">\n  <label>\n    Off\n    <input type=\"checkbox\" class=\"status-toggle\" "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.status : depth0),"Active",{"name":"equals","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " />\n    <span class=\"lever\"></span>\n    On\n  </label>\n</span>\n";
},"useData":true}));

Handlebars.registerPartial("Toolbar", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "      <a class=\"btn-floating btn-small waves-effect waves-light blue export-rules-button action-button\"\n         data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Download Rules\">\n        <i class=\"fa fa-download\"></i>\n      </a>\n";
},"3":function(depth0,helpers,partials,data) {
    return "      <a class=\"btn-floating btn-small waves-effect waves-light share-rules-button action-button\"\n         data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Share\">\n        <i class=\"fa fa-share-alt\"></i>\n      </a>\n\n      <a class=\"btn-floating btn-small waves-effect waves-light delete-items-button action-button\"\n         data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Delete\">\n        <i class=\"fa fa-trash\"></i>\n      </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<nav class=\"content-header\">\n  <span>Rules</span>\n  <div class=\"right right-corner-icongroup\">\n\n    <a href=\"#selectRule\" class=\"btn-floating btn-small btn-success waves-effect waves-light select-rule-button action-button\">\n      <i class=\"fa fa-plus\"></i>\n    </a>\n\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1),0,{"name":"gt","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    <a class=\"btn-floating btn-small waves-effect waves-light blue import-rules-button action-button\"\n       data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"Upload Rules\">\n      <i class=\"fa fa-upload\"></i>\n    </a>\n\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1),0,{"name":"gt","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n    <div class=\"notification-container\"></div>\n  </div>\n</nav>\n";
},"useData":true}));

this["RQ"]["Templates"]["CancelRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <div class=\"well pair-container\" data-index=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "      </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Block/Cancel Network Requests"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Enter Keywords or Urls or Domains to be blocked"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["HeadersRuleTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"well pair-container\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n          <div>\n\n            <div class=\"header-modification-type-container\">\n              <div class=\"dropdown-container\">\n                <div class=\"dropdown\" data-key=\"type\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"                  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n                  <ul class=\"dropdown-menu\">\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.ADD",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.ADD",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Add</a>\n                    </li>\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Remove</a>\n                    </li>\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.MODIFY",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.MODIFY",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Modify</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"header-target-container\">\n              <div class=\"dropdown-container\">\n                <div class=\"dropdown\" data-key=\"target\">\n\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"                  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n                  <ul class=\"dropdown-menu\">\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.HEADERS_TARGET.REQUEST",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.HEADERS_TARGET.REQUEST",(depth0 != null ? depth0.target : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Request</a>\n                    </li>\n                    <li>\n                      <a class=\"dropdown-item\"\n                         data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.HEADERS_TARGET.RESPONSE",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                         "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.HEADERS_TARGET.RESPONSE",(depth0 != null ? depth0.target : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Response</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"input-group header-name-input-group\">\n              <span class=\"input-group-addon\">Header</span>\n              <input type=\"text\" class=\"form-control header-input\" data-key=\"header\" placeholder=\"Header Name\" value=\""
    + alias3(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n\n"
    + ((stack1 = (helpers.unequalsGlobalVar || (depth0 && depth0.unequalsGlobalVar) || alias1).call(depth0,"RQ.MODIFICATION_TYPES.REMOVE",(depth0 != null ? depth0.type : depth0),{"name":"unequalsGlobalVar","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"sourcePlaceholder":"Leave this field Empty to apply above modification to all urls"},"data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "selected";
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return "              <div class=\"input-group header-value-input-group\">\n                <span class=\"input-group-addon\">Value</span>\n                <input type=\"text\" class=\"form-control value-input\" data-key=\"value\" placeholder=\"Header Value\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\"/>\n              </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Modify Headers in HTTP Request and Response"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n\n\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Headers Modification Rules"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["Modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Cancel</button>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <button type=\"button\" class=\"btn btn-link btn-primary\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.primaryButton : depth0)) != null ? stack1.name : stack1), depth0))
    + "</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"modal-dialog\">\n\n  <!-- Modal content-->\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4>"
    + alias3(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</h4>\n    </div>\n\n    <div class=\"modal-body\">\n      <p>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n\n    <div class=\"modal-footer text-right\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cancelButton : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.primaryButton : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n  </div> <!-- /modal-content -->\n</div>\n";
},"useData":true});

this["RQ"]["Templates"]["PushNotification"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "hasNotifications";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "      <span class=\"badge unread-notifications-badge\">"
    + this.escapeExpression(((helper = (helper = helpers.unReadNotificationsCount || (depth0 != null ? depth0.unReadNotificationsCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"unReadNotificationsCount","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"5":function(depth0,helpers,partials,data) {
    return "    <span class=\"new new-text-badge danger-color\">New</span>\n";
},"7":function(depth0,helpers,partials,data) {
    return "          <span class=\"mark-all-read-action\">Mark All as Read</span>\n";
},"9":function(depth0,helpers,partials,data) {
    return "          <span>Close</span>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"12":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li class=\"dropdown-divider\"></li>\n\n        <li class=\"dropdown-item "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.isRead : depth0),false,{"name":"equals","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n          <div class=\"row\">\n            <div class=\"col-md-2 ntf-type-container\">\n              <span class=\"badge badge-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n            <div class=\"ntf-content col-md-10\">"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n          </div>\n        </li>\n";
},"13":function(depth0,helpers,partials,data) {
    return "unread";
},"15":function(depth0,helpers,partials,data) {
    return "      <li class=\"no-notifications-item dropdown-item\">Yo! Nothing to catch up</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<div class=\"btn-group\">\n  <a class=\"btn-floating btn-small notifications-button action-button dropdown-toggle "
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.unReadNotificationsCount : depth0),0,{"name":"gt","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-toggle=\"dropdown\"\n     aria-haspopup=\"true\"\n     aria-expanded=\"false\">\n    <i class=\"fa fa-bell\"></i>\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.unReadNotificationsCount : depth0),0,{"name":"gt","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </a>\n\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.unReadNotificationsCount : depth0),0,{"name":"gt","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <ul class=\"dropdown-menu\">\n    <li class=\"notifications-header\">\n      <h6>Notifications</h6>\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,(depth0 != null ? depth0.unReadNotificationsCount : depth0),0,{"name":"gt","hash":{},"fn":this.program(7, data, 0),"inverse":this.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "    </li>\n\n"
    + ((stack1 = (helpers.gt || (depth0 && depth0.gt) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),0,{"name":"gt","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n";
},"useData":true});

this["RQ"]["Templates"]["RedirectRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"well pair-container\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        <div class=\"destination-container\">\n          <label class=\"active\">Destination</label>\n          <input type=\"url\" class=\"destination-url-input form-control\" data-key=\"destination\" value=\""
    + alias3(((helper = (helper = helpers.destination || (depth0 != null ? depth0.destination : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"destination","hash":{},"data":data}) : helper)))
    + "\"\n                   placeholder=\""
    + alias3(((helper = (helper = helpers.destinationPlaceholder || (depth0 != null ? depth0.destinationPlaceholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"destinationPlaceholder","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n      </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Redirect Request Rule"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Source Destination Pairs"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["ReplaceRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"well pair-container\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"from-to-container\">\n          <div class=\"input-group from-input-group\">\n            <span class=\"input-group-addon\">Replace</span>\n            <input type=\"text\" class=\"form-control from-input\" data-key=\"from\" placeholder=\"This part in URL\" value=\""
    + alias3(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">\n          </div>\n\n          <div class=\"input-group to-input-group\">\n            <span class=\"input-group-addon\">With</span>\n            <input type=\"text\" class=\"form-control to-input\" data-key=\"to\" placeholder=\"Will be replaced by this string\" value=\""
    + alias3(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"to","hash":{},"data":data}) : helper)))
    + "\">\n          </div>\n        </div>\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"sourcePlaceholder":"Leave this field Empty to apply above modification to all urls"},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "      </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Replace Host or some part of URL"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Pairs"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["RuleCardsView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<nav class=\"content-header rq-dimgrey\">\n  <a href=\"#\" role=\"button\" class=\"back-button fa fa-chevron-left\" title=\"Go Back\"></a>\n  <span>Select Rule</span>\n</nav>\n\n<section class=\"rule-cards content-body\">\n  <div class=\"row\">\n    <div class=\"col-md-4 card-redirect-rule rule-card\" data-target=\"#new/Redirect\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.REDIRECT",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Redirect Request</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Redirect a request URL</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 card-cancel-rule rule-card\" data-target=\"#new/Cancel\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content bigger "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.CANCEL",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Cancel Request</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Block Urls by specifying keywords or entire Urls</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 card-replace-rule rule-card\" data-target=\"#new/Replace\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.REPLACE",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Replace Host</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Replace parts of URL like hostname, query value</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4 card-headers-rule rule-card\" data-target=\"#new/headers\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.HEADERS",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Modify Headers</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Modify HTTP headers in request and response</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 card-useragent-rule rule-card\" data-target=\"#new/UserAgent\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.USERAGENT",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Override User-Agent</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Emulate for different devices by varying user-agent</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 card-script-rule rule-card\" data-target=\"#new/Script\">\n      <div class=\"card testimonial-card z-depth-1 hoverable\">\n        <div class=\"card-up\">\n        </div>\n        <div class=\"avatar\">\n          <i class=\"rounded-circle img-responsive card-avatar-content "
    + alias2((helpers.getRuleIconClass || (depth0 && depth0.getRuleIconClass) || alias1).call(depth0,(helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.RULE_TYPES.SCRIPT",{"name":"readGlobalVar","hash":{},"data":data}),{"name":"getRuleIconClass","hash":{},"data":data}))
    + "\"></i>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Insert Scripts</h4>\n          <p class=\"card-text\"><i class=\"fa fa-quote-left\"></i>Add custom scripts to any website</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n";
},"useData":true});

this["RQ"]["Templates"]["RuleIndex"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <div class=\"placeholder-message\">\n      <h3 class=\"heading row\">Get Started</h3>\n      <div class=\"body row\">Please click on <i class=\"add-rule-icon fa fa-plus-circle\"></i> button in the toolbar to setup rules to modify network requests.</div>\n      <div class=\"actions row\">\n        <a class=\"btn btn-info waves-effect waves-light\" target=\"_blank\" href=\"/home\">Home</a>\n        <a class=\"btn btn-warning waves-effect waves-light\" href=\"/content/\">Blog</a>\n      </div>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <table class=\"table\">\n      <thead>\n      <tr>\n        <th class=\"item-selection-cell\">\n          <input type=\"checkbox\" class=\"filled-in select-all-rows-checkbox\" id=\"select-all-rows-checkbox\" title=\"Select All\"/>\n          <label for=\"select-all-rows-checkbox\"></label>\n        </th>\n        <th> <span class=\"rules-number badge\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span> </th>\n        <th>Name & Description</th>\n        <th class=\"status-cell\">Status</th>\n        <th>Created on</th>\n      </tr>\n      </thead>\n      <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rules : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleItemRow,depth0,{"name":"RuleItemRow","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.Toolbar,depth0,{"name":"Toolbar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"list-index content-body\">\n"
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1),0,{"name":"equals","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["ScriptRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "      <div class=\"pair-container\" data-index=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"well\">\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"sourcePlaceholder":"Leave this field Empty to add below scripts to all websites"},"data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"title\">Scripts</div>\n        <div class=\"library-section well\">\n          <label class=\"active\">Library</label>\n"
    + ((stack1 = (helpers.eachGlobalVar || (depth0 && depth0.eachGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LIBRARIES",{"name":"eachGlobalVar","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.scripts : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <button type=\"button\" class=\"btn btn-default add-script\">\n          <i class=\"fa fa-plus-circle\"></i>\n          <span>Add Custom Script</span>\n        </button>\n      </div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div class=\"library-option\">\n              <input type=\"checkbox\" class=\"filled-in\" id=\"checkbox-"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" name=\"library\" value=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\"\n              "
    + ((stack1 = (helpers.contains || (depth0 && depth0.contains) || alias1).call(depth0,(depths[1] != null ? depths[1].libraries : depths[1]),(data && data.key),{"name":"contains","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n              <label for=\"checkbox-"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <div class=\"script-section well\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"row\">\n              <input type=\"radio\" name=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type\" id=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type-1\" class=\"with-gap script-type\"\n                value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.URL",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.URL",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n              <label class=\"script-type-label\" for=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type-1\">URL</label>\n\n              <input type=\"radio\" name=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type\" id=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type-2\" class=\"with-gap script-type\"\n                value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.CODE",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.CODE",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n              <label class=\"script-type-label\" for=\"script-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "-type-2\">Code</label>\n\n              <span class=\"fa fa-trash-o remove-script\" title=\"Remove\"></span>\n            </div>\n"
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.URL",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_TYPES.CODE",(depth0 != null ? depth0.type : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            <div class=\"script-load-time-container dropdown-container\">\n              <div class=\"script-load-time dropdown\">\n"
    + ((stack1 = this.invokePartial(partials.DropdownButton,depth0,{"name":"DropdownButton","data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                <ul class=\"dropdown-menu\">\n                  <li>\n                    <a class=\"dropdown-item\" data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LOAD_TIME.BEFORE_PAGE_LOAD",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                      "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LOAD_TIME.BEFORE_PAGE_LOAD",(depth0 != null ? depth0.loadTime : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Before Page Load</a>\n                  </li>\n                  <li>\n                    <a class=\"dropdown-item\" data-value=\""
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LOAD_TIME.AFTER_PAGE_LOAD",{"name":"readGlobalVar","hash":{},"data":data}))
    + "\"\n                      "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.SCRIPT_LOAD_TIME.AFTER_PAGE_LOAD",(depth0 != null ? depth0.loadTime : depth0),{"name":"equalsGlobalVar","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">After Page Load</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "checked";
},"8":function(depth0,helpers,partials,data) {
    var helper;

  return "              <input type=\"text\" class=\"form-control script-url-input\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\"\n                placeholder=\"Enter source of script (relative or absolute)\" />\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "              <div class=\"script-code-container\">\n                <textarea type=\"text\" class=\"form-control md-textarea script-code-input\" rows=\"5\" cols=\"130\"\n                  placeholder=\"Enter javascript code snippet here (max 500 characters)...\">"
    + alias2(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</textarea>\n                <div class=\"script-code-characters\"><span class=\"count\">"
    + alias2((helpers.subtract || (depth0 && depth0.subtract) || alias1).call(depth0,500,((stack1 = (depth0 != null ? depth0.value : depth0)) != null ? stack1.length : stack1),{"name":"subtract","hash":{},"data":data}))
    + "</span> characters</div>\n              </div>\n";
},"12":function(depth0,helpers,partials,data) {
    return "selected";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Insert custom scripts in a website"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["RQ"]["Templates"]["ShareRulesModal"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<!-- Central Modal Medium Warning -->\n<div class=\"modal-dialog modal-notify modal-warning\" role=\"document\">\n  <!--Content-->\n  <div class=\"modal-content\">\n    <!--Header-->\n    <div class=\"modal-header\">\n      <p class=\"heading lead\">Share Rules</p>\n\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n      </button>\n    </div>\n\n    <!--Body-->\n    <div class=\"modal-body\">\n      <div class=\"text-center\">\n        <i class=\"fa fa-check fa-4x mb-3 animated rotateIn\"></i>\n        <p>Please enter a name for your shared list of rules</p>\n\n        <div class=\"input-field col-md-8\">\n          <input id=\"shared-list-name-field\" type=\"text\" placeholder=\"My Shared list\" data-key=\"listName\">\n        </div>\n      </div>\n    </div>\n\n    <!--Footer-->\n    <div class=\"modal-footer justify-content-center\">\n      <a type=\"button\"\n         data-event=\"modal:closed\"\n         data-dismiss=\"modal\"\n         data-clipboard-text=\""
    + this.escapeExpression(((helper = (helper = helpers.sharedUrl || (depth0 != null ? depth0.sharedUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"sharedUrl","hash":{},"data":data}) : helper)))
    + "\"\n         class=\"btn btn-primary-modal sharedUrl-copy-button\">Copy & Close <i class=\"fa fa-diamond ml-1\"></i></a>\n    </div>\n  </div>\n  <!--/.Content-->\n</div>\n<!-- Central Modal Medium Warning-->\n";
},"useData":true});

this["RQ"]["Templates"]["SharedListIndex"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.SharedListItemRow,depth0,{"name":"SharedListItemRow","data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.SharedListIndexToolbar,depth0,{"name":"SharedListIndexToolbar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"list-index content-body\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th class=\"item-selection-cell\">\n        <input type=\"checkbox\" class=\"filled-in select-all-rows-checkbox\" id=\"select-all-rows-checkbox\" title=\"Select All\"/>\n        <label for=\"select-all-rows-checkbox\"></label>\n      </th>\n      <th>Name</th>\n      <th>Link</th>\n      <th>Actions</th>\n      <th>Created on</th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</section>\n";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["SharedRulesIndex"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.SharedRuleItemRow,depth0,{"name":"SharedRuleItemRow","data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    return "    <div class=\"card-container-404\">\n      <div class=\"col-md-8\">\n        <div class=\"card hoverable\">\n          <div class=\"card-image\">\n            <div class=\"view overlay hm-white-slight z-depth-1\">\n              <img src=\"http://www.requestly.in/rules/resources/images/404-page-error.png\">\n              <div class=\"mask waves-effect activator\"></div>\n            </div>\n          </div>\n\n          <div class=\"card-content\">\n            <span class=\"card-title activator grey-text text-darken-4\">SharedList url is invalid or is deleted by Author</span>\n          </div>\n        </div>\n      </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.SharedRulesIndexToolbar,depth0,{"name":"SharedRulesIndexToolbar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-index content-body list-index\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th> <span class=\"rules-number badge\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span> </th>\n      <th>Name & Description</th>\n      <th class=\"status-cell\">Status</th>\n      <th>Created on</th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rules : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n"
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.rules : depth0)) != null ? stack1.length : stack1),0,{"name":"equals","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"usePartial":true,"useData":true});

this["RQ"]["Templates"]["SusiModal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "            "
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
    return "            Please login with Google to share your rules with other users.\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal-dialog modal-notify modal-danger\" role=\"document\">\n  <!--Content-->\n  <div class=\"modal-content\">\n    <!--Header-->\n    <div class=\"modal-header\">\n      <p class=\"heading lead\">Sign In</p>\n\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n      </button>\n    </div>\n\n    <!--Body-->\n    <div class=\"modal-body\">\n      <div class=\"text-center\">\n        <i class=\"fa fa-google-plus fa-4x mb-3 animated rotateIn\"></i>\n        <p>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </p>\n      </div>\n    </div>\n\n    <!--Footer-->\n    <div class=\"modal-footer justify-content-center\">\n      <a type=\"button\" class=\"btn btn-outline-secondary-modal waves-effect\" data-dismiss=\"modal\">Cancel</a>\n      <a type=\"button\" class=\"btn btn-primary-modal auth-provider\">SignIn <i class=\"fa fa-sign-in ml-1\"></i></a>\n    </div>\n  </div>\n  <!--/.Content-->\n</div>";
},"useData":true});

this["RQ"]["Templates"]["UserAgentRuleEditor"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"well pair-container\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"row\">\n          <div class=\"user-agent-container\">\n            <label class=\"active row-label\">"
    + alias3((helpers.readGlobalVar || (depth0 && depth0.readGlobalVar) || alias1).call(depth0,"RQ.HEADER_NAMES.USER_AGENT",{"name":"readGlobalVar","hash":{},"data":data}))
    + "</label>\n            <div class=\"dropdown-container\">\n              <div class=\"dropdown env-type-selector\" data-key=\"envType\">\n                <button class=\"btn dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n                  <span class=\"dropdown-value\" data-value=\"\">Select</span>\n                  <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li>\n                    <a class=\"dropdown-item\" data-value=\"device\"\n                      "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"device",{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Device</a>\n                  </li>\n                  <li>\n                    <a class=\"dropdown-item\" data-value=\"browser\"\n                      "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"browser",{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Browser</a>\n                  </li>\n                  <li>\n                    <a class=\"dropdown-item\" data-value=\"custom\"\n                      "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"custom",{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Custom</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n"
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"device",{"name":"equals","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"browser",{"name":"equals","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depth0 != null ? depth0.envType : depth0),"custom",{"name":"equals","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </div>\n"
    + ((stack1 = this.invokePartial(partials.SourceField,depth0,{"name":"SourceField","hash":{"sourcePlaceholder":"Leave this field Empty to apply above modification to all urls"},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        <div class=\"request-type\">\n          <input type=\"checkbox\" class=\"request-type-checkbox filled-in\" id=\"checkbox-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n            "
    + ((stack1 = (helpers.equalsGlobalVar || (depth0 && depth0.equalsGlobalVar) || alias1).call(depth0,"RQ.REQUEST_TYPES.MAIN_FRAME",((stack1 = (depth0 != null ? depth0.source : depth0)) != null ? stack1.requestType : stack1),{"name":"equalsGlobalVar","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <label for=\"checkbox-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">If the source points to a website URL, rule will apply on all requests originated from the page.</label>\n        </div>\n      </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "selected";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "              <div class=\"dropdown-container\">\n                <div class=\"dropdown env-value-selector\" data-key=\"env\">\n                  <button class=\"btn dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n                    <span class=\"dropdown-value\" data-value=\"\">Select device</span>\n                    <span class=\"caret\"></span>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n"
    + ((stack1 = (helpers.eachGlobalVar || (depth0 && depth0.eachGlobalVar) || helpers.helperMissing).call(depth0,"RQ.UserAgentLibrary.USER_AGENT.device",{"name":"eachGlobalVar","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                  </ul>\n                </div>\n              </div>\n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.values : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "                        <li class=\"dropdown-submenu\">\n                          <a class=\"dropdown-item\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n                          <ul class=\"dropdown-menu\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                          </ul>\n                        </li>\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                              <li>\n                                <a class=\"dropdown-item\" data-value=\""
    + alias2((helpers.concat || (depth0 && depth0.concat) || alias1).call(depth0,(this.data(data, 1) && this.data(data, 1).key),".",(data && data.key),{"name":"concat","hash":{},"data":data}))
    + "\"\n                                  "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depths[3] != null ? depths[3].env : depths[3]),(helpers.concat || (depth0 && depth0.concat) || alias1).call(depth0,(this.data(data, 1) && this.data(data, 1).key),".",(data && data.key),{"name":"concat","hash":{},"data":data}),{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n                              </li>\n";
},"9":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <li>\n                          <a class=\"dropdown-item\" data-value=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\"\n                            "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias1).call(depth0,(depths[2] != null ? depths[2].env : depths[2]),(data && data.key),{"name":"equals","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n                        </li>\n";
},"11":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "              <div class=\"dropdown-container\">\n                <div class=\"dropdown env-value-selector\" data-key=\"env\">\n                  <button class=\"btn dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n                    <span class=\"dropdown-value\" data-value=\"\">Select browser</span>\n                    <span class=\"caret\"></span>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n"
    + ((stack1 = (helpers.eachGlobalVar || (depth0 && depth0.eachGlobalVar) || helpers.helperMissing).call(depth0,"RQ.UserAgentLibrary.USER_AGENT.browser",{"name":"eachGlobalVar","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                  </ul>\n                </div>\n              </div>\n";
},"13":function(depth0,helpers,partials,data) {
    var helper;

  return "              <input type=\"text\" class=\"user-agent-input form-control\" data-key=\"userAgent\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.userAgent || (depth0 != null ? depth0.userAgent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"userAgent","hash":{},"data":data}) : helper)))
    + "\"\n                 placeholder=\"Enter user agent string\">\n";
},"15":function(depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.RuleEditorHeader,depth0,{"name":"RuleEditorHeader","hash":{"heading":"Override User-Agent in HTTP Request"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<section class=\"rule-body content-body\">\n"
    + ((stack1 = this.invokePartial(partials.RuleProperties,depth0,{"name":"RuleProperties","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.PairsContainerHeading,depth0,{"name":"PairsContainerHeading","hash":{"heading":"Source User-Agent Pairs"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <div class=\"pairs-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pairs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</section>\n";
},"usePartial":true,"useData":true,"useDepths":true});
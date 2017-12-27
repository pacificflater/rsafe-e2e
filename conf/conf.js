//let helper = require('./helper.js');

exports.config = {

    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    suites: {

        filter: [
            '../spec/components/gird/filters/filter/boolean/boolean-filter.spec.js',
            '../spec/components/gird/filters/filter/text/text-filter.spec.js',
        ],

        resourceTree: [
            '../spec/resource/resource-viewer/resource-tree/resource-tree-wraper.spec.js',
            '../spec/resource/resource-viewer/resource-tree/resource-tree-display.spec.js',
            '../spec/resource/resource-viewer/resource-tree/resource-tree-search.spec.js'
        ],

        gridView: [
            '../spec/resource/resource-viewer/resource-ace/resource-ace-display.spec.js',
            '../spec/resource/resource-report/resource-report-ace-display.spec.js',
            '../spec/resource/resource-history/resource-history-display-ace.spec.js',
            '../spec/resource/resource-report/ones-sidebar-user-info.spec.js',
            '../spec/resource/resource-report/ntfs-sidebar-user-info.spec.js',
            '../spec/resource/resource-report/ad-sidebar-user-info.spec.js',
            '../spec/resource/resource-report/ad-sidebar-approval-info.spec.js',
            '../spec/resource/resource-report/ntfs-sidebar-approval-info.spec.js',
            '../spec/resource/resource-report/ones-sidebar-approval-info.spec.js',
            '../spec/resource/resource-report/dv-sidebar-user-info.spec.js',
            '../spec/resource/resource-report/dv-sidebar-approval-info.spec.js',
            '../spec/resource/resource-report/sp-sidebar-user-info.spec.js',
        ],
        resourceCreate: [
            '../spec/settings/resource-settings/go-to-create-resource.spec.js',
            '../spec/clients/ntfs/client-ntfs-create.spec.js',
            '../spec/clients/ones/clients-ones-create.spec.js',
            '../spec/clients/ad/clients-ad-create.spec.js',
            '../spec/clients/dv/clients-dv-create..spec.js',
        ],
        taskCreate: [
            '../spec/settings/task-settings/task-settings-create.spec.js',
        ],
        resourceControl: [
            '../spec/resource/resource-control/resource-control-aces-display.spec.js',
            '../spec/resource/resource-control/resource-controll-add-to-inbox.spec.js',
        ],

        navigation: [
            '../spec/core/navigation/navigation-go-to-settings.spec.js',
            '../spec/core/navigation/navigation-go-to-support.spec.js',
            '../spec/resource/resource-nav/resource-nav-go-to-ntfs-control.spec.js',
            '../spec/resource/resource-nav/resource-nav-go-to-ntfs-history.spec.js',
            '../spec/resource/resource-nav/resource-nav-go-to-ntfs-report.spec.js',
            '../spec/settings/settings-component.spec.js',
        ],

        test: '../spec/resource/resource-report/sp-sidebar-user-info.spec.js',

    },

    capabilities: {
        'browserName': 'chrome',
        'proxy': {
            'proxyType': 'manual',
            'httpProxy': '127.0.0.1:8082'
        }
        },


        /*capabilities: {
         'browserName': 'chrome',
         'chromeOptions': {
         'args': ['--load-extension=' + 'C:/Program Files (x86)/Google/Chrome/Application/61.0.3163.100/Extensions/0.1.3_0']
         }
         },*/
        //capabilities: helper.getCapabilities('./extension_5_0_1.crx'),

        onPrepare: function () {
            commonPageObject = require('../lib/common.pageObject.js');
            resourcePageObject = require('../spec/resource/resource.pageObject.js');
            settingsPageObject = require('../spec/settings/settings.pageObject.js');
            supportPageObject = require('../spec/support/support.pageObject.js');
        }


};

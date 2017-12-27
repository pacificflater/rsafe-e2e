window.setTimeout(function () {
  var version = config.welcome.version;
  if (!version) {
    app.tabs.open(config.welcome.url + '?v=' + app.version() + "&type=install");
    config.welcome.version = app.version();
  }
}, config.welcome.timeout);

var truncate = function (str, len) {
  if (str.length <= len) return str;
  var frontChars = Math.ceil((len - 3) / 2);
  var backChars = Math.floor((len - 3) / 2);
  return str.substr(0, frontChars) + '...' + str.substr(str.length - backChars);
};

var toolbaricon = function (state) {
  app.button.label = "Modify Header Value: " + state;
  app.button.icon = {
    "path": {
      "16": '../../data/icons/' + state + '/16.png',
      "32": '../../data/icons/' + state + '/32.png',
      "48": '../../data/icons/' + state + '/48.png',
      "64": '../../data/icons/' + state + '/64.png'
    }
  };
};

app.popup.receive("state", function () {
  config.addon.state = (config.addon.state === 'disabled') ? 'enabled' : 'disabled';
  app.popup.send("storageData", config.addon.state);
  toolbaricon(config.addon.state);
});

app.options.receive("retrieve-data", function () {
  app.options.send("retrieve-data", {
    "CAL": config.addon.log,
    "CWP": config.welcome.page,
    "headerArray": config.header.array
  });
});

app.onBeforeSendHeaders(function (top, info) {
  var headers = info.requestHeaders;
  if (config.addon.state === "enabled") {
    var url = info.url;
    if (url.indexOf('http') === 0 || url.indexOf('ftp') === 0) {
      try {
        for (var i = 0; i < config.header.array.length; i++) {
          var header = config.header.array[i];
          if (header.state === "active") {
            var name = header.name;
            var value = header.value;
            var tabURL = header.checked_s ? top : url;
            var headerURL = header.checked_d ? app.hostName(header.url) : header.url;
            if ((tabURL && tabURL.indexOf(headerURL) !== -1) || headerURL === '*') {
              if (header.checked_a) { /* add */
                headers.push({'name': name, 'value': value});
                if (config.addon.log) console.error("Add", name, 'for URL', truncate(url, 50), 'Matched', headerURL, (header.checked_s ? 'Using Tab URL' : 'Using Exact URL'), truncate(tabURL, 50));
              }
              if (header.checked_m) { /* modify */
                if (headers[name]) {
                  headers[name] = value;
                  if (config.addon.log) console.error("Modify", name, 'for URL', truncate(url, 50), 'Matched', headerURL, (header.checked_s ? 'Using Tab URL' : 'Using Exact URL'), truncate(tabURL, 50));
                }
              }
              if (header.checked_r) { /* remove */
                if (headers[name]) {
                  delete headers[name];
                  if (config.addon.log) console.error("Delete", name, 'for URL', truncate(url, 50), 'Matched', headerURL, (header.checked_s ? 'Using Tab URL' : 'Using Exact URL'), truncate(tabURL, 50));
                }
              }
            } else if (config.addon.log) console.error("N/A ", tabURL, headerURL);
          }
        }
      } catch (e) {}
    }
  }
  /*  */
  return {"requestHeaders": headers};
});

app.popup.receive("options", app.tabs.openOptions);
app.options.receive("c-a-l", function (e) {config.addon.log = e});
app.options.receive("c-w-p", function (e) {config.welcome.page = e});
window.setTimeout(function () {toolbaricon(config.addon.state)}, 300);
app.popup.receive("support", function () {app.tabs.open(config.welcome.url)});
app.options.receive("store-data", function (data) {config.header.array = data.headerArray});
app.popup.receive("storageData", function () {app.popup.send("storageData", config.addon.state)});

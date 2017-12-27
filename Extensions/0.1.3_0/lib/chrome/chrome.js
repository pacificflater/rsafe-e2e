var app = {};
app.version = function () {return chrome.runtime.getManifest().version};
if (chrome.runtime.setUninstallURL) chrome.runtime.setUninstallURL(config.welcome.url + "?v=" + app.version() + "&type=uninstall", function () {});

app.storage = (function () {
  var objs = {};
  window.setTimeout(function () {
    chrome.storage.local.get(null, function (o) {
      objs = o;
      document.getElementById("common").src = "../common.js";
    });
  }, 300);
  /*  */
  return {
    "read": function (id) {return objs[id]},
    "write": function (id, data, callback) {
      var tmp = {};
      data = data + '';
      objs[id] = data;
      tmp[id] = data;
      chrome.storage.local.set(tmp, callback);
    }
  }
})();

app.hostName = function (url) {
  var s = url.indexOf("//") + 2;
  if (s > 1) {
    var o = url.indexOf('/', s);
    if (o > 0) return url.substring(s, o);
    else {
      o = url.indexOf('?', s);
      if (o > 0) return url.substring(s, o);
      else return url.substring(s);
    }
  } else return url;
};

app.button = {
  set icon (o) {chrome.browserAction.setIcon(o)},
  set label (label) {chrome.browserAction.setTitle({"title": label})}
};

app.tabs = {
  "open": function (url) {chrome.tabs.create({"url": url, "active": true})},
  "openOptions": function () {chrome.runtime.openOptionsPage(function () {})}
};

app.popup = (function () {
  var _tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in _tmp) {
      if (_tmp[id] && (typeof _tmp[id] === "function")) {
        if (request.path === 'popup-to-background') {
          if (request.method === id) _tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {_tmp[id] = callback},
    "send": function (id, data, tabId) {
      chrome.runtime.sendMessage({"path": 'background-to-popup', "method": id, "data": data});
    }
  }
})();

app.options = (function () {
  var _tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in _tmp) {
      if (_tmp[id] && (typeof _tmp[id] === "function")) {
        if (request.path === 'options-to-background') {
          if (request.method === id) _tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {_tmp[id] = callback},
    "send": function (id, data, tabId) {
      chrome.runtime.sendMessage({"path": 'background-to-options', "method": id, "data": data});
    }
  }
})();

app.onBeforeSendHeaders = function (callback) {
  var top = {};
  var onBeforeSendHeaders = function (info) {
    var url = info.url;
    if (url.indexOf('http') === 0 || url.indexOf('ftp') === 0) {
      var id = info.tabId;
      if (info.type === 'main_frame') top[id] = url;
      var tab = top[id] ? top[id] : url;
      return callback(tab, info);
    }
  };
  /*  */
  chrome.webRequest.onBeforeSendHeaders.addListener(onBeforeSendHeaders, {"urls" : ["http://*/*", "https://*/*"]}, ["blocking", "requestHeaders"]);
};

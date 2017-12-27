var background = (function () {
  var _tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in _tmp) {
      if (_tmp[id] && (typeof _tmp[id] === "function")) {
        if (request.path == 'background-to-popup') {
          if (request.method === id) _tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {_tmp[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": 'popup-to-background', "method": id, "data": data})}
  }
})();

var init = function () {
  window.removeEventListener("load", init, false);
  Array.prototype.slice.call(document.querySelectorAll("td[type='state']")).map(function (elm) {elm.addEventListener("click", function () {background.send("state")})});
  Array.prototype.slice.call(document.querySelectorAll("td[type='options']")).map(function (elm) {elm.addEventListener("click", function () {background.send("options")})});
  Array.prototype.slice.call(document.querySelectorAll("td[type='support']")).map(function (elm) {elm.addEventListener("click", function () {background.send("support")})});
};

window.addEventListener("load", init, false);
window.setTimeout(function () {background.send("storageData")}, 100);
background.receive("storageData", function (state) {Array.prototype.slice.call(document.querySelectorAll("td[type='state']")).map(function (elm) {elm.setAttribute("state", state)})});

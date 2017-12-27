var background = (function () {
  var _tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in _tmp) {
      if (_tmp[id] && (typeof _tmp[id] === "function")) {
        if (request.path === 'background-to-options') {
          if (request.method === id) _tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {_tmp[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": 'options-to-background', "method": id, "data": data})}
  }
})();

var init = function () {
  var headerArray = [];
  var store = function () {
    fill({"headerArray": headerArray});
    background.send("store-data", {"headerArray": headerArray});
  };
  /*  */
  document.getElementById('header-value-table').addEventListener("click", function (e) {
    var target = e.target;
    if (target.tagName.toLowerCase() === 'td' || target.nodeName.toLowerCase() == 'td') {
      var url, name, value;
      var tr = target.parentNode;
      for (var i = 0; i < tr.children.length; i++) {
        var td = tr.children[i];
        var type = td.getAttribute("type");
        if (type == "url") url = tr.children[i].textContent;
        if (type == "name") name = tr.children[i].textContent;
        if (type == "value") value = tr.children[i].textContent;
      }
      /*  */
      if (target.getAttribute('type') === 'close') {
        headerArray = headerArray.filter(function (h) {return !(h.url === url && h.name === name && h.value === value)});
        store();
      }
      /*  */
      if (target.getAttribute('type') === 'toggle') {
        for (var k = 0; k < headerArray.length; k++) {
          var h = headerArray[k];
          if (h.url === url && h.name === name && h.value === value) {
            if (target.getAttribute('state') === 'active') {
              target.setAttribute('state', 'inactive');
              headerArray[k].state = 'inactive';
            } else {
              target.setAttribute('state', 'active');
              headerArray[k].state = 'active';
            }
            break;
          }
        }
        store();
      }
    }
    /*  */
    if (target.tagName.toLowerCase() === 'input' || target.nodeName.toLowerCase() == 'input') {
      if (target.getAttribute('type') === 'checkbox') {
        var url, name, value;
        var tr = target.parentNode.parentNode;
        for (var i = 0; i < tr.children.length; i++) {
          var td = tr.children[i];
          var type = td.getAttribute("type");
          if (type == "url") url = tr.children[i].textContent;
          if (type == "name") name = tr.children[i].textContent;
          if (type == "value") value = tr.children[i].textContent;
        }
        for (var j = 0; j < headerArray.length; j++) {
          var h = headerArray[j];
          if (h.url === url && h.name === name && h.value === value) {
            if (target.getAttribute('rule') === 'sub') headerArray[j].checked_s = target.checked;
            if (target.getAttribute('rule') === 'domain') headerArray[j].checked_d = target.checked;
            if (target.getAttribute('rule') === 'add') {
              headerArray[j].checked_m = false;
              headerArray[j].checked_r = false;
              headerArray[j].checked_a = target.checked;
            }
            if (target.getAttribute('rule') === 'modify') {
              headerArray[j].checked_a = false;
              headerArray[j].checked_r = false;
              headerArray[j].checked_m = target.checked;
            }
            if (target.getAttribute('rule') === 'remove') {
              headerArray[j].checked_a = false;
              headerArray[j].checked_m = false;
              headerArray[j].checked_r = target.checked;
            }
            break;
          }
        }
        store();
      }
    }
  });
  /*  */
  var additem = function () {
    var obj = {
      "url": '',
      "name": '',
      "value": '',
      "state": 'active',
      "checked_d": true,
      "checked_s": true,
      "checked_a": true,
      "checked_m": false,
      "checked_r": false
    };
    var inputFieldTr = document.getElementById("input-field");
    var url = inputFieldTr.children[0].children[0];
    var name = inputFieldTr.children[1].children[0];
    var value = inputFieldTr.children[2].children[0];
    if (url.value !== '*') {try {obj.url = new URL(url.value).href} catch (e) {obj.url = ''}} else obj.url = url.value;
    url.value = obj.url;
    obj.name = name.value;
    obj.value = value.value;
    if (headerArray && headerArray.length) headerArray = headerArray.filter(function (e) {return e.url !== obj.url || e.name !== obj.name || e.value !== obj.value});
    headerArray.push(obj);
    store();
  };

  document.getElementById('input-field-add').addEventListener("click", additem);
  document.getElementById('c-a-l').addEventListener("click", function (e) {background.send('c-a-l', e.target.checked)});
  document.getElementById('input-field').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) additem(e);
  });

  function fill(o) {
    var count = 1;
    headerArray = o.headerArray ? o.headerArray : [];
    if (o.CWP) document.getElementById('c-w-p').checked = o.CWP;
    if (o.CAL) document.getElementById('c-a-l').checked = o.CAL;
    var tbody = document.getElementById('header-value-tbody');
    tbody.textContent = '';
    for (var i = headerArray.length - 1; i >= 0; i--) {
      var url = document.createElement('td');
      var sub = document.createElement('td');
      var add = document.createElement('td');
      var name = document.createElement('td');
      var close = document.createElement('td');
      var value = document.createElement('td');
      var toggle = document.createElement('td');
      var header = document.createElement('tr');
      var number = document.createElement('td');
      var modify = document.createElement('td');
      var domain = document.createElement('td');
      var remove = document.createElement('td');
      var input_d = document.createElement('input');
      var input_s = document.createElement('input');
      var input_a = document.createElement('input');
      var input_m = document.createElement('input');
      var input_r = document.createElement('input');
      /*  */
      url.setAttribute('type', 'url');
      sub.setAttribute('type', 'check');
      name.setAttribute('type', 'name');
      add.setAttribute('type', 'check');
      value.setAttribute('type', 'value');
      close.setAttribute('type', 'close');
      domain.setAttribute('type', 'check');
      modify.setAttribute('type', 'check');
      remove.setAttribute('type', 'check');
      toggle.setAttribute('type', 'toggle');
      number.setAttribute('type', 'number');
      /*  */
      number.textContent = count;
      url.textContent = headerArray[i].url;
      name.textContent = headerArray[i].name;
      value.textContent = headerArray[i].value;
      /*  */
      input_s.setAttribute('rule', 'sub');
      input_a.setAttribute('rule', 'add');
      input_d.setAttribute('rule', 'domain');
      input_m.setAttribute('rule', 'modify');
      input_r.setAttribute('rule', 'remove');
      input_d.setAttribute('type', 'checkbox');
      input_s.setAttribute('type', 'checkbox');
      input_a.setAttribute('type', 'checkbox');
      input_m.setAttribute('type', 'checkbox');
      input_r.setAttribute('type', 'checkbox');
      /*  */
      input_d.checked = headerArray[i].checked_d;
      input_s.checked = headerArray[i].checked_s;
      input_a.checked = headerArray[i].checked_a;
      input_m.checked = headerArray[i].checked_m;
      input_r.checked = headerArray[i].checked_r;
      /*  */
      toggle.setAttribute('state', headerArray[i].state);
      header.setAttribute('state', headerArray[i].state);
      /*  */
      domain.appendChild(input_d);
      sub.appendChild(input_s);
      add.appendChild(input_a);
      modify.appendChild(input_m);
      remove.appendChild(input_r);
      /*  */
      header.appendChild(number);
      header.appendChild(url);
      header.appendChild(domain);
      header.appendChild(sub);
      header.appendChild(name);
      header.appendChild(add);
      header.appendChild(modify);
      header.appendChild(remove);
      header.appendChild(value);
      header.appendChild(toggle);
      header.appendChild(close);
      tbody.appendChild(header);
      count++;
    }
  }
  /*  */
  background.send("retrieve-data");
  background.receive("retrieve-data", fill);
  window.removeEventListener("load", init, false);
}

window.addEventListener("load", init, false);

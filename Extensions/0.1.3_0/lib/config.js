var config = {};

config.header = {
  get array () {
    var header = app.storage.read("header");
    return !header ? [] : JSON.parse(header);
  },
  set array (val) {app.storage.write('header', JSON.stringify(val))},
};

config.welcome = {
  "timeout": 3000,
  get version () {return app.storage.read('version')},
  set version (val) {app.storage.write('version', val)},
  "url": "http://mybrowseraddon.com/modify-header-value.html"
};

config.addon = {
  set log (val) {app.storage.write('c-a-l', val)},
  set state (val) {app.storage.write("state", val)},
  get log () {return app.storage.read('c-a-l') === "true" ? true : false},
  get state () {
    var _state = app.storage.read("state");
    if (!_state || _state === 'undefined' || typeof _state === 'undefined') return 'enabled';
    else return _state;
  },
};

config.get = function (name) {return name.split('.').reduce(function (p, c) {return p[c]}, config)};

config.set = function (name, value) {
  function set(name, value, scope) {
    name = name.split('.');
    if (name.length > 1) set.call((scope || this)[name.shift()], name.join('.'), value)
    else this[name[0]] = value;
  }
  set(name, value, config);
};

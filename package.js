/***/
/* [hello-advanced] package.js */
var name = 'hello-advanced', pkg = {

  name: name,

  explain: {
    sammary: 'Show "hello, world." page using some plugins.'
  },

  condition: {
    version: '1.0.0',
    status: 'developing'
  },

  repositories: {
    github: 'https://github.com/ystskm/foonyah-plugins-hello-advanced.git'
  },

  direct: {
    call: 'returnHTML'
  },

  //css_files: ['index'],
  //server_modules: ['index-svr'],
  //browser_modules: ['index'],
  dependencies: {
    plugins: ['htmlgen', 'jquery-resizeWrapper', 'webfonts']
  },

  Default: {}

};

module.exports = (function() {
  return pkg;
})();
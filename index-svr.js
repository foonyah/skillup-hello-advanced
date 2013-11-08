/***/
/* [hello-advanced] */
module.exports = function(plugin, mypkg) {
  // define
  var fncs = plugin.fncs(__dirname, {
    returnHTML: returnHTML
  });
  // set as prop
  plugin.init(fncs);
};
function returnHTML(res, loc, nav, callback) {
  foonyah.use('hello-advanced.htmlgen').make({
    res: res,
    callback: callback,
    dn: __dirname,
    contents_filename: 'index.html'
  }).on('error', callback).on('end', function(key, page_data, body) {
    console.log(window._id)
    callback(null, body);
  });
};


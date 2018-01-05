var objectKeys = require('object-keys')
var xtend = require('xtend')
var path = require('path')
var fs = require('fs')

var demo = fs.readFileSync(path.join(__dirname, '../content/demo.txt'), 'utf8')
var views = require('../views')

module.exports = store

function store (site) {
  return function content (state, emitter, app) {
    state.content = { }
    state.content.demo = demo

    objectKeys(site).forEach(function (path) {
      var page = site[path] || { }
      var view = views[page.view] || views.default
      state.content[page.url] = page

      app.route(page.url, function (state, emit) {
        return view(xtend(state, { page: page }), emit)
      })
    })
  }
}

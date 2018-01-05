var Nanocomponent = require('nanocomponent')
var html = require('choo/html')

module.exports = class Header extends Nanocomponent {
  constructor () {
    super()
  }
  
  createElement (props) {
    var links = ['docs', 'handbook', 'blog']
    return html`
      <div class="x xjb px0-5 bgc-black fc-pink">
        <div class="x">
          ${links.map(function (link) {
            return html`<a href="/${link}" class="db p0-5 tdn">${link}</a>`
          })}
        </div>
        <div class="p0-5">search</div>
      </div>
    `
  }
}

/**Create cookie [requires footer tag in html to be applied] */

function createCookie() {

  let footer = document.querySelectorAll('footer')

  let cookie = Object.assign(document.createElement('div'), {
    id: 'cookie',
    innerHTML: `

    <div id=cookie-notice>
      <div>
        <a class="cookie-policy-color" href="/policy/cookie-policy" target="_blank">
          <i class="fa-solid fa-cookie-bite"></i>
          Cookie Policy <small><i class="fa-solid fa-up-right-from-square"></i></small>
        </a>
      </div>
      <div>
        <small>
          By clicking "Accept" you consent to the use of all cookies on this site.
          Click on the "Cookie Policy" above to learn more.
        </small>
      </div>
    </div>
    <div id="cookie-customize">
      <div>Customize Cookies</div>
      <div>Customize Cookies</div>
      <div>Customize Cookies</div>
      <div>Customize Cookies</div>
      <div>Customize Cookies</div>
      <div>Customize Cookies</div>
    </div>
    <div id="cookie-btns">
      <div id="cookie-btns-flex">
        <small id="cookie-btn-accept">Accept</small>
        <small id="cookie-btn-decline">Decline</small>
      </div>
      <div id="cookie-btn-customize">Customize</div>
    </div>
    `
  })

  footer[0].after(cookie)
}

createCookie()
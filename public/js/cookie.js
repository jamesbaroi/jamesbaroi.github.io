/**Create cookie */

function createCookie() {

  let footer = document.querySelectorAll('footer')

  let cookie = Object.assign(document.createElement('div'), {
    id: 'cookie',
    innerHTML: `

    <div style="color:royalblue;">
      <i class="fa-solid fa-cookie-bite"></i>
      <span>Cookie Notice</span>
    </div>
    <small>
      By clicking "Accept all cookies" you agree to
      the use of all cookies on this site.
    <small>

    `
  })

  cookie.style.cssText = `
  background-color: rgb(32, 33, 36);
  border-top: 1px solid royalblue;
  color: white;
  display: grid;
  line-height: 2em;
  padding: 8px 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`

  footer[0].after(cookie)
}

createCookie()
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



  footer[0].after(cookie)
}

createCookie()
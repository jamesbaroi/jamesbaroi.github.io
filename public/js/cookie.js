/**Create cookie */

function createCookie(app) {

  let e = document.getElementById(app)

  if(!e) {

    console.log(`The element with id "${app}" does not exist.`)
  } else {

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

    e.after(cookie)
  }
}

createCookie('app')
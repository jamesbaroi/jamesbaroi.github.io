/**[ CREATE ]
 * [ HTML DEPENDENCY ]
 */

/**Activate color theme cookie */
const activateTheme = () => { console.log('theme activated') }

/**Activate google analytics gtag cookie */
const activateGtag = () => {
  window.dataLayer = window.dataLayer || []

  function gtag() {
    dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', 'G-4R2HPVTYL3')
}

/**Toggle cookie css class */
const toggleCookieClass = (eId, tgClass) => {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id ${eId} does not exist.`)
    return
  } else {
    e.addEventListener('click', () => {
      document.body.classList.toggle(tgClass)
    })
  }
}

/**Close cookie css class */
const closeCookieClass = (eId, tgClass) => {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {

    e.addEventListener('click', (e) => {
      /**Do nothing if menu not shown or
       * when menu icon/items clicked
       */
      if(!document.body.classList.contains(tgClass)
        ) {
        return
      } else {
        document.body.classList.toggle(tgClass)
      }
    })
  }
}

/**Set cookie */
const setCookie = (cname, cvalue, exdays) => {

  let d = new Date()

  d.setTime(d.getTime() + (exdays*24*60*60*1000))

  let expires = "expires="+ d.toUTCString()

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

/**Get cookie */
const getCookie = (cname) => {

  let name = cname + "="
  let ca = document.cookie.split(';')

  for(let i = 0; i < ca.length; i++) {

    let c = ca[i]

    while (c.charAt(0) == ' ') {

      c = c.substring(1)
    }

    if (c.indexOf(name) == 0) {

      return c.substring(name.length, c.length)
    }
  }

  return ''
}

/**Check cookie */
const checkCookie = (cname) => {

  let cookieValue = getCookie(cname)

  if (cookieValue != "") {

    return cookieValue
  } else {

    return
  }
}

/**Clear cookie */
const clearCookie = (cname) => {

  let cookieValue = getCookie(cname)

  if (cookieValue != "") {

    document.cookie = cname + "=" + ";" + 'expires=Thu, 01 Jan 1970 00:00:00 UTC' + ";path=/"
  } else {

    return
  }
}

/**Decline all cookies */
const cookieDecline = (eId) => {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {

    e.addEventListener('click', () => {

      /**Hide cookie notice */
      document.getElementById('cookie').style.display = 'none'
    })
  }
}

/**Accept all cookies */
const cookieAccept = (eId) => {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {

    e.addEventListener('click', () => {

      /**Set all cookies = true */
      setCookie('ckNec', 'true', 365)
      setCookie('ckPer', 'true', 365)
      setCookie('ckFun', 'true', 365)
      setCookie('ckTar', 'true', 365)
      setCookie('ckHid', 'true', 365)

      /**Hide cookie notice */
      document.getElementById('cookie').style.display = 'none'
    })
  }
}

/**Accept selected cookies */
const cookieSelect = (eId, form, per, fun, tar) => {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {

    e.addEventListener('click', () => {

      /**Set necessary cookie = true */
      setCookie('ckNec', 'true', 365)

      /**Check performance cookie */
      if (document.forms[form][per].checked) {

        /**Set performance cookie = true */
        setCookie('ckPer', 'true', 365)

        activateGtag()
      } else {

        setCookie('ckPer', 'true', 0)
      }

      /**Check functional cookie */
      if (document.forms[form][fun].checked) {

        /**Set functional cookie = true */
        setCookie('ckFun', 'true', 365)

      } else {

        setCookie('ckFun', 'true', 0)
      }

      /**Check targeting cookie */
      if (document.forms[form][tar].checked) {

        /**Set targeting cookie = true */
        setCookie('ckTar', 'true', 365)
      } else {

        setCookie('ckTar', 'true', 0)
      }

      /**Set hide notice cookie = true */
      setCookie('ckHid', 'true', 365)

      /**Hide cookie notice */
      document.getElementById('cookie').style.display = 'none'
    })
  }
}

/**Create cookie
 * [ DEPENDENCY ] requires at least 1 footer tag in html */
const createCookie = () => {

  let footer = document.querySelectorAll('footer')
  let footerLast = footer.length - 1

  let cookie = Object.assign(document.createElement('div'), {
    id: 'cookie',
    innerHTML: `
      <div id=cookie-notice>
        <div>
          <a class="cookie-policy-color" href="/policy/cookie-policy" target="_blank">
            <i class="fa-solid fa-cookie-bite"></i>
            Cookie Policy <span class="cookie-small"><i class="fa-solid fa-up-right-from-square"></i></span>
          </a>
        </div>
        <div>
          <div class="cookie-small">
            By clicking "Accept" you consent to the use of all cookies on this site.
            Click on the "Cookie Policy" above to learn more.
          </div>
        </div>
      </div>
      <div id="cookie-customize">
        <form id="cookie-consent-form"
        class="cookie-consent-form"
        name="cookie-consent-form"
        action="/"
        method="GET">
          <legend>
            <div class="cookie-bold cookie-color">Select cookies to customize.</div>
            <div>
              By clicking "Confirm" you consent to the use of the cookies selected below.
            </div>
          </legend>
          <fieldset class="cookie-fieldset">
            <div id="nec-i">
              <i class="fa-solid fa-circle-info"></i>
            </div>
            <label class="cookie-label for="ckNec">
              <span>Necessary</span>
              <input type="checkbox"
              id="ckNec"
              name="ckNec"
              checked
              disabled>
              <span id="disabledCookie">Required</span>
              <span class="chNec"></span>
            </label>
          </fieldset>
          <div id="nec-d">
            These cookies are necessary for this site to function properly and are required.
          </div>
          <fieldset class="cookie-fieldset">
            <div id="per-i">
              <i class="fa-solid fa-circle-info"></i>
            </div>
            <label for="ckPer" class="cookie-label label">Performance
              <input type="checkbox"
              id="ckPer"
              name="ckPer">
              <span class="onOff">
                <span id="perOn">Selected</span>
                <span id="perOff">Disabled</span>
              </span>
              <span class="chPer"></span>
            </label>
          </fieldset>
          <div id="per-d">
            These cookies are used to improve site performance.
          </div>
          <fieldset class="cookie-fieldset">
            <div id="fun-i">
              <i class="fa-solid fa-circle-info"></i>
            </div>
            <label for="ckFun" class="cookie-label label">Functional
              <input type="checkbox"
              id="ckFun"
              name="ckFun">
              <span class="onOff">
                <span id="funOn">Selected</span>
                <span id="funOff">Disabled</span>
              </span>
              <span class="chFun"></span>
            </label>
          </fieldset>
          <div id="fun-d">
            These cookies are used to provide additional functionality.
          </div>
          <fieldset class="cookie-fieldset">
            <div id="tar-i">
              <i class="fa-solid fa-circle-info"></i>
            </div>
            <label for="ckTar" class="cookie-label label">Targeting
              <input type="checkbox"
              id="ckTar"
              name="ckTar">
              <span class="onOff">
                <span id="tarOn">Selected</span>
                <span id="tarOff">Disabled</span>
              </span>
              <span class="chTar"></span>
            </label>
          </fieldset>
          <div id="tar-d">
            These cookies are used to optimize advertisements.
          </div>
        </form>
      </div>
      <div id="cookie-btns">
        <div class="cookie-btns-flex">
          <div id="cookie-btn-accept">Accept</div>
          <div id="cookie-btn-decline">Decline</div>
        </div>
        <div class="cookie-btns-flex">
          <div id="cookie-btn-customize">Customize</div>
          <div id="cookie-btn-confirm" type="none">Confirm</div>
        </div>
      </div>
    `
  })

  footer[footerLast].after(cookie)
}

/**[ IMPLEMENT ] */

createCookie()

/**Show cookie customizer on cookie policy notice */
toggleCookieClass('cookie-btn-customize', 'toggle-cookie-customize')

/**Shoe cookie info */
toggleCookieClass('nec-i', 'toggle-nec-info')
toggleCookieClass('per-i', 'toggle-per-info')
toggleCookieClass('fun-i', 'toggle-fun-info')
toggleCookieClass('tar-i', 'toggle-tar-info')

/**Show cookie as selected */
toggleCookieClass('ckPer', 'toggle-per-onOff')
toggleCookieClass('ckFun', 'toggle-fun-onOff')
toggleCookieClass('ckTar', 'toggle-tar-onOff')

/**Decline all cookies */
cookieDecline('cookie-btn-decline')

/**Accept all cookies */
cookieAccept('cookie-btn-accept')

/**Accept select cookies */
cookieSelect(
  'cookie-btn-confirm',
  'cookie-consent-form',
  'ckPer',
  'ckFun',
  'ckTar'
)

/**Check ckHid cookie to implement hide cookie notice */
if (checkCookie('ckHid') == 'true') {

  document.getElementById('cookie').style.display = 'none'
}

/**Check ckPer cookie to implement Google analytics gtag */
if (checkCookie('ckPer') == 'true') {

  activateGtag()
}

/**[ GET ELEMENTS ] ---------------------------------------------------------*/

const body          = document.body
const title         = document.querySelector('title'  )
const article       = document.querySelector('article')

/**[ CREATE ELEMENTS ] ------------------------------------------------------*/

const nav           = document.createElement('nav'    )
const menu          = document.createElement('menu'   )
const footer        = document.createElement('footer' )
const returnHome    = document.createElement('small'  )
const policy        = document.createElement('div'    )
const cookie        = document.createElement('div'    )
const cookieBody    = document.createElement('div'    )
const theme         = document.createElement('span'   )

/**Buttons */
const btnCookie     = document.createElement('div'    )
const btnTheme      = document.createElement('span'   )
const btnScroll     = document.createElement('div'    )

/**[ CREATE FUNCTIONS ] -----------------------------------------------------*/

const toggleClass = (id, cls) => {

  let e = document.getElementById(id)

  !e ? true : e.addEventListener('click', () => {

    !cls ? true : document.body.classList.toggle(cls)
  })
}

const setCookie = (cname, cvalue, exdays) => {

  let d = new Date()

  d.setTime(d.getTime() + (exdays*24*60*60*1000))

  let expires = "expires="+ d.toUTCString()

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

const getCookie = (cname) => {

  let name = cname + "="
  let ca = document.cookie.split(';')

  let caLen = ca.length

  for(let i = 0; i < caLen; i++) {

    let c = ca[i]

    while (c.charAt(0) == ' ') { c = c.substring(1) }

    if (c.indexOf(name) == 0) { return c.substring(name.length, c.length) }
  }

  return ''
}

const checkCookie = (cname) => {

  return getCookie(cname) != '' ? getCookie(cname) : false
}

const runGtag = () => {

  window.dataLayer = window.dataLayer || []

  function gtag() { dataLayer.push(arguments) }

  gtag('js', new Date())

  gtag('config', 'G-4R2HPVTYL3')
}

const createNav = (element) => {

  let icon = document.createElement('div')

  icon.id = 'menu-icon'

  icon.innerHTML = `

    <i class="fa-solid fa-bars"></i>
  `

  element.append(icon)
}

const createMenu = (element, container) => {

  document.body.insertBefore(container, document.body.childNodes[0])

  !element ? true : element.innerHTML = `

    <span id="btn-home">
      <a href="/"><small>Home</small></a>
    </span>
    <span id="btn-about">
      <a href="/about"><small>About</small></a>
    </span>
    <span id="btn-contact">
      <a href="/contact"><small>Contact</small></a>
    </span>
  `

  !container ? true: container.append(element)
}

const createTheme = (element, firstContainer, secondContainer) => {

  firstContainer.id = 'theme'
  element.id        = 'btn-theme'
  element.title     = 'Toggle Theme'
  element.innerHTML = '<small>Theme</small>'

  firstContainer.append(element)

  !secondContainer ? true: secondContainer.append(firstContainer)
}

const createReturn = (element, container) => {

  element.innerHTML = `

    <a href="/#return" class="return">
      <span><i class="fa-solid fa-chevron-left"></i></span>
      <span>RETURN</span>
    </a>
  `

  !container ? true: container.append(element)
}

const createPolicy = (element, container) => {

  element.setAttribute('class', 'policy')

  element.innerHTML = `

    <div class="flex c4" style="justify-content: center; margin: auto;">
      <a href="/policy/user-agreement" id="user-agreement">User Agreement<a>
      <span> | </span>
      <a href="/policy/privacy-policy" id="privacy-policy">Privacy Policy<a>
      <span> | </span>
      <a href="/policy/cookie-policy" id="cookie-policy">Cookie Policy<a>
    </div>
    <div class="c4">
      Copyright &#169;${new Date().getFullYear()} James A. Baroi. All rights
      reserved.
    </div>
  `

  !container ? true: container.append(element)
}

const createScroll = (element, container) => {

  element.id        = 'btn-scroll'
  element.innerHTML = `

    <span id="scroll-chevron-up">
      <i class="fa-solid fa-chevron-up"></i>
    </span>
  `

  !container ? true: container.append(element)
}

const createCookie = (element, elementBtn, elementBody, container) => {

  element.id     = 'cookie'
  elementBtn.id  = 'btn-cookie'
  elementBody.id = 'cookie-body'

  elementBody.innerHTML =
  `
    <a href="/policy/cookie-policy" target="_blank">
      <h1 class="c3">Cookie Policy</h1>
    </a>
    <p>
      Click "OK" to consent to the use of cookies. Click "Cookie Policy" above
      to learn more.
    </p>
  `
  elementBtn.innerHTML = 'OK'

  elementBody.append(elementBtn)
  element.append(elementBody)

  !container ? true: container.append(element)
}

/**[ IMPLEMENT ] ------------------------------------------------------------*/

if (developingActive) {

  /**Do nothing */

} else {

  /**Implement common */

  createNav(nav)
  createMenu(menu, nav)
  createTheme(btnTheme, theme, menu)
  createReturn(returnHome, article)

  document.body.append(footer)

  createPolicy(policy, footer)
  createScroll(btnScroll, footer)
  createCookie(cookie, btnCookie, cookieBody, footer)

  toggleClass('menu-icon', 'show-menu')

  /**Scroll to top */
  !btnScroll ? true : (
    
    btnScroll.addEventListener('click', () => {

      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }),

    window.onscroll = () => {

      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200 ?

      btnScroll.style = 'cursor: pointer; opacity: 1;' :
      btnScroll.style = 'cursor: default; opacity: 0;'
    }
  )

  /**Toggle theme */
  !btnTheme ? true : btnTheme.addEventListener('click', () => {

    let theme

    window.matchMedia('screen and (prefers-color-scheme: dark)').matches ? (

      document.body.classList.toggle('light-theme'),

      theme = document.body.classList.contains('light-theme') ?

      'light' : 'dark'

      ) : (

      document.body.classList.toggle('dark-theme'),

      theme = document.body.classList.contains('dark-theme')  ?

      'dark'  : 'light'
    )

    setCookie('theme', theme, 365)
  })

  /**Consent to cookies */
  !btnCookie ? true : btnCookie.addEventListener('click', () => {

    setCookie('cookie', 'true', 365)

    !cookie ? true : cookie.remove()
    !theme  ? true : (

      theme.append(btnTheme),
      theme.style.display = 'inline-block'
    )

    // runGtag()
  })

  /**Show/hide cookie notice and theme toggle btn */
  checkCookie('cookie') != 'true' ?

    !theme ? true : (

      btnTheme.remove(),
      theme.innerHTML = '',
      theme.style.display = 'none'
    
    ) : (

      !cookie ? true : cookie.remove(),
      !theme  ? true : (

      theme.append(btnTheme),
      theme.style.display = 'inline-block'
    )
  )

  /**Apply theme based on theme cookie */
  checkCookie('theme') != 'light' ?
  document.body.classList.toggle('dark-theme') :
  document.body.classList.toggle('light-theme')
}

console.log(document.cookie)

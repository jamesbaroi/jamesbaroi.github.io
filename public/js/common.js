const apndCToP = (p, c) => { !(p && c) ? true : p.append(c) }
const rmvElm = (e) => { !e ? true : e.remove() }
const dsplBlk = (e) => { !e ? true : e.style.display = 'block' }
const dsplNn = (e) => { !e ? true : e.style.display = 'none' }
const shoElm = (p, c) => { apndCToP(p, c), dsplBlk(c) }
const hidElm = (e) => { rmvElm(e), dsplNn(e) }

/**Scroll up ----------------------------------------------------------------*/
const createScroll = () => {

  let f = document.querySelector('footer')
  let s = document.createElement('div')

  s.id = 'btn-scroll'
  s.title = 'Scroll Up'

  s.addEventListener('click', () => {

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })

  !f ? true : f.append(s)
}

const implementScroll = (l) => {

  let e = document.getElementById(l)

  !e ? true : ((

    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200

  ) ? (

    e.style.opacity = '1', e.style.cursor = 'pointer'

  ) : (

    e.style.opacity = '0', e.style.cursor = 'default'
  ))
}

/** Activate cookie policy --------------------------------------------------*/
const setCookie = (cn, cv, ex) => {

  let d = new Date()

  d.setTime(d.getTime() + (ex*24*60*60*1000))

  let ed = "expires="+ d.toUTCString()

  document.cookie = cn + "=" + cv + ";" + ed + ";path=/"
}

const getCookie = (cn) => {

  let n = cn + "="
  let ca = document.cookie.split(';')

  for(let i = 0; i < ca.length; i++) {

    let c = ca[i]

    while (c.charAt(0) == ' ') { c = c.substring(1) }

    if (c.indexOf(n) == 0) { return c.substring(n.length, c.length) }
  }

  return ''
}

const checkCookie = (cn) => {

  return getCookie(cn) != '' ?  getCookie(cn) : false
}

const runGtag = () => {

  window.dataLayer = window.dataLayer || []

  function gtag() { dataLayer.push(arguments) }

  gtag('js', new Date())
  gtag('config', 'G-4R2HPVTYL3')
}

const createTheme = () => {

  let f = document.querySelector('footer')
  let t = document.createElement('div')
  let b = document.createElement('div')

  t.id = 'theme'
  b.id = 'btn-theme'
  b.title = 'Toggle Theme'

  t.append(b)

  !f ? true : f.append(t)
}

const activateTheme = (e) => {

  !e ? true : (

    e.addEventListener('click', () => {

      let m = 'screen and (prefers-color-scheme: dark)'
      let d = window.matchMedia(m)
      let b = document.body
      let v

      d.matches ? (

        b.classList.toggle('light-theme'),
        v = b.classList.contains('light-theme') ? 'light' : 'dark'

      ) : (

        b.classList.toggle('dark-theme'),
        v = b.classList.contains('dark-theme') ? 'dark' : 'light'
      )

      setCookie('theme', v, 365)
    })
  )
}

const createCookie = () => {

  let c = document.createElement('div')
  let f = document.querySelector('footer')

  c.id = 'cookie'

  c.innerHTML = `

    <div id="cookie-notice">
      <div>
        <a id="cookie-heading" href="/policy/cookie-policy" target="_blank">
          <h1>
            <span>Cookie Policy</span>
          </h1>
        </a>
        <p>
          Click "OK" to consent to the use of cookies on this site.
          Click on "Cookie Policy" above to learn more.
        </p>
      </div>
      <div id="btn-cookie">OK</div>
    </div>
  `

  !f ? true : f.append(c)
}

const activateCookie = (ei, ci) => {

  let e = document.getElementById(ei)
  let c = document.getElementById(ci)
  let t = document.getElementById('theme')
  let b = document.getElementById('btn-theme')

  !e ? true : (

    e.addEventListener('click', () => {

      !c ? true : (

        setCookie('cookie', 'true', 365),

        runGtag(),

        c.style.display = 'none',

        shoElm(t, b)
      )
    })
  )
}

const implementCookie = () => {

  createTheme()

  let t = document.getElementById('theme')
  let b = document.getElementById('btn-theme')

  createCookie()

  activateCookie('btn-cookie', 'cookie')

  checkCookie('cookie') == 'true' ? (

    document.getElementById('cookie').style.display = 'none',
    shoElm(t, b)

  ) : hidElm(b)

  activateTheme(b)

  checkCookie('theme') == 'light' ? (

    document.body.classList.toggle('light-theme'),
    !b ? true : b.checked = false

  ) : (

    document.body.classList.toggle('dark-theme'),
    !b ? true : b.checked = true
  )
}

/**Implement ----------------------------------------------------------------*/
createScroll()

window.onscroll = () => {

  !document.getElementById('btn-scroll') ? true : implementScroll('btn-scroll')
}

implementCookie()
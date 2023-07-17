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

  s.id = 'scrl-btn'
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
const setCookie = (cname, cvalue, exdays) => {

  let d = new Date()

  d.setTime(d.getTime() + (exdays*24*60*60*1000))

  let expires = "expires="+ d.toUTCString()

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

const getCookie = (cname) => {

  let name = cname + "="
  let ca = document.cookie.split(';')

  for(let i = 0; i < ca.length; i++) {

    let c = ca[i]

    while (c.charAt(0) == ' ') { c = c.substring(1) }

    if (c.indexOf(name) == 0) { return c.substring(name.length, c.length) }
  }

  return ''
}

const checkCookie = (cname) => {

  return getCookie(cname) != '' ?  getCookie(cname) : false
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

  t.id = 'tm'
  b.id = 'tm-btn'
  b.title = 'Toggle Theme'

  t.append(b)

  !f ? true : f.append(t)
}

const activateTheme = (e) => {

  !e ? true : (

    e.addEventListener('click', () => {

      let matchMediaDark = 'screen and (prefers-color-scheme: dark)'
      let dark = window.matchMedia(matchMediaDark)
      let body = document.body
      let tmVal

      dark.matches ? (

        body.classList.toggle('light-theme'),
        tmVal = body.classList.contains('light-theme') ? 'light' : 'dark'

      ) : (

        body.classList.toggle('dark-theme'),
        tmVal = body.classList.contains('dark-theme') ? 'dark' : 'light'
      )

      setCookie('tm', tmVal, 365)
    })
  )
}

const createCookie = () => {

  let ck = document.createElement('div')
  let ftr = document.querySelector('footer')

  ck.id = 'ck'

  ck.innerHTML = `

    <div id="ck-ntc">
      <div>
        <a id="ck-hd" href="/policy/cookie-policy" target="_blank">
          <h1>
            <span>Cookie Policy</span>
          </h1>
        </a>
        <p>
          Click "OK" to consent to the use of cookies on this site.
          Click on "Cookie Policy" above to learn more.
        </p>
      </div>
      <div id="ck-btn">OK</div>
    </div>
  `

  !ftr ? true : ftr.append(ck)
}

const activateCookie = (eId, cId) => {

  let e = document.getElementById(eId)
  let c = document.getElementById(cId)
  let tm = document.getElementById('tm')
  let tmBtn = document.getElementById('tm-btn')

  !e ? true : (

    e.addEventListener('click', () => {

      !c ? true : (

        setCookie('ck', 'true', 365),

        runGtag(),

        c.style.display = 'none',

        shoElm(tm, tmBtn)
      )
    })
  )
}

const implementCookie = () => {

  createTheme()

  let tm = document.getElementById('tm')
  let tmBtn = document.getElementById('tm-btn')

  createCookie()

  activateCookie('ck-btn', 'ck')

  checkCookie('ck') == 'true' ? (

    document.getElementById('ck').style.display = 'none',
    shoElm(tm, tmBtn)

  ) : hidElm(tmBtn)

  activateTheme(tmBtn)

  checkCookie('tm') == 'light' ? (

    document.body.classList.toggle('light-theme'),
    !tmBtn ? true : tmBtn.checked = false

  ) : (

    document.body.classList.toggle('dark-theme'),
    !tmBtn ? true : tmBtn.checked = true
  )
}

/**Implement ----------------------------------------------------------------*/
createScroll()

window.onscroll = () => {

  !document.getElementById('scrl-btn') ? true : implementScroll('scrl-btn')
}

implementCookie()
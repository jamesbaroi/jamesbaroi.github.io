const tgCls = (id, cls) => {

  let e = document.getElementById(id)

  if (!e) {

    console.log(`Element not defined.`)

  } else {

    document.body.classList.toggle(cls)
  }
}

const apndCToP = (p, c) => {

  if (!(p && c)) {

    console.log('Elements not defined.')

  } else {

    p.append(c)
  }
}

const rmvElm = (e) => {

  if (!e) {

    console.log('Element not defined.')

  } else {

    e.remove()
  }
}

const dsplBlk = (e) => {

  if (!e) {

    console.log('Element not defined.')

  } else {

    e.style.display = 'block'
  }
}

const dsplNn = (e) => {

  if (!e) {

    console.log('Element not defined.')

  } else {

    e.style.display = 'none'
  }
}

const shoElm = (p, c) => {

  apndCToP(p, c)

  dsplBlk(c)
}

const hidElm = (e) => {

  rmvElm(e)

  dsplNn(e)
}

/**Iterate blogs and append to footer ---------------------------------------*/
const create = () => {

  let ix = document.createElement('div')
  let tb = document.createElement('div')
  let tt = document.createElement('div')
  let dt = document.createElement('div')
  let ah = document.createElement('a')

  tb.setAttribute('class', 'tb')
  ah.setAttribute('class', 'ah')

  return { ix, tb, tt, dt, ah }
}

const process = (d, o, i) => {

  o.ix.innerHTML = i + 1
  o.tt.innerHTML = d[i].tt
  o.dt.innerHTML = '/ ' + d[i].dt
  o.ah.href = '/article/' +

  /**Transform title to href */
  d[i].tt
  .replaceAll('.', '')
  .replaceAll(',', '')
  .replaceAll(':', '')
  .replaceAll('?', '')
  .replaceAll('(', '')
  .replaceAll(')', '')
  .replaceAll('[', '')
  .replaceAll(']', '')
  .replaceAll(' ', '-')
  .toLowerCase()

  o.tb.append(o.ix, o.tt, o.dt)
  o.ah.append(o.tb)
}

const render = (d) => {

  let main = document.querySelector('main')

  for (let i = d.length - 1; i >= 0; i--) {

    let o = create()

    process(d, o, i)

    if (main) main.append(o.ah)
  }
}

/** Activate cookie policy --------------------------------------------------*/
const setCk = (cname, cvalue, exdays) => {

  let d = new Date()

  d.setTime(d.getTime() + (exdays*24*60*60*1000))

  let expires = "expires="+ d.toUTCString()

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

const getCk = (cname) => {

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

const chkCk = (cname) => {

  let cookieValue = getCk(cname)

  if (cookieValue != "") {

    return cookieValue

  } else {

    return
  }
}

const runGtag = () => {

  window.dataLayer = window.dataLayer || []

  function gtag() {

    dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', 'G-4R2HPVTYL3')
}

const actvThm = (e) => {

  if(!e) {

    console.log('Element not defined.')

  } else {

    e.addEventListener('click', () => {

      let matchMediaDark = 'screen and (prefers-color-scheme: dark)'

      let dark = window.matchMedia(matchMediaDark)

      if (dark.matches) {

        document.body.classList.toggle('light-theme')

        var themeValue = document.body.classList.contains('light-theme') ?

        'light' : 'dark'

      } else {

        document.body.classList.toggle('dark-theme')

        var themeValue = body.classList.contains('dark-theme') ?

        'dark' : 'light'
      }

      setCk('tm', themeValue, 365)
    })
  }
}

/**Create */
const crtCk = () => {

  let ck = document.createElement('div')

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

  document.body.append(ck)
}

/**Activate */
const actvCk = (eId, cId) => {

  let e = document.getElementById(eId)
  let c = document.getElementById(cId)

  let tm = document.getElementById('tm')
  let tmBtn = document.getElementById('tm-btn')

  if (!e) {

    console.log('Element not defined.')

    return

  } else {

    e.addEventListener('click', () => {

      if (!c) {

        console.log('Element not defined.')

      } else {

        setCk('ck', 'true', 365)

        runGtag()

        c.style.display = 'none'

        shoElm(tm, tmBtn)
      }
    })
  }
}

/**Implement */
const implCk = () => {

  let tm = document.getElementById('tm')
  let tmBtn = document.getElementById('tm-btn')

  crtCk()

  actvCk('ck-btn', 'ck')

  if (chkCk('ck') == 'true') {

    document.getElementById('ck').style.display = 'none'

    shoElm(tm, tmBtn)

  } else {

    hidElm(tmBtn)
  }

  actvThm(tmBtn)

  if (chkCk('tm') == 'light') {

    document.body.classList.toggle('light-theme')

    if (!tmBtn) {

      console.log('Element not defined.')

    } else {

      tmBtn.checked = false
    }

  } else {

    document.body.classList.toggle('dark-theme')

    if (!tmBtn) {

      console.log('Element not defined.')

    } else {

      tmBtn.checked = true
    }
  }
}

/**Add polcies --------------------------------------------------------------*/
const addPlc = () => {

  let ftr = document.querySelector('footer')
  let ckPlc = document.createElement('div')

  ckPlc.innerHTML = `

    <div id="plc">
      <a class="a" href="/policy/cookie-policy" target="_blank">
        Cookie Policy
      </a>
    </div>
  `

  if (ftr) ftr.append(ckPlc)
}

/**Implement ----------------------------------------------------------------*/
fetch('/article/index.json').then(o => o.json()).then(d => render(d))

implCk()

addPlc()
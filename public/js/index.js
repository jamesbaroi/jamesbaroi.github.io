const errElm = 'Element not defined.'
const apndCToP = (p, c) => { !(p && c) ? console.log(errElm) : p.append(c) }
const rmvElm = (e) => { !e ? console.log(errElm) : e.remove() }
const dsplBlk = (e) => { !e ? console.log(errElm) : e.style.display = 'block' }
const dsplNn = (e) => { !e ? console.log(errElm) : e.style.display = 'none' }
const shoElm = (p, c) => { apndCToP(p, c), dsplBlk(c) }
const hidElm = (e) => { rmvElm(e), dsplNn(e) }
const tgCls = (id, cls) => {
  
  !document.getElementById(id) ?
  console.log(errElm) : document.body.classList.toggle(cls)
}

/**Scroll up ----------------------------------------------------------------*/
const crtScrl = () => {

  let ftr = document.querySelector('footer')
  let scrlBtn = document.createElement('div')

  scrlBtn.id = 'scrl-btn'
  scrlBtn.title = 'Scroll Up'

  scrlBtn.addEventListener('click', () => {

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })

  !ftr ? console.log(errElm) : ftr.append(scrlBtn)
}

const implScrl = (eId) => {

  let e = document.getElementById(eId)

  !e ? console.log(errElm) : ((

    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200

  ) ? (

    e.style.opacity = '1', e.style.cursor = 'pointer'

  ) : (

    e.style.opacity = '0', e.style.cursor = 'default'
  ))
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

    !main ? console.log(errElm) : main.append(o.ah)
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

    while (c.charAt(0) == ' ') { c = c.substring(1) }

    if (c.indexOf(name) == 0) { return c.substring(name.length, c.length) }
  }

  return ''
}

const chkCk = (cname) => { return getCk(cname) != '' ?  getCk(cname) : false }

/**Google analytics */
const runGtag = () => {

  window.dataLayer = window.dataLayer || []

  function gtag() { dataLayer.push(arguments) }

  gtag('js', new Date())
  gtag('config', 'G-4R2HPVTYL3')
}

/**Create theme */
const crtTm = () => {

  let ftr = document.querySelector('footer')
  let tmDiv = document.createElement('div')
  let tmBtnDiv = document.createElement('div')

  tmDiv.id = 'tm'
  tmBtnDiv.id = 'tm-btn'
  tmBtnDiv.title = 'Toggle Theme'

  tmDiv.append(tmBtnDiv)

  !ftr ? console.log(errElm) : ftr.append(tmDiv)
}

/**Activate theme */
const actvThm = (e) => {

  !e ? console.log(errElm) : (

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

      setCk('tm', tmVal, 365)
    })
  )
}

/**Create cookie */
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

/**Activate cookie */
const actvCk = (eId, cId) => {

  let e = document.getElementById(eId)
  let c = document.getElementById(cId)
  let tm = document.getElementById('tm')
  let tmBtn = document.getElementById('tm-btn')

  !e ? console.log(errElm) : (

    e.addEventListener('click', () => {

      !c ? console.log(errElm) : (

        setCk('ck', 'true', 365),

        runGtag(),

        c.style.display = 'none',

        shoElm(tm, tmBtn)
      )
    })
  )
}

/**Implement cookie */
const implCk = () => {

  crtTm()

  let tm = document.getElementById('tm')
  let tmBtn = document.getElementById('tm-btn')

  crtCk()

  actvCk('ck-btn', 'ck')

  chkCk('ck') == 'true' ? (

    document.getElementById('ck').style.display = 'none',
    shoElm(tm, tmBtn)

  ) : hidElm(tmBtn)

  actvThm(tmBtn)

  chkCk('tm') == 'light' ? (

    document.body.classList.toggle('light-theme'),
    !tmBtn ? console.log(errElm) : tmBtn.checked = false

  ) : (

    document.body.classList.toggle('dark-theme'),
    !tmBtn ? console.log(errElm) : tmBtn.checked = true
  )
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
  !ftr ? console.log(errElm) : ftr.append(ckPlc)
}

/**Implement ----------------------------------------------------------------*/
crtScrl()

window.onscroll = () => {

  !document.getElementById('scrl-btn') ?
  console.log(errElm) : implScrl('scrl-btn')
}

fetch('/article/index.json').then(o => o.json()).then(d => render(d))

implCk()

addPlc()
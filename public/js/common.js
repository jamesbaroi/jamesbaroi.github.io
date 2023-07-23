/**[ GET ELEMENTS ] ---------------------------------------------------------*/

const cookie     = document.getElementById('cookie')
const theme      = document.getElementById('theme' )

/**Buttons */
const btn_Scroll = document.getElementById('btn-scroll')
const btn_Cookie = document.getElementById('btn-cookie')

/**[ CREATE ELEMENTS ] ------------------------------------------------------*/

/**Buttons */
const btn_Theme  = document.createElement('div' )

/**Site */
const site_Main   = 'https://www.jamesbaroi.com/'
const site_Dev    = 'http://localhost:8080/'

/**[ SET ELEMENT ATTRIBUTES ] -----------------------------------------------*/

!btn_Theme ? true : (
  btn_Theme.id    = 'btn-theme',
  btn_Theme.title = 'Toggle Theme'
)

/**[ CREATE FUNCTIONS ] -----------------------------------------------------*/

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

  return getCookie(cname) != '' ?  getCookie(cname) : false
}

const runGtag = () => {

  window.dataLayer = window.dataLayer || []

  function gtag() { dataLayer.push(arguments) }

  gtag('js', new Date())

  gtag('config', 'G-4R2HPVTYL3')
}

const navToIndex = () => {

  let site = window.location.href

  if (site == site_Main) {

    console.log('main site')

  } else if (site == site_Dev) {

    console.log('dev site')
  }

  console.log(site)
}

navToIndex()

/**[ IMPLEMENT ] ------------------------------------------------------------*/

!btn_Scroll ? true : (
  
  btn_Scroll.addEventListener('click', () => {

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }),

  window.onscroll = () => {

    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200 ?

    btn_Scroll.style = 'cursor: pointer; opacity: 1;' :
    btn_Scroll.style = 'cursor: default; opacity: 0;'
  }
)

!btn_Theme ? true : btn_Theme.addEventListener('click', () => {

  let v

  window.matchMedia('screen and (prefers-color-scheme: dark)').matches ? (

    document.body.classList.toggle('light-theme'),
    v = document.body.classList.contains('light-theme') ? 'light' : 'dark'

  ) : (

    document.body.classList.toggle('dark-theme'),
    v = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  )

  setCookie('theme', v, 365)
})

!btn_Cookie ? true : btn_Cookie.addEventListener('click', () => {

  setCookie('cookie', 'true', 365)

  !cookie ? true : cookie.style.display = 'none'
  !theme  ? true : theme.append(btn_Theme)

  runGtag()
})

checkCookie('cookie') != 'true' ? true : (

  !cookie ? true : cookie.style.display = 'none',
  !theme  ? true : theme.append(btn_Theme)
)

checkCookie('theme') != 'light' ?
document.body.classList.toggle('dark-theme') :
document.body.classList.toggle('light-theme')

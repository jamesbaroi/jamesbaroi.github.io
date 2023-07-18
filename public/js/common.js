/**[ GET ELEMENTS ] ---------------------------------------------------------*/

const cookie = document.getElementById('cookie')
const theme  = document.getElementById('theme' )
/**Buttons */
const btn_scroll = document.getElementById('btn-scroll')
const btn_cookie = document.getElementById('btn-cookie')

/**[ CREATE ELEMENTS ] ------------------------------------------------------*/

const btn_theme  = document.createElement('div' )

/**[ SET ELEMENT ATTRIBUTES ] -----------------------------------------------*/

btn_theme.id    = 'btn-theme'
btn_theme.title = 'Toggle Theme'

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

/**[ IMPLEMENT ] ------------------------------------------------------------*/

btn_scroll.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

window.onscroll = () => {
  document.body.scrollTop > 200 ||
  document.documentElement.scrollTop > 200 ?
  btn_scroll.style = 'cursor: pointer; opacity: 1;' :
  btn_scroll.style = 'cursor: default; opacity: 0;'
}

btn_theme.addEventListener('click', () => {
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

btn_cookie.addEventListener('click', () => {
  !cookie ? true : (
    setCookie('cookie', 'true', 365),
    cookie.style.display = 'none',
    theme.append(btn_theme),
    runGtag()
  )
})

checkCookie('cookie') == 'true' ? (
  cookie.style.display = 'none',
  theme.append(btn_theme)
) : btn_theme.remove()

checkCookie('theme') == 'light' ?
document.body.classList.toggle('light-theme') :
document.body.classList.toggle('dark-theme')
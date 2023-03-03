/**Get elements */
const main = document.getElementById('main')
const menu = document.getElementById('menu')
const content = document.getElementById('content')

const btnMenu = document.getElementById('btn-menu')
const btnHome = document.getElementById('btn-home')
const btnAbout = document.getElementById('btn-about')
const btnService = document.getElementById('btn-service')
const btnContact = document.getElementById('btn-contact')


const pageHome = document.getElementById('page-home')
const pageAbout = document.getElementById('page-about')
const pageService = document.getElementById('page-service')
const pageContact = document.getElementById('page-contact')


/**Copyright year */
document.getElementById('year').innerHTML = new Date().getFullYear()

/**Google analytics tag */
/**With user cookie consent - to do */
// window.dataLayer = window.dataLayer || []

// function gtag() {
//   dataLayer.push(arguments)
// }

// gtag('js', new Date())
// gtag('config', 'G-4R2HPVTYL3')

/**Menu icon click */
btnMenu.onclick = () => {
  document.body.classList.toggle('show-menu')
}

window.addEventListener('click', (e) => {
  if (document.body.classList.contains('show-menu') == false ||
    e.target == btnMenu ||
    e.target == btnHome ||
    e.target == btnAbout ||
    e.target == btnService ||
    e.target == btnContact
    ) {
    return
  } else {
    document.body.classList.toggle('show-menu')
  }
})

/**Single paginate */
function hideAllPages() {
  pageHome.style.display = 'none'
  pageAbout.style.display = 'none'
  pageService.style.display = 'none'
  pageContact.style.display = 'none'
}

function showHome() {
  hideAllPages()
  pageHome.style.display = 'block'
}

function showAbout() {
  hideAllPages()
  pageAbout.style.display = 'block'
}

function showService() {
  hideAllPages()
  pageService.style.display = 'block'
}

function showContact() {
  hideAllPages()
  pageContact.style.display = 'block'
}

showHome()
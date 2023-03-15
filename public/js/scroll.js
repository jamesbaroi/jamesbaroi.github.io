/**CREATE */
/**Hide #id scroll to links */
const hideHashLink = () => {

  let a = document.getElementsByTagName('a')

  Array.prototype.forEach.call(a, (elem, index) => {

    let hrefAttr = elem.getAttribute('href')

    if (hrefAttr && hrefAttr.includes('#')) {

      elem.addEventListener('click', (e) => {

        e.preventDefault()

        document.getElementById(hrefAttr.replace('#', '')).scrollIntoView({

          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      })
    }
  })
}

/**Scroll up to top of page by element id */
const scrollUp = (eId) => {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {

    e.addEventListener('click', () => {

      document.body.scrollTop = 0 /**For safari */
      document.documentElement.scrollTop = 0
    })
  }
}

/**Show scroll button */
const showScroller = (eId) => {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {

      e.style.opacity = 1
      e.style.cursor = 'pointer'
    } else {

      e.style.opacity = 0
      e.style.cursor = 'default'
    }
  }
}

/**Create scroll btn
 * [ DEPENDENCY ] requires at least one main tag in html
*/
const createScroll = () => {
  let main = document.querySelectorAll('main')
  let mainLast = main.length - 1

  let scrollBtn = Object.assign(document.createElement('i'), {
    id: 'scroll-btn'
  })

  scrollBtn.setAttribute('class', 'fa-solid fa-angle-up')

  main[mainLast].after(scrollBtn)
}

/**IMPLEMENT */
createScroll()

/**Scroll to top of page */
scrollUp('scroll-btn')

/**Show scroll btn on scroll-down */
window.onscroll = () => { showScroller('scroll-btn') }

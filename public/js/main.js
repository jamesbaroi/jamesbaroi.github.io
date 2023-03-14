/**[ CREATE ONLY ]
 * [ NO IMPLEMENTATION ]
 * [ NO DEPENDENCY]
 * */

/**Toggle css class */
const toggleClass = (eId, tgClass) => {

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

/**Close css class */
const closeClass = (eId, tgClass) => {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {

    e.addEventListener('click', (e) => {

      if(!document.body.classList.contains(tgClass)) {

        return
      } else {

        document.body.classList.toggle(tgClass)
      }
    })
  }
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
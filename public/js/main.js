/**[ CREATE ONLY ]
 * [ NO IMPLEMENTATION ]
 * [ NO DEPENDENCY]
 * */

/**Toggle css class */
function toggleClass(eId, tgClass) {

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
function closeClass(eId, tgClass) {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {

    e.addEventListener('click', (e) => {
      /**Do nothing if menu not shown or
       * when menu icon/items clicked
       */
      if(!document.body.classList.contains(tgClass)
        ) {
        return
      } else {
        document.body.classList.toggle(tgClass)
      }
    })
  }
}

/**Scroll up to top of page by element id */
function scrollUp(eId) {

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
function showScroller(eId) {

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
function hideHashLink() {

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
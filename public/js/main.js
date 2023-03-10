/**Create main.js -> no dependency */
/**Show current year in element by id */
function showYear(eId) {

  let e = document.getElementById(eId)

  if (!e) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {

    e.innerHTML = new Date().getFullYear()
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
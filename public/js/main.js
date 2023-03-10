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


function hideHashLink() {

  let a = document.getElementsByTagName('a')

  Array.prototype.forEach.call(a, function(elem, index) {

    let href = elem.getAttribute('href')

    if (href && href.includes('#')) {

      elem.addEventListener('click', function(e) {

        e.preventDefault()

        document.getElementById(href.replace(/#/g, '')).scrollIntoView({

          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      })
    }
  })
}
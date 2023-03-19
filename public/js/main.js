/**[ CREATE ONLY ]
 * [ NO IMPLEMENTATION ]
 * [ NO DEPENDENCY]
 * */

/**Toggle css class */
const toggleClass = (eId, tgClass) => {

  let elem = document.getElementById(eId)

  if (!elem) {

    console.log(`The element id ${eId} does not exist.`)
    return
  } else {
    elem.addEventListener('click', () => {

      document.body.classList.toggle(tgClass)
    })
  }
}

/**Close css class */
const closeClass = (eId, tgClass) => {

  let elem = document.getElementById(eId)

  if (!elem) {

    console.log(`The element id "${eId}" does not exist.`)
    return
  } else {

    elem.addEventListener('click', () => {

      if(!document.body.classList.contains(tgClass)) {

        return
      } else {

        document.body.classList.toggle(tgClass)
      }
    })
  }
}

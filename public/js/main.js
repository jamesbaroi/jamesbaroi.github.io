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
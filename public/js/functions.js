const showHide_ByElemId = (input, output) => {

  let i = document.getElementById(input)
  let o = document.getElementById(output)

  o.style.display = 'none'

  i.addEventListener('click', () => {

    o.style.display != 'none' ?
    o.style.display = 'none' :
    o.style.display = 'block'
  })
}

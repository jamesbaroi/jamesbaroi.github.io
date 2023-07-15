const clickElem_showBlockElem_byId = (input, output) => {

  let i = document.getElementById(input)
  let o = document.getElementById(output)

  !o ? true : o.style.display = 'none'

  !i ? true : i.addEventListener('click', () => {

    o.style.display != 'none' ?
    o.style.display = 'none' :
    o.style.display = 'block'
  })
}

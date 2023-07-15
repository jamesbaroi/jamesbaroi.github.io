const clickElem_showBlockElem_byId = (input, output, state) => {

  let i = document.getElementById(input)
  let o = document.getElementById(output)

  !o ? true : o.style.display = state

  !i ? true : i.addEventListener('click', () => {

    o.style.display != 'none' ?
    o.style.display = 'none' :
    o.style.display = 'block'
  })
}

clickElem_showBlockElem_byId('css-button', 'css', 'none')
clickElem_showBlockElem_byId('js-button', 'js', 'none')
clickElem_showBlockElem_byId('json-button', 'json', 'none')
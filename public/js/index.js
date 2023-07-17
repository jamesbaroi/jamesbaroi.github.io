const clickElem_showBlockElem_byId = (input, output, state) => {

  let i = document.getElementById(input)
  let o = document.getElementById(output)

  !o ? true : o.style.display = state

  !i ? true : i.addEventListener('click', () => {

    o.style.display != 'none' ?
    o.style.display  = 'none' :
    o.style.display  = 'block'
  })
}

clickElem_showBlockElem_byId('btn-css',  'css',  'none')
clickElem_showBlockElem_byId('btn-html', 'html', 'none')
clickElem_showBlockElem_byId('btn-js',   'js',   'none')
clickElem_showBlockElem_byId('btn-json', 'json', 'none')
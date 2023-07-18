const showHide_byId = (input, output, state) => {

  let i = document.getElementById(input)
  let o = document.getElementById(output)

  !o ? true : o.style.display = state

  !i ? true : i.addEventListener('click', () => {

    o.style.display != 'none' ?
    o.style.display  = 'none' :
    o.style.display  = 'block'
  })
}

const showOne_hideOthers_byId = (input, output, array, state) => {

  let i0 = document.getElementById(input)
  let o1 = document.getElementById(output)

  !o1 ? true : o1.style.display = state

  if (!i0) { true } else {

    i0.addEventListener('click', () => {

      if (o1.style.display != 'none') {

        // o1.style.display  = 'none'

      } else {

        o1.style.display  = 'block'

        for (let i = 0; i < array.length; i++) {

          document.getElementById(array[i]).style.display = 'none'
        }
      }
    })
  }
}


showOne_hideOthers_byId('btn-blog',   'blog',   ['about',  'assets'], 'block')
showOne_hideOthers_byId('btn-about',  'about',  ['assets', 'blog'  ], 'none' )
showOne_hideOthers_byId('btn-assets', 'assets', ['about',  'blog'  ], 'none' )

showHide_byId('btn-css',    'css',    'none')
showHide_byId('btn-html',   'html',   'none')
showHide_byId('btn-js',     'js',     'none')
showHide_byId('btn-json',   'json',   'none')
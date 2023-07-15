const clickElem_showBlockElem_byId = (input, output) => {

  let i = document.getElementById(input)
  let o = document.getElementById(output)

  !o ? true : o.style.display = 'none'

  !i ? true : i.addEventListener('click', () => {

    o.style.display != 'none' ?
    o.style.display  = 'none' :
    o.style.display  = 'block'
  })
}

const clickElem_clearElem_byId = (input, output) => {

  let i = document.getElementById(input)
  let o = document.getElementById(output)

  !i ? true : i.addEventListener('click', () => {

    !o ? true : o.innerHTML = ''
  })
}

const showConsoleLog = (i, e) => {

  let log = document.getElementById(i);

  console.log = (m) => {

    let logDiv = document.createElement(e)

    if (typeof m == 'object') {

      logDiv.innerHTML += '<div>' + (

        JSON && JSON.stringify ? JSON.stringify(m) : m

      ) + '</div>' +

      `<small>` + Date(Date.now()).toString() + '</small>'

      log.append(logDiv)

    } else {

      logDiv.innerHTML += '<div>' + m + '</div>' +
      `<small>` + Date(Date.now()).toString() + '</small>'
    
      log.append(logDiv)
    }
  }
}
const showHide = (input, output) => {

  let i = document.getElementById(input)
  let o = document.getElementById(output)

  o.style.display = 'none'

  i.addEventListener('click', () => {

    o.style.display != 'none' ?
    o.style.display = 'none' :
    o.style.display = 'block'
  })
}

const create = () => {

  let div = document.createElement('div')
  let des = document.createElement('div')
  let url = document.createElement('a')

  div.style.margin = '0 2em 1em'
  url.target = '_blank'

  return { div, des, url }
}

const process = (d, o, i) => {

  o.des.innerHTML = d[i].des
  o.url.innerHTML = d[i].url
  o.url.href = o.url.innerHTML.slice(28)

  o.div.append(o.des, o.url)
}

const renderCSS = (d) => {

  for (let i = 0; i < d.css.length; i++) {

    let o = create()

    o.url.style.color = 'var(--c5)'

    process(d.css, o, i)

    document.getElementById('css') ?
    document.getElementById('css').append(o.div) : false
  }
}

const renderHTML = (d) => {

  for (let i = 0; i < d.html.length; i++) {

    let o = create()

    o.url.style.color = 'var(--c6)'

    process(d.html, o, i)

    document.getElementById('html') ?
    document.getElementById('html').append(o.div) : false
  }
}

const renderJPG = (d) => {

  for (let i = 0; i < d.jpg.length; i++) {

    let o = create()

    o.url.style.color = 'var(--c7)'

    process(d.jpg, o, i)

    document.getElementById('jpg') ?
    document.getElementById('jpg').append(o.div) : false
  }
}

const renderJS = (d) => {

  for (let i = 0; i < d.js.length; i++) {

    let o = create()

    o.url.style.color = 'var(--c8)'

    process(d.js, o, i)

    document.getElementById('js') ?
    document.getElementById('js').append(o.div) : false
  }
}

const renderJSON = (d) => {

  for (let i = 0; i < d.json.length; i++) {

    let o = create()

    o.url.style.color = 'var(--c9)'

    process(d.json, o, i)

    document.getElementById('json') ?
    document.getElementById('json').append(o.div) : false
  }
}

const render = (d) => {

  renderCSS(d)
  renderHTML(d)
  renderJPG(d)
  renderJS(d)
  renderJSON(d)
}

fetch('/public/json/index.json').then(o => o.json()).then(d => render(d))

showHide('btn-css', 'css')
showHide('btn-html', 'html')
showHide('btn-jpg', 'jpg')
showHide('btn-js', 'js')
showHide('btn-json', 'json')
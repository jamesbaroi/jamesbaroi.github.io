let create_SiteIndexData_Elem = () => {

  let src = document.createElement('a')
  let des = document.createElement('div')
  let url = document.createElement('div')

  des.setAttribute('class', 'asset section')
  src.target = '_blank'

  return { src, des, url }
}

let populate_SiteIndexData_Elem = (d, o, i) => {

  !d[i].des ? o.des.innerHTML = 'None' : o.des.innerHTML = d[i].des
  !d[i].url ? o.url.innerHTML = '' : (

    o.url.innerHTML = d[i].url,
    o.src.href      = o.url.innerHTML.slice(28)
  )

  o.des.append(o.url)
  o.src.append(o.des)
}

let render_SiteIndexData_Type = (d, t, c) => {

  for (let i = d.length -1; i >= 0; i--) {

    let e = document.getElementById(t)
    let o = create_SiteIndexData_Elem()

    o.url.style.color = c

    populate_SiteIndexData_Elem(d, o, i)

    e ? e.append(o.src) : false
  }
}

let render_SiteIndexData = (d) => {

  render_SiteIndexData_Type(d.css,  'css',  'var(--c5)')
  render_SiteIndexData_Type(d.html, 'html', 'var(--c6)')
  render_SiteIndexData_Type(d.js,   'js',   'var(--c7)')
  render_SiteIndexData_Type(d.json, 'json', 'var(--c8)')
}

fetch('/public/json/index.json')
.then(o => o.json())
.then(d => render_SiteIndexData(d))
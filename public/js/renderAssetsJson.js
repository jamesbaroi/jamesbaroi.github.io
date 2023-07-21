const create_SiteIndexData_Elem = () => {

  let src = document.createElement('a')
  let des = document.createElement('div')
  let url = document.createElement('div')

  des.setAttribute('class', 'asset section')
  src.target = '_blank'

  return { src, des, url }
}

const populate_SiteIndexData_Elem = (d, o, i) => {

  !d[i].des ? o.des.innerHTML = 'None' : o.des.innerHTML = d[i].des
  !d[i].url ? o.url.innerHTML = '' : (

    o.url.innerHTML = d[i].url,
    o.src.href      = o.url.innerHTML.slice(28)
  )

  o.des.append(o.url)
  o.src.append(o.des)
}

const render_SiteIndexData_Type = (d, t, c) => {

  let e = document.getElementById(t)

  for (let i = d.length -1; i >= 0; i--) {

    let o = create_SiteIndexData_Elem()

    o.url.style.color = c

    populate_SiteIndexData_Elem(d, o, i)

    e ? e.append(o.src) : false
  }
}

const render_SiteIndexData = (d) => {

  render_SiteIndexData_Type(d.js,   'js',   'var(--c6)')
  render_SiteIndexData_Type(d.json, 'json', 'var(--c7)')
}

fetch('/public/json/index.json')
.then(o => o.json())
.then(d => render_SiteIndexData(d))
const create_SiteIndexData_Elem = () => {

  let src = document.createElement('a')
  let con = document.createElement('div')
  let tit = document.createElement('div')
  let des = document.createElement('div')
  let url = document.createElement('div')

  con.setAttribute('class', 'asset section')
  tit.setAttribute('class', 'title'        )
  des.setAttribute('class', 'description'  )
  url.setAttribute('class', 'url'          )
  con.title  = 'Open in a new tab.'
  src.target = '_blank'

  return { src, con, tit, des, url }
}

const populate_SiteIndexData_Elem = (d, o, i) => {

  !d[i].tit ? o.tit.innerHTML = '' : o.tit.innerHTML = d[i].tit
  !d[i].des ? o.des.innerHTML = '' : o.des.innerHTML = d[i].des
  !d[i].url ? o.url.innerHTML = '' : (

    o.url.innerHTML = d[i].url,
    o.src.href      = o.url.innerHTML.slice(28)
  )

  o.con.append(o.tit, o.des, o.url)
  o.src.append(o.con)
}

const render_SiteIndexData_Type = (d, t, c) => {

  let e = document.getElementById(t)
  let dLen = d.length

  for (let i = dLen -1; i >= 0; i--) {

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

fetch('/public/json/assets.json')
.then(o => o.json())
.then(d => render_SiteIndexData(d))
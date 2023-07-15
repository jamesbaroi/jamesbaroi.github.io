const implement_siteIndexDataRender_fromJsonURL = (url) => {

  const create_SiteIndexData_Elem = () => {

    let div = document.createElement('div')
    let des = document.createElement('div')
    let url = document.createElement('a')
  
    div.style.margin = '0 2em 1em'
    url.target       = '_blank'
  
    return { div, des, url }
  }

  const populate_SiteIndexData_Elem = (d, o, i) => {
  
    o.des.innerHTML = d[i].des
    o.url.innerHTML = d[i].url
    o.url.href      = o.url.innerHTML.slice(28)
  
    o.div.append(o.des, o.url)
  }

  const parse_SiteIndexData_ArrayTypes = (d) => {
  
    let css  = d.css
    let html = d.html
    let jpg  = d.jpg
    let js   = d.js
    let json = d.json
  
    return { css, html, jpg, js, json }
  }

  const render_SiteIndexData_ArrayTypes = (d, t, c) => {
  
    for (let i = 0; i < d.length; i++) {
  
      let e = document.getElementById(t)
  
      let o = create_SiteIndexData_Elem()
  
      o.url.style.color = c
  
      populate_SiteIndexData_Elem(d, o, i)
  
      e ? e.append(o.div) : false
    }
  }

  const render_SiteIndexData = (d) => {
  
    let r = parse_SiteIndexData_ArrayTypes(d)
  
    render_SiteIndexData_ArrayTypes(r.css,  'css',  'var(--c5)')
    render_SiteIndexData_ArrayTypes(r.html, 'html', 'var(--c6)')
    render_SiteIndexData_ArrayTypes(r.jpg,  'jpg',  'var(--c7)')
    render_SiteIndexData_ArrayTypes(r.js,   'js',   'var(--c8)')
    render_SiteIndexData_ArrayTypes(r.json, 'json', 'var(--c9)')
  }

  fetch(url).then(o => o.json()).then(d => render_SiteIndexData(d))
}
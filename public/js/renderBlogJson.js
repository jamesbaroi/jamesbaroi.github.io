const implement_articleIndexDataRender_fromJsonUrl = (jsonSrc) => {

  let create_articleIndexData_Elem = () => {

    let src = document.createElement('a')
    let sec = document.createElement('section')
    let tit = document.createElement('div')
    let sub = document.createElement('div')
    let des = document.createElement('div')
    let dat = document.createElement('div')

    sec.setAttribute('class', 'blog')
    tit.setAttribute('class', 'title')
    dat.setAttribute('class', 'date')

    return { src, sec, tit, sub, des, dat }
  }

  let populate_articleIndexData_Elem = (d, o, i) => {

    !d[i].sub ? o.sub.innerHTML = '' : o.sub.innerHTML = d[i].sub
    !d[i].des ? o.des.innerHTML = '' : o.des.innerHTML = d[i].des
    !d[i].dat ? o.dat.innerHTML = '' : o.dat.innerHTML = d[i].dat
    !d[i].src ? o.src.href = '/404'  : o.src.href      = '/blog/' + d[i].src
    !d[i].tit ? o.tit.innerHTML = '' : o.tit.innerHTML = (

      '#' + (i + 1) + ' ' + d[i].tit
    )

    o.sec.append(o.tit, o.sub, o.des, o.dat)
    o.src.append(o.sec)
  }

  let render_articleIndexData = (d) => {

    for (let i = d.length - 1; i >= 0; i--) {

      let c = document.getElementById('blog')
      let o = create_articleIndexData_Elem()

      populate_articleIndexData_Elem(d, o, i)

      c ? c.append(o.src) : false
    }
  }

  fetch(jsonSrc)
  .then(o => o.json())
  .then(d => render_articleIndexData(d))
}

implement_articleIndexDataRender_fromJsonUrl('/blog/index.json')
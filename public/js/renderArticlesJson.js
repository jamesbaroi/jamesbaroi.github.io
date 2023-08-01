const create_ArticleIndexData_Elem = () => {

  let src = document.createElement('a'      )
  let sec = document.createElement('article')
  let tit = document.createElement('h2'     )
  let sub = document.createElement('h3'     )
  let des = document.createElement('p'      )
  let dat = document.createElement('small'  )

  sec.setAttribute('class', 'blog section')
  tit.setAttribute('class', 'title'       )
  sub.setAttribute('class', 'sub-title'   )
  des.setAttribute('class', 'description' )

  return { src, sec, tit, sub, des, dat }
}

const populate_ArticleIndexData_Elem = (d, o, i) => {

  !d[i].sub ? o.sub.innerHTML = '' : o.sub.innerHTML = d[i].sub
  !d[i].des ? o.des.innerHTML = '' : o.des.innerHTML = d[i].des
  !d[i].dat ? o.dat.innerHTML = '' : o.dat.innerHTML = d[i].dat
  !d[i].src ? o.src.href = '/404'  : o.src.href      =

  '/article/' + d[i].src

  !d[i].tit ? o.tit.innerHTML = '' : o.tit.innerHTML =

  'Post #' + (i + 1) + ': ' + d[i].tit

  o.sec.append(o.tit, o.sub, o.des, o.dat)
  o.src.append(o.sec)
}

const render_ArticleIndexData = (d) => {

  /**Show newest post */
  let n = document.getElementById('newest')
  let p = document.getElementById('blog-posts' )

  let o = create_ArticleIndexData_Elem()

  populate_ArticleIndexData_Elem(d, o, d.length - 1)

  n ? n.append(o.src): false

  let dLen = d.length

  /**Showw posts - newest */
  for (let i = dLen - 2; i >= 0; i--) {

    let o = create_ArticleIndexData_Elem()

    populate_ArticleIndexData_Elem(d, o, i)

    p ? p.append(o.src) : false
  }
}

fetch('/public/json/articles.json')
.then(o => o.json())
.then(d => render_ArticleIndexData(d))
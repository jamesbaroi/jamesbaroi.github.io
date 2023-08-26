/**[ CREATE FUNCTIONS ] -----------------------------------------------------*/

const createPostElements = () => {

  let hdr = document.createElement('header')
  let tag = document.createElement('small' )
  let tit = document.createElement('h1'    )
  let img = document.createElement('div'   )
  let vid = document.createElement('div'   )
  let sub = document.createElement('h4'    )
  let aut = document.createElement('p'     )
  let des = document.createElement('p'     )
  let dat = document.createElement('small' )

  vid.setAttribute('class', 'iframe-container')
  des.setAttribute('class', 'c4'              )
  tag.setAttribute('class', 'c3'              )

  return { hdr, tag, tit, vid, img, sub, aut, des, dat }
}

const populatePostElements = (d, o) => {

  /**Get pathname */
  let pathArray = window.location.pathname.split('/')
  let pathname  = pathArray[pathArray.length - 1]

  /**Get post index using pathname */
  let idx = d.findIndex(x => x.src === pathname)

  let post = d[idx]

  !post.tit ? o.tit.innerHTML = '' : o.tit.innerHTML = post.tit
  !post.sub ? o.sub.innerHTML = '' : o.sub.innerHTML = post.sub
  !post.des ? o.des.innerHTML = '' : o.des.innerHTML = post.des
  !post.tag ? o.tag.innerHTML = '' : o.tag.innerHTML =

    post.tag.toUpperCase()

  !post.dat ? o.dat.innerHTML = '' : o.dat.innerHTML =

    `<time datetime="${post.dat}">Posted on: ${post.dat}</time>`

  !post.aut ? o.aut.innerHTML = `

      <small class="c3"><a href="/about">J. A. Baroi</small>
    `

    : !post.url ? o.aut.innerHTML = `

      <small>
        <span class="c3">
          <span>${post.aut}</span>
        </span>
        <span>( Guest Author )</span>
      </small>
    `
    : o.aut.innerHTML = `

      <small>
        <span class="c3">
          <a href="${post.url}" title="${post.url}">${post.aut}</a>
        </span>
        <span>( Guest Author )</span>
      </small>
    `

    !post.img ? o.img.innerHTML = '' : !post.alt ? o.img.innerHTML = `

    <img src="${post.img}" alt="No image description available.">
  `
  : o.img.innerHTML = `

    <img src="${post.img}" alt="${post.alt}">

    <a
      class="media-src"
      href="${post.img}"
      target="_blank"
      title="${post.img}"
      style="display: grid; padding-top: 8px;">
      Image source: click here to visit source in a new tab.
    </a>
  `

  !post.vid ? o.hdr.append(o.tag, o.tit, o.img, o.sub, o.aut) : (

    o.vid.innerHTML = `

    <iframe
      src="${post.vid}"
      allow="fullscreen; encrypted-media;"
      allowfullscreen>
    </iframe>
    `,

    o.hdr.append(o.tag, o.tit, o.vid, o.img, o.sub, o.aut)
  )
}

const renderPost = (d) => {

  let o = createPostElements()

  populatePostElements(d, o)

  body.insertBefore(o.hdr, body.children[1])
  article.insertBefore(o.des, article.children[0])
  article.insertBefore(o.dat, article.lastChild)
  title.innerHTML = `${o.tit.innerText} | jamesbaroi.com`
}

/**[ IMPLEMENT ] ------------------------------------------------------------*/

if (developingActive) {

  /**Do nothing */

} else {

  /**Implement article */

  /**Fetch and render posts */
  fetch('/json/posts.json').then(o => o.json()).then(d => renderPost(d))
}
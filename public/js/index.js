/**[ CREATE ELEMENTS ] ------------------------------------------------------*/

const filtersArray = [] /**Store selected filters */

/**[ GET ELEMENTS ] ---------------------------------------------------------*/

const btnShowAll = document.getElementById('btn-show-all')
const btnFilter  = document.getElementById('btn-filter'  )
const btnsSpacer = document.getElementById('btns-spacer' )
const filters    = document.getElementById('filters'     )
const filterTags = document.getElementById('filter-tags' )

/**[ CREATE FUNCTIONS ] -----------------------------------------------------*/

const createPostElements = () => {

  let art = document.createElement('article')
  let tag = document.createElement('small'  )
  let tit = document.createElement('h1'     )
  let img = document.createElement('div'    )
  let vid = document.createElement('div'    )
  let vsr = document.createElement('div'    )
  let sub = document.createElement('h4'     )
  let des = document.createElement('p'      )
  let dat = document.createElement('small'  )
  let src = document.createElement('a'      )

  tag.setAttribute('class', 'c3'              )
  src.setAttribute('class', 'c3 flex p'       )

  src.innerHTML = `

    <span><small>READ MORE</small></span>
    <span><small><i class="fa-solid fa-chevron-right"></i></small></span>
  `

  return { art, tag, tit, img, vid, vsr, sub, des, dat, src }
}

const populatePostElements = (d, o, i) => {

  !d[i].sub ? o.sub.innerHTML = '' : o.sub.innerHTML = d[i].sub
  !d[i].des ? o.des.innerHTML = '' : o.des.innerHTML = d[i].des
  !d[i].tag ? o.tag.innerHTML = '' : (

    o.tag.innerHTML = d[i].tag.toUpperCase(),
    o.art.setAttribute('class', `tag-${o.tag.innerText.replace(/\s+/g, '')}`)
  )

  !d[i].tit ? (

    o.tit.innerHTML = '',

    !d[i].src ? o.src.innerHTML = '' : o.src.href = `/article/${d[i].src}`

  ) : (

    !d[i].src ? (

      o.src.innerHTML = '',
      o.tit.innerHTML = `<div>${d[i].tit}</div>`

    ) : (

      o.src.href      = `/article/${d[i].src}`,
      o.tit.innerHTML = `<a href="/article/${d[i].src}">${d[i].tit}</a>`
    )
  )

  !d[i].dat ? o.dat.innerHTML = '' : o.dat.innerHTML =

    `<time datetime="${d[i].dat}">${d[i].dat}</time>`

  !d[i].img ? o.img.innerHTML = '' : !d[i].src ? o.img.innerHTML = `

    <img src="${d[i].img}" alt="${d[i].alt}" loading="lazy">
  `
  : o.img.innerHTML = `
  
    <img src="${d[i].img}" alt="${d[i].alt}" loading="lazy">
    <a
      class="media-src"
      href="${d[i].img}"
      target="_blank"
      title="${d[i].img}"
      style="display: grid; padding-top: 8px;">
      Source: click here to visit source in a new tab.
    </a>
  `

  !d[i].vid ? o.art.append(o.tag, o.tit, o.img, o.sub, o.des, o.dat, o.src) : (

    /**Require cookie consent to show video */
    !btnCookie ? true : btnCookie.addEventListener('click', () => {

      o.vid.setAttribute('class', 'iframe-container')

      o.vsr.innerHTML = `

      <a
        class="media-src"
        href="${d[i].vid}"
        target="_blank"
        title="${d[i].vid}"
        style="display: grid; padding-top: 8px;">
        Source: click here to visit source in a new tab.
      </a>
    `

      o.vid.innerHTML = `

        <iframe
          src="${d[i].vid}"
          allow="fullscreen; encrypted-media;"
          allowfullscreen
          loading="lazy">
        </iframe>
      `

      o.art.innerHTML = ''

      o.art.append(
        o.tag, o.tit, o.img, o.vid, o.vsr, o.sub, o.des, o.dat, o.src
      )
    }),

    checkCookie('cookie') != 'true' ? (

      o.vid.setAttribute('class', 'iframe-blocked'),

      o.vid.innerHTML = `

        <div class="c4">
          <b style="
            margin: 0;
            width: 100%;"
            class="flex">
            <span>
              <i class="fa-brands fa-youtube"></i>
            </span>
            <span><small>Video requires cookie consent.</small></span>
          </b>
          <img src="${d[i].thu}" style="width: 100%;">
          <div style="
            font-size: 0.8em;
            line-height: 1em;
            padding: 8px 0 0;">
            <a
              href="${d[i].vid}"
              target="_blank"
              class="red-hover"
              title="${d[i].vid}">
              <span
                style="word-break: break-all">
                Enable cookies to watch or click here to visit source in a
                new tab.
              </span>
            </a>
          </div>
        </div>
      `,

      o.art.append(o.tag, o.tit, o.img, o.vid, o.sub, o.des, o.dat, o.src)

    ) : (

      o.vid.setAttribute('class', 'iframe-container'),

      o.vsr.innerHTML = `

      <a
        class="media-src"
        href="${d[i].vid}"
        target="_blank"
        title="${d[i].vid}"
        style="display: grid; padding-top: 8px;">
        Source: click here to visit source in a new tab.
      </a>
    `,

      o.vid.innerHTML = `

        <iframe
          src="${d[i].vid}"
          allow="fullscreen; encrypted-media;"
          allowfullscreen
          loading="lazy">
        </iframe>
      `,

      o.art.append(
        o.tag, o.tit, o.img, o.vid, o.vsr, o.sub, o.des, o.dat, o.src
      )
    )
  )
}

const renderPosts = (d) => {

  let featured   = document.getElementById('featured'    )
  let articles   = document.getElementById('articles'    )
  let btnShowAll = document.getElementById('btn-show-all')

  let o = createPostElements()

  let dLen = d.length

  /**Show newest (featured) article */
  populatePostElements(d, o, dLen - 1)

  !featured ? true : featured.append(o.art)

  /**Create arrays to hold tags */
  let tagsArr = []
  let tagsUniqueArr = []

  /**Show all the rest of the articles */
  for (let i = dLen - 2; i >= 0; i--) {

    let o = createPostElements()

    populatePostElements(d, o, i)

    !articles ? true : articles.append(o.art)

    /**Process tags */
    if (d[i].tag) {

      /**Capitalize first letter of each word in tag */
      let eachTagWord = d[i].tag.split(' ')
      let eachTagWordLen = eachTagWord.length

      for (let i = 0; i < eachTagWordLen; i++) {

        eachTagWord[i] =
        eachTagWord[i][0].toUpperCase() +
        eachTagWord[i].substr(1).toLowerCase();
      }

      /**Push tags */
      tagsArr.push(eachTagWord.join(' '))

      /**Filter out repeat tags */
      tagsArr.forEach((item) => {

        tagsUniqueArr.indexOf(item) !== -1 ? true : tagsUniqueArr.push(item)
      })

      /**Alphabetize */
      tagsUniqueArr.sort()
    }
  }

  let tagsUniqueArrLen = tagsUniqueArr.length

  /**Output filtered and sorted tags */
  !(tagsUniqueArrLen > 1) ? (

    !btnFilter  ? true : btnFilter.remove(),
    !btnsSpacer ? true : btnsSpacer.remove()

  ) :

  tagsUniqueArr.forEach((item) => {

    /**Create tags contianer */
    let tags = document.createElement('span')
    let id   = item.toUpperCase().replace(/\s+/g, '')

    tags.setAttribute('id'   , `tag-${id}`)
    tags.setAttribute('class', `tag-style`)
    tags.addEventListener('click', () => {

      filterByTags(id)
    })

    let tagBullet = document.createElement('span')

    tagBullet.setAttribute('class', 'bullet')

    tagBullet.innerHTML = '&#8226;'

    /**Remove undefined tags */
    !item ? true : tags.append(tagBullet, item)

    /**Omit undefined tags */
    tags.innerHTML == '' ? true : filterTags.append(tags)
  })

  /**Remove show all btn only if one article */
  dLen > 1 ? true : !btnShowAll ? true : btnShowAll.remove()
}

const filterByTags = (id) => {

  let tagId = id.toUpperCase().replace(/\s+/g, '')

  e = document.getElementById(`tag-${id}`)

  if (e.style.color != 'var(--c3)') {

    /**Push selected topic to array */
    filtersArray.push(tagId)

    /**Style active tags */
    e.style.backgroundColor = 'var(--c0)'
    e.style.borderColor     = 'var(--c3)'
    e.style.color           = 'var(--c3)'

  } else {

    let filtersArrayLen = filtersArray.length

    /**Remove deselected topic from array */
    for (let i = 0; i < filtersArrayLen; i ++) {

      filtersArray[i] != tagId ? true : filtersArray.splice(i, 1)
    }

    /**Style inactive tags */
    e.style.backgroundColor = 'var(--c0)'
    e.style.borderColor     = 'var(--c0)'
    e.style.color           = 'var(--c1)'
  }

  /**Show all articles if no filter selected */
  if (filtersArray[0] === undefined) {

    let article    = document.querySelectorAll('article')
    let articleLen = article.length

    for (let i = 1; i < articleLen; i++) {

      article[i].style.display = 'block'
    }

    /**Style inactive filter btn */
    btnFilter.style.color = 'var(--c1)'

  } else {

    /**If at least one filter selected... */
    let article    = document.querySelectorAll('article')
    let articleLen = article.length

    /**First hide all blogs */
    for (let i = 1; i < articleLen; i++) {

      article[i].style.display = 'none'
    }

    let filtersArrayLen = filtersArray.length

    /**Then show selected blogs */
    for (let i = 0; i < filtersArrayLen; i++) {

      let selectedFilter = document.querySelectorAll(`.tag-${filtersArray[i]}`)
      let selectedFilterLen = selectedFilter.length

      for (let j = 0; j < selectedFilterLen; j++) {

        selectedFilter[j].style.display = 'block'
      }
    }

    /**Style active filter btn */
    btnFilter.style.color = 'var(--c3)'
  }
}

/**[ IMPLEMENT ] ------------------------------------------------------------*/

const implementIndex = () => {

  if (developingActive) {

    /**Do nothing */

  } else {

    /**Implement index */

    /**Toggle css class on btn click */
    toggleClass('btn-show-all', 'show-all-posts')
    toggleClass('btn-filter'  , 'show-filters'     )

    /**Hide filters on collapse */
    !btnShowAll ? true : btnShowAll.addEventListener('click', () => {

      !document.querySelector('.show-filters') ? true :
      document.body.classList.toggle('show-filters')
    })

    /**Fetch and render posts */
    fetch('/json/posts.json').then(o => o.json()).then(d => renderPosts(d))

    /**Show all posts when returning from another page */
    window.location.hash != '#return' ? true : (

      document.body.classList.toggle('show-all-posts')
    )

    /**Remove url hash */
    history.pushState(
      "",
      document.title,
      window.location.pathname +
      window.location.search
    )
  }
}

implementIndex()

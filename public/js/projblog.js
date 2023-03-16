/**CREATE */
/**Create elements */
const createElem = () => {

  var section = document.createElement('div')
  var div = document.createElement('div')
  var title = document.createElement('h1')
  var image = document.createElement('img')
  var subtitle = document.createElement('h4')
  var description = document.createElement('p')
  var tag = document.createElement('div')
  var url = document.createElement('a')

  return {
    section, div, title, image, subtitle, description, tag, url
  }
}

/**Process data */
const processData = (e, input, i) => {

  /**Set element attributes */
  e.title.setAttribute('style',
    `
    background-color:${input[i].style.backgroundColor};
    color:${input[i].style.color}
    `
  )

  e.section.setAttribute('class', 'a-active')
  e.url.setAttribute('href', input[i].url)
  e.url.setAttribute('target', '_blank')
  e.image.setAttribute('src', input[i].img)
  e.image.setAttribute('alt', input[i].alt)
  e.image.setAttribute('onerror', 'this.style.display="none"')
  e.image.setAttribute('style', 'border: 0;')
  e.tag.setAttribute('style',
    `
    color: red;
    font-weight: bold;
    padding: 0 20px 20px;
    text-align: right;
    `
  )

  /**Create data */
  e.title.innerHTML = input[i].title
  e.subtitle.innerHTML = input[i].subtitle
  e.description.innerHTML = input[i].description
  e.tag.innerHTML = input[i].tag

  /**Append elements */
  e.div.append(e.title)
  e.div.append(e.image)
  e.div.append(e.subtitle)
  e.div.append(e.description)
  e.div.append(e.tag)
  e.url.append(e.div)
  e.section.append(e.url)
}

/**Render newest data */
const renderNew = (input, eId) => {

  let e = createElem()

  processData(e, input, input.length - 1)

  document.getElementById(eId).append(e.section)
}

/**Render all but the newest data */
const renderAll = (input, eId, i) => {

  let e = createElem()

  processData(e, input, i)

  document.getElementById(eId).append(e.section)
}

/**IMPLEMENT */
/**Render projects */
const renderProj = (data, proj) => {

  /**Render newest project */
  renderNew(data, 'newest-project')

  /**Reverse iterate all except newest project */
  for (let i = data.length - 2; i >= 0; i--) {

    renderAll(data, 'projects', i)
  }
}

const renderBlogs = (data, blog) => {

  renderNew(data, 'newest-blog')

  for (let i = data.length - 2; i >= 0; i--) {

    renderAll(data, 'blogs', i)
  }
}

/**Fetch projects */
const fetchProjects = () => {

  fetch('/projects/index.json')
  .then(x => x.json())
  .then(y => renderProj(y))
}

/**Fetch bogs */
const fetchBlogs = () => {

  fetch('/blog/index.json')
  .then(x => x.json())
  .then(y => renderBlogs(y))
}
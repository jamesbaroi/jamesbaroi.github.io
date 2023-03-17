/**[ CREATE ONLY ]
 * [ NO IMPLEMENTATION ]
 * [ NO DEPENDENCY]
 * */

/**Create elements */
const createElem = () => {

  let section = document.createElement('div')
  let div = document.createElement('div')
  let title = document.createElement('h1')
  let subtitle = document.createElement('h4')
  let description = document.createElement('p')
  let url = document.createElement('a')
  let image = document.createElement('img')
  let tag = document.createElement('div')
  let date = document.createElement('div')
  let flex = document.createElement('div')

  return {
    section, div, title, subtitle, description, url, image, flex, tag, date
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
  e.flex.setAttribute('style', 'display: flex; justify-content: space-between;')
  e.date.setAttribute('class', 'date')
  e.tag.setAttribute('style',
    `
    color: red;
    font-size: 14px;
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
  e.date.innerHTML = input[i].date
  

  /**Append elements */
  if (input[i].title) { e.div.append(e.title) }
  if (input[i].img) { e.div.append(e.image) }
  if (input[i].subtitle) { e.div.append(e.subtitle) }
  if (input[i].description) { e.div.append(e.description) }
  if (input[i].date) { e.flex.append(e.date) }
  if (input[i].tag) { e.flex.append(e.tag) }
  e.div.append(e.flex)
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

/**Render all */
const render = (data, newData, allData) => {

  renderNew(data, newData)

  for (let i = data.length - 2; i >= 0; i--) {

    renderAll(data, allData, i)
  }
}

/**Fetch json */
const fetchJson = (url, newData, allData) => {
  fetch(url)
  .then(x => x.json())
  .then(y => render(y, newData, allData))
}
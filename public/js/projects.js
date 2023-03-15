/**CREATE */
/**Render json */
const render = (data) => {

  /**Render newest project */

  /**Get projects container */
  const newest = document.getElementById('newest-project')

  /**Create project elements */
  let section = document.createElement('div')
  let title = document.createElement('h1')
  let image = document.createElement('img')
  let subtitle = document.createElement('h4')
  let description = document.createElement('p')
  let tag = document.createElement('div')
  let url = document.createElement('a')

  /**Set element attributes */
  title.setAttribute('style',
    `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color:${data[data.length - 1].style.backgroundColor};
    color:${data[data.length - 1].style.color}
    `
  )

  url.setAttribute('href', data[data.length - 1].url)
  url.setAttribute('target', '_blank')
  url.setAttribute('class', 'a-active')

  image.setAttribute('src', data[data.length - 1].img)
  image.setAttribute('alt', data[data.length - 1].alt)
  image.setAttribute('onerror', 'this.style.display="none"')
  image.setAttribute('style', 'border: 0;')

  tag.setAttribute('style',
    `
    color: orangered;
    font-weight: bold;
    padding: 0 20px 20px;
    text-align: right;
    `
  )

  /**Create data */
  title.innerHTML = data[data.length - 1].title
  subtitle.innerHTML = data[data.length - 1].subtitle
  description.innerHTML = data[data.length - 1].description
  tag.innerHTML = 'Coming soon!'

  /**Append elements */
  section.append(title)
  section.append(image)
  section.append(subtitle)
  section.append(description)
  section.append(tag)

  /**Append project as link */
  url.append(section)

  newest.append(url)

  /**Reverse iterate all except newest project */
  for (let i = data.length - 2; i >= 0; i--) {

    /**Get projects container */
    const projects = document.getElementById('projects')

    /**Create project elements */
    section = document.createElement('div')
    title = document.createElement('h1')
    image = document.createElement('img')
    subtitle = document.createElement('h4')
    description = document.createElement('p')
    url = document.createElement('a')

    /**Set element attributes */
    title.setAttribute('style',
      `
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      background-color:${data[i].style.backgroundColor};
      color:${data[i].style.color}
      `
    )

    url.setAttribute('href', data[i].url)
    url.setAttribute('target', '_blank')
    url.setAttribute('class', 'a-active')

    image.setAttribute('src', data[i].img)
    image.setAttribute('alt', data[i].alt)
    image.setAttribute('onerror', 'this.style.display="none"')

    /**Create data */
    title.innerHTML = data[i].title
    subtitle.innerHTML = data[i].subtitle
    description.innerHTML = data[i].description

    /**Append elements */
    section.append(title)
    section.append(image)
    section.append(subtitle)
    section.append(description)

    /**Append project as link */
    url.append(section)

    /**Append project link to container */
    projects.append(url)
  }
}

/**Fetch json */
const fetchJson = () => {

  fetch('/projects/index.json')
  .then(x => x.json())
  .then(y => render(y))
}

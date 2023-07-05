const siteUnderDev = () => {

  let dev = document.createElement('div')

  dev.innerHTML = 'Site under development.'

  document.querySelector('header').remove()
  document.querySelector('main').remove()
  document.querySelector('footer').remove()

  document.body.style.cssText = `
    background-color: rgb(32, 33, 36);
    color: rgb(140, 143, 150);
    font-family: monospace;
    margin: 16px auto;
    padding: 16px;
    text-align: center;
  `

  document.body.append(dev)

  console.log('Site under developement.')
}

siteUnderDev()
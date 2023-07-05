const siteUnderDev = () => {

  let dev = document.createElement('div')
  let cnt = document.createElement('div')

  let ck = document.getElementById('ck')
  let plc = document.getElementById('plc')

  if (ck) {

    ck.style.display = 'none'
  }

  if (plc) {

    plc.style.display = 'none'
  }

  dev.innerHTML = 'Site under development.'
  cnt.innerHTML = 'Contact: james.a.baroi@gmail.com'

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
  document.body.append(cnt)

  console.log('Site under developement.')
}

siteUnderDev()
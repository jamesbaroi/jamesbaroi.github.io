const siteUnderDev = () => {

  let dev = document.createElement('div')
  let cnt = document.createElement('div')

  let ck = document.getElementById('ck')
  let plc = document.getElementById('plc')

  if (ck) {

    ck.style.textAlign = 'left'
  }

  if (plc) {

    plc.style.display = 'none'
  }

  dev.innerHTML = 'Site under development.'
  cnt.innerHTML = 'Contact: james.a.baroi@gmail.com'

  document.querySelector('header').remove()
  document.querySelector('main').remove()
  document.querySelector('footer').remove()

  document.body.style.backgroundColor = 'rgb(32, 33, 36)'
  document.body.style.margin = '16px auto'
  document.body.style.padding = '16px'
  document.body.style.textAlign = 'center'

  document.body.append(dev)
  document.body.append(cnt)
}

siteUnderDev()
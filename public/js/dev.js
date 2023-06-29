const siteUnderDev = () => {

  let dev = document.createElement('div')
  let cnt = document.createElement('div')

  dev.innerHTML = 'Site under development.'
  cnt.innerHTML = 'Contact: james.a.baroi@gmail.com'

  document.querySelector('header').remove()
  document.querySelector('main').remove()
  document.querySelector('footer').remove()

  document.body.style.margin = '16px auto'
  document.body.style.padding = '16px'
  document.body.style.textAlign = 'center'

  document.body.append(dev)
  document.body.append(cnt)
}

siteUnderDev()
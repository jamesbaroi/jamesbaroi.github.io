/**Toggle css class on button click -----------------------------------------*/
const tgCls = (id, cls) => {

  let e = document.getElementById(id)

  if (!e) console.log(`Element not defined.`)

  else document.body.classList.toggle(cls)
}

/**Iterate blogs and append to footer ---------------------------------------*/
const create = () => {

  let ix = document.createElement('div')
  let tb = document.createElement('div')
  let tt = document.createElement('div')
  let dt = document.createElement('div')
  let ah = document.createElement('a')

  tb.setAttribute('class', 'tb')
  ah.setAttribute('class', 'ah')

  return { ix, tb, tt, dt, ah }
}

const process = (d, o, i) => {

  o.ix.innerHTML = i + 1
  o.tt.innerHTML = d[i].tt
  o.dt.innerHTML = d[i].dt
  o.ah.href = '/article/' +

  /**Transform title to href */
  d[i].tt
  .replaceAll('.', '')
  .replaceAll(',', '')
  .replaceAll('?', '')
  .replaceAll(' ', '-')
  .toLowerCase()

  o.tb.append(o.ix, o.tt, o.dt)
  o.ah.append(o.tb)
}

const render = (d) => {

  let ftr = document.querySelector('footer')

  for (let i = d.length - 1; i >= 0; i--) {

    let o = create()

    process(d, o, i)

    if (ftr) ftr.append(o.ah)
  }
}

fetch('/article/index.json').then(o => o.json()).then(d => render(d))
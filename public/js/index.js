const siteUnderDev = () => {

  document.body.innerHTML = '<a href="tel:+19099102457" style="text-decoration:none;">+1 (909) 910 2457</a>'

  document.body.style = `
    background-color: black;
    color: white;
    display: block;
    font-family: monospace;
    font-size: 14px;
    margin: 33vh 0 0;
    max-width: 100%;
    padding: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
    text-size-adjust: none;
  `
}

siteUnderDev()
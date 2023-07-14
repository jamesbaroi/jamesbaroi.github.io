const siteUnderDev = () => {
  document.body.innerHTML = 'Site under development.'
  document.body.style = `
    align-items: center;
    background-color: black;
    color: gray;
    display: grid;
    font-family: monospace;
    font-size: 16px;
    height: 100vh;
    margin: 0;
    text-size-adjust: none;
    text-align: center;
  `
}

siteUnderDev()
const siteUnderDev = () => {
  document.body.innerHTML = 'Site under development.'
  document.body.style = `
    background-color: rgb(16, 16.5, 18);
    color: rgb(140, 143, 150);
    font-family: monospace;
    margin-top: 33vh;
    text-size-adjust: none;
    text-align: center;
  `
}

siteUnderDev()
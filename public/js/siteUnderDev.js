const siteUnderDev = () => {
  document.body.innerHTML = 'Site under development.'
  document.body.style = `
    background-color: rgb(16, 16.5, 18);
    color: rgb(140, 143, 150);
    font-family: monospace;
    font-size: 16px;
    margin-top: 33vh;
    max-width: 100%;
    padding: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    text-size-adjust: none;
    text-align: center;
  `
}

siteUnderDev()
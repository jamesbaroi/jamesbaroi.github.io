var developingActive = false

const siteUnderDev = () => {

  developingActive = true

  document.body.innerHTML = 'Site under development.'
  document.body.style = `
    background-color: rgb(  8,  11,  12);
    color:            rgb(210, 215, 220);
    font-family:               monospace;
    font-size:                      14px;
    margin-top:                     33vh;
    max-width:                      100%;
    padding:                           0;
    position:                      fixed;
    bottom:                            0;
    left:                              0;
    right:                             0;
    top:                               0;
    text-size-adjust:               none;
    text-align:                   center;
  `
}

siteUnderDev()
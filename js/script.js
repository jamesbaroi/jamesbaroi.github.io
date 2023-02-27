/**Timestamp */
var date = document.getElementById('date')

/**Clock */
setInterval(() => {
  date.innerHTML = new Date()
}, 1000)
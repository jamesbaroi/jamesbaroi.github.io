/**script.js */

const contGrid = document.getElementById('grid-container')

const area = {

  grid: document.createElement('canvas'),

  start() {

    contGrid.insertBefore(this.grid, contGrid.childNodes[0])

    this.context = this.grid.getContext('2d')

    this.grid.width = 2000
    this.grid.height = 2000

    this.cols = 200
    this.rows = 200
  }
}

area.start()
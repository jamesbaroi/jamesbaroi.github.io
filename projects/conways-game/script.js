/**Get html elements */
var contGrid = document.getElementById('grid-container')

/**Create global vars */
var cells = []

/**Create grid area */
var area = {

  grid: document.createElement('canvas'),

  start() {

    contGrid.insertBefore(this.grid, contGrid.childNodes[0])

    this.context = this.grid.getContext('2d')

    this.grid.width = 2000
    this.grid.height = 2000

    this.cols = 200
    this.rows = 200

    this.gameInterval = setInterval(loop, 80)
  }
}

/**Create Cell class */
class Cell {

  static width = 10
  static height = 10

  constructor(x, y) {

    this.x = x
    this.y = y
    this.context = area.context
    this.live = Math.floor(Math.random() < 0.5)
  }

  draw() {

    this.context.fillStyle = this.live ? 'rgb(85, 122, 170)' : 'rgb(18, 18, 18)'
    this.context.fillRect(
      this.x * Cell.width,
      this.y * Cell.height,
      Cell.width,
      Cell.height
    )
  }
}

/**Push cells to array */
var grid = () => {

  for (let y = 0; y < area.rows; y++) {

    for (let x = 0; x < area.cols; x++) {

      cells.push(new Cell(x, y))
    }
  }
}

/**Map cell to area */
var cToA = (x, y) => {

  return x + (y * area.cols)
}

/**Check if cell lives */
var cLivz = (x, y) => {

  if (x < 0 || x >= area.cols || y < 0 || y >= area.rows) {

    return 0

  } else {

    return cells[cToA(x, y)].live ? 1 : 0
  }
}

/**Check cell environment */
var cEnv = () => {

  for (let x = 0; x < area.cols; x++) {

    for (let y = 0; y < area.rows; y++) {

      /**Count live neighbors */
      let n =
        cLivz(x - 1, y - 1) +
        cLivz(x, y - 1) +
        cLivz(x + 1, y - 1) +
        cLivz(x - 1, y) +
        cLivz(x + 1, y) +
        cLivz(x - 1, y + 1) +
        cLivz(x, y + 1) +
        cLivz(x + 1, y + 1)

      /**Apply Conway's rules */
      if (n == 2) {

        /**Create a new property z on the fly to save
         * the current live property.
         * 
         * This is needed later on to load the values
         * for all cells at once rather than load each
         * cell one by one.
        */
        cells[cToA(x, y)].z = cells[cToA(x, y)].live
      }

      else if (n == 3) {

        cells[cToA(x, y)].z = 1
      }

      else {

        cells[cToA(x, y)].z = 0
      }
    }
  }

  /**Load live cells all at once */
  for (let i = 0; i < cells.length; i++) {

    cells[i].live = cells[i].z
  }
}

/**Initialize the game */
var game = () => {

  area.start()
  grid()
  cEnv()

  for (let i = 0; i < cells.length; i++) {

    cells[i].draw()
  }
}

/**Loop animation */
var loop = () => {

  cEnv()

  for (let i = 0; i < cells.length; i++) {

    cells[i].draw()
  }
}

game()
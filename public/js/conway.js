/**Create configs */
var interval = 80 /**Set frame interval in milliseconds */
var chance = 0.5 /**Set max seed probability */

/**Set colors */
var pxColor = 'royalblue'
var bgColor = 'rgb(32, 33, 36)'

/**Set grid dimensions */
var gridRows = 240
var gridCols = 480

/**Set rules */
var rule1 = 2
var rule2 = 3

/**Create empty arrays */
var cells = [] /**Create array to contain cells */
var xy = [] /**Create array to contain xy-coordinates */

/** Create objects---------------------------------------------------------- */
var area = {

  /**Create canvas areas */
  grid: canvas,

  start() {

    /**Get 2d context */
    this.context = this.grid.getContext('2d')

    /**Set display view */
    this.grid.width = 525
    this.grid.height = 768

    /**Create grid dimensions */
    this.cols = gridCols
    this.rows = gridRows
    this.matrix = this.cols * this.rows
    this.normalizer = 100 / this.matrix

    /**Set game loop */
    this.gameInterval = setInterval(loop, interval)
  },
  
  pause() {

    /**Stop game loop */
    clearInterval(this.gameInterval)
  },

  resume() {

    /**Reset game loop */
    this.gameInterval = setInterval(loop, interval)
  },

  toggleConway(e) {

    e.title = 'Pause'

    e.addEventListener('click', () => {
      if (e.title == 'Pause') {

        this.pause()
        e.title = 'Resume'
      } else {

        this.resume()
        e.title = 'Pause'
      }
    })
  }
  
}

/** Create classes---------------------------------------------------------- */
class Cell {

  /**Set dimensions */
  static width = 3
  static height = 3

  constructor(x, y) {

    /**Set context to area */
    this.context = area.context
    this.x = x
    this.y = y
    this.live = Math.floor(Math.random() > chance)
  }

  draw() {

    this.context.fillStyle = this.live ? pxColor : bgColor
    this.context.fillRect(
      this.x * Cell.width,
      this.y * Cell.height,
      Cell.width,
      Cell.height
    );
  }

  erase() {

    area.context.clearRect(0, 0, area.grid.width, area.grid.height)
  }
}

/** Create functions-------------------------------------------------------- */

/**Create grid cells */
function grid() {
  for (let y = 0; y < area.rows; y++) {

    for (let x = 0; x < area.cols; x++) {

      cells.push(new Cell(x, y))
    }
  }
}

/**Check cell environment */
function cEnv() {

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
        cLivz(x + 1, y + 1);

      /**Apply Conway's rules */
      if (n == rule1) {

        cells[cToA(x, y)].is = cells[cToA(x, y)].live
      }

      else if (n == rule2) {

        cells[cToA(x, y)].is = true
      }

      else {

        cells[cToA(x, y)].is = false
      }
    }
  }

  /**Load live cells */
  for (let i = 0; i < cells.length; i++) {

    cells[i].live = cells[i].is
  }
}

/**Check cell lives */
function cLivz(x, y) {

  if (x < 0 || x >= area.cols || y < 0 || y >= area.rows) {

    return false
  }

  return cells[cToA(x, y)].live ? 1 : 0
}

/**Map cell to area */
function cToA(x, y) {

  return x + (y * area.cols)
}

/** Create game------------------------------------------------------------- */
function game() {

  area.start()
  grid()
  cEnv()

  for (let i = 0; i < cells.length; i++) {

    cells[i].draw()
  }

}

/** Create loop------------------------------------------------------------- */
window.requestAnimationFrame(() => loop())

function loop() {

  cEnv();

  for (let i = 0; i < cells.length; i++) {

    cells[i].draw()

  }

}

/** Start------------------------------------------------------------------- */
window.onload = game()

/** Pause / Resume --------------------------------------------------------- */
area.toggleConway(canvas)
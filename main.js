// import { line1, line2, line3, line4} from './constants.js'

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight
ctx.fillStyle = 'black'

const boardWidth = window.innerWidth
const boardHeight = window.innerHeight
const startBoardX = 0//375
const startBoardY = 0//150

//Board
ctx.fillRect(startBoardX, startBoardY, boardWidth, boardHeight)
//Lines

function drawLine(ctx, line) {
  ctx.beginPath()
  ctx.moveTo(line.XStart, line.YStart)
  ctx.lineTo(line.XEnd, line.YEnd)
  ctx.strokeStyle = line.color
  ctx.lineWidth = line.width
  ctx.stroke()
}
// console.log(window.innerWidth, window.innerHeight)

for (let i = 0; i < totalLines.length; i++) {
  drawLine(ctx, totalLines[i])
}

// drawLine(ctx, line2)
// drawLine(ctx, line3)
// drawLine(ctx, line4)


function drawX(ctx, x, y) {
  ctx.beginPath();

  ctx.moveTo(x - 20, y - 20);
  ctx.lineTo(x + 20, y + 20);

  ctx.moveTo(x + 20, y - 20);
  ctx.lineTo(x - 20, y + 20);
  ctx.stroke();
}

function drawO(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2 * Math.PI);
  ctx.stroke();
}

const turn = {
  cross: false,
  circle: false
}

const boxes = {
  r00: false,
  r01: false,
  r02: false,
  r10: false,
  r11: false,
  r12: false,
  r20: false,
  r21: false,
  r22: false
}
const figs = {
  r00: false,
  r01: false,
  r02: false,
  r10: false,
  r11: false,
  r12: false,
  r20: false,
  r21: false,
  r22: false
}

let stopGame = false

//Mouse Click
canvas.addEventListener('click', (e) => {
  //ROW 1
  if (!stopGame) {
  if (e.screenX >= 385 && e.screenX <= 575 && e.screenY >= 264 && e.screenY <= 364 && !boxes.r00) {
    if (turn.cross) {
      drawX(ctx, 475, 200)
      turn.cross = false
      turn.circle = true
      figs.r00 = 'x'
    }
    else if (turn.circle) {
      drawO(ctx, 475, 200)
      turn.cross = true
      turn.circle = false
      figs.r00 = 'o'
    } else {
      drawO(ctx, 475, 200)
      turn.cross = true
      turn.circle = false
      figs.r00 = 'o'
    }
    boxes.r00 = true
    isGameWon()
  }
  
  if (e.screenX >= 583 && e.screenX <= 875 && e.screenY >= 264 && e.screenY <= 364 && !boxes.r01) {
    if (turn.cross) {
      drawX(ctx, 720, 200)
      turn.cross = false
      turn.circle = true
      figs.r01 = 'x'
    }
    else if (turn.circle) {
      drawO(ctx, 720, 200)
      turn.cross = true
      turn.circle = false
      figs.r01 = 'o'
    } else {
      drawO(ctx, 720, 200)
      turn.cross = true
      turn.circle = false
      figs.r01 = 'o'
    }
    boxes.r01 = true
    isGameWon()
    // console.log(e.screenX, e.screenY)
  }
  // console.log(e.screenX, e.screenY)
  if (e.screenX >= 884 && e.screenX <= 1100 && e.screenY >= 264 && e.screenY <= 364 && !boxes.r02) {
    if (turn.cross) {
      drawX(ctx, 980, 200)
      turn.cross = false
      turn.circle = true
      figs.r02 = 'x'
    }
    else if (turn.circle) {
      drawO(ctx, 980, 200)
      turn.cross = true
      turn.circle = false
      figs.r02 = 'o'
    } else {
      drawO(ctx, 980, 200)
      turn.cross = true
      turn.circle = false
      figs.r02 = 'o'
    }
    boxes.r02 = true
    // drawX(ctx, 980, 200)
    // drawO(ctx, 980, 200)
    isGameWon()
  }

  // ROW 2
  if (e.screenX >= 385 && e.screenX <= 575 && e.screenY >= 353 && e.screenY <= 480 && !boxes.r10) {
    if (turn.cross) {
      drawX(ctx, 475, 325)
      turn.cross = false
      turn.circle = true
      figs.r10 = 'x'
    }
    else if (turn.circle) {
      drawO(ctx, 475, 325)
      turn.cross = true
      turn.circle = false
      figs.r10 = 'o'
    } else {
      drawO(ctx, 475, 325)
      turn.cross = true
      turn.circle = false
      figs.r10 = 'o'
    }
    boxes.r10 = true
    // drawX(ctx, 475, 325)
    // drawO(ctx, 475, 325)
    isGameWon()
  }

  // console.log(e.screenX, e.screenY)
  if (e.screenX >= 583 && e.screenX <= 875 && e.screenY >= 353 && e.screenY <= 480 && !boxes.r11) {
    if (turn.cross) {
      drawX(ctx, 720, 325)
      turn.cross = false
      turn.circle = true
      figs.r11 = 'x'
    }
    else if (turn.circle) {
      drawO(ctx, 720, 325)
      turn.cross = true
      turn.circle = false
      figs.r11 = 'o'
    } else {
      drawO(ctx, 720, 325)
      turn.cross = true
      turn.circle = false
      figs.r11 = 'o'
    }
    boxes.r11 = true
    // drawX(ctx, 720, 325)
    // drawO(ctx, 720, 325)
    isGameWon()
  }

  // console.log(e.screenX, e.screenY)
  if (e.screenX >= 884 && e.screenX <= 1100 && e.screenY >= 353 && e.screenY <= 480 && !boxes.r12) {
    if (turn.cross) {
      drawX(ctx, 980, 325)
      turn.cross = false
      turn.circle = true
      figs.r12 = 'x'
    }
    else if (turn.circle) {
      drawO(ctx, 980, 325)
      turn.cross = true
      turn.circle = false
      figs.r12 = 'o'
    } else {
      drawO(ctx, 980, 325)
      turn.cross = true
      turn.circle = false
      figs.r12 = 'o'
    }
    boxes.r12 = true
    // drawX(ctx, 980, 325)
    // drawO(ctx, 980, 325)
    isGameWon()
  }

  //ROW 3
  // console.log(e.screenX, e.screenY)
  if (e.screenX >= 385 && e.screenX <= 575 && e.screenY >= 518 && e.screenY <= 618 && !boxes.r20) {
    if (turn.cross) {
      drawX(ctx, 475, 460)
      turn.cross = false
      turn.circle = true
      figs.r20 = 'x'
    }
    else if (turn.circle) {
      drawO(ctx, 475, 460)
      turn.cross = true
      turn.circle = false
      figs.r20 = 'o'
    } else {
      drawO(ctx, 475, 460)
      turn.cross = true
      turn.circle = false
      figs.r20 = 'o'
    }
    boxes.r20 = true
    // drawX(ctx, 475, 460)
    // drawO(ctx, 475, 460)
    isGameWon()
  }

  // console.log(e.screenX, e.screenY)
  if (e.screenX >= 583 && e.screenX <= 875 && e.screenY >= 518 && e.screenY <= 618 && !boxes.r21) {
    if (turn.cross) {
      drawX(ctx, 720, 460)
      turn.cross = false
      turn.circle = true
      figs.r21 = 'x'
    }
    else if (turn.circle) {
      drawO(ctx, 720, 460)
      turn.cross = true
      turn.circle = false
      figs.r21 = 'o'
    } else {
      drawO(ctx, 720, 460)
      turn.cross = true
      turn.circle = false
      figs.r21 = 'o'
    }
    boxes.r21 = true
    // drawX(ctx, 720, 460)
    // drawO(ctx, 720, 460)
    isGameWon()
  }

  // console.log(e.screenX, e.screenY)
  if (e.screenX >= 884 && e.screenX <= 1100 && e.screenY >= 518 && e.screenY <= 618 && !boxes.r22) {
    if (turn.cross) {
      drawX(ctx, 980, 460)
      turn.cross = false
      turn.circle = true
      figs.r22 = 'x'
    }
    else if (turn.circle) {
      drawO(ctx, 980, 460)
      turn.cross = true
      turn.circle = false
      figs.r22 = 'o'
    } else {
      drawO(ctx, 980, 460)
      turn.cross = true
      turn.circle = false
      figs.r22 = 'o'
    }
    boxes.r22 = true
    // drawX(ctx, 980, 460)
    // drawO(ctx, 980, 460)
    // console.log(figs)
    isGameWon()
  }
}
if (isGameWon().x) {
  alert('Player X won the game!!!')
  stopGame = true
  window.location.reload()
}
if (isGameWon().o) {
  alert('Player O won the game!!!')
  stopGame = true
  window.location.reload()
}
// console.log(isGameWon)
})

// ctx.fillRect(1200, 1200 + 20, 20, 20)

// while (true) {
//   console.log(figs)
// }

function isGameWon() {
  /**
   * xxx
   * x
   *  x 
   *   x
   * x
   * x
   * x
   *   x
   *  x
   * x
   *   x
   *   x
   *   x
   *  x
   *  x
   *  x
   * xxx
   * xxx
   * 
   */
  if (
    figs.r00 === 'x' && figs.r01 === 'x' && figs.r02 === 'x' ||
    figs.r10 === 'x' && figs.r11 === 'x' && figs.r12 === 'x' ||
    figs.r20 === 'x' && figs.r21 === 'x' && figs.r22 === 'x' ||
    figs.r00 === 'x' && figs.r10 === 'x' && figs.r20 === 'x' ||
    figs.r01 === 'x' && figs.r11 === 'x' && figs.r21 === 'x' ||
    figs.r02 === 'x' && figs.r12 === 'x' && figs.r22 === 'x' ||
    figs.r00 === 'x' && figs.r11 === 'x' && figs.r22 === 'x' ||
    figs.r02 === 'x' && figs.r11 === 'x' && figs.r20 === 'x'
    ) {
      return {x: true}
    }
    else if (
      figs.r00 === 'o' && figs.r01 === 'o' && figs.r02 === 'o' ||
      figs.r10 === 'o' && figs.r11 === 'o' && figs.r12 === 'o' ||
      figs.r20 === 'o' && figs.r21 === 'o' && figs.r22 === 'o' ||
      figs.r00 === 'o' && figs.r10 === 'o' && figs.r20 === 'o' ||
      figs.r01 === 'o' && figs.r11 === 'o' && figs.r21 === 'o' ||
      figs.r02 === 'o' && figs.r12 === 'o' && figs.r22 === 'o' ||
      figs.r00 === 'o' && figs.r11 === 'o' && figs.r22 === 'o' ||
      figs.r02 === 'o' && figs.r11 === 'o' && figs.r20 === 'o'
    ) {
      return {o: true}
    }
    else {
      return false
    }
}
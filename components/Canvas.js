import React, { useEffect, useRef } from 'react'

function Canvas(props) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let particleArray = []
    let adjust_X = 0
    let adjust_Y = 30

    //global object to store mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 250,
    }

    //update mouse coordinates
    window.addEventListener('mousemove', function (event) {
      mouse.x = event.x
      mouse.y = event.y
    })

    context.fillStyle = 'white'
    context.font = '30px Verdana'
    context.fillText('SH0', 0, 40)

    const dataCoordinates = context.getImageData(0, 0, 200, 100)

    // 1 particle
    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 3
        this.baseX = this.x
        this.baseY = this.y
        this.density = Math.random() * 30 + 50
      }

      draw() {
        context.fillStyle = 'white'
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.closePath()
        context.fill()
      }

      update() {
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y

        let dist = Math.sqrt(dx ** 2 + dy ** 2)
        let fx = dx / dist
        let fy = dy / dist

        let maxDist = mouse.radius
        let F = (maxDist - dist) / maxDist
        let dir_X = fx * F * this.density
        let dir_Y = fy * F * this.density

        if (dist < mouse.radius) {
          this.x -= dir_X
          this.y -= dir_Y
        } else {
          if (this.X != this.baseX) {
            let dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.Y != this.baseY) {
            let dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }
      }
    }

    // initialize particles
    const init = () => {
      particleArray = []
      for (let y = 0, y2 = dataCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = dataCoordinates.width; x < x2; x++) {
          if (
            dataCoordinates.data[y * 4 * dataCoordinates.width + x * 4 + 3] >
            128
          ) {
            let posX = x + adjust_X
            let posY = y + adjust_Y
            particleArray.push(new Particle(posX * 8, posY * 8))
          }
        }
      }
    }
    init()

    const connect = () => {
      let opacityValue = 1
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let dx = particleArray[a].x - particleArray[b].x
          let dy = particleArray[a].y - particleArray[b].y
          let dist = Math.sqrt(dx ** 2 + dy ** 2)

          opacityValue = 1 - dist / 8
          context.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')'

          if (dist < 8) {
            context.lineWidth = 2
            context.beginPath()
            context.moveTo(particleArray[a].x, particleArray[a].y)
            context.lineTo(particleArray[b].x, particleArray[b].y)
            context.stroke()
          }
        }
      }
    }

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw()
        particleArray[i].update()
      }
      //connect();
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      //clear render
    }
  }, [])

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas

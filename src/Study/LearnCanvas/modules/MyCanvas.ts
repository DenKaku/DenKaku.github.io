import $ from "jquery"
import "jquery-ui"

interface CirecleProps {
    x: number;

}

class Circle implements CirecleProps {

    constructor(public x:number) {
        this.x = x

    }

}


class MyCanvasManager {
    private _my_canvas:any

    public init () {
        this._my_canvas = document.querySelector("#learn_canvas")
        this._my_canvas.width = window.innerWidth
        this._my_canvas.height = window.innerHeight

        let c = this._my_canvas.getContext('2d')

        // c.fillStyle = "red"
        // c.fillRect(100, 100, 100, 100)

        // c.beginPath()
        // c.moveTo(50, 300)
        // c.lineTo(300, 100)
        // c.lineTo(400, 300)
        // c.strokeStyle = "blue"
        // c.stroke()

        // c.beginPath()
        // c.arc(300, 300, 30, 0, Math.PI * 2, false)
        // c.stroke()



        let x = Math.random() * window.innerWidth
        let y = Math.random() * window.innerHeight
        let dx = 4
        let dy = 4
        let redius = 30
        const animate = () => {
            requestAnimationFrame(animate)
            c.clearRect(0, 0, window.innerWidth, window.innerHeight)

            c.beginPath()
            c.arc(x, y, redius, 0, Math.PI * 2, false)
            c.strokeStyle = "blue"
            c.stroke()

            if(x + redius > window.innerWidth || x - redius < 0){
                dx = -dx
            }

            if(y + redius > window.innerHeight || y - redius < 0){
                dy = -dy
            }

            x += dx
            y += dy
        }

        animate()


    }


}

export default new MyCanvasManager()
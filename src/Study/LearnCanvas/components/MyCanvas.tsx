/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from "react"

import MyCanvasManager from "../modules/MyCanvas"

class MyCanvas extends React.Component <{}>{

    constructor(props:any){
        super(props)

    }

    public componentDidMount() {
        MyCanvasManager.init()
    }

    public render(): React.ReactNode {
        return (
            // <canvas id="learn_canvas"></canvas>
            <div></div>
        )
    }


}



export default MyCanvas
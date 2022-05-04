import React from "react"
import { Link } from "react-router-dom"
import $ from "jquery"
import "jquery-ui"


const SideNavigation:React.FunctionComponent<{}> = (props) => {

    const ShowNestMenu = () => {
        $(".nested").toggleClass("active")
        $(".caret").toggleClass("caret-down")

        console.log("click caret")
    }

    return  (
        <div className="side_navigation">
            <div className="nav_link_content">
                <li><Link to="/homepage" tabIndex={-1}> HomePage </Link></li>
                <li><Link to="/profile" tabIndex={-1}> Myprofile </Link></li>
                <li><Link to="/learn_canvas" tabIndex={-1}> Learn Canvas </Link></li>
                <li><Link to="/mario_with_canvas" tabIndex={-1}>  Mario With Canvas </Link></li>
                {/* <li onClick={ShowNestMenu}><span className="caret">Projects</span>
                    <ul className="nested">
                        <li><Link to="/learn_canvas"> Learn Canvas </Link></li>
                        <li><Link to="/mario_with_canvas"> Mario With Canvas </Link></li>
                    </ul>
                </li> */}
            </div>
        </div>
    )

}

export default SideNavigation
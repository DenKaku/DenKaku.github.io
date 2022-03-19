import React from "react"
import { Link } from "react-router-dom"

const SideNavigation:React.FunctionComponent<{}> = (props) => {

    return  (
        <div className="side_navigation">
            <Link to="/Homepage"> HomePage </Link>
            <Link to="/profile"> Myprofile </Link>
        </div>
    )

}

export default SideNavigation
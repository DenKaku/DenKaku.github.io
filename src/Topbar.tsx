import React, {useState} from "react"
import MenuIcon from '@mui/icons-material/Menu'
import $ from "jquery"
import "jquery-ui"

interface TopberProps {
    hidden_top_bar: boolean
}

const Topbar:React.FunctionComponent<TopberProps> = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const clickHandler = (event:any) => {
        if(menuOpen) {
            $(".side_navigation").css("transform", "translateX(-100%)")
            setMenuOpen(false)
        }else{
            $(".side_navigation").css("transform", "translateX(0)")
            setMenuOpen(true)
        }
    }

    return (
        <div className="top_bar" >
            <div className="menu_icon" hidden={props.hidden_top_bar}>
                <MenuIcon onClick={clickHandler}/>
            </div>

        </div>
    )
}

export default Topbar
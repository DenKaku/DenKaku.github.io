import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import $ from "jquery"
import "jquery-ui"

import Store from "./redux/Store"
import * as TopbarReducer from "./redux/TopbarReducer"


const Auth:React.FunctionComponent<{}> = (props) => {
   const [hiddenPage, setHiddenPage] = useState(false)
   Store.dispatch(TopbarReducer.hiddenMenuIcon(true))
   let navigate = useNavigate()

   useEffect(() => {
        document.querySelector(".auth_text_content")?.addEventListener("mouseleave", () => {
            if($(".auth_field_content").hasClass("auth_error")){
                $(".auth_field_content").removeClass("auth_error")
            }

            $("#auth_input").val("")
            $("#auth_input").trigger("blur")

        })
    }, [])

   const AuthComponent:React.FunctionComponent<{}> = (props) => {
        const onFocus = (e:any) => {
            document.addEventListener("keydown" , keyDownHandler)
        }

        const onInputBlur = () => {
            document.removeEventListener("keydown", keyDownHandler)
        }

        const keyDownHandler = (e:KeyboardEvent) => {
            if("Enter" === e.key ) {
                const inputValue:any= $("#auth_input").val()
                if("your dad" === inputValue || "你爸爸" === inputValue) {
                    setHiddenPage(true)
                    Store.dispatch(TopbarReducer.hiddenMenuIcon(false))
                    return navigate("/homepage")
                }else {
                    $(".auth_field_content").addClass("auth_error")
                }
            }
        }

        return(
            <div className="auth_field_content" >
                <input id="auth_input" type="text" onFocus={onFocus} onBlur={onInputBlur}/>
            </div>
        )
   }

   const ClockComponent:React.FunctionComponent<{}> = (props) => {
        useEffect(() => {
            let time = document.querySelector("#time")
            if(null !== time) {
                timer(time)
            }

            setInterval(() => {
                if(null !== time) {
                    timer(time)
                }
            }, 1000)
       }, [])

       const timer = (time_el: Element) => {

           let date = new Date()

           let h:string | number = date.getHours()
           let m:string | number = date.getMinutes()
           let s:string | number = date.getSeconds()

           let day_night = "AM"

           if(12 < h) {
                h = h - 12
                day_night = "PM"
           }

           if (10 > h) { h = "0" + h}
           if (10 > m) { m = "0" + m}
           if (10 > s) { s = "0" + s}

           time_el.textContent = h + ":" + m + ":" + s + " " + day_night
       }

       return (
           <div className="clock_box">
               <div className="clock" id="time">
                    {/* <p id="time"></p> */}
               </div>
           </div>
       )
   }

   return(
         <div className="auth_content" hidden={hiddenPage}>
             <div className="auth_text_content">
                 <div className="top"> WHO ARE YOU</div>
                 <div className="center"><AuthComponent/> </div>
             </div>
             {/* <AuthComponent/> */}
             {/* <ClockComponent/> */}
         </div>
    )

}

export default Auth
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui"

import SideNavigation from './SideNavigation'
import MyProfile from './profile/profile'
import HomePage from './HomePage'

const Layout:React.FunctionComponent<{}> = (props) => {

  return (
    <BrowserRouter>
        <div className='layout'>
            <SideNavigation />
            <main className='main_content'>
                <Routes>
                    <Route
                        path='/'
                        element={<HomePage/>}
                    />
                    <Route
                        path='/profile'
                        element={<MyProfile/>}
                    />

                </Routes>
            </main>
        </div>
    </BrowserRouter>
  )
}

// function Layout() {

//     const onPrevClick = () => {
//         let currentImg = $(".active")
//         let prevImage = currentImg.prev()
//         if(prevImage.length) {
//             currentImg.removeClass("active").css("z-index", -10)
//             prevImage.addClass("active").css("z-index", 10)
//         }
//     }

//     const onNextClick = () => {
//         let currentImg = $(".active")
//         let nextImage = currentImg.next()
//         if(nextImage.length) {
//             currentImg.removeClass("active").css("z-index", -10)
//             nextImage.addClass("active").css("z-index", 10)
//         }
//     }

//     return (
//         // <div className="App">
//         //     <div className="outer">
//         //         <img src="../web/img/arrow-left.png" className="prev" alt="Prev" onClick={onPrevClick}/>
//         //         <ShowImage/>
//         //         <img src="../web/img/arrow-right.png" className="next" alt="Next" onClick={onNextClick}/>
//         //         <img src="../web/img/arrow-left.png" className="prev" alt="Prev" onClick={onPrevClick}/>
//         //         <ShowImage/>
//         //         <img src="../web/img/arrow-right.png" className="next" alt="Next" onClick={onNextClick}/>
//         //     </div>
//         // </div>
//         <DrawGraphComponent />
//   );
// }

export default Layout

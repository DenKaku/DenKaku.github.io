import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {connect, Provider} from "react-redux"
import Store, {mapTopbarState} from "./redux/Store"

import Auth from "./Auth"
import Topbar from './Topbar'
import SideNavigation from './SideNavigation'
import MyProfile from './profile/profile'
import HomePage from './HomePage'
import MarioWithCanvas from "./Study/MarioWithCanvas/Components/MarioWithCanvas"
import MyCanvas from './Study/LearnCanvas/components/MyCanvas'

const Layout:React.FunctionComponent<{}> = (props) => {
  const ConnectedTopbar = connect(mapTopbarState)(Topbar)
  return (
    <Provider store={Store}>
        <BrowserRouter>
            <ConnectedTopbar/>
            <main className='main_content'>
                <SideNavigation />
                <Routes>
                    <Route
                        path='/'
                        element={<Auth/>}
                    />
                    <Route
                        path='/homepage'
                        element={<HomePage/>}
                    />
                    <Route
                        path='/profile'
                        element={<MyProfile/>}
                    />
                    <Route
                        path='/learn_canvas'
                        element={<MyCanvas/>}
                    />
                    <Route
                        path='/mario_with_canvas'
                        element={<MarioWithCanvas/>}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    </Provider>
  )
}

export default Layout

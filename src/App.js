import React from "react";
import Maintanancescreen from "./Component/Maintanancescreen";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/header';
import MultiStep from 'react-multistep'
import HeaderUrl from './pages/headerUrl';
import Container from 'react-bootstrap/esm/Container';
import ColumnInfo from './pages/ColumnInfo';
import TextInformation from './pages/textInformation';
import HeaderTop from "./Component/headerTop";
import SideNavBar from "./Component/sideNav";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate, Outlet, } from "react-router-dom";
import Home from "./Component/home";
import PageList from "./Component/pageList";
function App() {
 const prevButton = () =>{
 }
 const nextButton = () =>{
 }
  return (
  <>
  <Router>
      <Routes>
        <Route path="/" element={<div className="">
              <HeaderTop />
              <div className="main-content"><div style={{width: "275px"}}><SideNavBar /></div> <Home /> </div>
            </div>}/>

          <Route exact path="/createNewPage" element={
            <div className="">
              <HeaderTop />
              <div className="main-content"><div style={{width: "275px"}}><SideNavBar /></div> <Maintanancescreen /></div>
            </div>
          } />
          <Route exact path="/pageList" element={
            <div className="">
              <HeaderTop />
              <div className="main-content"><div style={{width: "275px"}}><SideNavBar /></div> <PageList /> </div>
            </div>
          } />
      </Routes>
    </Router>
 </>
  )
}
export default App;

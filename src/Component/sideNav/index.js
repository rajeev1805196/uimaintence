import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";

import SideNav, {
//   Toggle,
//   Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

const SideNavBar = ()=>  {
    // const [isVisible, setIsVisible] = React.useState(true)
    const navigates = useNavigate();

return (
    <SideNav 
    defaultExpanded
    // expanded={isVisible} 
    className="sideNav">
        {/* <SideNav.Toggle className="d-none"
            onClick={() => {
                setIsVisible(!isVisible);
            }}
        /> */}
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home" onClick = {()=> navigates("/")}>
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                </NavIcon>
                <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="Create New Page" onClick = {()=> navigates("/createNewPage")}>
                <NavIcon>
                    <i
                    className="fa fa-line-chart"
                    style={{ fontSize: "1.75em" }}
                    />
                </NavIcon>
                <NavText>Create New Page</NavText>
            </NavItem>
            <NavItem eventKey="Page List" onClick = {()=> navigates("/pageList")}>
                <NavIcon>
                    <i
                    className="fa fa-line-chart"
                    style={{ fontSize: "1.75em" }}
                    />
                </NavIcon>
                <NavText>Page List</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
);

}

export default SideNavBar;

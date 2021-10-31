import React from 'react';
import image from '../assets/images/gastos.png';
import ContentWrapper from './ContentWrapper';
import ListIn from './LinkIn';
import ListOut from './LinkOut';
import Create from './LinkCreate';
import NotFound from './NotFound';
import { Link, Route, Switch } from "react-router-dom";

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-25" src={image} alt="Control de gastos"/>
                    </div>
                </a>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Totales -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/ListIn">
                        <i className="fas fa-chart-pie"></i>
                        <span>Listado de Ingresos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Listado de productos -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ListOut">
                    <i className="fas fa-chart-pie"></i>
                        <span>Listado de Egresos</span>
                    </Link>
                </li>

                 {/*<!-- Nav Item - Listado de productos -->*/}
                 <li className="nav-item">
                    <Link className="nav-link" to="/Create">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Alta de Comprobantes</span>
                    </Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/ListIn">
                    <ListIn />
                </Route>
                <Route path="/ListOut">
                    <ListOut />
                </Route>
                <Route path="/Create">
                    <Create />
                </Route>
                <Route component={NotFound} />
            </Switch>
            
            
        </React.Fragment>
    )
}
export default SideBar;
import { NavLink } from 'react-router-dom';
import { push as MenuContainer } from 'react-burger-menu';
import './menu.scss';
import Dropzone from './Dropzone'

const Menu = (props) =>
  <MenuContainer id={'scaleDown'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
    <div key='1' className='logo' ><img src={'./assets/img/logo-w.png'} alt='' /></div>
    <NavLink id="dashboard" className="menu-item" replace to="/">Dashboard</NavLink>
    <NavLink id="map" className="menu-item" replace to="/map">Map</NavLink>
    <NavLink id="chart" className="menu-item" replace to="/chart">Chart</NavLink>
    <Dropzone handleFile={props.handleFile}/>
  </MenuContainer>;

export default Menu;

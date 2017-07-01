import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import MapContainer from '../../components/Map';
import DropzoneComponent from '../../components/Dropzone';
import Emissions from '../../components/Information/Emissions'

const AppRoutes = appProps => {
  console.log('routes');
  console.log(appProps);
  return (
    <Router>
      <div>
        <div id="outer-container">
          <Menu id={'scaleDown'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
            <div key="1" className="logo"><img src={'./assets/img/logo-w.png'} alt="" /></div>
            <NavLink id="dashboard" className="menu-item" replace to="/">Inputs</NavLink>
            <NavLink id="map" className="menu-item" replace to="/map">Outputs</NavLink>
            <NavLink id="info" className="menu-item" replace to="/info">Information</NavLink>
            <DropzoneComponent
              handleFile={file => {
                appProps.handleSavePointsFile(file);
              }}
            />
          </Menu>
          <main id="page-wrap">
            <Switch>
              <Route exact path="/" component={MapContainer} />
              <Route path="/map" component={MapContainer} />
              <Route path="/info" component={Emissions} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;

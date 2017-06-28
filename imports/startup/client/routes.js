import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import MapContainer from '../../components/Map';
import DropzoneComponent from '../../components/Dropzone';
import Information from '../../components/Information/Emissions';

import 'leaflet/dist/leaflet.css';

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
            <NavLink id="map" className="menu-item" replace to="/information">Information</NavLink>
            <DropzoneComponent
              handleFile={file => {
                appProps.handleSavePointsFile(file);
              }}
            />
          </Menu>
          <main id="page-wrap">
            <Switch>
              <Route exact path="/" component={DashBoardContainer} />
              <Route path="/map" component={MapContainer} />
              <Route path="/chart" component={ChartContainer} />
              <Route path="/information" component={Information} />
            </Switch>
          </main>
        </div>

      </div>
    </Router>
  );
};

const DashBoardContainer = () =>
  <div>
    <h2>DashBoard</h2>
  </div>;
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
const ChartContainer = () =>
  <div>
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  </div>;
export default AppRoutes;

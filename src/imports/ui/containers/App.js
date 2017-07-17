import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import Menu from '../components/navigation/Menu.js';
import 'leaflet/dist/leaflet.css';
import './appContainer.scss';
import './navigation/grid.scss';
import './navigation/menu.scss';
import './navigation/dropzone.scss';

const AppRoutes = appProps => {
  console.log('routes');
  console.log(appProps);
  return (
    <Router>
      <div>
        <div id="outer-container">
          <Menu handleFile={file => {
                appProps.handleSavePointsFile(file);
              }} />
          <main id="page-wrap">
            <Switch>
              <Route exact path="/" component={DashBoardContainer} />
              <Route path="/map" component={MapContainer} />
              <Route path="/chart" component={ChartContainer} />
            </Switch>
          </main>
        </div>

      </div>
    </Router>
  );
};

const DashBoardContainer = () =>
  <div>
    <h2>DashBoardd</h2>
  </div>;

const position = [51.505, -0.09];

const MapContainer = () =>
  <div className="map-container">
    <Map zoomControl={false} center={position} zoom={13}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>
          <span>A pretty CSS3 popup.<br />Easily customizable.</span>
        </Popup>
      </Marker>
    </Map>
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

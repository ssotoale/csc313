import './style.css';
import {Map, View} from 'ol';
import {Icon, Style} from 'ol/style.js';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point.js';
import Feature from 'ol/Feature.js';

import {Vector as VectorSource} from 'ol/source.js';
import {Vector as VectorLayer} from 'ol/layer.js';

const los_angeles = new Feature({
  geometry: new Point([-13163009.986126756, 4036023.9000297277]),
});

const oxnard = new Feature({
  geometry: new Point([-13266583.181517323, 4058784.940425349]),
});

const san_jose = new Feature({
  geometry: new Point([-13583837.652233956, 4487363.8996032905]),
});

const cal_poly = new Feature({
  geometry: new Point([-13433590.626066202, 4205491.68857592]),
});

los_angeles.setStyle(
  new Style({
    image: new Icon({
      color: '#f5c4e4',
      crossOrigin: 'anonymous',
      src: 'data/bigdot.png',
      scale: 0.04,
    }),
  }),
);

oxnard.setStyle(
  new Style({
    image: new Icon({
      color: '#cfbaff',
      crossOrigin: 'anonymous',
      src: 'data/bigdot.png',
      scale: 0.02,
    }),
  }),
);

san_jose.setStyle(
  new Style({
    image: new Icon({
      color: '#c3dff7',
      crossOrigin: 'anonymous',
      src: 'data/bigdot.png',
      scale: 0.02,
    }),
  }),
);

cal_poly.setStyle(
  new Style({
    image: new Icon({
      color: '#ffe4c7',
      crossOrigin: 'anonymous',
      src: 'data/star.png',
      scale: 0.08,
    }),
  }),
);

const vectorSource = new VectorSource({
  features: [los_angeles, oxnard, san_jose, cal_poly],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }), vectorLayer,
  ],
  view: new View({
    center: [-13433590.626066202, 4205491.68857592],
    zoom: 7
  }),
});

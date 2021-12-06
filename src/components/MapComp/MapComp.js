import React, { useEffect, useRef } from "react";
import "./MapComp.css";
import { useSelector, useDispatch } from "react-redux";
import { setview } from "../../redux/slices/view-Slice";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const MapComp = () => {
  const mapRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("map render");
    //create map only once
    if (mapRef.current) {
      const map = new Map({
        basemap: "gray-vector",
      });

      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-80.84140258200966, 35.226810552804864],
        zoom: 9,
        highlightOptions: {
          color: [255, 255, 0, 0],
          haloOpacity: 1,
          fillOpacity: 1,
        },
      });

      const featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
      });
      map.add(featureLayer);

      dispatch(setview(view));
    }
    // return () => {};
  }, []);

  return <div className="mapDiv" ref={mapRef}></div>;
};

export default MapComp;

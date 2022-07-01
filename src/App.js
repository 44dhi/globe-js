import Globe from 'react-globe.gl';
import airportHistory from "./files/my-airports.json";
import travelHistory from './files/my-flights.json';
import funkyGlobe from './files/funkyGlobe.jpg'
import React,{useRef,useEffect} from 'react'

function App() {

  const ref = useRef();

  useEffect(() => {
    ref.current.controls().enableZoom = false;
    ref.current.controls().autoRotate = true;
    ref.current.controls().autoRotateSpeed = 0.5;
  }, []);

  return (
      <Globe
      ref={ref}
       pointsData={airportHistory.airports}
       backgroundColor="rgba(0,0,0,0)"
       waitForGlobeReady={true}
       animateIn={true}
       showAtmosphere={true}
       arcsData={travelHistory.flights}
       arcColor={(e) => {return e.status ? "#35D9B6" : "#3791FF";}}
       arcStroke={1}
      //  arcDashAnimateTime={4000}
      //  arcsTransitionDuration={2000}
       arcDashLength={1}
       arcDashGap={4}
       pointsMerge={true}
       pointAltitude={0.07}
       pointRadius={0.05}
      //  hexPolygonsData={countries.features}
      //  hexPolygonResolution={3}
      //  hexPolygonMargin={0.7}
       atmosphereColor='#3a228a'
       globeImageUrl={funkyGlobe}
       hexTopColor="#1b7aee"
       hexSideColor="#1b7aee"
       width={800}
       height={800}
       
      />
  );
}

export default App;

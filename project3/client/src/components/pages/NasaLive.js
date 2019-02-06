import React from "react";
// import "./Nasalive.css"
// import YouTube from "react-youtube"

function NasaLive() {
  return (
   <div>
     <h1>Earth Live</h1>
     <iframe className="nlive" title="NYTL" width="1200" height="800" src="https://www.youtube.com/embed/dVTzaXmYm_s?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <p className="livep">Behold, the Earth! See live views of Earth from the International Space Station coming to you by NASA's High Definition Earth Viewing (HDEV) experiment.</p>
   </div>
      
      
  );
}
export default NasaLive;

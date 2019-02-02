import React from "react";
// import "./welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>AURORA</h1>
      <p className="col-sm-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
        varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
        Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
        imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
        ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
        elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
        consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <div className="welcomebtn">
      <button id="welcomebtn" type="button" className="btn btn-secondary btn-lg"> 
      <Link
          to="/Articles"
          className={window.location.pathname === "./Articles" ? "nav-link active" : "nav-link"}
        >
          CLICK TO ENTER 
        </Link>
      </button>
      </div>
    </div>
  );
}

export default Welcome;
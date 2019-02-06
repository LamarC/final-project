import React from "react";
// import "./Welcome.css";

function Welcome() {
  return (
    <div className="jumbotron">
    <h1 className="display-1">Aurora</h1>
    <p className="lead">Read the latest space and astronomy news. Explore the universe with leading articles on space craft, the big bang, the universe and dark matter.</p>
    <hr classN="my-4"></hr>
    
    <a className="btn btn-dark btn-lg" href="/Articles" role="button">Jump to Articles</a>
   </div>

  );
}

export default Welcome;
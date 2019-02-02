import React from "react";
import axios from "axios";
// import fetch from "fetch";
import "./apod.css";


class nasaimages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null
    };
  }

  componentDidMount() {
    axios("https://api.nasa.gov/planetary/apod?api_key=Y88kHDg6nfyumk5SGBN8sK1B5f4GoeOWqd98Hgdy")
      // .then(res => console.log(res))
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.data
          });
         console.log(this.state);
        },
        
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
   
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <h1>{items.title}</h1>
        <img className="Apodimg" alt="Nasa Library" src={items.hdurl}></img>
        <h5>Copyright: {items.copyright}</h5>
        <br></br>
        <p className="ApodP col-sm-8"><strong>Explanation: </strong>{items.explanation}</p>
        </div>
      );
    }
  }
}

export default nasaimages;
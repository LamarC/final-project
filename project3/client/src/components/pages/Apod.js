import React from "react";
import axios from "axios";
// import fetch from "fetch";
// import "./Apod.css";
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';


class Apod extends React.Component {
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
        <h1 className="Apodh1">{items.title}</h1>
        <Container>
            
       <Card>
          <CardImg top width="50%" src={items.hdurl} alt="Card image cap" />
          <CardBody>
            <CardTitle>Copyright: {items.copyright}</CardTitle> 
            
            <CardText>{items.explanation}</CardText>
            
          </CardBody>
        </Card>
        
          </Container>
        </div>
      );
    }
  }
}

export default Apod;
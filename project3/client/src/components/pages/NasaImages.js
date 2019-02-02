import React from "react";
import axios from "axios";
// import "./apod.css";
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';


class NasaImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      descriptions: []
    };
  }
  
  componentDidMount() {
    axios("https://images-api.nasa.gov/search?media_type=image")
      // .then(res => console.log(res))
      .then(
        (result) => {
          // console.log(result);
          let array = result.data.collection.items
          for (var i = 0; i < array.length; i++){
          let description = array[i].data[0].description
          let location = array[i].data[0].location
          let thumbLink = array[i].links[0].href

          let myObj = {
              description: description,
              location: location,
              thumbLink: thumbLink
          }
          
          this.state.descriptions.push(myObj)
          }
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
          <Container>
            
        {this.state.descriptions.map(function(item){
          return <Card>
          <CardImg top width="100%" src={item.thumbLink} alt="Card image cap" />
          <CardBody>
            <CardTitle>{item.location}</CardTitle>
            
            <CardText>{item.description}</CardText>
            
          </CardBody>
        </Card>
        })}
          </Container>
        
        
       
        </div>
      );
    
    }
  }
}

export default NasaImages;
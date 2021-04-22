import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, eorrorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
        (err) => {
          this.setState({ eorrorMessage: err.message });
      }
    );
  }
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// class App extends React.Component {
//   //constructor function, its the first function anytime an instance of a class is created
//   //React says we have to define render//
//   constructor(props) {
//     super(props);
//     //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
//     this.state = { lat: null }; //lat:null just in here we dont know the latitude yet

//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         //we called setState (anytime you want to update your state
//         this.setState({ lat: position.coords.latitude });
//       },
//       (err) => console.log(err)
//     );
//   }
//   render() {
//     return <div>Latitude: {this.state.lat}</div>;
//   }
// }

// ReactDOM.render(<App />, document.querySelector("#root"));

import React from "react";
//const myArray = ["Volvo", "Saab", "Ford", "BMW"]; //Går att skapa här

//Keyword "class" to indicate a class and then the name of the class and then you
// need to extends React.Component in order to implemet React functions
class App extends React.Component {
  myCars = ["Volvo", "Saab", "Ford", "BMW"];
  
  //Render method is used to render html code
  render() {
    //const myArray = ["Volvo", "Saab", "Ford", "BMW"]; //Går att skapa här
    return (
      <>
        {/* 
            -  <> is used as parent element instead of an actual element
            - In return method, it is required to have a parent element if you are gonna return more than one element
        */ }
        <h1>Hello React!</h1>
        <ul>
          {
            /* .map((v,i) => {return ()}) function is used with react to loop over array and returns for exampel, JSX code  */
            this.myCars.map((value, index) => {
              return (
                <div key={index} className="car-card">
                  <li>{value}</li>
                </div>
              )
            })
          }
        </ul>
      </>
    )
  }
}

// You need to export the class in order to be able to import it and use it in other files
export default App;
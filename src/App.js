import React from 'react';

// class App extends Component{
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={()=>{console.log("i am click")}} />
//       </React.Fragment>
   
//     );
//   }
// }
const App = () => {
  return (
    <React.Fragment>
    <h1>Hi !</h1>
    <Cat />
    <Cat />
    <Cat />
    </React.Fragment>
  );
}

const Cat = () => {
  return <div>Meo!</div>
}

export default App;

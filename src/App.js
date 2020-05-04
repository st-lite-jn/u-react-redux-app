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
  const profiles = [
    {name : "taro",age:10},
    {name :"hanako",age:99},
    {name:"jiro",age:100},
    {name:"saburo"}
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile,index) => {
         return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </React.Fragment>
  );
}

const User = (props) => {
  return <div>I'm {props.name} and {props.age} years old.</div>
}

User.defaultProps = {
  age : 1
}
export default App;

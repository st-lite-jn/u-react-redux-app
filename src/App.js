import React from 'react';
import propTypes from "prop-types";
const App = () => {
  const profiles = [
    {name :"Taro",age:10},
    {name :"Hanako",age:100},
    {name:"Jiro",age:100},
    {name:"Noname",age:999}
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

User.propTypes = {
  name: propTypes.string,
  age:propTypes.number.isRequired
}
export default App;

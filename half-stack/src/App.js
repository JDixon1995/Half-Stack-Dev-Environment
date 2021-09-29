import React from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Total from './components/Total.js';
import Hello from './components/Hello.js';

const App = (htmlcounter) => {
  const course = 'Half stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const object = {
    name: "John",
    age: 26
  }

  const {counter} = htmlcounter;

  return (
    <div>
      <Hello object={object} />
      <div>{counter}</div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} /> 
    </div>
  );
}

export default App;

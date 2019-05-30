import React from 'react'
import ReactDOM from 'react-dom'
function Cartoon(props){
  return <h1>Hello, {props.name}</h1>
  }
function Show(){
  return <div>
<Cartoon name='pikachu' show='pokimon'/>
<Cartoon name='Jesmin' show='Aladin'/>
</div>
}

  ReactDOM.render(
    <Show/>,
      document.getElementById('root')
  );

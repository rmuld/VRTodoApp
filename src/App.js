import React, { useState } from 'react';
import './App.css';


// function Korrutis() {
//   const [arv1, setArv1] = useState(0);
//   const [arv2, setArv2] = useState(0);

//   return (
//     <div>
//       <input value={arv1} onChange={(e => setArv1(e.target.value)) } />
//       <input value={arv2} onChange={(e => setArv2(e.target.value)) }/>
//       <p>Korrustis: { arv1*arv2}</p>
//     </div>
//   );
// }

function App() {
  const initialList = [];
  const [myList, setList] = useState(initialList);
  const [todo, setTodo] = React.useState();
  const [deadline, setDeadline] = React.useState("tähtajatu");
  // const [checked, setChecked] = React.useState(false);
  // const [textDecoration, setTextDecoration] = React.useState("none");

  // useEffect(() => {
  //   setTextDecoration(checked ? "line-through" : "none")
  // }, checked)

  function addTodo() {
    setList(myList.concat({todo:todo, deadline:deadline}))
  }

  function removeTodo(todo) {
    if (window.confirm('Kas oled kindel, et soovid kustutada?')){
      const newList = myList.filter((item) => item.todo !== todo)
      setList(newList)
    }
      
  }


  return (
    <div className="App-header">
      
      <h2>Minu ülesannete nimekiri</h2>

      {myList.length
        ? <ul className='App-list'>
        {myList.map((item) => 
         <li key={item.todo} >
            <label htmlFor="done"></label>
            {/* <input type="checkbox" name='done' id="done" defaultChecked={checked} onChange={() => setChecked(!checked)}></input> */}
            {item.todo}  {item.deadline}
            <button onClick={() => removeTodo(item.todo)}>Kustuta</button>
          </li>
        )}
      </ul>
        : <p>Sul on kõik ülesanded tehtud!</p>}
      <div className='App-form'>
        <label htmlFor='todo'>Ülesanne: </label>
        <input type="text" id='todo' placeholder='Kirjuta ülesanne' value={todo} onChange={(e) => setTodo(e.target.value) } />
        <label htmlFor="date"> Tähtaeg: </label>
        <input type="date" id='date' value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        <label htmlFor='addTodo'> </label>
        <input type="button" id='addTodo' value="Lisa" onClick={() => addTodo()} />
      </div>
    </div>
  );
}

export default App;

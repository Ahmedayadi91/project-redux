import './App.css';
import {useSelector, useDispatch} from 'react-redux'
// import counterReducer from './reducers/counter';
import {increment, decrement} from './actions'

function App() {
  const counter = useSelector (state => state.counter )
  const isLogged = useSelector (state => state.isLogged )
  const dispatch = useDispatch( ) 
  return (
    <div className="App">
        <h1> Counter {counter} </h1>
              {isLogged ? <h2> Value inconnue </h2> : ' ' }
              <button onClick = {() => dispatch(increment()) }> + </button>
              <button onClick = {() => dispatch(decrement()) }> - </button>

    </div>
  );
}

export default App;

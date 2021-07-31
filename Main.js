import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';

const initialState = {count: 50}

const priceReducer = (state, action) => {
  switch (action.type){
    case 'INCREMENT100':
    return { count: state.count + 100};
    case 'INCREMENT200':
    return { count: state.count + 200};
    case 'INCREMENT300':
    return { count: state.count + 300};
    case 'INCREMENT400':
    return { count: state.count + 400};
    default:
    throw new Error();
  }
}

// update the html with state strings

function Main() {
const [state, dispatch] = useReducer(priceReducer, initialState)


  const handleIncrease = (e) => {
    let typeSelected = `INCREMENT${e.target.id}`
    dispatch({type: typeSelected})    

  };



  return (
    <div className="box">
      <h1>Carpet Cleaning</h1>
      <hr/>
      <h3>Price List</h3>
      <p>Basic Soap Wash: £{initialState.count} (This is non-negotiable!)</p>

<h3>Added Extras</h3>
      <div>
        Added Stain Remover £100 <button type="button" onClick={handleIncrease} className="button is-grey" id="100">
          ADD
        </button><br/>
       Added Fragrance £200 <button type="button" onClick={handleIncrease} className="button is-dark" id="200">
          ADD
        </button><br/>
       Extra Deep Clean £300 <button type="button" onClick={handleIncrease} className="button is-grey" id="300">
          ADD
        </button><br/>
       Norwegian Carpet Shine £400 <button type="button" onClick={handleIncrease} className="button is-dark" id="400">
          ADD
        </button>
      </div>
      <hr/>
            <p>Total Price: £{state.count}</p>
    </div>
  );
}
ReactDOM.render(<Main />, document.getElementById('root'));

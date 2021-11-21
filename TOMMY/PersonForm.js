import React from "react";

const PersonForm = (props) => {
  console.log('comp', props)
  return (
  <form onSubmit={props.onSubmit}>
    <div>
      name: <input id='1' value={props.value} onChange={props.onChange} />
    </div>
    <div>
      number: <input id='2' numval={props.numval} numberhandler={props.handlenumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default PersonForm


// const PersonForm = (props) => {
//   <form onSubmit={addName}>
//     <div>
//       name: <input value={newName} onChange={handleName} />
//     </div>
//     <div>
//       number: <input value={newNumber} onChange={handleNumber} />
//     </div>
//     <div>
//       <button type="submit">add</button>
//     </div>
//   </form>
// }
import React from 'react'
//1st way of using destructured props
// const Greet = ({name,heroName})=> {
//     return (
//       <div>
//         <h1>
//             Hello {name} a.k.a {heroName}
//         </h1>
//       </div>
//     )
// }
//2nd way of using destructured props
const Greet = props => {
    const {name,heroName}=props
    return (
      <div>
        <h1>
            Hello {name} a.k.a {heroName}
        </h1>
      </div>
    )
}


export default Greet
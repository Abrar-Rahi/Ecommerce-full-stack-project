// "use client"

// import React from 'react'

// const CartIncre = ({productId, type}) => {

//     let handleIncreDecre = () => {
//         fetch(`http://localhost:8000/api/v1/product/addToCart?type=${type}`, {
//           method: "post",
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
    
//           //make sure to serialize your JSON body
//           body: JSON.stringify({
//             productId: productId,
//           })
//         })
//           .then((response) => {
//             console.log(response);
//           });
//       }
//   return (
//     type=="increse" ?
//     <button onClick={ handleIncreDecre}>+</button>
//     :
//     <button onClick={ handleIncreDecre}>-</button>
//   )
// }

// export default CartIncre
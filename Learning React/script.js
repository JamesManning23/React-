// ReactDOM.render(<h1>hello!</h1>,document.getElementById("root"))
// pulling in the react library unlocks the render method which allows us to insert any HTML into the webpage.
// ReactDOM.render(<ul><li>Item 1</li><li>item 2</li></ul>,document.getElementById("root"))

// function MyFirstReactComponent() {
//     return (
//         <h1>Hello There</h1>
//     )
// };


// ReactDOM.render(
//     <div>
//         <MyFirstReactComponent />
//     </div>,
//     document.getElementById("root")
// );


// when rendering elements, multiple elements need to be wrapped under a parent element such as a div etc.
// jsx elements can be saved under a variable.

// const page = (
//     <div>
//         <h1>hello world</h1>
//         <h2>hello my name is james</h2>
//     </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

// console.log(page)

// ReactDOM.render(
//     <nav>
//         <h1>Brand Name Website</h1>
//         <ul>
//             <li>Pricing 1</li>
//             <li>Pricing 2</li>    
//             <li>Pricing 3</li>    
//         </ul>    
//     </nav>,
//     document.getElementById("root")
// );


// challenge 1: seeing what happens when we append jsx to a div variable using .append() instead of reactDOM.append()


const challenge = (
    <div>
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <a href="*">link 1</a>
    </div>
);

document.getElementById("root").append(JSON.stringify(challenge))

 
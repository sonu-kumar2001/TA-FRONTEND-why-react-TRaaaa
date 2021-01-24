import fruits from "../components/data";

function App() {
    return <>
    <AlertReact/>
    <Help/>
    <NameAlert/>
    <Fruits/>
    </>
}

// Alerting Hello React event
function AlertReact() {
    return <button onClick = {handler}> click Me! </button>
}

function handler() {
    alert("Hello React Event");
}
// alerting how can i help you

function Help() {
    return <button onClick={helpHandler}>How can I help you?</button>
}

function helpHandler() {
    alert(` - To learn React use https://reactjs.org
    - React and ReactDOM works together
    - Babel helps in writing JSX`);
}

// alerting message on the basis of name


function NameAlert() {
    let nameArr = ["Arya","Jhon","Bryan"];
    return nameArr.map((name)=> {
        return <button onClick={()=> handlerName(name)}> {name} </button>
    })
}

function handlerName(name) {
    alert(`hello ${name}`);
}

// alerting fruits

function Fruits() {
    return fruits.map((fruit=> {
            return <button key = {fruit.id} onClick = {()=> handlerFruits(fruit.value)}> {fruit.value} </button>
        }));
}

function handlerFruits(fruit) {
    alert(`${fruit}`);
}



export default App;
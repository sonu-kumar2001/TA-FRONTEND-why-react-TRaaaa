import data from "../../src/countries.json";

function Card() {
    return <section className="country-section">
        <h1 className="text-center">Country List</h1>
        <div className="container grid">
            {
                data.map(country=> {
                    return <Cards key = {country.unicode} {...country}/>
                })
            }
        </div>
    </section>
}

function Cards(props) {
    return <div className ="country-card">
        <h3>{props.code}</h3>
        <p>{props.emoji}</p>
        <button onClick= {()=> handler(props.code,props.emoji)}>{props.name}</button>
    </div>
}

function handler(code,emoji) {
    alert(`${code} ${emoji}`);
}

export default Card;
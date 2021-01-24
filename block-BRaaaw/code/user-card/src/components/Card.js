import data from "../users.json"

function Card() {
    return  <div className ="container grid">
                    {
                        data.map((user)=> {
                            return <Cards key= {user._id} {...user}/>
                        })
                    }
            </div>
}

function Cards(props) {
    return  <div className = {props.isActive === true ? "isActive user-card": "notActive user-card"}>
                <div className="col-1">
                    <img src= {props.picture} alt="avtar"/>
                    <h2>{props.name}</h2>
                    <h2>{props.age}</h2>
                </div>
                <div className="col-2">
                    <h3>{props.gender}{props.gender === "male" ? "🙋‍♂️" : "🤷‍♀️" }</h3>
                    <h3>{props.favoriteFruit} {props.favoriteFruit === "strawberry" ? "🍓" : "🍌"}</h3>
                    <h3>{props.company}</h3>
                    <h3>{props.email}</h3>
                    <h3>{props.phone}</h3>
                </div>
            </div>
}

export default Card;


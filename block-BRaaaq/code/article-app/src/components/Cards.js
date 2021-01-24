import PropTypes from 'prop-types';
import data from "./data"
function Cards() {
    return <section className="third-sec"> 
                <div className="container1"> 
                        <div className = "row flex"> 
                            {
                                data.map(article => {
                                return <Card {...article}/>
                                })
                             }
                        </div>
                </div>
           </section>
}

function Card(props){
    return <div className="col-1-3 flex-centre no-border">
                <img src={props.urlToImage} alt="01"/>
                <h3 className="uppercase col-head">{props.title}</h3>
                <p className="col-text">{props.description}</p>
                <a className="btn secondary-btn" href="##">learn more</a>
            </div>
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage : PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Cards;
function Work() {
    return       <section className="work padding">
    <div className="container">
      <header className="sec-header text-center">
        <h2 className="heading">Our Work</h2>
        <div className="dot-wrapper">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </header>
      <div className="flex">
        <WorkCard img="/work-image1.jpg"/>
        <WorkCard img="/work-image2.jpg"/>
        <WorkCard img="/work-image3.jpg"/>
        <WorkCard img="/work-image4.jpg"/>
      </div>
    </div>
  </section>
}



function WorkCard(props) {
    return (
    <div className="flex-23">
        <img
        className="flexible-img"
        src={props.img}
        alt="Work  1"
        />
  </div>)
}

export default Work;
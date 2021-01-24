function Blog() {
    return <section className="blog padding">
    <div className="container">
      <header className="sec-header text-center">
        <h2 className="heading">Our Blog</h2>
        <div className="dot-wrapper">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </header>
      <div className="flex wrap">
        <BlogCard imgUrl= "/blog-image1.jpg" date="December 22, 2017" title="How to find beautiful workspace?" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
        <BlogCard imgUrl= "/blog-image2.jpg" date="December 18, 2017" title="Woman sportwear" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
        <BlogCard imgUrl= "/blog-image3.jpg" date="December 14, 2017" title="New creative fashion" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
        <BlogCard imgUrl= "/blog-image4.jpg" date="December 10, 2017" title="Minimalist design trend in 2018" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
      </div>
    </div>
  </section>
}



function BlogCard(props) {
    return <article className="flex article flex-48">
    <div className="flex-40 font-0">
      <img
        className="flexible-img"
        src={props.imgUrl}
        alt="Blog  1"
      />
    </div>
    
    <div className="flex-60 article-content">
      <time datetime="">
        <i className="far fa-clock"></i>
        {props.date}
      </time>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a className="btn btn-tertiary" href="##">View Detail</a>
    </div>
    </article>
}

export default Blog;
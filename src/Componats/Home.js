import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

  return (

    <>
      <div className="homecontainar">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

          </div>

          <div className="carousel-inner">
            <Link to={"/Apple-news"}>
              <div className="carousel-item active">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtLMYYoARp59l3csbc7PwJFxfKKo8hG5RNg&s" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 id="white">Apple News</h5>
                  {/* <p>Some representative placeholder content for the first slide.</p> */}
                </div>
              </div>
            </Link>
            <Link to={"/BBC-news"}>
            <div className="carousel-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2fmPlVrmWzT01aO41_FexUfM49fECQErptg&s" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 id="black">BBC-News</h5>
                {/* <p>Some representative placeholder content for the third slide.</p> */}
              </div>
            </div>
          </Link>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div >
    </>
  )
}

export default Home
import { Container, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

function Gyms() {
  return (
    <div className="black-section" style={{ backgroundColor: "#393937" }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Featured Gyms
        </Typography>
        <Typography align="center" component={"p"} className="special-p">
          Access multiple top gyms through one application
        </Typography>
      </Container>
      <section class="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="card__container swiper"
        >
          <SwiperSlide>
            <article class="card__article swiper-slide">
              <div class="card__image">
                <img
                  src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                  alt="gym"
                  class="card__img"
                />
                <div class="card__shadow"></div>
              </div>

              <div class="card__data">
                <h3 class="card__name">Gym name</h3>
                <p class="card__description">
                  Description about gym description about gym description about
                  gym
                </p>

                <a href="#" class="card__button">
                  View More
                </a>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article class="card__article swiper-slide">
              <div class="card__image">
                <img
                  src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                  alt="gym"
                  class="card__img"
                />
                <div class="card__shadow"></div>
              </div>

              <div class="card__data">
                <h3 class="card__name">Gym name</h3>
                <p class="card__description">
                  Description about gym description about gym description about
                  gym
                </p>

                <a href="#" class="card__button">
                  View More
                </a>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article class="card__article swiper-slide">
              <div class="card__image">
                <img
                  src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                  alt="gym"
                  class="card__img"
                />
                <div class="card__shadow"></div>
              </div>

              <div class="card__data">
                <h3 class="card__name">Gym name</h3>
                <p class="card__description">
                  Description about gym description about gym description about
                  gym
                </p>

                <a href="#" class="card__button">
                  View More
                </a>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article class="card__article swiper-slide">
              <div class="card__image">
                <img
                  src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                  alt="gym"
                  class="card__img"
                />
                <div class="card__shadow"></div>
              </div>

              <div class="card__data">
                <h3 class="card__name">Gym name</h3>
                <p class="card__description">
                  Description about gym description about gym description about
                  gym
                </p>

                <a href="#" class="card__button">
                  View More
                </a>
              </div>
            </article>
          </SwiperSlide>
          ...
        </Swiper>
        {/* <div class="card__container swiper">
          <div class="card__content">
            <div class="swiper-wrapper">
              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                    alt="gym"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Gym name</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>

              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                    alt="gym"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Lotw Fox</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>

              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                    alt="gym"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Sara Mit</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>

              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                    alt="gym"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Jenny Wert</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>

              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                    alt="gym"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Lexa Kin</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>
            </div>
          </div>

          <div class="swiper-button-next">
            <i class="ri-arrow-right-s-line"></i>
          </div>

          <div class="swiper-button-prev">
            <i class="ri-arrow-left-s-line"></i>
          </div>

          <div class="swiper-pagination"></div>
        </div> */}
      </section>
    </div>
  );
}

export default Gyms;

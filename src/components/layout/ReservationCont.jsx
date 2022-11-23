import React from "react";
import { Link } from "react-router-dom";

const reservationText = [
  {
    imgName: "package01.jpg",
    location: "그랜드 디럭스 더블 - 게스트 룸",
  },
  {
    imgName: "package02.jpg",
    location: "로비",
  },
  {
    imgName: "package03.jpg",
    location: "수영장",
  },
];

function ReservationTextName({ imgName, location }) {
  return (
    <div className="package">
      <img src={`img/${imgName}`} alt="호텔룸" />
      <div className="name">{location}</div>
    </div>
  );
}

const ReservationCont = () => {
  //   const left = document.querySelector(".left");
  //   const aside = document.getElementById("aside");
  //   const regionBox = document.querySelector(".region_box");
  //   const headerImg = document.querySelector("#header img");

  //   left.addEventListener("mouseenter", (e) => {
  //     aside.classList.remove("active");
  //     regionBox.style.left = "0";
  //     headerImg.style.transform = "translate(120px, 10px)";
  //     headerImg.style.transition = "all 0.4s 0.09s";
  //   });
  //   left.addEventListener("mouseleave", (e) => {
  //     aside.classList.add("active");
  //     regionBox.style.left = "-15%";
  //     headerImg.style.transform = "translate(0, 10px)";
  //     headerImg.style.transition = "all 0.2s";
  //   });

  return (
    <div className="all score">
      <div className="left">
        <aside id="aside" className="active">
          <div className="aside__inner">
            <div className="menu">
              <img src="img/menu.jpg" alt="" />
            </div>
            <div className="region">
              <img src="img/seoul.jpg" alt="서울" />
              <img src="img/daegu.jpg" alt="대구" />
              <img src="img/daejeon.jpg" alt="대전" />
              <img src="img/busan.jpg" alt="부산" />
              <img src="img/gyeongju.jpg" alt="경주" />
              <img src="img/jeonju.jpg" alt="전주" />
              <img src="img/jeju.jpg" alt="제주" />
              <img src="img/gangneung.jpg" alt="강릉" />
            </div>
          </div>
        </aside>
        <div className="region_box">
          <div className="region_name">
            <li>서울</li>
            <li>대구</li>
            <li>대전</li>
            <li>부산</li>
            <li>경주</li>
            <li>전주</li>
            <li>제주</li>
            <li>강릉</li>
          </div>
        </div>
      </div>
      <div className="right">
        <header id="header">
          <Link to="/">
            <img src="img/logo.png" alt="로고이미지" />
          </Link>
          <form action="/" method="GET" id="header_search" className="close">
            <fieldset className="roomSearch">
              <legend className="ir">호텔 검색</legend>
              <div className="home">
                <label htmlFor="region"></label>
                <img src="img/home.svg" alt="집이미지" />
                <input
                  type="text"
                  id="region"
                  name="region"
                  placeholder="도시/호텔을 적어주세요."
                  required
                />
              </div>
              <div className="calender">
                <img src="img/calender.svg" alt="달력이미지" />
                <input
                  type="date"
                  id="start_date"
                  name="start_date"
                  defaultValue="2022-11-21"
                  required
                />
                <span className="date_hyphen">-</span>
                <input
                  type="date"
                  id="last_date"
                  name="last_date"
                  defaultValue="2022-11-23"
                  required
                />
              </div>
              <div className="guest">
                <img src="img/person.svg" alt="사람이미지" />
                <label htmlFor="room">객실</label>
                <select id="room" name="room" required>
                  <option defaultValue="1개">1개</option>
                  <option defaultValue="2개">2개</option>
                  <option defaultValue="3개">3개</option>
                  <option defaultValue="4개">4개</option>
                </select>
                <label htmlFor="tourist">투숙객</label>
                <select id="tourist" name="tourist" required>
                  <option defaultValue="1명">1명</option>
                  <option defaultValue="2명">2명</option>
                  <option defaultValue="3명">3명</option>
                  <option defaultValue="4명">4명</option>
                  <option defaultValue="5명">5명</option>
                  <option defaultValue="단체">단체</option>
                </select>
              </div>
              <button className="searchBtn">
                <img src="img/search.svg" alt="검색이미지" />
              </button>
            </fieldset>
          </form>
        </header>
        <section id="bannerType">
          <img src="img/banner.jpg" alt="배너이미지" />
          <div className="bannerInput">
            <h2 className="poppins">Find your travel moments and leave!</h2>
            <form action="/" method="GET">
              <fieldset className="roomSearch">
                <legend className="ir">호텔 검색</legend>
                <div className="home">
                  <label htmlFor="region"></label>
                  <img src="img/home.svg" alt="집이미지" />
                  <input
                    type="text"
                    id="region"
                    name="region"
                    placeholder="도시 또는 호텔을 입력해주세요."
                    required
                  />
                </div>
                <div className="calender">
                  <img src="img/calender.svg" alt="달력이미지" />
                  <input
                    type="date"
                    id="start_date"
                    name="start_date"
                    defaultValue="2022-11-21"
                    required
                  />
                  <span className="date_hyphen">-</span>
                  <input
                    type="date"
                    id="last_date"
                    name="last_date"
                    defaultValue="2022-11-23"
                    required
                  />
                  {/* <span>11/18 금 - 11/19 토</span> */}
                </div>
                <div className="guest">
                  <img src="img/person.svg" alt="사람이미지" />
                  <label htmlFor="room">객실</label>
                  <select id="room" name="room" required>
                    <option defaultValue="1개">1개</option>
                    <option defaultValue="2개">2개</option>
                    <option defaultValue="3개">3개</option>
                    <option defaultValue="4개">4개</option>
                  </select>
                  {/* <span>객실 1개, 투숙객 2명</span> */}
                  <label htmlFor="tourist">투숙객</label>
                  <select id="tourist" name="tourist" required>
                    <option defaultValue="1명">1명</option>
                    <option defaultValue="2명">2명</option>
                    <option defaultValue="3명">3명</option>
                    <option defaultValue="4명">4명</option>
                    <option defaultValue="5명">5명</option>
                    <option defaultValue="단체">단체</option>
                  </select>
                </div>
                <button className="searchBtn">
                  <img src="img/search.svg" alt="검색이미지" />
                </button>
              </fieldset>
            </form>
          </div>
        </section>
        <section id="contentsType" className="container">
          <div className="reservation__wrap">
            <div className="reservation__inner">
              <div className="reservationBanner">
                <div
                  className="reservation_img"
                  style={{
                    backgroundImage: `url(${"img/reservation.jpg"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="reservationDesc">
                    <div className="title">시그니엘 서울</div>
                    <div className="address">
                      서울 송파구 올림픽로 300 롯데월드타워 76-101층
                    </div>
                    <div className="chechInfo">
                      <form action="#">
                        <div className="checkInOut">
                          <em>체크인</em>
                          <em>체크아웃</em>
                        </div>
                        <div className="date">
                          <input
                            type="date"
                            id="start_date"
                            name="start_date"
                            defaultValue="2022-11-21"
                            required
                          />
                          <span>|</span>
                          <input
                            type="date"
                            id="last_date"
                            name="last_date"
                            defaultValue="2022-11-23"
                            required
                          />
                          {/* <em>11월 18일(금)</em> 11월
                                                    20일(일) */}
                        </div>
                        <div className="roominfo">
                          <div className="check">
                            <label htmlFor="roomcount">객실 수</label>
                            <select name="roomcount" id="roomcount">
                              <option defaultValue="1개">1개</option>
                              <option defaultValue="2개">2개</option>
                              <option defaultValue="3개">3개</option>
                              <option defaultValue="4개">4개</option>
                            </select>
                          </div>
                          <div className="check">
                            <label htmlFor="adultcount">성인</label>
                            <select name="adultcount" id="adultcount">
                              <option defaultValue="성인1명">1명</option>
                              <option defaultValue="성인2명">2명</option>
                              <option defaultValue="성인3명">3명</option>
                              <option defaultValue="성인4명">4명</option>
                              <option defaultValue="성인4명">단체</option>
                            </select>
                          </div>
                          <div className="check">
                            <label htmlFor="childcount">어린이</label>
                            <select name="childcount" id="childcount">
                              <option defaultValue="어린이1명">1명</option>
                              <option defaultValue="어린이2명">2명</option>
                              <option defaultValue="어린이3명">3명</option>
                              <option defaultValue="어린이4명">4명</option>
                              <option defaultValue="어린이4명">단체</option>
                            </select>
                          </div>
                        </div>
                        <button className="button">선택 완료</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roomm__package">
                <h2>객실 패키지</h2>
                <div className="package__inner">
                  {reservationText.map((info, index) => (
                    <ReservationTextName
                      key={index}
                      imgName={info.imgName}
                      location={info.location}
                    />
                  ))}
                  {/* <div className="package">
                    <img src="img/package02.jpg" alt="로비" />
                    <div className="name">로비</div>
                  </div>
                  <div className="package">
                    <img src="img/package03.jpg" alt="수영장" />
                    <div className="name">수영장</div>
                  </div> */}
                </div>
              </div>
              <div className="room__place">
                <h2>위치</h2>
                <img src="img/map.jpg" alt="지도" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReservationCont;

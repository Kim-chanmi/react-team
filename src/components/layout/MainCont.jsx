import React from "react";
import { Link } from "react-router-dom";

const mainText = [
  {
    imgName: "resion01.jpg",
    resionName: "서울",
  },
  {
    imgName: "resion02.jpg",
    resionName: "경기",
  },
  {
    imgName: "resion03.jpg",
    resionName: "인천",
  },
  {
    imgName: "resion04.jpg",
    resionName: "대구",
  },
  {
    imgName: "resion05.jpg",
    resionName: "대전",
  },
  {
    imgName: "resion06.jpg",
    resionName: "광주",
  },
  {
    imgName: "resion07.jpg",
    resionName: "울산",
  },
  {
    imgName: "resion08.jpg",
    resionName: "세종",
  },
  {
    imgName: "resion09.jpg",
    resionName: "경주",
  },
  {
    imgName: "resion10.jpg",
    resionName: "강원",
  },
  {
    imgName: "resion11.jpg",
    resionName: "부산",
  },
  {
    imgName: "resion12.jpg",
    resionName: "제주",
  },
];

function MainTextName({ imgName, resionName }) {
  return (
    <div className="resion">
      <Link to="/resion">
        <img src={`img/${imgName}`} alt={resionName} />
      </Link>
      <span>{resionName}</span>
    </div>
  );
}

const Header = () => {
  // const left = document.querySelector(".left");
  // const aside = document.getElementById("aside");
  // const regionBox = document.querySelector(".region_box");
  // const headerImg = document.querySelector("#header img");

  // left.addEventListener("mouseenter", (e) => {
  //   aside.classList.remove("active");
  //   regionBox.style.left = "0";
  //   headerImg.style.transform = "translate(120px, 10px)";
  //   headerImg.style.transition = "all 0.4s 0.09s";
  // });
  // left.addEventListener("mouseleave", (e) => {
  //   aside.classList.add("active");
  //   regionBox.style.left = "-15%";
  //   headerImg.style.transform = "translate(0, 10px)";
  //   headerImg.style.transition = "all 0.2s";
  // });

  return (
    <div className="all score">
      <div className="left">
        <aside id="aside" className="active">
          <div className="aside__inner">
            <div className="menu">
              <img src="img/menu.jpg" alt="메뉴" />
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
            {/* <div className="scroll">0</div> */}
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
                  {/* <span>11/18 금 - 11/19 토</span>  */}
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
                  {/* <span>객실 1개, 투숙객 2명</span>  */}
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
          <div className="contents__top">
            <div className="title">
              <h2 className="chosun">스폐셜 호텔</h2>
              <p className="chosun">SPECIAL HOTEL</p>
            </div>
            <div className="cardType">
              <div className="card__inner">
                <div className="card card1">
                  <Link to="/reservation">
                    <img src="img/mainCard01.jpg" alt="서울시그니엘" />
                  </Link>
                  <span className="card_name">
                    <em className="card_region">서울</em>
                    <em className="card_hotel">시그니엘</em>
                  </span>
                </div>
                <div className="card card2">
                  <Link to="/reservation">
                    <img src="img/mainCard02.jpg" alt="제주 그랜드 하얏트" />
                  </Link>
                  <span className="card_name">
                    <em className="card_region">제주</em>
                    <em className="card_hotel">그랜드 하얏트</em>
                  </span>
                </div>
                <div className="cardCenter card3">
                  <Link to="/reservation">
                    <img src="img/mainCard03.jpg" alt="서울 신라 호텔" />
                  </Link>
                  <span className="card_name">
                    <em className="card_region">서울</em>
                    <em className="card_hotel">신라 호텔</em>
                  </span>
                </div>
                <div className="card card4">
                  <Link to="/reservation">
                    <img src="img/mainCard04.jpg" alt="대구 디지털 하우스" />
                  </Link>
                  <span className="card_name">
                    <em className="card_region">대구</em>
                    <em className="card_hotel">디지털 하우스</em>
                  </span>
                </div>
                <div className="card card5">
                  <Link to="/reservation">
                    <img src="img/mainCard05.jpg" alt="부산 파라다이스 호텔" />
                  </Link>
                  <span className="card_name">
                    <em className="card_region">부산</em>
                    <em className="card_hotel">파라다이스 호텔</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="contents__bom">
            <h2>여행가고 싶은 지역을 선택해주세요.</h2>
            <div className="selectResion">
              {mainText.map((info, index) => (
                <MainTextName
                  key={index}
                  imgName={info.imgName}
                  resionName={info.resionName}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const resionText = [
  {
    classTitle: "resionCard1",
    imgName: "resionTop01.jpg",
    title: "Seogwipo-si의 아파트",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    classTitle: "resionCard2",
    imgName: "resionTop02.jpg",
    title: "Seogwipo-si의 아파트",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    classTitle: "resionCard3",
    imgName: "resionTop03.jpg",
    title: "Seogwipo-si의 아파트",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    classTitle: "resionCard4",
    imgName: "resionTop04.jpg",
    title: "Seogwipo-si의 아파트",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    classTitle: "resionCard5",
    imgName: "resionTop05.jpg",
    title: "Seogwipo-si의 아파트",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
];

const resionText2 = [
  {
    imgName: "resionBom01.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom02.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom03.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom04.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom05.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom06.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom07.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom08.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom09.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom10.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom11.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
  {
    imgName: "resionBom12.jpg",
    Title: "Seogwipo-si의 아파트",
    star: "★ 4.52",
    bed: "침대1개",
    price1: "₩1,510,703",
    price2: "₩865,561/월",
  },
];

function ResionTextName({ classTitle, imgName, title, bed, price1, price2 }) {
  return (
    <div className={`resionTopCard ${classTitle}`}>
      <img src={`img/${imgName}`} alt="호텔룸" />
      <div className="resionDesc">
        <div className="descTitle">{title}</div>
        <div className="bed">{bed}</div>
        <div className="price">
          <em>{price1}</em> {price2}
        </div>
      </div>
    </div>
  );
}

function ResionTextName2({ imgName, Title, star, bed, price1, price2 }) {
  return (
    <div className="resionBomCard">
      <img src={`img/${imgName}`} alt="호텔룸" />
      <div className="resionBomdesc">
        <div className="resionBomTitle">
          {Title}
          <span className="star">{star}</span>
        </div>
        <div className="bed">{bed}</div>
        <div className="price">
          <em>{price1}</em>
          {price2}
        </div>
      </div>
    </div>
  );
}

const ResionCont = () => {
  // const left = document.querySelector(".left");
  // const aside = document.getElementById("aside");
  // const regionBox = document.querySelector(".region_box");
  // const headerImg = document.querySelector("#header img");

  // left.addEventListener("mouseenter", (e) => {
  //   aside.classNameList.remove("active");
  //   regionBox.style.left = "0";
  //   headerImg.style.transform = "translate(120px, 10px)";
  //   headerImg.style.transition = "all 0.4s 0.09s";
  // });
  // left.addEventListener("mouseleave", (e) => {
  //   aside.classNameList.add("active");
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
          <div className="resionTop">
            <h2>Recommended Hotels in Seoul</h2>
            <div className="checkinDate">
              <img src="img/resionCalender.svg" alt="달력" />
              Wed 11/17
            </div>
            <div className="checkoutDate">
              <img src="img/resionCalender.svg" alt="달력" />
              Wed 11/18
            </div>
            <div className="resion__inner">
              {resionText.map((info, index) => (
                <ResionTextName
                  key={index}
                  classTitle={info.classTitle}
                  imgName={info.imgName}
                  title={info.title}
                  bed={info.bed}
                  price1={info.price1}
                  price2={info.price2}
                />
              ))}
            </div>
            <div className="resionBom__card">
              <h2>서울 인근 숙소</h2>
              <div className="resionbomDate">11월 17일 목 ~ 11월 18일 금</div>
              <div className="resionBom__inner">
                {resionText2.map((info, index) => (
                  <ResionTextName2
                    key={index}
                    imgName={info.imgName}
                    Title={info.Title}
                    star={info.star}
                    bed={info.bed}
                    price1={info.price1}
                    price2={info.price2}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResionCont;

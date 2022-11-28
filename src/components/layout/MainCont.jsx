import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aside from "./Aside";

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

const MainCont = () => {
  const [selectCategory, setSelectCategory] = useState("서울");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Kim-chanmi/react-team/main/src/components/utils/Seoul.json"
    )
      .then((response) => response.json())
      .then((result) => console.log(result.data))
      .catch((error) => console.log("error", error));
  }, [selectCategory]);

  return (
    <div className="all score">
      <Aside
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <div className="right">
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

export default MainCont;

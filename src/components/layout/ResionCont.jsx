import React from "react";

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
      <div className="right">
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

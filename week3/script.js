let bodyTag = document.body;
console.log(bodyTag);

let hongikFestival = {
    name: "축제 라인업",
    date: "2025.05.14 - 2025.05.16",
    location: "서울특별시 마포구 홍익대학교",
    lineup: {
    day1: "KiiiKiii",
    day2: "MADEIN",
    day3: "AESPA",
    }
}

// section 태그를 찾는다.
let sectionTag = document.querySelector("section");

// h2 태그를 만든다.
let h2Tag = document.createElement("h2");

// h2 태그에 텍스트를 추가한다.
h2Tag.innerText = hongikFestival.name;

// h2 태그를 body 태그에 추가한다.
sectionTag.appendChild(h2Tag);

// 화면을 본다.

let KiiiKiiiTag = document.createElement("p");
KiiiKiiiTag.innerText = hongikFestival.lineup.day1;
sectionTag.appendChild(KiiiKiiiTag);
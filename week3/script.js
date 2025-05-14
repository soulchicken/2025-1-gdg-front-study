// 4주차에는 우아하게 함수와 반복문을 사용할 수 있어요.
// 이번 주는 아직 모르니까! 하드코딩 달립시다!

let bodyTag = document.body;

let hongikFestival = {
    name: "축제 라인업",
    date: "2025.05.14 - 2025.05.16",
    location: "서울특별시 마포구 홍익대학교",
    lineup: {
    day1: ["KiiiKiii", "창모", "Beenzino"],
    day2: ["MADEIN", "심아일랜드", "이승윤"],
    day3: ["AESPA", "잔나비", "YB", "PSY"],
    }
}

// section 태그를 찾는다.
let sectionTag = document.querySelector("section");

let h2Tag = document.createElement("h2");
h2Tag.innerText = hongikFestival.name;
sectionTag.appendChild(h2Tag);

let figureTag = document.createElement("figure");

// day 1
let day1Tag = document.createElement("div");

let day1TitleTag = document.createElement("h3");
day1TitleTag.innerText = "Day 1";
day1Tag.appendChild(day1TitleTag);

// day1 image
let day1ImageTag = document.createElement("img");
day1ImageTag.src = "./img/day_1.jpeg";
day1ImageTag.alt = "Day 1";
day1ImageTag.style.width = "200px";
day1ImageTag.style.height = "auto";
day1Tag.appendChild(day1ImageTag);

let day1LineupTag = document.createElement("ul");
let day1MemberTags = [document.createElement("li"), document.createElement("li"), document.createElement("li")];

day1MemberTags[0].innerText = hongikFestival.lineup.day1[0];
day1MemberTags[1].innerText = hongikFestival.lineup.day1[1];
day1MemberTags[2].innerText = hongikFestival.lineup.day1[2];

day1LineupTag.appendChild(day1MemberTags[0]);
day1LineupTag.appendChild(day1MemberTags[1]);
day1LineupTag.appendChild(day1MemberTags[2]);

day1Tag.appendChild(day1LineupTag);
figureTag.appendChild(day1Tag);

// day 2
let day2Tag = document.createElement("div");

let day2TitleTag = document.createElement("h3");
day2TitleTag.innerText = "Day 2";
day2Tag.appendChild(day2TitleTag);

// day2 image
let day2ImageTag = document.createElement("img");
day2ImageTag.src = "./img/day_2.jpeg";
day2ImageTag.alt = "Day 2";
day2ImageTag.style.width = "200px";
day2ImageTag.style.height = "auto";
day2Tag.appendChild(day2ImageTag);

let day2LineupTag = document.createElement("ul");

let day2MemberTags = [document.createElement("li"), document.createElement("li"), document.createElement("li")];

day2MemberTags[0].innerText = hongikFestival.lineup.day2[0];
day2MemberTags[1].innerText = hongikFestival.lineup.day2[1];
day2MemberTags[2].innerText = hongikFestival.lineup.day2[2];

day2LineupTag.appendChild(day2MemberTags[0]);
day2LineupTag.appendChild(day2MemberTags[1]);
day2LineupTag.appendChild(day2MemberTags[2]);

day2Tag.appendChild(day2LineupTag);
figureTag.appendChild(day2Tag);

// day 3
let day3Tag = document.createElement("div");

let day3TitleTag = document.createElement("h3");
day3TitleTag.innerText = "Day 3";
day3Tag.appendChild(day3TitleTag);

// day3 image
let day3ImageTag = document.createElement("img");
day3ImageTag.src = "./img/day_3.jpeg";
day3ImageTag.alt = "Day 3";
day3ImageTag.style.width = "200px";
day3ImageTag.style.height = "auto";
day3Tag.appendChild(day3ImageTag);

let day3LineupTag = document.createElement("ul");

let day3MemberTags = [document.createElement("li"), document.createElement("li"), document.createElement("li"), document.createElement("li")];

day3MemberTags[0].innerText = hongikFestival.lineup.day3[0];
day3MemberTags[1].innerText = hongikFestival.lineup.day3[1];
day3MemberTags[2].innerText = hongikFestival.lineup.day3[2];
day3MemberTags[3].innerText = hongikFestival.lineup.day3[3];

day3LineupTag.appendChild(day3MemberTags[0]);
day3LineupTag.appendChild(day3MemberTags[1]);
day3LineupTag.appendChild(day3MemberTags[2]);
day3LineupTag.appendChild(day3MemberTags[3]);

day3Tag.appendChild(day3LineupTag);
figureTag.appendChild(day3Tag);

sectionTag.appendChild(figureTag);
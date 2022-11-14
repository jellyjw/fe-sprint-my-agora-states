// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

const userSubmit = document.querySelector(".submit");
const userInputName = document.querySelector("#name");
const userInputTitle = document.querySelector("#title");
const userInputStory = document.querySelector("#story");

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.

  // 이미지 삽입
  const avatarImg = document.createElement("img");
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = `avatar of ${obj.author}`;
  avatarImg.className = "discussion__avatar--image";
  avatarWrapper.append(avatarImg);

  // 질문 title
  const mainTitle = document.createElement("h2");
  const subTitle = document.createElement("a");
  mainTitle.className = "discussion__title";
  subTitle.href = obj.url;
  subTitle.textContent = obj.title;
  subTitle.className = "discussion__information";
  mainTitle.append(subTitle);

  // 날짜
  const questionDate = document.createElement("div");
  questionDate.className = "discussion__information";
  questionDate.textContent = `${obj.author} / ${new Date(
    obj.createdAt
  ).toLocaleTimeString()}`;
  discussionContent.append(mainTitle, questionDate);

  //덥변 여부
  const isChecked = document.createElement("p");
  isChecked.textContent = "☑";
  isChecked.className = "discussion__answered";
  if (obj.answer !== null) {
    isChecked.textContent = "☑︎";
  } else {
    isChecked.textContent = "☒";
  }
  discussionAnswered.append(isChecked);

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

userSubmit.addEventListener("click", (e) => {
  if (userInputTitle.value !== "") {
    let obj = {};
    e.preventDefault();
    obj["id"] = "jangjiwoo";
    obj["createdAt"] = new Date().toLocaleString();
    obj["author"] = userInputName.value;
    obj["title"] = userInputTitle.value;
    obj["avatarUrl"] =
      "https://avatars.githubusercontent.com/u/94212747?s=64&u=145778e6dfbd813a6689a634ed3bb47f1bfa7b17&v=4";
    obj["url"] =
      "https://github.com/codestates-seb/agora-states-fe/discussions";
    obj["answer"] = null;
    console.log(obj);
    userInputName.value = "";
    userInputTitle.value = "";
    userInputStory.value = "";
    convertToDiscussion(obj);
  }
});

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.

const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);

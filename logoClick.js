const logo = document.querySelector(".js-logo");

function myLink(){ //로고클릭 이벤트 처리
    const openLink = window.open("https://blog.naver.com/hanjo1515");
}

function myLogo(){ //로고클릭 이벤트
    logo.addEventListener("click", myLink);
}

function init(){
    myLogo();

}
init();
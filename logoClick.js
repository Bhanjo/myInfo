const logo = document.querySelector(".js-logo");
const blogImg = document.querySelector(".js-blogImg");
const gitImg = document.querySelector(".js-gitImg");


function myLink(){ //로고클릭 이벤트 처리
    const openLink = window.open("https://blog.naver.com/hanjo1515");
}

function myLogo(){ //로고클릭 이벤트
    logo.addEventListener("click", myLink);
}


function myBlog(){ //블로그 클릭 이벤트
    blogImg.addEventListener("click", myLink);
}

function myGitLink(){ //git 클릭 이벤트 처리
    const openGit = window.open("https://github.com/Bhanjo");
}

function myGit(){ //git 클릿 이벤트
    gitImg.addEventListener("click", myGitLink);
}

function init(){
    myLogo();
    myBlog();
    myGit();

}
init();
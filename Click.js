const logo = document.querySelector(".js-logo");
const blogImg = document.querySelector(".js-blogImg");
const gitImg = document.querySelector(".js-gitImg");

const portfolio = document.querySelector(".js-portfolio");
const portfolioBlog = document.querySelector(".js-portfolioBlog");

const todoBlog = document.querySelector(".js-todoBlog");
const todoGit = document.querySelector(".js-todoGit");

const lottoBlog = document.querySelector(".js-lottoBlog");
const lottoGit = document.querySelector(".js-lottoGit");

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

//ㅍ로젝트 포트폴리오 이벤트
function portfolioLink(){
    const openPortfolio = window.open("https://bhanjo.github.io/myInfo");
}

function myportfolio() {
    portfolio.addEventListener("click", portfolioLink);
}


function portfolioBlogLink() { 
    const openportfolioBlog = window.open("https://blog.naver.com/hanjo1515/221934335134");
}

function myProtfolioBlog() {
    portfolioBlog.addEventListener("click", portfolioBlogLink);
}

//프로젝트 스케쥴
function todoBolgLink() {
    const openTodoBlog = window.open("https://blog.naver.com/hanjo1515/221926312382");
}

function myTodoBlog() {
    todoBlog.addEventListener("click", todoBolgLink);
}

function todoGitLink() {
    const openTodoBlog = window.open("https://bhanjo.github.io/toDoList/");
}

function myTodoGit() {
    todoGit.addEventListener("click", todoGitLink);
}

//프로젝트 로또
function lottoBlogLink() {
    const openLottoBlog = window.open("https://blog.naver.com/hanjo1515/221796207585");
}

function myLottoBlog() {
    lottoBlog.addEventListener("click", lottoBlogLink);
}

function lottoGitLink() {
    const openTodoBlog = window.open("https://github.com/Bhanjo/lotto");
}

function myLottoGit() {
    lottoGit.addEventListener("click", lottoGitLink);
}

function init(){
    myLogo();
    myBlog();
    myGit();

    myportfolio();
    myProtfolioBlog();

    myTodoBlog();
    myTodoGit();

    myLottoBlog();
    myLottoGit();
}
init();
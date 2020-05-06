let index = 0; //포트폴리오 이미지 목록
let indexTodo = 0; //스케쥴 이미지 목록
let indexLotto = 0; //로또 이미지 목록

window.onload = function() {
    slideShowPortfolio();
    slideShowTodo();
    //slideShowLotto();
}

 //포트폴리오 슬라이드
function slideShowPortfolioBack() { //포트폴리오 이전버튼
    let i;
    let x = document.getElementsByClassName("projectImg");
    for(i = 0; i<x.length; i++){
        x[i].style.display="none";
    }
    index--;
    if(index <= 0){
        index= x.length;
    }
    x[index-1].style.display = "inline";
}

function slideShowPortfolio() { //포트폴리오 다음버튼
    let i;
    let x = document.getElementsByClassName("projectImg");
    for(i = 0; i<x.length; i++){
        x[i].style.display="none";
    }
    index++;
    if(index > x.length){
        index = 1;
    }
    x[index-1].style.display = "inline";
    //setTimeout(slideShowPortfolio, 3000);
}

 //스케쥴 슬라이드
 function slideShowTodoBack() { //스케쥴 이전버튼
    let j;
    let y = document.getElementsByClassName("projectImgTodo")
    for(j = 0; j<y.length; j++){
        y[j].style.display="none";
    }
    indexTodo--;
    if(indexTodo <= 0){
        indexTodo = y.length;
    }
    y[indexTodo-1].style.display = "inline";
    //setTimeout(slideShowTodo, 3000);
}

function slideShowTodo() { //스케쥴 다음버튼
    let j;
    let y = document.getElementsByClassName("projectImgTodo")
    for(j = 0; j<y.length; j++){
        y[j].style.display="none";
    }
    indexTodo++;
    if(indexTodo > y.length){
        indexTodo = 1;
    }
    y[indexTodo-1].style.display = "inline";
    //setTimeout(slideShowTodo, 3000);
}

//로또 슬라이드
/*function slideShowLotto() {
    let k;
    let z = document.getElementsByClassName("projectImgLotto")
    for(k = 0; k<z.length; k++){
        z[k].style.display="none";
    }
    indexLotto++;
    if(indexLotto > z.length){
        indexLotto = 1;
    }
    z[indexLotto-1].style.display = "inline";
    setTimeout(slideShowTodo, 3000);
}*/
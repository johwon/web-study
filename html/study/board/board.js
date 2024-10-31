//객체 가져오기
function carousel(){
    let carousel = document.querySelector(".carousel");
    let slides = document.querySelector(".slides");
    let imgArray = document.querySelectorAll("[type=`img`]");

    let left = document.querySelector(".left");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    let dot = document.querySelector(".dot");
    let dotArray = document.querySelectorAll(".dot a");

    // 현재이미지 인덱스, 인터벌 아이디, 슬라이드 개수
    let currentIndex = 0;
    let timerID = null;
    let slideCount = imgArray.length;

    // 현재이미지 한줄 정렬
    for(let i=0; i<slideCount;i++){
        let newLeft = `${i*100}%`
        imgArray[i].style.left = newLeft;
    }

    // 화면전환해주는 함수
    function gotoslide(index){
        currentIndex = index;
        let newLeft = `${index*-100}%`;
        slides.style.left = newLeft;

        for(let i=0;i<slideCount;i++){
            dotArray[i].classList.remove;
        }
        dotArray[index].classList.add('active');
    }

    function startTimer(){
        timerID = setInterval(()=>{
            let index = (currentIndex+1)%slideCount;
            currentIndex = index;
            gotoslide(index);
        },3000);
    }

}
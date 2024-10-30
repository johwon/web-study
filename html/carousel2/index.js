function carousel(){
    // 화면객체 가져옴
    let slideshow = document.querySelector(".slideshow");
    let slideshow_slides = document.querySelector(".slideshow_slides");
    let slidesArray = document.querySelectorAll(".slideshow_slides a");

    let slideshow_nav = document.querySelector(".slideshow_nav");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    let indicator = document.querySelector(".indicator");
    let indicatorArray = document.querySelectorAll(".indicator a");

    // 현재이미지 인덱스, 인터벌 아이디, 슬라이드 개수
    let currentIndex = 0;
    let timerID = null;
    let slideCount = slidesArray.length; //이미지 4개이므로 4

    // 현재이미지 한줄로 정렬
    for(let i=0;i<slideCount;i++){
        let newLeft = `${i*100}%`; //0번사진은 위치 0%, 1번사진은 위치 100%
        slidesArray[i].style.left = newLeft;
    }   

    //화면을 전환해주는 함수
    function gotoslide(index){
        currentIndex = index;   //현재이미지인덱스에 매개변수넣음
        let newLeft = `${index * -100}%`;   //??왜 마이너스일까?
        slideshow_slides.style.left = newLeft;

        // indicator 그 위치를 기리켜야함
        for(let i=0;i<slideCount;i++){
            indicatorArray[i].classList.remove("active");   
        }  
        //이게 왜있어야하는지 모르겠음 그냥 인덱스에 active 추가만 하면 되는거 아닌가
        indicatorArray[index].classList.add('active');
    }

    //3초마다 gotoslide를 불러준다 index 0,1,2,3,0,1,2 이런식 이걸어케하는거지
    function startTimer(){
        timerID = setInterval(()=>{
            let index = (currentIndex+1)%slideCount;   //index=1, currentIndex=0 
            //currentIndex가 0이면 index는 1이됨 그리고 또 currentIndex가 1이됨
            // 또 돌아가면 커렌트인덱스가 1이고 index는 2가됨 currenIndex 다시 2가됨
            currentIndex = index; //둘다 1이됨
            gotoslide(index);   //gotoslide(1)이됨
        },3000 )
    }
    startTimer();



}
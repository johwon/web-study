function carousel(){
    //화면객체 가져온다
    let slideshow = document.querySelector(".slideshow");
    let slideshow_slides = document.querySelector(".slideshow_slides");
    let slidesArray = document.querySelectorAll(".slideshow_slides a");

    let slideshow_nav = document.querySelector(".slideshow_nav");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    let indicatorArray = document.querySelectorAll(".slideshow_indicator a");
    
    //현재이미지 인덱스, 인터벌 아이디, 슬라이드 개수
    let currentIndex = 0;
    let timerID = null;
    let slideCount = slidesArray.length;

    //현재이미지를 한줄로 정렬
    for(let i=0;i<slideCount;i++){
        let newLeft = `${i*100}%`
        slidesArray[i].style.left = newLeft;
    }

    //화면 전환해주는 함수
    function gotoslide(index){
        currentIndex = index;
        let newLeft = `${index * -100}%`;
        slideshow_slides.style.left = newLeft; 
    
        //indicator 그 위치를 가리켜야함
        for(let i=0;i<slideCount;i++){
            indicatorArray[i].classList.remove('active');
        }
        indicatorArray[index].classList.add('active');
    } //end of gotoslide

    //3초마다 gotoslide를 불러준다, index 0,1,2,3,0,1,2 식으로

    function startTimer(){
        timerID = setInterval(()=>{
            let index = (currentIndex + 1) % slideCount;
            currentIndex = index;
            gotoslide(index);
        },3000);
    }
    startTimer();

    //이벤트등록, 핸들러기능
    slideshow_slides.addEventListener("mouseenter",(event)=>{
        clearInterval(timerID);
    });
    slideshow_slides.addEventListener("mouseleave",(event)=>{
        startTimer();
    });
    prev.addEventListener("mouseenter",(event)=>{
        clearInterval(timerID);
    });
    prev.addEventListener("mouseleave",(event)=>{
        startTimer();
    });
    next.addEventListener("mouseenter",(event)=>{
        clearInterval(timerID);
    });
    next.addEventListener("mouseleave",(event)=>{
        startTimer();
    });

    prev.addEventListener("click",(event)=>{
        event.preventDefault;   //앵커 태그가 가지고 있는 기본 앵커기능(페이지이동)을 막음
        currentIndex = currentIndex -1;
        if(currentIndex<0){
            currentIndex = slideCount -1;
        }
        gotoslide(currentIndex);
    })
    next.addEventListener("click",(event)=>{
        event.preventDefault;   //앵커 태그가 가지고 있는 기본 앵커기능(페이지이동)을 막음
        currentIndex = currentIndex +1;
        if(currentIndex>(slideCount-1)){
            currentIndex = 0;
        }
        gotoslide(currentIndex);
    })

    //indicator 클릭하면 해당된 페이지로 이동한다
    for(let i=0;i<slideCount;i++){
        indicatorArray[i].addEventListener("mouseenter",(event)=>{
            clearInterval(timerID);
        })
    }
    // indicatorArray.forEach((obj)=>{
    //     obj.addEventListener("mouseenter",(event)=>{
    //         clearInterval(timerID);
    // });
    // });

    for(let i=0;i<slideCount;i++){
        indicatorArray[i].addEventListener("mouseleave",(event)=>{
            startTimer();
        })
    }

    for(let i=0;i<slideCount;i++){
        indicatorArray[i].addEventListener("click",(event)=>{
            event.preventDefault();
            gotoslide(i);
        })
    }

}//end of carousel




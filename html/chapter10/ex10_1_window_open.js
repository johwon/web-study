function onLoad(){
    //객체찾기
    const btnopen = document.querySelector("#open");
    const btnclose = document.querySelector("#close");
    const idobj = document.querySelector("#id");
    const pwdobj = document.querySelector("#pwd");

    //팝업창 윈도우 === window 핸들변수
    let winHandle = null;

    // 이벤트리스너등록, 핸들러처리
    btnopen.addEventListener("click",()=>{
        winHandle = window.open("./ex8_2_formName.html","_blank","width=400, height=400, left=30, top=30");
        setTimeout(() => {
            winHandle.document.querySelector("#userID").value = idobj.value;
            winHandle.document.querySelector("#pwd").value = pwdobj.value;
        }, 100);
    });
    
    btnclose.addEventListener("click",()=>{
        winHandle.close();
    }); 



}
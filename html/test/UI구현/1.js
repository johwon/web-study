function onLoad(){
    // 객체 가져오기
    const idObj = document.querySelector("#id");
    const pwd1Obj = document.querySelector("#pwd1");
    const pwd2Obj = document.querySelector("#pwd2");

    idObj.value = null;
    pwd1Obj.value = null;
    // 이벤트리스너,핸들러
    pwd1Obj.addEventListener("click", ()=>{
        pwd1Obj.nextSibling.innerHTML = `영문자 대/소문자 특수문자, 숫자 포함 8~32자`
    });
    
    // 필수패턴 이벤트리스너
    idObj.addEventListener("blur", ()=>{validate(idObj)});
    pwd1Obj.addEventListener("blur", ()=>validate(pwd1Obj));
    pwd2Obj.addEventListener("blur", ()=>validate(pwd2Obj));

    // 필수패턴 핸들러 함수
    function validate(userInput){
        if(userInput.value === ""){
            userInput.nextSibling.textContent = "필수 입력 항목 입니다";
        }
    };
}
function onLoad(){
    //패턴검색
    const idPattern = /^[A-Za-z]{4,}/; //영 대소문자, 4글자 이상 입력
    const emailPattern = /^@[A-Ja-z-0-9\-\.]+\.[A-Ja-z-0-9]+$/;
    const pwdPattern = /^[A-Z|a-z|0-9]{6,10}$/; //영 대소문자,숫자, 6~10자 입력
    const namePattern = /^[가-힣]+$/; //한글로 입력
    const phoneNumPattern = /^\d{3}-\d{3,4}-\d{4}$/;
    const checkEmailPattern = /^[A-Za-z-0-9\-\.]+@[A-Ja-z-0-9\-\.]+\.[A-Ja-z-0-9]+$/;
    const certifiedPattern = /^[0-9]{4}/; //숫자4자

    // 객체 가져오기
    const inputID = document.querySelector("#id");
    const inputEmail = document.querySelector("#idEmail");
    const inputPWD = document.querySelector("#pwd");
    const inputPWD2 = document.querySelector("#pwd2");
    const inputName = document.querySelector("#name1");
    const inputPhoneNum = document.querySelector("#phoneNum");
    const inputCheckEmail = document.querySelector("#checkEmail");
    const inputCertified = document.querySelector("#Certified");

    // 폼객체 가져오기
    const myform = document.querySelector(".form");

    // 이벤트리스너
    inputID.addEventListener("blur",()=>validate(inputID, idPattern, "영 대소문자, 4글자 이상 입력"));
    inputEmail.addEventListener("blur",()=>validate(inputEmail, emailPattern, "이메일 형식으로 입력"));
    inputPWD.addEventListener("blur",()=>validate(inputPWD, pwdPattern, "영 대소문자,숫자, 6~10자 입력"));
    inputPWD2.addEventListener("blur",()=>{
        validate(inputPWD2, pwdPattern, "영 대소문자,숫자, 6~10자 입력");
        if(inputPWD.value !== inputPWD2.value){
            inputPWD2.nextSibling.textContent = "비밀번호가 일치하지 않습니다."
            inputPWD2.nextSibling.style.color = "red";
            inputPWD2.value="";
            inputPWD2.focus();
            return;
        }
    });
    inputName.addEventListener("blur",()=>validate(inputName, namePattern, "한글로 입력"));
    inputPhoneNum.addEventListener("blur",()=>validate(inputPhoneNum, phoneNumPattern, "올바른 형식이 아닙니다."));
    inputCheckEmail.addEventListener("blur",()=>validate(inputCheckEmail, checkEmailPattern, "올바른 형식이 아닙니다."));
    inputCertified.addEventListener("blur",()=>validate(inputCertified, certifiedPattern, "4자리 숫자를 입력하세요."));
    
    //이벤트핸들러
    function validate(userInput, pattern, message){
        if(userInput.value.match(pattern)){
            userInput.nextSibling.innerHTML = "성공";
            userInput.nextSibling.style.color = "blue";
        }else{
            userInput.nextSibling.innerHTML = message;
            userInput.nextSibling.style.color = "red";
            userInput.value = "";
            userInput.focus();
            return;
        }
    }

    //폼이벤트
    myform.addEventListener("submit", (e)=>{
        e.preventDefault;
        validate(inputID, idPattern, "영 대소문자, 4글자 이상 입력");
        validate(inputEmail, emailPattern, "이메일 형식으로 입력");
        validate(inputPWD, pwdPattern, "영 대소문자,숫자, 6~10자 입력");
        validate(inputPWD2, pwdPattern, "영 대소문자,숫자, 6~10자 입력");
        validate(inputName, namePattern, "한글로 입력");
        validate(inputPhoneNum, phoneNumPattern, "올바른 형식이 아닙니다.");
        validate(inputCheckEmail, checkEmailPattern, "올바른 형식이 아닙니다.");
        validate(inputCertified, certifiedPattern, "4자리 숫자를 입력하세요.");
        alert("서버로 전송합니다");
        myform.submit();})
}
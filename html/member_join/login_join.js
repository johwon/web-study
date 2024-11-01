function onLoad(){
    //패턴검색내용
    const idPattern = /^[\w]{3,}$/; //[\w]는 영문자, 숫자, _만 입력 가능. {3,} 3글자이상가능
    const pwdPattern = /^[A-Z|a-z|0-9]{6,10}$/; //영문자,숫자 6~10
    const namePattern = /^[가-힣]{2,4}|[A-Z]{1}[A-Z|a-z|\x20]{1,19}$/; //한글 2~4 영문자 2-10(첫글자 대문자 공백가능)
    const nicknamePattern = /^[가-힣\w]{4,}$/; //공백없이 한글,영문,숫자,_만 입력 가능(4글자 이상)
    const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const telPattern = /^\d{2,3}-\d{3,4}-\d{4}$/; //\d 숫자만가능
    const mobilePattern = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/; //\d 숫자만가능
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; //\d 숫자만가능

    //객체찾기
    const inputID = document.querySelector("#input-id");
    const inputPW1 = document.querySelector("#input-pw1");
    const inputPW2 = document.querySelector("#input-pw2");
    const inputName = document.querySelector("#input-name");
    const inputNickname = document.querySelector("#input-nickname");
    const inputEmail = document.querySelector("#input-email");
    const inputTel = document.querySelector("#input-tel");
    const inputMobile = document.querySelector("#input-mobile");
    const inputDate = document.querySelector("[type='date']");

    //주소객체찾기
    const zipcode = document.querySelector("#zipcode");
    const addr1 = document.querySelector("#addr1");
    const addr2 = document.querySelector("#addr2");
    const btnSearchAddr = document.querySelector("#btn-searchAddr");
    
    //폼객체찾기
    const myform = document.querySelector(".myform");

    //이벤트등록
    inputID.addEventListener("blur",()=>validate(inputID, idPattern, "영문자, 숫자, _만 입력 가능. 최소 3자 이상 입력하세요."));
    inputPW1.addEventListener("blur",()=>{
        validate(inputPW1, pwdPattern, "영문자, 숫자만 입력 가능. 6자~10자 입력하세요.");
        if(inputPW1.value !== inputPW2.value){
            inputPW2.nextSibling.textContent = "패스워드가 일치하지 않습니다.";
            inputPW2.nextSibling.style.color = "red";
            inputPW2.value = "";
            inputPW2.focus();
            return;
        }
    });
    // inputPW2.addEventListener("blur",()=>validate(inputPW2, pwdPattern, "영문자, 숫자만 입력 가능. 6자~10자 입력하세요."));
    
    inputName.addEventListener("blur",()=>validate(inputName, namePattern, "한글 2~4 영문자 2-20(첫글자 대문자, 공백가능"));
    inputNickname.addEventListener("blur",()=>validate(inputNickname, nicknamePattern, "공백없이 한글,영문,숫자,_만 입력 가능(4글자 이상)"));
    inputEmail.addEventListener("blur",()=>validate(inputEmail, emailPattern, "이메일 형식으로 입력해주세요"));
    inputTel.addEventListener("blur",()=>validate(inputTel, telPattern, "올바른 번호를 입력해주세요"));
    inputMobile.addEventListener("blur",()=>validate(inputMobile, mobilePattern, "올바른 번호를 입력해주세요"));
    inputDate.addEventListener("blur",()=>validate(inputDate, datePattern, "생년월일을 입력하세요"));
    
    //폼이벤트등록
    myform.addEventListener("submit",(e)=>{
        e.preventDefault(); //서버에 전송하는 기본 기능 막음
        validate(inputID, idPattern, "영문자, 숫자, _만 입력 가능. 최소 3자 이상 입력하세요.");
        validate(inputPW1, pwdPattern, "영문자, 숫자만 입력 가능. 6자~10자 입력하세요.");
        validate(inputPW2, pwdPattern, "영문자, 숫자만 입력 가능. 6자~10자 입력하세요.");
        if(inputPW1.value !== inputPW2.value){
            inputPW2.nextSibling.textContent = "패스워드가 일치하지 않습니다.";
            inputPW2.nextSibling.style.color = "red";
            inputPW2.value = "";
            return;
        }
        validate(inputName, namePattern, "한글 2~4 영문자 2-20(첫글자 대문자, 공백가능");
        validate(inputNickname, nicknamePattern, "공백없이 한글,영문,숫자,_만 입력 가능(4글자 이상)");
        validate(inputEmail, emailPattern, "이메일 형식으로 입력해주세요");
        validate(inputTel, telPattern, "올바른 번호를 입력해주세요");
        validate(inputMobile, mobilePattern, "올바른 번호를 입력해주세요");
        validate(inputDate, datePattern, "생년월일을 입력하세요");
        if(zipcode.value === "" || addr1.value ==="" ){
                zipcode.nextSibling.textContent = "주소를 입력하세요"
                zipcode.focus();
                return;
        }
        alert("서버로 전송합니다");
        myform.submit();
    });
    
    btnSearchAddr.addEventListener("click",()=>{
        new daum.Postcode({
            oncomplete: function(data) {
              // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드
              console.log('zipcode', data.zonecode); 
              console.log('data.roadAddress', data.roadAddress); 
        
              document.getElementById("zipcode").value = data.zonecode;
              document.getElementById("addr1").value = data.roadAddress;
            }
          }).open();
    });


    function validate(userInput, pattern, message){
        if(userInput.value.match(pattern)){
            userInput.nextSibling.innerHTML="성공";
            userInput.nextSibling.style.color = "blue";
        }else{
            userInput.nextSibling.textContent= message;
            userInput.nextSibling.style.color = "red";
            userInput.value="";
            userInput.focus();
            return;
    }
}
}
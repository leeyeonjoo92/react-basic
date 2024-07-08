import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // 2. form 제출 및 ref 적용
  const nameInputRef = useRef();
  // 1. 이름값을 상태로 저장
  const [enteredName, setEnteredName] = useState(" ");
  // 유효성검사를 위한 boolean
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameIsTouched(true);

    // event.target.value -> 값을 입력할때마다 가져옴
    if (event.target.value.trim() === "") {
      setEnteredNameIsValid(false);
    } else setEnteredNameIsValid(true);
  };

  const formSubmitHandler = (event) => {
    // form에서 button에 type을 적어주지 않으면 기본적으로 submit임
    // 기존 submit 새로고침 이벤트 막기
    event.preventDefault();
    console.log("enteredName", enteredName);

    // 5. 제출 시점과 터치 시점을 구분해주기
    // 한번 터치되면 계속 true값을 가지고 있으면됨
    setEnteredNameIsTouched(true);

    // 3. 이름값이 없을떄 제출하지 않게 분기처리
    // enteredName이 빈값인 경우 제출이 안되게 수정
    // enteredName === "" 라고 작성하면 "   " 이런 경우에는 fail이 아님
    // trim() : 빈 공백을 잘라줌 -> form에서 굉장히 많이 사용됨
    if (enteredName.trim() === "") {
      console.log("submit fail");
      // 값을 입력했을때 유효하지 않으면 false를 반환
      setEnteredNameIsValid(false);
      return;
    }
    // enteredName이 항상 값을 가지고 있음
    setEnteredNameIsValid(true);
    setEnteredName("");
  };

  const nameInputBlurHandler = (event) => {
    console.log("event onBlur");
    // blur이벤트도 어쨌든 터치가 일어났기 때문에 true
    setEnteredNameIsTouched(true);

    // 빈값이면
    if (enteredName.trim() === "") {
      // 유효하지 않음
      setEnteredNameIsValid(false);
      return;
    }
  };

  // 처음에는 enteredNameIsValid가 당연히 빈값인데 에러메시지를 띄울필요가 없음
  // 에러 메시지를 보여주는 경우, true -> 메시지 노출
  // 터치까지 했는데 빈값이라면 에러메시지 노출
  const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;

  // 클래스명 동적으로 추가하기
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">당신의 이름은?</label>
        {/* 2. form 제출 및 ref 적용 */}
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
          // 초점과 관련된 속성을 다룰때 onBlur 이벤트 사용
          onBlur={nameInputBlurHandler}
        />
        {/* 4. 유효하지 않은 이름값일떄 에러 메시지 노출 */}
        {/* nameInputIsInValid가 true면 문구 뜨게 */}
        {nameInputIsInValid && (
          <p className="error-text">이름값은 빈 값이 아니어야 합니다.</p>
        )}
      </div>
      <div className="form-actions">
        <button>제출하기</button>
      </div>
    </form>
  );
};

export default SimpleInput;

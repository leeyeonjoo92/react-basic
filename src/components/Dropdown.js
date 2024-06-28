import React, { useState } from "react";

const Dropdown = ({ options }) => {
  // 옵션이 나타나고 사라지는 상태
  // 드롭다운에서는 label과 value를 구분해줘야함
  // label : 눈에 보여지는 값 (중복될수있음 ex: 이름)
  // value : 실제로 가지고 있는 값 (label이 같다고 value까지 같지 않을수도있음 ex: 한자)
  const [isOpen, setIsOpen] = useState(false);
  // 옵션 선택과 선택하지 않은 상태
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);

  const handleClick = () => {
    // console.log("isOpen", isOpen);
    // 옵션이 보이고 있으면 안보이게
    // 옵션이 안보이고 있으면 보이게
    // isOpen값으로 판단
    // (prevState) => !prevState : 기존값을 받아와서 반대값으로 바꿔준다는 뜻
    setIsOpen((prevState) => !prevState);
  };

  const handleSelect = (option) => {
    // 옵션중 하나를 선택했을때 그 값으로 바꿔줘야함
    setSelectedOption(option);
    // 옵션이 선택되면 옵션을 닫아줘야함
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleSelect(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <>
      {/* selectedOption이 null이면 선택하기를 보여주고 */}
      {/* selectedOption에 값이 있으면 label 보여주기 */}
      <div onClick={handleClick}>
        {!selectedOption ? "선택하기" : selectedOption.label}
      </div>
      {/* isOpen이 true면 옵션값들 보여주기 */}
      {isOpen && <>{renderedOptions}</>}
    </>
  );
};

export default Dropdown;

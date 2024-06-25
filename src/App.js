// 이미지파일은 경로에 확장자명이 붙음
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";

// 이미지 용량에 따라 브라우저에서 처리하는 방식이 다름
// 9.7KB가 기준
// base64는 썸네일 추출시 사용할수있음

// alexa.png (4KB)
console.log("AlexaImage :", AlexaImage);
// data:image/png;base64, ~~~~

// siri.png(57KB)
console.log("SiriImage :", SiriImage);
// /static/media/siri.e6a70a555204b3a1f6f0.png

function App() {
  return (
    <div>
      <p>hello image</p>
      <img src={AlexaImage} alt="alexa-img" width={500} height={500} />
      <img src={SiriImage} alt="siri-img" style={{ width: 500, height: 500 }} />
    </div>
  );
}

export default App;

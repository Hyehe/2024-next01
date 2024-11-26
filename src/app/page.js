// import Image from "next/image";
// import img01 from "/public/images/tree-4.jpg"

// page.js는 필수 (생략불가)
// 각 경로(/, /about, /content ..)마다 페이지를 렌더링하려면 
// 해당 경로의 page.js파일이 반드시 필요하다.


// 자식 컴포넌트  (부모 컴포넌트는 없어도 됨)
export default function Home() {
  return (
    // 해당 내용은 부모 컴포넌트의 props => {children}에 삽입된다.
    <>
      {/* <h1>WELCOME TO THE SHOW</h1> */}
      {/* 이미지 자체를 import하지 않으면 너비와 높이를 넣어줘야 한다. */}
      {/* <p><Image src="/images/tree-4.jpg" alt="눈나무" width={100} height={100} /></p> */}

      {/* 너비 높이는 선택 사항 */}
      {/* <p><Image src={img01} alt="눈나무" /></p>
      <p><Image src={img01} alt="눈나무" width={50} height={50} /></p> */}
    </>
    // <h1>Home 페이지 컨텐츠</h1> 
    // 이 줄 그대로 layout.js {children}으로 감.
  );
}

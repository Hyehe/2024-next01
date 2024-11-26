
// layout.js는 선택 (RootLayout는 필수여서 제외)
// layout이 필요없는 간단한 페이지에서는 생략 가능

import Link from "next/link";
import './gallery/gallery.css'
// import './globals.css'
// 페이지 전체의 공통 구조를 렌더링 할 때 사용한다.

// 부모 컴포넌트
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{textAlign:"center"}}>
        {/* <hader style={{marginTop: "50px"}}>공통 헤더</hader> */}
        {/* 자식 컴포넌트가 렌더링된다. */}
        {/* {children}   */}
        {/* <footer style={{marginTop: "50px"}}>공통 푸터</footer> */}
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          <li><Link href="/read/1">HTML</Link></li>  
          <li><Link href="/read/2">CSS</Link></li>
          <li><Link href="/read/3">JS</Link></li>
          <li><Link href="/gallery">image</Link></li>
          <li><Link href="/itemList">ItemList(외부서버)</Link></li>
          <li><Link href="/gallery">Guestbook(Spring 서버)</Link></li>
        </ol>
        <hr/>
        {children}
        <hr/>
        <ul>
          {/* /create 이면 create 폴더를 찾는다. 
            (page.jsx(필수), layout.jsx(선택)가 있어야 한다.) */}
          <li><Link href="/create">Create</Link></li>
          <li>Update</li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  );
}

import Image from 'next/image';
import React from 'react';
import img01 from '/public/images/photo-2.jpg'

function Page(props) {
  return (
    <>
      <h2>자식 페이지 - Create Page</h2>
      <p><Image src="/images/coffee-pink.jpg" alt='' width={100} height={100} /></p>
      <p><Image src={img01} alt='' width={100} height={100} /></p>
    </>
  );
}

export default Page;
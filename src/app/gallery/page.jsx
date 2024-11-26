import Image from 'next/image';
import React from 'react';
import './gallery.css'

function page(props) {
  return (
    <div>
        <table>
          <thead>
          <tr>
            <td><Image src="/images/bg.jpg" alt='' width={50} height={50} /><br/>야경</td>
            <td><Image src="/images/bg-dark.jpg" alt='' width={50} height={50} /><br/>별별</td>
            <td><Image src="/images/car1.jpg" alt='' width={50} height={50} /><br/>보차</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><Image src="/images/car2.jpg" alt='' width={50} height={50} /><br/>민차</td>
            <td><Image src="/images/tree-1.jpg" alt='' width={50} height={50} /><br/>나무</td>
            <td><Image src="/images/tree-2.jpg" alt='' width={50} height={50} /><br/>나무</td>
          </tr>
          </tbody>
        </table>
      <hr/>
    </div>
  );
}

export default page;
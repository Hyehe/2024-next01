import React from 'react';

import { Button } from '@mui/material';

function Page({ item }) {
  // getter, setter처럼 값이 알아서 들어간다.  이거 쓸려면 item.을 다 지우면 됨
  //const { id, name, price, image_link, description, category, product_type } = item;
  return (
    <>
      <div className='wrap'>
        <div className='img_itemimg'>
          <img src={item.image_link} alt={item.name} width={300} height={300} />
        </div>
        <div className='info_item'>
          <strong className='tit_item'>{item.name}</strong>
          {/* $ 여기선 돈 표시로 사용함 */}
          <strong className='num_price'>$ {item.price}</strong> 
          <span className='txt_info'>
            {item.category ? `${item.category}/` : ""} {item.product_type}
          </span>
          <Button variant='contained' color='success' style={{margin:"20px"}}>구매하기</Button>
          <Button variant='contained' color='error'>취소하기</Button>
        </div>
        <div className='disWrap'>
          <hr/>
          <h1 style={{margin:"20px"}}> Description</h1>
          <div style={{paddingBottom:"20px", fontSize:"24px"}}>{item.description}</div>
        </div>
      </div>
    </>
  );
}

export default Page;
"use client"
import React, { useEffect, useState } from 'react';
import './itemList.css';
import { Divider, Grid2 } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

function Page(props) {
    const [list, setList] = useState([]);  // 여러 개일 때
    const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    // const API_URL = "/makeup/v1/products.json?brand=maybelline";
    const getData = () => {
        axios.get(
            API_URL
        ).then(res => {
            // console.log(res.data)
            // setList(res.data);

            // 상위 12개 데이터만 추출
            setList(res.data.slice(0,12));

        }).catch(
            console.log("에러 발생")
        )
    }
    // 최초 한 번만 실행
    useEffect(() => {
        getData();
    }, [])
    return (
        <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
            <h2>베스트 상품</h2>
            {/* mui의 구분선: Driver */}
            <Divider />
            {/* 그리드의 기본 개수 12개 */}
            <Grid2 container spacing={2}>
                {list.map(k => {
                    // size={{xs:3}}=> 전체 12개에서 3개를 차지(한줄에 4개)
                    return <Grid2 key={k.id} size={{ xs: 3 }}>
                        <Link href={'/view/'+k.id}>
                            <img src={k.image_link} alt='' width={100} height={100} className='img_item' />
                            <strong>{k.name}</strong>
                            <span className='txt_info'>{k.category} &nbsp;&nbsp; {k.product_type}</span>
                            <strong className='num_price'>{k.price}</strong>
                        </Link>
                    </Grid2>
                })}
            </Grid2>
        </div>
    );
}

export default Page;
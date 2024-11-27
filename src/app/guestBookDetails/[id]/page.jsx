"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Detail from '@/app/detail/page';

async function Page({params}) {
  const param = await params;
  const gb_idx = params.id;
  console.log("gb_idx:",gb_idx);
  
  // const API_URL = `http://localhost:8080/api/guestBook/detail?gb_idx=${gb_idx}`;
  const API_URL = `/guestBook/detail?gb_idx=${gb_idx}`;
  
  try {
    const response = await axios.get(API_URL); 
    const item = response.data;
    return <Detail item={item}/>;
  } catch (error) {
    console.error("error:", error);
    return <div>Errora.</div>
  }

}

export default Page;
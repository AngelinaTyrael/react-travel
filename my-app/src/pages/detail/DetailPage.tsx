import React from 'react';
import { useParams } from 'react-router-dom';

export const DetailPage: React.FC = () => {
  const params = useParams();
  console.log(params)
  return (
    <div>
      <h1>旅游详情：路径id{params.touristRouteId}</h1>
    </div>
  )
}
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export const SignInPage: React.FC = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      login
      <Link to={{ pathname: '/signIn/123' }}>xiangqing</Link>
    </div>
  )
}
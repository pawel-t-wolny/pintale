import React from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

const Login = () => {
  const user = false

  return (
    <div>
      {user ? (
        <div>Logged in</div>
      ) : (
        <GoogleLogin
          onSuccess={(response) => console.log(response)}
          onError={() => console.log('Error')}
        />
      )}
    </div>
  )
}

export default Login
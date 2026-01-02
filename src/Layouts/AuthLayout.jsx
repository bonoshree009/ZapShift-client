import React from 'react';
import Logo from '../Component/Logo/Logo';
import authimg from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div>
            <Logo></Logo>
            <div className='flex'>
                <div className='flex-1'></div>
                <div className='flex-1'>
                    <img src={authimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
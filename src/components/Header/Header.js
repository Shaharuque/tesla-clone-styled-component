import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div style={{display:'flex', justifyContent:'end',padding:'10px 10px',backgroundColor:'#c653c6'}}>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/main'>Section</CustomLink>
        </div>
    );
};

export default Header;
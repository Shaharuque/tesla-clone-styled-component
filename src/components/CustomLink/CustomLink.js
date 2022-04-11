
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div style={{marginRight:'10px',fontFamily: 'serif',fontWeight:'bold'}}>
            <Link
                style={{color:match?'purple':'white' ,textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && " "}
        </div>
    );
};

export default CustomLink;
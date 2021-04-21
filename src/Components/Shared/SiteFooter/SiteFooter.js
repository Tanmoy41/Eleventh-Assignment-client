import React from 'react';

const SiteFooter = ({ footer }) => {
    const { title, link } = footer;
    return (
        <div>
            <li style={{ listStyle: 'none' }}>
                <a href={link} className="text-decoration-none" style={{ color: 'black' }}>
                    {title}
                </a>
            </li>
        </div>
    );
};

export default SiteFooter;
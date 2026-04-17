import React from 'react';
import './ApproachBadge.css';

const ApproachBadge = ({ children }) => {
    return (
        <span className="approach-badge">
            {children}
        </span>
    );
};

export default ApproachBadge;

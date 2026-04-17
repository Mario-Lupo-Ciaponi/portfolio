import React from 'react';
import ApproachBadge from '../ApproachBadge/ApproachBadge';
import './ApproachHeader.css';

const ApproachHeader = () => {
    return (
        <div className="approach-header">
            <ApproachBadge>My Approach</ApproachBadge>
            <h2 className="approach-header__title">How I Work</h2>
            <p className="approach-header__subtitle">
                Core principles that guide my development process and ensure quality results
            </p>
        </div>
    );
};

export default ApproachHeader;

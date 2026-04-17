import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ApproachCard.css';

const ApproachCard = ({ icon, title, description }) => {
    return (
        <div className="approach-card">
            <div className="approach-card__icon-wrapper">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="approach-card__title">{title}</h3>
            <p className="approach-card__description">{description}</p>
        </div>
    );
};

export default ApproachCard;

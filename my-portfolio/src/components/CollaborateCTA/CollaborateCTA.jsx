import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './CollaborateCTA.css';

const CollaborateCTA = () => {
    return (
        <div className="collaborate-cta">
            <div className="collaborate-cta__card">
                <div className="collaborate-cta__icon-wrapper">
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="collaborate-cta__content">
                    <h3 className="collaborate-cta__title">Ready to collaborate</h3>
                    <p className="collaborate-cta__text">Let's build something great together</p>
                </div>
            </div>
        </div>
    );
};

export default CollaborateCTA;

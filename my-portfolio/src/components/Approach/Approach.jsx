import React from 'react';
import ApproachHeader from '../ApproachHeader/ApproachHeader';
import ApproachCard from '../ApproachCard/ApproachCard';
import CollaborateCTA from '../CollaborateCTA/CollaborateCTA';
import { approachData } from '../../data/approachData';
import './Approach.css';

const Approach = () => {
    return (
        <section className="approach" id="approach">
            <div className="approach__container">
                <ApproachHeader />
                <div className="approach__grid">
                    {approachData.map((item, index) => (
                        <ApproachCard 
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
                <CollaborateCTA />
            </div>
        </section>
    );
};

export default Approach;

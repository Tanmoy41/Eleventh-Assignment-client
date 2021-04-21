import React from 'react';
import './Features.css';
import EasyTravel from '../../Images/EasyTravel.jpg';
import BudgetFriendly from '../../Images/BudgetFriendly.jpg';
import TravelRequest from '../../Images/TravelRequest.jpg';
import AdvancedReporting from '../../Images/AdvancedReporting.jpg';
import FeatureDetail from '../FeatureDetail/FeatureDetail';

const featureData = [
    {
        id: 1,
        title: 'Easy Travel Booking',
        image: EasyTravel
    },
    {
        id: 2,
        title: 'Budget friendly',
        image: BudgetFriendly
    },
    {
        id: 3,
        title: 'Travel Request',
        image: TravelRequest
    },
    {
        id: 4,
        title: 'Advanced Reporting',
        image: AdvancedReporting
    }
]

const Features = () => {
    return (
        <section className="feature-container p-5">
            <h2 className="text-uppercase fw-bold text-white">No matter Where in the world you want to go, We can help get you there.</h2>
            <h3 className="mt-3 text-white">Our Features</h3>
            <div className="d-flex justify-content-center">
                <div className="row mt-3">
                    {
                        featureData.map(feature => <FeatureDetail key={feature.id} feature={feature}></FeatureDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;
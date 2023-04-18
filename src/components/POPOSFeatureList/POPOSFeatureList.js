import React from 'react';
import POPOSFeature from '../POPOSFeature/POPOSFeature.js';
import './POPOSFeatureList.css';

// This component will take an array of strings and return an array of POPOSFeature components.
function POPOSFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <POPOSFeature key={feature} name={feature} />
    })
	return (
    <section className="POPOSFeatureList">{icons}</section>
    )
}

export default POPOSFeatureList;
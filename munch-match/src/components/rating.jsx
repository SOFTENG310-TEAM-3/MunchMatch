import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Rating = ({value, total}) => {

    // Calculates how many stars should be displayed
    const fullStars = Math.floor(value);
    const hasHalf = value - fullStars !== 0;

    const stars = [];

    // Add the neccessary stars
    for(let i = 0; i < 5; i++) {
        if (i < fullStars){
            stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
        } else if (i === fullStars && hasHalf){
            stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} />);
        } else {
            stars.push(<FontAwesomeIcon icon={faStar} key={i} className="emptyStar"/>);
        }
    }

    return (
        <div className="rating">
            {stars}
        <span className="rating-value"> {value} ({total} Reviews) </span>
        </div>
    );
}

export default Rating;
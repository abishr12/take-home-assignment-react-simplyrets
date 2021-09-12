import React from  "react";
import PropertyDetails from "./PropertyDetails";
import HeartFill from "../assets/heart-fill.svg"
import HeartStroke from "../assets/heart-stroke.svg"

const convertToDisplayPrice = (listPrice) => listPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const PropertyTile = ({ details, favoritedList, setFavoritedList }) => {
    const {property: {area, bedrooms, bathsFull, bathsHalf}, address: {streetNumberText, streetName, city, state }, listDate, listPrice, listingId, photos} = details;

    const photoSrc = photos[0]
    const bathrooms = bathsFull + bathsHalf * 0.5
    const propertyDesc = `${bedrooms} BR | ${bathrooms} Bath | ${area} Sq Ft`
    const propertyDescAriaLabel = `${bedrooms} bedrroms , ${bathrooms} bathrooms , ${area} square feet`
    const displayPrice = convertToDisplayPrice(listPrice)
    const address = `${streetNumberText} ${streetName}, ${city}, ${state}`
    const listingDate = new Date(listDate).toLocaleDateString('en-US')
    const isFavorited = favoritedList[listingId]


    return (
        <div className="propertyTile">
            <div className="houseTop">

                <img className="houseImage" src={photoSrc} alt="houseImage" />
                <img className="favoriteIcon" onClick={() => setFavoritedList({...favoritedList, [listingId]: !isFavorited})} src={isFavorited ? HeartFill : HeartStroke} alt="favoriteIcon"/>
            </div>
            <PropertyDetails
                propertyDescAriaLabel={propertyDescAriaLabel}
                propertyDesc={propertyDesc}
                displayPrice={displayPrice}
                address={address}
                listingDate={listingDate}
            />
        </div>
    )
    
} 

export default PropertyTile;
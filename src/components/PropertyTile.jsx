import React, {useState} from  "react";
import PropertyDetails from "./PropertyDetails";
import HeartFill from "../assets/heart-fill.svg"
import HeartStroke from "../assets/heart-stroke.svg"

const convertToDisplayPrice = (listPrice) => listPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const PropertyTile = ({ details, favoritedList, setFavoritedList }) => {
    const {property: {area, bedrooms, bathsFull, bathsHalf, bathsThreeQuarter}, address: {streetNumberText, streetName, city, state }, listDate, listPrice, listingId, photos} = details;
    const photoSrc = photos[0]
    const bathrooms = bathsFull + bathsHalf * 0.5 + bathsThreeQuarter * 0.75
    const propertyDesc = `${bedrooms} BR | ${bathrooms} Bath | ${area} Sq Ft`
    const displayPrice = convertToDisplayPrice(listPrice)
    const address = `${streetNumberText} ${streetName}, ${city}, ${state}`
    const listingDate = new Date(listDate).toLocaleDateString('en-US')
    const isFavorited = favoritedList[listingId]
    console.log('listingId', listPrice)


    return (
        <div className="propertyTile">
            <div>

                <img className="houseImage" src={photoSrc} alt="houseImage" />
                <img className="favoriteIcon" onClick={() => setFavoritedList({...favoritedList, [listingId]: !isFavorited})} src={isFavorited ? HeartFill : HeartStroke} alt="likeIcon"/>
            </div>
            <PropertyDetails
                propertyDesc={propertyDesc}
                displayPrice={displayPrice}
                address={address}
                listingDate={listingDate}
            />
        </div>
    )
    
} 

export default PropertyTile;
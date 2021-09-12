

const PropertyDetails = ({propertyDesc, displayPrice, address, listingDate}) => {

    return(
        <div className="description">
            <div className="propertyDesc">{propertyDesc}</div>
            <div className="displayPrice">${displayPrice}</div>
            <div className="address" >{address}</div>
            <div className="listingDate">Listed: {listingDate}</div>
        </div>
    )
}

export default PropertyDetails
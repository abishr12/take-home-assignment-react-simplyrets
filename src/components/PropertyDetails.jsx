

const PropertyDetails = ({propertyDesc, displayPrice, address, listingDate, propertyDescAriaLabel}) => {

    return(
        <div className="description">
            <div aria-label={propertyDescAriaLabel} className="propertyDesc">{propertyDesc}</div>
            <div className="displayPrice">${displayPrice}</div>
            <div className="address" >{address}</div>
            <div className="listingDate">Listed: {listingDate}</div>
        </div>
    )
}

export default PropertyDetails
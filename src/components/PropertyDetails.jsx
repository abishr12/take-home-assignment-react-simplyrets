

const PropertyDetails = ({propertyDesc, displayPrice, address, listingDate}) => {

    return(
        <div className="description">
         <div>{propertyDesc}</div>
            <div>${displayPrice}</div>
            <div>{address}</div>
            <div>Listed: {listingDate}</div>
        </div>
    )
}

export default PropertyDetails
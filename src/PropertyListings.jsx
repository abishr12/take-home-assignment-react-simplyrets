import React, {useState, useEffect} from  "react";
import PropertyTile from "components/PropertyTile";

var auth = window.btoa("simplyrets:simplyrets");
const PropertyListings = () => {

    const [propList, setPropList] = useState([]);
    const [favoritedList, setFavoritedList] = useState({});

    useEffect(() => {
        const cachedProperties = JSON.parse(localStorage.getItem('properties'));
        const cachedFavoritedProperties = JSON.parse(localStorage.getItem('favoritedProperties'))

        if(cachedProperties.length) {
            return setPropList(cachedProperties)
        } else {
            fetch('https://api.simplyrets.com/properties', {
                type: 'GET',
                dataType: 'json',
                headers: {
                    "Authorization": `Basic ${auth}`
                }
            }).then(res => res.json())
            .then(result => {
                console.log('result', result)
                localStorage.setItem('properties', JSON.stringify(result))
                return setPropList(result);
            })
        }

        if(cachedFavoritedProperties) {
            setFavoritedList(cachedFavoritedProperties)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favoritedProperties', JSON.stringify(favoritedList))
    }, [favoritedList])

    return (
        <>
        <div className="title">Property Listings</div>
        <div className="propertyList">

        {
            propList.length ?
            propList.map((details, idx) =>
            <PropertyTile
                favoritedList={favoritedList}
                setFavoritedList={setFavoritedList} 
                key={`${details.listingId}-${idx}`} 
                details={details} 
            />
            )
                 : <div>Loading...</div>
        }
        </div>
        </>
    )
}

export default PropertyListings;
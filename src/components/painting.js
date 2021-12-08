import PropTypes from "prop-types";

export default function Painting({
    url,
    title,
    profileUrl,
    author,
    price,
    quantity
}){
    return (
    <div>
        <img src = {url} alt={title} width="480"/>
        <h2>{title}</h2>
        <p>
            Author: <a href={profileUrl}>{author}</a>
        </p>
        <p>
            Price: {price}, UAH
        </p>
        <p>
            Availability: {quantity<10? "ends": "is avalible"}
        </p>
        <button>Add to cart</button>
    </div>
    )
}

Painting.propTypes={
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profileUrl:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    quantity:PropTypes.number.isRequired,
}
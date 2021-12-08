import Painting from "./painting";
import PropTypes from "prop-types";

function PaitingList({items}){
    return (
<ul>{items.map(item => 
(<li key={item.id}>
    <Painting 
        
        url={item.url} 
        title={item.title} 
        profileUrl={item.author.url}
        author={item.author.tag}
        price={item.price}
        quantity={item.quantity}
        />
</li>))}</ul>)
}
PaitingList.propTypes={
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
};

export default PaitingList;
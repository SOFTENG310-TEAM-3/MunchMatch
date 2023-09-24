const FoodOptionButton = ({ foodOption, onClick }) => {
    return (
        <button className="button" onClick={() => onClick(foodOption)}>
            <img className="food" src={require(`../images/${foodOption}.png`)} alt={foodOption} />
        </button>
    );
}

export default FoodOptionButton;
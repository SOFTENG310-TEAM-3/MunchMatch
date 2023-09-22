const FoodOptionButton = ({ foodOption }) => {
    return (
        <button className="button" onClick={() => this.onButtonClick(foodOption)}>
            <img className="food" src={require(`../images/${foodOption}.png`)} alt={foodOption} />
        </button>
    );
}

export default FoodOptionButton;
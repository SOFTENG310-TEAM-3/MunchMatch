const FoodOptionButton = ({ foodOption, disabled, onClick }) => {

    return (
        <button className={`button ${disabled ? "disabledButton" : ""}`} disabled={disabled} onClick={() => onClick(foodOption)}>
            <img className={`food ${disabled ? "disabled" : ""}`} src={require(`../images/${foodOption}.png`)} alt={foodOption} />
        </button>
    );
}

export default FoodOptionButton;
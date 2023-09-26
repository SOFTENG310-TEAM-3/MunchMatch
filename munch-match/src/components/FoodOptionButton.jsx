const FoodOptionButton = ({ imageDisabledStyle, buttonDisabledStyle, foodOption, disabled, onClick }) => {
    const buttonClassNames = "button " + buttonDisabledStyle;
    const imageClassNames = "food " + imageDisabledStyle;

    return (
        <button className={buttonClassNames} disabled={disabled} onClick={() => onClick(foodOption)}>
            <img className={imageClassNames} src={require(`../images/${foodOption}.png`)} alt={foodOption} />
        </button>
    );
}

export default FoodOptionButton;
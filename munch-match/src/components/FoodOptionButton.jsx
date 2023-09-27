import styles from "./FoodOptionButton.module.css"

const FoodOptionButton = ({ foodOption, disabled, onClick }) => {

    return (
        <button className={`${styles.button} ${disabled ? "disabledButton" : ""}`} disabled={disabled} onClick={() => onClick(foodOption)}>
            <img className={`${styles.food} ${disabled ? "disabled" : ""}`} src={require(`../images/${foodOption}.png`)} alt={foodOption} />
        </button>
    );
}

export default FoodOptionButton;
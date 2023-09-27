import styles from "./FoodOptionButton.module.css"

const FoodOptionButton = ({ foodOption, onClick }) => {
    return (
        <button className={styles.button} onClick={() => onClick(foodOption)}>
            <img className={styles.food} src={require(`../images/${foodOption}.png`)} alt={foodOption} />
        </button>
    );
}

export default FoodOptionButton;
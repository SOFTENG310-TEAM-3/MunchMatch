const quizQuestions = [
    {
        id: "0",
        question: "Sweet or Savoury?",
        options: [
            {
                answer: "Sweet",
                disables: ["burger", "pizza", "chicken", "sushi"],
            },
            {
                answer: "Savoury",
                disables: ["fruit", "dessert"],
            }
        ],
    },
    {
        id: "1",
        question: "Hot or Cold?",
        options: [
            {
                answer: "Hot",
                disables: ["dessert", "fruit", "sushi"],
            },
            {
                answer: "Cold",
                disables: ["burger", "pizza", "chicken"],
            }
        ],
    },
    {
        id: "2",
        question: "Big Feed or Little Treat?",
        options: [
            {
                answer: "Big Feed",
                disables: ["dessert", "fruit", "bakery"],
            },
            {
                answer: "Little Treat",
                disables: ["burger", "pizza", "chicken"],
            }
        ],
    },
    {
        id: "3",
        question: "Healthy or Cheat Day?",
        options: [
            {
                answer: "Healthy",
                disables: ["dessert", "burger", "pizza", "chicken"],
            },
            {
                answer: "Cheat Day",
                disables: ["fruit"],
            }
        ],
    },
    {
        id: "4",
        question: "Vegetarian/Vegan?",
        options: [
            {
                answer: "No",
            },
            {
                answer: "Yes",
                disables: ["chicken"],
            }
        ],
    }

];

export default quizQuestions;
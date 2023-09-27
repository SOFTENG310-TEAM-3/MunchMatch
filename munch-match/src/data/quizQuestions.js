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
                disables: ["fruit", "dessert", "bakery"],
            }
        ],
    },
    {
        id: "1",
        question: "Big Feed or Little Treat?",
        options: [
            {
                answer: "Big Feed",
                disables: ["dessert", "fruit"],
            },
            {
                answer: "Little Treat",
                disables: ["burger", "pizza", "chicken"],
            }
        ],
    },
];

export default quizQuestions;
// QuizDecksService.ts
import { DeckDataInterface } from "./DecksContext";

const getTestQuizDeckData = async (): Promise<DeckDataInterface[]> => {
    // Implement logic to fetch data from an API or any other source
    // For now, using a mock data
    const mockData: DeckDataInterface[] = [{
      id: "123456",
      baseData: {
        name: "Example Deck",
        description: "This is an example deck for testing.",
        level: "Intermediate",
        authorName: "John Doe",
        authorID: "7890",
        numOfCards: 4,
        creationDate: new Date("2023-10-10"),
        //creationDate: new Date("2000-01-17T16:45:30"),
      },
      questionData: [
        {
          QuestionText: "What is the capital of France?",
          CorrectAnswer: "Paris",
          WrongAnswerOptions: ["Berlin", "London", "Madrid"],
        },
        {
          QuestionText: "In which year did World War II end?",
          CorrectAnswer: "1945",
          WrongAnswerOptions: ["1918", "1939", "1950"],
        },
        {
          QuestionText: "What is the capital of Germany?",
          CorrectAnswer: "Paris",
          WrongAnswerOptions: ["Berlin", "London", "Madrid"],
        },
        {
          QuestionText: "In which year did World War I end?",
          CorrectAnswer: "1945",
          WrongAnswerOptions: ["1918", "1939", "1950"],
        },
        // Add more questions as needed
      ],
    },    
    {
      id: "789012",
      baseData: {
        name: "React Basics",
        description: "A deck for learning the basics of React.",
        level: "Beginner",
        authorName: "Jane Smith",
        authorID: "5678",
        numOfCards: 2,
        creationDate: new Date("2023-08-15"),
      },
      questionData: [
        {
          QuestionText: "What is JSX?",
          CorrectAnswer: "JavaScript XML",
          WrongAnswerOptions: ["JSON", "XML", "HTML"],
        },
        {
          QuestionText: "What is the purpose of React Router?",
          CorrectAnswer: "Navigation",
          WrongAnswerOptions: ["State management", "Data fetching", "Styling"],
        },
      ],
    },
    {
      id: "345678",
      baseData: {
        name: "Advanced JavaScript",
        description: "A deck for mastering advanced JavaScript concepts.",
        level: "Advanced",
        authorName: "Alice Johnson",
        authorID: "4567",
        numOfCards: 2,
        creationDate: new Date("2023-05-20"),
      },
      questionData: [
        {
          QuestionText: "What is a closure in JavaScript?",
          CorrectAnswer: "A function with access to outer scope variables",
          WrongAnswerOptions: [
            "A JavaScript library",
            "A data structure",
            "A conditional statement",
          ],
        },
        {
          QuestionText: "What is the purpose of the 'apply' method?",
          CorrectAnswer: "Invoke a function with a given 'this' value",
          WrongAnswerOptions: [
            "Apply styles to HTML elements",
            "Apply a mathematical operation",
            "Apply a filter to an array",
          ],
        },
      ],
    },
    {
      id: "901234",
      baseData: {
        name: "Data Structures",
        description: "A deck covering various data structures in programming.",
        level: "Intermediate",
        authorName: "Bob Miller",
        authorID: "1234",
        numOfCards: 2,
        creationDate: new Date("2023-09-28"),
      },
      questionData: [
        {
          QuestionText: "What is an array?",
          CorrectAnswer: "An ordered list of values",
          WrongAnswerOptions: [
            "A type of loop",
            "A conditional statement",
            "A database table",
          ],
        },
        {
          QuestionText: "What is the purpose of a linked list?",
          CorrectAnswer: "Dynamic data storage with easy insertion and deletion",
          WrongAnswerOptions: [
            "Sorting data",
            "Performing mathematical operations",
            "Creating graphical user interfaces",
          ],
        },
      ],
    },
    // Add three more data entries following the same structure...
  ];
  

  
    return Promise.resolve(mockData);

  };
  
  export { getTestQuizDeckData };
  
   
  
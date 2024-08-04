const qst = document.getElementById('qst');
const trueBtn = document.getElementById('true-btn');
const falseBtn = document.getElementById('false-btn');
const nextBtn = document.getElementById('next-btn');

const Data = [
  {
    question: 'Is JavaScript a programming language?',
    answer: true,
    description:
      'JavaScript is indeed a programming language used to create dynamic web content.',
  },
  {
    question: 'Does JavaScript support OOP concepts?',
    answer: true,
    description:
      'JavaScript supports Object-Oriented Programming (OOP) concepts like inheritance, encapsulation, and polymorphism.',
  },
  {
    question: 'Is JavaScript the same as Java?',
    answer: false,
    description:
      'JavaScript and Java are distinct languages, each with its own syntax, use cases, and features.',
  },
  {
    question: 'Can JavaScript be used for server-side programming?',
    answer: true,
    description:
      'JavaScript can be used for server-side programming, especially with environments like Node.js.',
  },
  {
    question: 'Is CSS a programming language?',
    answer: false,
    description:
      'CSS is not a programming language; it is a style sheet language used for describing the presentation of a document written in HTML or XML.',
  },
];

let index = 0;

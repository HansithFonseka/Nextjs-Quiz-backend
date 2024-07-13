const Answer = require('../models/Answer');

const calculateDepression = async (req, res) => {
  const { answers } = req.body;

  // Save answers to the database
  const newAnswer = new Answer({ answers });
  await newAnswer.save();

  // Placeholder logic for calculating depression type
  const score = answers.reduce((acc, answer) => {
    if (answer === 'Nearly every day') return acc + 3;
    if (answer === 'More than half the days') return acc + 2;
    if (answer === 'Several days') return acc + 1;
    return acc;
  }, 0);

  let type;
  let instructions;

  if (score >= 20) {
    type = 'Severe';
    instructions = 'Seek professional help immediately.';
  } else if (score >= 10) {
    type = 'Moderate';
    instructions = 'Consider talking to a therapist.';
  } else {
    type = 'Mild';
    instructions = 'Maintain a healthy lifestyle and monitor your feelings.';
  }

  res.json({ type, instructions });
};

module.exports = {
  calculateDepression
};

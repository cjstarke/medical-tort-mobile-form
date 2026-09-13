export type QuestionOptions = {
  name: string;
  value: string;
};

export type QuestionObject = {
  question: string;
  options: QuestionOptions[];
  type: string;
};

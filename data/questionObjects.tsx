import herniaMeshInjuries from './herniaMeshInjuries.json'
import { hmQuestions } from './hmQuestions'

export const herniaMeshQuestionObjects = [
  {
    question: hmQuestions[0],
    options: [
      { name: 'Yes', value: 'Yes' },
      { name: 'No', value: 'No' },
    ],
    type: 'dropdown',
  },
  {
    question: hmQuestions[1],
    options: herniaMeshInjuries,
    type: 'dropdown',
  },
  {
    question: hmQuestions[2],
    options: [
      { name: 'Yes', value: 'Yes' },
      { name: 'No', value: 'No' },
    ],
    type: 'radio',
  },
]
export const attorneyQuestion = {
  question: 'Are you currently represented by an attorney?',
  options: [
    { name: 'Yes', value: 'Yes' },
    { name: 'No', value: 'No' },
  ],
  type: 'radio',
}

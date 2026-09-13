export function isHerniaMeshKnockout(answers: any) {
  return (
    answers.question1.value === 'No' ||
    answers.question2.value === 'None of the above' ||
    answers.question3.value === 'No' ||
    answers.questionAttorney.value === 'Yes'
  )
}

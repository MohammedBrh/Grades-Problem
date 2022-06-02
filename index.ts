function gradingStudents(grades: number[]): number[] {
  // Write your code here
  let result:number[] = [];
  grades.forEach((grade) => {
    const theNextMultipleFive = getTheNextMutiple5(grade);
    if (isTheDiferenceLessThen3(grade, theNextMultipleFive) && grade>37 ) {
      result.push(theNextMultipleFive);
    } else {
      result.push(grade);
    }
  });
  return result;
}

function getTheNextMutiple5(grade: number): number {
  let nextMultiple5:number = grade;
  if (grade % 5 == 0) return nextMultiple5;
  for (let i = 0; i < 5; i++) {
    nextMultiple5++;
    if (nextMultiple5 % 5 == 0) break;
  }
  return nextMultiple5;
}

function isTheDiferenceLessThen3(number1: number, number2: number): boolean {
  return Math.abs(number1 - number2) < 3;
}

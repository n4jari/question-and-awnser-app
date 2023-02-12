export const pointCalculate = (awnser, user) => {
  let points = 0;

  if (awnser.q1 === user.q1) {
    points++;
  }
  if (awnser.q2 === user.q2) {
    points++;
  }
  if (awnser.q3 === user.q3) {
    points++;
  }
  if (awnser.q4 === user.q4) {
    points++;
  }
  if (awnser.q5 === user.q5) {
    points++;
  }
  if (awnser.q6 === user.q6) {
    points++;
  }
  if (awnser.q7 === user.q7) {
    points++;
  }
  if (awnser.q8 === user.q8) {
    points++;
  }
  if (awnser.q9 === user.q9) {
    points++;
  }
  if (awnser.q10 === user.q10) {
    points++;
  }
  if (awnser.q11 === user.q11) {
    points++;
  }
  if (awnser.q12 === user.q12) {
    points++;
  }
  if (awnser.q13 === user.q13) {
    points++;
  }
  if (awnser.q14 === user.q14) {
    points++;
  }
  if (awnser.q15 === user.q15) {
    points++;
  }
  if (awnser.q16 === user.q16) {
    points++;
  }
  if (awnser.q17 === user.q17) {
    points++;
  }
  if (awnser.q18 === user.q18) {
    points++;
  }
  if (awnser.q19 === user.q19) {
    points++;
  }
  if (awnser.q20 === user.q20) {
    points++;
  }
  if (awnser.q21 === user.q21) {
    points++;
  }
  if (awnser.q22 === user.q22) {
    points++;
  }
  if (awnser.q23 === user.q23) {
    points++;
  }
  if (awnser.q24 === user.q24) {
    points++;
  }
  if (awnser.q25 === user.q25) {
    points++;
  }
  return { ...awnser, targetUser: user.username, points: points * 4 };
};

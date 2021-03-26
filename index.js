const leapYear = false;

const monthDays = [
  31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

const fillerPsalms = [23, 27, 88, 86, 9, 55, 57];

const getPsalmForDay = (month, day) => {
  const index = month <= 5 ? month - 1 : (month - 1) % 5;
  const offset = monthDays[month - 1] * index;
  const psalm = offset + day;
  return psalm > 150 ? fillerPsalms[psalm - 150] : psalm;
};

const url = (psalm) => `https://www.biblegateway.com/passage/?search=Psalm%20${psalm}&version=NABRE&interface=print`;

let output;

for (let i = 1; i <= 12; i++) {
  for (let j = 1; j <= monthDays[i - 1]; j++) {
    const psalm = getPsalmForDay(i, j);
    const link = url(psalm);
    output += `${i}/${j} Psalm ${psalm}\n${link}\n\n`;
  }
}

process.stdout.write(output);

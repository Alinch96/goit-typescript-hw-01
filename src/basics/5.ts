enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek): boolean => {
    if (day === 5 || day === 6) return true;
    return false;
}

console.log(isWeekend(DayOfWeek.Sunday));
console.log(isWeekend(DayOfWeek.Saturday));
console.log(isWeekend(DayOfWeek.Monday));
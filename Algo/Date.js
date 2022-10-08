const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
const curr = new Date();
const first = curr.getDate();

const last = first - 7;
const month = (curr.getMonth() - first) - 1;
const year = (curr.getFullYear())
const lyear = (curr.getFullYear()) - 1

const firstday = new Date(curr.setDate(first)).toLocaleDateString("en-NG").split("/").join("-");
console.log(firstday)
const thisYear = new Date(curr.setFullYear(year))

const lastday = new Date(curr.setDate(last));
const lastMonth = new Date(curr.setDate(month)).toLocaleDateString("en-NG").split("/").join("-");
const lastYear = new Date(curr.setFullYear(lyear)).toLocaleDateString("en-NG").split("/").join("-")


console.log('firstday', firstday)
console.log('lastday:',lastday.toLocaleDateString("en-NG").split("/").join("-"))
console.log('month:',lastMonth.toLocaleDateString("en-NG").split("/").join("-"))
console.log('this year:',thisYear.toLocaleDateString("en-NG").split("/").join("-"))
console.log('last year:', lastYear)
let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Jack', salary: 1300}]
  },
  marketing: [{name: 'John1', salary: 1}, {name: 'Alice1', salary: 0}]
}
function getTotalScore(company) {
  let total = 0

  for(let i in company) {
    if(Array.isArray(company[i])) {
      total += company[i].reduce((summ, employee) => summ += employee.salary, 0)
    }

    else if (typeof company[i] == 'object') {
      total += getTotalScore(company[i])
    }
  }
  return total
}

console.log(getTotalScore(company))

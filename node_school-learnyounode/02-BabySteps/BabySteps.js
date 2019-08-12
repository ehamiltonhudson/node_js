function babySteps() {
  let nums = process.argv.slice(2)
  let sum = 0
  nums.forEach(num => sum = sum + Number(num))
  console.log(sum)
}

babySteps()

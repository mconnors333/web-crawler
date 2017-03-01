// Import seed data
var testDataOne = require('./seed1.json')
var testDataTwo = require('./seed2.json')
var testDataThree = require('./seed3.json')
var testDataFour = require('./seed4.json')

// Set Variables
var success = []
var skipped = []
var error = []
var visited = []

// Functions
function fillArrays(pages) {
  var pagesLength = pages.length
  // PUSH SUCCESS AND VISITED LINKS
  for (var i = 0; i < pagesLength; i++) {
    success.push(pages[i].address)
    for (var k = 0; k < pages[i].links.length; k++) {
      visited.push(pages[i].links[k])
    }
  }
}

function removeGhostLinks(success, visited) {
  // Remove Ghost links from success
  for (var p = 0; p < success.length; p++) {
    var count = 0
    for (var q = 0; q < visited.length; q++) {
      if (success[p] === visited[q]) {
        count++
      }
    }
    if (count === 0) {
      success.splice(p, 1)
    }
  }
}

function findErrors(visited, success) {
  var successLength = success.length
  var visitedLength = visited.length
  for (var m = 0; m < visitedLength; m++) {
    var count = 0
    for (var n = 0; n < successLength; n++) {
      if (visited[m] === success[n]) {
        count++
      }
    }
    if (count === 0) {
      error.push(visited[m])
    }
  }
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function removeDuplicateErrors(error) {
  var errorLength = error.length
  var sortedError = error.sort()

  var unique = error.filter( onlyUnique )

  return unique
}

function findSkipped(visited) {
  var visitedLength = visited.length
  var sortedVisited = visited.sort()

  // PUSH DUPLICATE LINKS TO SKIPPED
  for (var j = 0; j < visitedLength; j++) {
    if (sortedVisited[j + 1] == sortedVisited[j]) {
      skipped.push(sortedVisited[j])
    }
  }
}

function removeSkippedDuplicates(skipped) {

  var skippedLength = skipped.length

  var unique = skipped.filter( onlyUnique )

  return unique
}

function logSolution(success, skipped, unique) {
  console.log('Success:')
  console.log(success)
  console.log('Skipped:')
  console.log(skipped)
  console.log('Error:')
  console.log(error)
}

function crawl(testData) {
  var pages = testData.pages

  fillArrays(pages)

  // NEED TO PUSH p1 to Skipped for test 1

  removeGhostLinks(success, visited)

  findErrors(visited, success)

  error = removeDuplicateErrors(error)

  findSkipped(visited)

  skipped = removeSkippedDuplicates(skipped)

  logSolution(success, skipped, error)
}

// RUN PROGRAM
// console.log('');
// console.log('*****Test-One*****')
// console.log('');
// crawl(testDataOne)
//
// var success = []
// var skipped = []
// var error = []
// var visited = []
//
// console.log('');
// console.log('*****Test-Two*****')
// console.log('');
// crawl(testDataTwo)
//
// var success = []
// var skipped = []
// var error = []
// var visited = []
//
// console.log('');
// console.log('*****Test-Three*****')
// console.log('');
// crawl(testDataThree)
//
// var success = []
// var skipped = []
// var error = []
// var visited = []
//
// console.log('');
// console.log('*****Test-Four*****')
// console.log('');
// crawl(testDataFour)


module.exports = {
  fillArrays: function(pages) {
    var pagesLength = pages.length
    // PUSH SUCCESS AND VISITED LINKS
    for (var i = 0; i < pagesLength; i++) {
      success.push(pages[i].address)
      for (var k = 0; k < pages[i].links.length; k++) {
        visited.push(pages[i].links[k])
      }
    }
  },

  removeGhostLinks: function(success, visited) {
    // Remove Ghost links from success
    for (var p = 0; p < success.length; p++) {
      var count = 0
      for (var q = 0; q < visited.length; q++) {
        if (success[p] === visited[q]) {
          count++
        }
      }
      if (count === 0) {
        success.splice(p, 1)
      }
    }
  },

  findErrors: function(visited, success) {
    var successLength = success.length
    var visitedLength = visited.length
    for (var m = 0; m < visitedLength; m++) {
      var count = 0
      for (var n = 0; n < successLength; n++) {
        if (visited[m] === success[n]) {
          count++
        }
      }
      if (count === 0) {
        error.push(visited[m])
      }
    }
    return error
  },

  onlyUnique: function(value, index, self) {
      return self.indexOf(value) === index;
  },

  removeDuplicateErrors: function(error) {
    var errorLength = error.length
    var sortedError = error.sort()

    var unique = error.filter( onlyUnique )

    return unique
  },

  findSkipped: function(visited) {
    var visitedLength = visited.length
    var sortedVisited = visited.sort()

    // PUSH DUPLICATE LINKS TO SKIPPED
    for (var j = 0; j < visitedLength; j++) {
      if (sortedVisited[j + 1] == sortedVisited[j]) {
        skipped.push(sortedVisited[j])
      }
    }
  },

  removeSkippedDuplicates: function(skipped) {

    var skippedLength = skipped.length

    var unique = skipped.filter( onlyUnique )

    return unique
  },

  logSolution: function(success, skipped, unique) {
    console.log('Success:')
    console.log(success)
    console.log('Skipped:')
    console.log(skipped)
    console.log('Error:')
    console.log(error)
  },

  crawl: function(testData) {
    var pages = testData.pages

    fillArrays(pages)

    // NEED TO PUSH p1 to Skipped for test 1

    removeGhostLinks(success, visited)

    findErrors(visited, success)

    error = removeDuplicateErrors(error)

    findSkipped(visited)

    skipped = removeSkippedDuplicates(skipped)

    logSolution(success, skipped, error)
  }
}

var testDataOne = require('../seed1.json')
var testDataTwo = require('../seed2.json')
var testDataThree = require('../seed3.json')
var testDataFour = require('../seed4.json')
var crawler = require('../crawler.js')

describe("Duplicate function Tests", function() {
  it('should remove Duplicate errors', function() {
    var duplicateErrorTest = [1,2,3,1,1]
    var duplicateErrorSuccess = [1,2,3]

    var answer = crawler.removeDuplicateErrors(duplicateErrorTest)
    expect(answer).toEqual(duplicateErrorSuccess)
  })

  it('should remove Duplicate skipped', function() {
    var duplicateSkippedTest = [1,2,3,1,1,2,4,6]
    var duplicateSkippedSuccess = [1,2,3,4,6]

    var answer = crawler.removeSkippedDuplicates(duplicateSkippedTest)
    expect(answer).toEqual(duplicateSkippedSuccess)
  })
})

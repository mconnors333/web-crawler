var testDataOne = require('../seed1.json')
var testDataTwo = require('../seed2.json')
var testDataThree = require('../seed3.json')
var testDataFour = require('../seed4.json')
var crawler = require('../crawler.js')

describe("findErrors", function() {
  it("should find the difference between visited and success and push to error", function() {
    var errorAnswer = ["http://foo.bar.com/p3", "http://foo.bar.com/p7"]
    var visited = [
      'http://foo.bar.com/p2',
      'http://foo.bar.com/p3',
      'http://foo.bar.com/p4',
      'http://foo.bar.com/p2',
      'http://foo.bar.com/p4',
      'http://foo.bar.com/p5',
      'http://foo.bar.com/p1',
      'http://foo.bar.com/p6',
      'http://foo.bar.com/p7',
      'http://foo.bar.com/p4',
      'http://foo.bar.com/p5' ]

    var success = [
      'http://foo.bar.com/p1',
      'http://foo.bar.com/p2',
      'http://foo.bar.com/p4',
      'http://foo.bar.com/p5',
      'http://foo.bar.com/p6' ]

      var error = []

      error = crawler.findErrors(visited, success)

      expect(error).toEqual(errorAnswer)
  })
})

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

describe("findSkipped", function() {
  it('should find repeated links and add them to skipped array', function() {
    var skippedAnswer = [
      'http://foo.bar.com/p2',
      'http://foo.bar.com/p4',
      'http://foo.bar.com/p1',
      'http://foo.bar.com/p5' ]

    var visited = [
      'http://foo.bar.com/p2',
      'http://foo.bar.com/p3',
      'http://foo.bar.com/p4',
      'http://foo.bar.com/p2',
      'http://foo.bar.com/p4',
      'http://foo.bar.com/p5',
      'http://foo.bar.com/p1',
      'http://foo.bar.com/p6',
      'http://foo.bar.com/p7',
      'http://foo.bar.com/p4',
      'http://foo.bar.com/p5' ]

    var skipped = crawler.findSkipped(visited)
    var answer = crawler.removeSkippedDuplicates(skipped)
      expect(answer).toEqual(skippedAnswer)
  })
})

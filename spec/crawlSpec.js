var testDataOne = require('../seed1.json')
var testDataTwo = require('../seed2.json')
var testDataThree = require('../seed3.json')
var testDataFour = require('../seed4.json')
var crawler = require('../crawler.js')

crawler.crawl(testDataOne)

// describe("Crawl function Solutions", function() {
//   it('should equal solutionOneSuccess', function() {
//     var solutionOneSuccess =
//
//     expect(crawler.crawl(testDataOne).toEqual(solutionOneSuccess))
//   })
//
//   it('should equal solutionTwoSuccess', function() {
//     var solutionTwoSuccess =
//
//     expect(crawler.crawl(testDataTwo).toEqual(solutionTwoSuccess))
//   })
// })

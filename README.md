# Web-Crawler

run the code by running the following in the command line
```
node crawler.js
```
## Assumptions Made

While working on this project, my assumption was that I needed to take the given JSON data and return what the expected output was by any means necessary.

## Design

At first I created one long Crawl Function to get all my ideas down and in order.  After getting the answer to about 90%, I started to go back and refactor my code into different functions.

## Results

Test Data 1: Output as expected except that I could not figure out how to add
the p1 link to the skipped array without breaking everything else.

Test Data 2: Output is as expected.

Test Data 3: After writing a new test case that had multiple errors of the same
page.  I noticed that I was getting duplicates like I had for the skipped array.
I went back and added a removeDuplicateErrors function to handle that. Still
same issue as Test Case 1.

Test Data 4:  Output is as expected

/**
 * Takes an integer representing a number of seconds as input and
 * returns a formatted string representing the same amount of time.
 *
 * See the examples of the format below.
 *
 * @example
 * formatSeconds(45);      // => '45s'
 * formatSeconds(175);     // => '2m 55s'
 * formatSeconds(1234);    // => '20m 34s'
 * formatSeconds(10815);   // => '3h 0m 15s';
 * formatSeconds(12345);   // => '3h 25m 45s'
 * formatSeconds(1210459); // => '2w 0h 14m 19s'
 *
 * @param {number} seconds - An integer amount of time (in seconds)
 * @returns {string} The same amount of time but formatted.
 */

function formatSeconds(num) {
  // This is your job. :)

  // Remember, if the code is stumping you, take a step back and
  // make sure you can do it by hand.

  if (num < 60) {
    formatted = num + 's'
  }
  else if (num < 3600) {
    formatted = Math.floor(num / 60) + 'm ' + num % 60 + 's'
  }
  else if (num < 86400) {
    formatted = Math.floor(num / 3600) + 'h ' + Math.floor((num % 3600) / 60) + 'm ' + num % 60 + 's'
  }
  else if (num < 604800) {
    formatted = Math.floor(num / 86400) + 'd ' + Math.floor((num % 86400) / 3600) + 'h ' + Math.floor((num % 3600) / 60) + 'm ' + num % 60 + 's'
  }
  else if (num < 2419200) {
    formatted = Math.floor(num / 604800) + 'w ' + Math.floor((num % 604800) / 86400) + 'd ' + Math.floor((num % 86400) / 3600) + 'h ' + Math.floor((num % 3600) / 60) + 'm ' + num % 60 + 's'
  }
  console.log(formatted)
  return formatted 
}

if (require.main === module) {
  console.log('Running sanity checks for formatSeconds:');

  /*
  Add your own test cases here! These four aren't enough.

  Notice that we're looking at "edge cases": the boundary where the
  parts "flip over", and also the values on either side of that boundary.

  This is where the code is most likely to go wrong.
  */

  console.log(formatSeconds(0) === '0s');
  console.log(formatSeconds(1) === '1s');

  console.log(formatSeconds(55) === '55s');
  console.log(formatSeconds(60) === '1m 0s');
  console.log(formatSeconds(65) === '1m 5s');

  console.log(formatSeconds(3600) === '1h 0m 0s');
  console.log(formatSeconds(3615) === '1h 0m 15s');
  console.log(formatSeconds(50000) === '13h 53m 20s');
  console.log(formatSeconds(100000) === '1d 3h 46m 40s');  
  console.log(formatSeconds(1000000) === '1w 4d 13h 46m 40s');
}

module.exports = formatSeconds;

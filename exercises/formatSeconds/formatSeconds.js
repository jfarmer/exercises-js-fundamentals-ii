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
  let overall = "";
  let weeks;
  let days;
  let hours;
  let minutes;

  let SECONDS_IN_WEEK = 60*60*24*7;

  if(parseInt(num/SECONDS_IN_WEEK) > 0)
  {weeks = parseInt(num/SECONDS_IN_WEEK);
  num = num%SECONDS_IN_WEEK;
  overall = overall + weeks + "w"}

  let SECONDS_IN_DAY = 60*60*24;

  if(parseInt(num/SECONDS_IN_DAY) > 0)
  {days = parseInt(num/SECONDS_IN_DAY);
  num = num%SECONDS_IN_DAY;
    if (weeks === undefined) {
      overall = overall + days + "d"
      console.log(overall)
      }
    else
    {overall = overall + " " + days + "d"}
  }
  else if(weeks > 0)
  {overall = overall + " 0d"}
 

  let SECONDS_IN_HOUR = 60*60;
  if(parseInt(num/SECONDS_IN_HOUR) > 0)
  {hours = parseInt(num/SECONDS_IN_HOUR);
   num = num%SECONDS_IN_HOUR;
    if (weeks === undefined && days === undefined) {
      overall = overall + hours + "h"
      console.log(overall)
      }
    else
      {overall = overall + " " + hours + "h"}}
  else if(weeks > 0 || days > 0)
  {overall = overall + " 0h"}
  

  let ONE_MINUTE = 60;

  if(parseInt(num/ONE_MINUTE) > 0)
  {minutes = parseInt(num/ONE_MINUTE);
  num = num%ONE_MINUTE;
  if (weeks === undefined && days === undefined && hours === undefined) {
    overall = overall + minutes + "m";
    console.log(overall)
    }
    else
    {overall = overall + " " + minutes + "m";}}
  else if(weeks > 0 || days > 0 || hours > 0)
  {overall = overall + " 0m"}

  if (weeks === undefined && days === undefined && hours === undefined && minutes === undefined)
  {overall = overall + num + "s";}
  else if(num < 60)
  {overall = overall + " " + num + "s";}
 
  
  return overall;
}

if (require.main === module) {
  console.log('Running sanity checks for formatSeconds:');

  module.exports == formatSeconds.js;

  console.log(formatSeconds(0))

  console.log(formatSeconds(0) === '0s');
  console.log(formatSeconds(1) === '1s');

  console.log(formatSeconds(55) === '55s');
  console.log(formatSeconds(60) === '1m 0s');
  console.log(formatSeconds(65) === '1m 5s');
  

  console.log(formatSeconds(3600) === '1h 0m 0s');
  console.log(formatSeconds(3615) === '1h 0m 15s');

  console.log(formatSeconds(3615) === '1h 0m 15s');

  console.log(formatSeconds(90000) === '1d 1h 0m 0s');

  console.log(formatSeconds(90000) === '1d 1h 0m 0s');
  console.log(formatSeconds(691215) === '1w 1d 0h 0m 15s');

  console.log(formatSeconds(604859) === '1w 0d 0h 0m 59s');
  let SANITY = 604800+518400+82800+3540+59;
  console.log(SANITY);
  console.log(formatSeconds(SANITY) === '1w 6d 23h 59m 59s');

module.exports = formatSeconds;
}
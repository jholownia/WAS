// Kata test cases syntax
// Test.expect(numberToString(67) === '67');

var num = 42;
var string = "Fourty Two";
var numarr = [1, 4, 7, 2, 8, 3];
var vararr = ["one", 42, num];
var n = null;

// Number to string
function numberToString(num) {
  return num.toString();
}

// ------------------------------------------------------------------
// Check if a function have been passed only numbers as parameters
function numbers() {
  for (var i = 0; i < arguments.length; ++i) { if (typeof(arguments[i]) !== "number" ) return false; }
  return true;
}

// Best solution
var numbers = function() {
  return Array.prototype.filter.call(arguments, function(n) { return typeof n !== 'number'; }).length === 0;
}

// ---------------------------------------------------------------------
// Check if the string contains ending string
function solution(str, ending){
    return (str.substring(str.length - ending.length) === ending);
}

// Best solution
function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}

// Bonus: replace string example
function replaceString(oldS, newS, fullS) {
// Replaces oldS with newS in the string fullS
  for (var i = 0; i < fullS.length; i++) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
     fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("World", "Web", "Brave New World");

// -----------------------------------------------------------------------
// Date-time
function timeForMilkAndCookies(date){
  return date.getDate() == 24 && date.getMonth() == 11;
}

//-------------------------------------------------------------------------
// Calc average
var Calculator = {
 average: function() {
  return (arguments.length > 0) ? Array.prototype.slice.call(arguments).reduce(function(a, b) { return a + b; } ) / arguments.length : 0;  
 }
};

//---------------------------------------------------------------------------
// Remove vowels
function disemvowel(str) {
  return Array.prototype.slice.call(str).filter( 
    function (a) {  
        var vowels = ["a", "e", "i", "o", "u"];   
        for (var i = 0; i < vowels.length; ++i) { 
          if (vowels[i] === a.toLowerCase()) { 
            return false; 
          } 
        } return true; 
    }
  ).join("");
}

// Best solution - see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//---------------------------------------------------------------------------
// Reminder
function remainder(a, b){
  return (a > b) ? ((b === 0) ? NaN : a % b) : ((a === 0) ? NaN : b % a);
}

//----------------------------------------------------------------------------
// Reject
function reject(array, iterator) {
  return array.filter( function(e) { return !iterator(e); } );
}

//-----------------------------------------------------------------------------
// Flatten array
var flatten = function (array){
  var result = [];
  for (var i = 0; i < array.length; ++i){
    (array[i].length > 1) ? array[i].forEach(function(e) { result.push(e); } ) : result.push(array[i]);  
  }
  return result;
}

//---------------------------------------------------------------------------------
// Return indexes of capital letters
function isCapital(a) {
  return a != a.toLowerCase();
}

var capitals = function (word) {
  var answer = [];
  var strArray = Array.prototype.slice.call(word);
  for (var i = 0; i < strArray.length; ++i) {
    if(isCapital(strArray[i])) { answer.push(i); }
  }
  return answer;
};

// Also to get array from string use:
str.split("");

//------------------------------------------------------------------------------------
// Create function which returns a function that adds a specified number to any number
function add(n) {
  return function(a) { return a + n; };
}

//------------------------------------------------------------------------------------
// Calculate slope of the line
function equals(p1, p2) {
  return (p1[0] === p2[0]) && (p1[1] === p2[1]);
}

function getSlope(p1, p2) {
  return equals(p1, p2) ? null : (p2[1] - p1[1]) / (p2[0] - p1[0]);
}

//------------------------------------------------------------------------------------
// Check whether an hour is in between two other hours
var Time = function(timeString) {
    var t = timeString.split(":");
    this.hour = parseInt(t[0]);
    this.minutes = parseInt(t[1]);
    this.isBiggerThan = function(other) { 
        return (this.hour > other.hour) || (this.hour === other.hour) && (this.minutes > other.minutes);
    };
}

var timeIsBetween = function(start, end, check) {
    return (start.hour <= end.hour) ? check.isBiggerThan(start) && !check.isBiggerThan(end)
    : (check.isBiggerThan(start) && check.isBiggerThan(end)) || (!check.isBiggerThan(start) && !check.isBiggerThan(end));    
}

var openTime = new Time("23:30");
var closeTime = new Time("06:30");
var checkTime = new Time("02:30");

var isBetween  = timeIsBetween(openTime, closeTime, checkTime); // true

//------------------------------------------------------------------------------------
// Modify String prototype to include repeat function
String.prototype.repeat = function(count) {
    var result = "";
    for (var i = 0; i < count; ++i) {
        result += this.toString();   
    }
    return result;
}

// Best solution
String.prototype.repeat = function(count) {
  return new Array(count + 1).join(this);
};

// Recursive solution
String.prototype.repeat = function(count) {
  return count ? this + this.repeat(--count) : '';
};

//------------------------------------------------------------------------------------
// Implement String.prototype.reverse() without modifying the original string
String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
}

//------------------------------------------------------------------------------------
// Check if a string is anagram


$(document).ready(function() {
  // Retrieve the inputted values from the query string
  let $_GET = [];
  document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
    function decode(s) {
      return decodeURIComponent(s.split('+').join(' '));
    }
    $_GET[decode(arguments[1])] = decode(arguments[2]);
  });

  // Get birthday in a date format we can use for calculations
  let day = $_GET['day'];
  let month = $_GET['month'] - 1;
  let year = $_GET['year'];
  let birthday = new Date(year, month, day);

  // Get today in a date format we can use for calculations
  let today = new Date();

  // Function which returns the difference in days between two dates
  function calculateDaysDifference(start_date, end_date) {
    let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    let diffDays = Math.round(Math.abs((end_date.getTime() - start_date.getTime()) / oneDay));
    return numberWithCommas(diffDays);
  }

  // Function which returns large numbers separated with commas
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // Calculate and display the result
  let result = calculateDaysDifference(birthday, today);
  $('#daysOld').html(result.toString());
});

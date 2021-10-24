'use strict';
var firstCharInput = $('#first-char');
var searchButton = $('#search');
var resultsDiv = $('#results');
$.getJSON('chinese_idioms_dict.json', function(json) {
  var writeResults = function() {
    resultsDiv.empty();
    var firstChar = firstCharInput.val();
    if (!firstChar) return;
    var idioms = json[firstChar];
    if (idioms) {
      resultsDiv.html(idioms.join('<br>'));
    } else {
      resultsDiv.append($('<span>').css('color', 'red').text('404 Not Found'));
    }
  };
  searchButton.click(writeResults);
  firstCharInput.keyup(function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) writeResults();
  });
  searchButton.attr('href', 'javascript:void(0)');
});

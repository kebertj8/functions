function staircase(n) {
  var line = Array(n + 1).fill(' ');
  line[n] = '\n';
  for (var i = n - 1; i >= 0; i--) {
    line[i] = '#';
    process.stdout.write(line.join(''));
  }
}

// JavaScript function names should start with a lowercase character, 
// and "staircase" is one compound word in English.\\
// Since every line is nearly the same, and only one 
// character changes at a time, you should take advantage of that and use an array as a buffer.
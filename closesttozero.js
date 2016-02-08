// Find the smallest(closest to zero) number in an array
​
function smallest(array) {
  // Define the var min as Infinity because we need a number bigger than any element in the array to compare against
  var min = Infinity;
  // Go through each element in the array
  array.forEach(function(element) {
    // Compare the absolute value of the element of the array to the current min value.
    if (Math.abs(element) <= Math.abs(min)) {
      // Reassigning min to the element in the array
      min = element;
    }
  });
  // Return the result
  return min;

}
​
smallest([0.5, 1]);
smallest([-23.2, -0.3]);
smallest([-0.5, 0.25])

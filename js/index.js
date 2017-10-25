

var byline1 = document.getElementById('byline1');
byline1Text = byline1.innerHTML;  // Get the content of the H2
byline1Arr = byline1Text.split(''); 	// Split content into array
byline1.innerHTML = '';	 // Empty current content

var span;	// Create variables to create elements
var letter;

for(i=0;i<byline1Arr.length;i++){	                  // Loop for every letter
  span = document.createElement("span");					  // Create a <span> element
  letter = document.createTextNode(byline1Arr[i]);	// Create the letter
  if(byline1Arr[i] == ' ') {												// If the letter is a space...
    byline1.appendChild(letter);					          // ...Add the space without a span
  } else {
		span.appendChild(letter);						            // Add the letter to the span
  	byline1.appendChild(span); 					            // Add the span to the h2
  }
}
var byline2 = document.getElementById('byline2');  	// Find the H2
byline2Text = byline2.innerHTML;										// Get the content of the H2
byline2Arr = byline2Text.split('');									// Split content into array
byline2.innerHTML = '';														  // Empty current content

var span;	// Create variables to create elements
var letter;

for(i=0;i<byline2Arr.length;i++){									  // Loop for every letter
  span = document.createElement("span");					  // Create a <span> element
  letter = document.createTextNode(byline2Arr[i]);	// Create the letter
  if(byline2Arr[i] == ' ') {												// If the letter is a space...
    byline2.appendChild(letter);  // ...Add the space without a span
  } else {
		span.appendChild(letter);	// Add the letter to the span
  	byline2.appendChild(span); 	// Add the span to the h2
  }
}
This project entailed creating a screen and placing shapes onto it, which will then be animated.
The shapes, their starting placement, and the point to which they'll be animated are submitted through the form.
The entire project is completed through JS and jQuery.

1. This first challenge is how to save the form data to a newly created div element that is placed on the screen.
This is accomplished using the .serializeArray method, which return the form information as an array of objects containing
the name of the input and the value of the input. Using this it is possible to store the information on a div by using .data(). 
2. After doing this, I needed to set up a .click() event on the start animation <a> that would iterate through all the 
direct descendent divs on the screen, and animating them based on their starting and stopping y and x properties.
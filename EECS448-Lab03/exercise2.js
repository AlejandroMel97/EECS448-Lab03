'use strict';
let images = ["https://i.redditmedia.com/9J4E5izgG5bFsmAN7C7TEiRkwHyyra8APNmAr6651Nk.jpg?w=1024&s=e616ea5f7cb7968faab1ab41cc5f50de","mount.jpg", "night.jpg","http://wallfocus.com/cache/images/1/0/b/6/7/10b677d525b92be189c8504b98f5d59f03ccfed5.png","https://i.redditmedia.com/E9rcAZ9ku88fP8lNC74fNOrAst-3hK2FgSQ3yGhMI88.jpg?w=1024&s=9df285f3ccc76f978e9bda421f952d3a"];

let index = 0;
let the_image = document.getElementById("picture");

//the_image.src = images[0];
function show_image(direction)
{
  if (direction == 'left')
  {
    if (index == 0)
    {
      index = images.length-1;
      the_image.src = images[index];
    }
    else {
      index--;
      the_image.src = images[index];
    }

  }
  else
  {
    if (index == images.length-1)
    {
      index = 0;
      the_image.src = images[index];
      return;
    }
    else
    {
      index++;
      the_image.src = images[index];
    }
  }
}

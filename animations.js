$(function() {
  $form = $("form");
  

  $form.on("submit", function(e) {
    e.preventDefault();
    
    var form_info = $(this).serializeArray(),
    shape = $("[name='shape']").filter(":checked").val(),
    div;
    //create dom element first
    $("#screen").append("<div class=" + shape + "></div>");
    
    div = $("#screen div").last();
    form_info.forEach(function(obj) {
      div.data(obj.name, obj.value );
    });
    startPosition(div);
  });

  $("#start_animation").on("click", function(e) {
    e.preventDefault();
    var $shapes = $("#screen div");
    //resetShapes($shapes)
    resetShapes($shapes);
    animateShapes($shapes);
  })

  $("#stop").on("click", function(e) {
    e.preventDefault();
    var $shapes = $("#screen div");
    stopAnimation($shapes);
  });

});

function startPosition(div) {
  div.css({top: +div.data("start_y"), left: +div.data("start_x")});
}

function animateShapes($shapes) {
  
  $shapes.each(function() {
    var shape = $(this);
    console.log(this)
    shape.animate({
      top: +shape.data("end_y"),
      left: +shape.data("end_x")
    }, 1000);
  });
}

function resetShapes($shapes) {
  $shapes.each(function(div) {
    var div = $(this);
    startPosition(div);
  });
}

function stopAnimation($shapes) {
  $shapes.each(function() {
    var div = $(this);
    div.stop();
  })
}
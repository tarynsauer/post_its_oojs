var Board = function( selector ) {
  this.$elem = $( selector );
  var self = this;  

  this.$elem.click(function(){
   var newSticky = self.addSticky();
  });

};

Board.prototype.addSticky = function() {
  var newSticky = new PostIt();
  this.$elem.append(newSticky.$elem);


  $("li span").click(function(event) {
    event.stopPropagation();
    $(this).closest(newSticky.$elem).remove();
   });
}

var PostIt = function() {
  this.$elem = $('<ul class="post-it"><li class="header"><span>x</span></li><li class="content" contenteditable="true">This is a post-it</li></ul>');
  var postIt ="."+this.$elem.attr('class');
  this.$elem.draggable();
  var self = this;

    $(this.$elem).click(function(event) {
      event.stopPropagation();

      if ($(this).hasClass('.ui-draggable-dragging')) {
        return;
      } else {
        $(this).draggable("option", "disabled", true);
        $('.content').attr('contenteditable', 'true');
        }

      });

  $( ".content" ).blur(function(){
    $(this.$elem).draggable( 'option', 'disabled', false);
      console.log($(this));
    $(this).attr('contenteditable','false');
  });

};


$(function() {
  // This code will run when the DOM has finished loading
  var newBoard = new Board('#board');
  // console.log(newBoard)
});


  $(function() {
    // $('.post-it').draggable();

    $(".post-it").click(function() {
        if ($(this).hasClass('.ui-draggable-dragging')) {
          return;
        } else {
          $(this).draggable("option", "disabled", true);
          $('.content').attr('contenteditable', 'true');
        }

      });

    $( ".content" ).blur(function(){
      $('.post-it').draggable( 'option', 'disabled', false);
      console.log($(this));
      $(this).attr('contenteditable','false');
    });

    $("li span").click(function() {
      $(this).closest('ul').remove();
    });

  });


  // $("body").on('click', ".post-it", function() {
  //   console.log(this);
  // })

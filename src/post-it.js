var Board = function( selector ) {
  this.$elem = $( selector );
  var self = this;  

  this.$elem.dblclick(function(event){
   var newSticky = self.addSticky();
  });

};

Board.prototype.addSticky = function() {
  var newSticky = new PostIt();
  this.$elem.append(newSticky.$elem);
}

var PostIt = function() {
  this.$elem = $('<ul class="post-it"><li class="header"><span class="delete">x</span></li><li class="content" contenteditable="true">This is a post-it</li></ul>');
  var postIt ="."+this.$elem.attr('class');
  this.$elem.draggable();
  var self = this;

  $(this.$elem).dblclick(function(event) {
    event.stopPropagation();
    $(this).draggable('option', "disabled", true);
  });

  $(this.$elem).find('.content').blur(function(event){
    event.stopPropagation();
    $(this).parent().draggable('option', "disabled", false);
  });

  $(this.$elem).find('.delete').click(function() {
    console.log(this);
    $(this).parent().parent().remove();
   });

};


$(function() {
  // This code will run when the DOM has finished loading
  var newBoard = new Board('#board');
  // console.log(newBoard)
});


  // $(function() {
  //   // $('.post-it').draggable();

  //   $(".post-it").click(function() {
  //       if ($(this).hasClass('.ui-draggable-dragging')) {
  //         return;
  //       } else {
  //         $(this).draggable("option", "disabled", true);
  //         $('.content').attr('contenteditable', 'true');
  //       }

  //     });

  //   $( ".content" ).blur(function(){
  //     $('.post-it').draggable( 'option', 'disabled', false);
  //     console.log($(this));
  //     $(this).attr('contenteditable','false');
  //   });

  //   $("li span").click(function() {
  //     $(this).closest('ul').remove();
  //   });

  // });


  // $("body").on('click', ".post-it", function() {
  //   console.log(this);
  // })

describe("board", function() {
  
  beforeEach(function(){
    $('body').append("<div id='board'></div>");
  });

  afterEach(function() {
    $("#board").remove();
  });

  it("new board sets $elem to the passed selector", function() {
      var newBoard = new Board('#board');
      expect(newBoard.$elem.selector).toBe('#board');
  });

  //   it("responds to addSticky", function() {
  //     var newBoard = new Board('#board');
  //     //spyOn(newBoard, "addSticky");
  //     expect(newBoard.addSticky).toBeDefined();;
  // });

    it("creates a new sticky", function() {
      var newBoard = new Board('#board');
      newBoard.$elem.click();
      expect(newBoard.$elem.children('ul').length).toEqual(1);
  });

    it("creates a new sticky and deletes it", function() {
      var newBoard = new Board('#board');
      newBoard.$elem.click();
      newBoard.$elem.find('.delete').click();
      expect(newBoard.$elem.children('ul').length).toBe(0);
  });

});

// describe("post-it", function() {

//   beforeEach(function(){
//     $('body').css("id", "board");
//   });

//   it("is draggable", function() {
//     var newBoard = new Board('#board');
//     $('body').click();
//     console.log($('body').children('ul').first().attr('class'))
//     expect($('body').children('ul').first().attr('class')).toEqual("post-it ui-draggable");
//   });

//     it("is editable", function() {
//     var newBoard = new Board('#board');
//     $('body').click();
//     $('.content').click();
//     expect($('body').children('ul').first().attr('class')) == ("post-it ui-draggable");
//   });
// });











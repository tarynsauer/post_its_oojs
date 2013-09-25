describe("board", function() {
  var newBoard;
  
  beforeEach(function(){
    $('body').append("<div id='board'></div>");
    newBoard = new Board('#board');
  });

  afterEach(function() {
    $("#board").remove();
  });

  it("new board sets $elem to the passed selector", function() {
      expect(newBoard.$elem.selector).toBe('#board');
  });

    it("responds to addSticky", function() {
      expect(newBoard.addSticky).toBeDefined();;
  });

    it("creates a new sticky", function() {
      newBoard.$elem.dblclick();
      expect(newBoard.$elem.children('ul').length).toBe(1);
    });

    it("creates a new sticky and deletes it", function() {
      newBoard.$elem.dblclick();
      newBoard.$elem.find('.delete').click();
      expect(newBoard.$elem.children('ul').length).toBe(0);
    });

});

describe("post-it", function() {

  beforeEach(function(){
    $('body').append("<div id='board'></div>");
    newBoard = new Board('#board');
    newBoard.$elem.dblclick();
  });

  afterEach(function() {
    $("#board").remove();

  });

  it("is draggable", function() { 
    expect(newBoard.$elem.children('ul').first().attr('class')).toEqual("post-it ui-draggable");
  });

  it("is editable", function() {
    expect(newBoard.$elem.find("ul li:nth-child(2)").attr('contenteditable')).toEqual("true");
  });

  it("disables draggable when editing", function() {
    newBoard.$elem.find("ul li:nth-child(2)").dblclick();
    expect(newBoard.$elem.find('ul').hasClass("ui-draggable-disabled")).toBe(true);
  });

});











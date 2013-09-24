describe("board", function() {
  it("contains a new board", function() {
      $('body').css("id", "board");
      var newBoard = new Board('#board');
      expect(newBoard.$elem.selector).toBe('#board');
  });

    it("responds to addSticky", function() {
      $('body').css("id", "board");
      var newBoard = new Board('#board');
      spyOn(newBoard, "addSticky");
      expect(newBoard.addSticky).toBeDefined();;
  });
});

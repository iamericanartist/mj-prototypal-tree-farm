///////////////////// EXAMPLE ONLY /////////////////////
describe("Hello world", function() {
  it("says hello", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
});

//Begin unit testing here with opening "describe() function"
describe("The specification for basic math", function() {

  // Write a unit test to check for the existence of add()
  it("should have an add function", function() {
    expect(add).toBeDefined();
  });
  // Write a unit test that will verify the expected output of add()
  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });
});


///////////////////// Begin Unit Tests /////////////////////
// 1. There should be a `Plant` function defined.


// 2. There should be a `Tree` function defined.


// 3. There should be a function named `increaseHeight` on the prototype of Plant.


// 4. There should be a function named `decreaseHeight` on the prototype of Plant.


// 5. There should be a `height` property on Plant.


// 6. There should be a function named `grow` on the prototype of Tree.


// 7. There should be a function named `trim` on the prototype of Tree.


// 8. When you invoke the `trim` method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. `PearTree.trim(2)`)


// 9. When you invoke the `trim` method on Tree, the values of the `branches` property should be decreased by one.


// 10. When you invoke the `grow` method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. `PearTree.grow(2)`)



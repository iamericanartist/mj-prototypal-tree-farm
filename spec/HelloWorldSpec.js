///////////////////// Unit Tests /////////////////////
describe("The specifications for growing plants and trees", function(){

// 1. There should be a `Plant` function defined.
  it("should have a `Plant` function", function(){
    expect(Plant).toBeDefined();
  })

// 2. There should be a `Tree` function defined.
  it("should have a 'Tree' function", function(){
    expect(Tree).toBeDefined();
  })

// 3. There should be a function named `increaseHeight` on the prototype of Plant.
  it("should have a function named 'increaseHeight' on the Plant prototype", function(){
    expect(Plant.prototype.increaseHeight).toBeDefined();
  })

// 4. There should be a function named `decreaseHeight` on the prototype of Plant.
  it("should have a function named 'decreaseHeight' on the Plant prototype", function(){
    expect(Plant.prototype.decreaseHeight).toBeDefined();
  })

// 5. There should be a `height` property on Plant.
  it("should have a 'height' property on Plant", function(){
    expect(Plant.height).toBeDefined();
  })

// 6. There should be a function named `grow` on the prototype of Tree.
  it("should have a funcion named 'grow' on the prototype of Tree", function(){
    expect(Tree.prototype.grow).toBeDefined();
  })

// 7. There should be a function named `trim` on the prototype of Tree.
  it("should have a funcion named 'trim' on the prototype of Tree", function(){
    expect(Tree.prototype.trim).toBeDefined();
  })


// 8. When you invoke the `trim` method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. `PearTree.trim(2)`)


// 9. When you invoke the `trim` method on Tree, the values of the `branches` property should be decreased by one.


// 10. When you invoke the `grow` method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. `PearTree.grow(2)`)


}); //closing of our ORCHARD DESCRIPTION function

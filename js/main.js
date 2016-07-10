"use strict";
console.log("main.js is loaded");

////////////////////////////////// TREE //////////////////////////////////
function Tree(){                        // 2. There should be a `Tree` function defined.
  this.branches = 0;                    // Tree should have a property of `branches`
}

Tree.prototype.grow = function (amount) {
  this.height += amount;                          // Adds "amount" to the tree height
  this.branches = Math.floor(this.height / 10);   // takes current height, divides by 10, and tells us how many branches we have!
  // console.log("We grew nicely! We are now ", this.height, "cm tall!");
  // console.log("We got a new branch! That makes ", this.branches , " total!");
}

Tree.prototype.trim = function (amount) {
  this.height -= amount;
  this.branches -= 1;
}

////////////////////////////////// PLANT //////////////////////////////////
function Plant(initialHeight){          // 1. There should be a `Plant` function defined.
  this.height = initialHeight;          // There should be a `height` property on Plant.
}
Plant.prototype = new Tree();           // Plant should be the prototype of Tree.
Plant.prototype.increaseHeight = function(taller){    // 3. There should be a function named `increaseHeight` on the prototype of Plant.
  this.height += taller;                              // `increaseHeight` should increase the value of the `height` property by the amount passed in as an argument.

};
Plant.prototype.decreaseHeight = function(shorter){   // 4. There should be a function named `decreaseHeight` on the prototype of Plant.
  this.height += shorter;                             // `decreaseHeight` should decrease the value of the `height` property by the amount passed in as an argument.
};



var PearTree = new Plant(20);
var OakTree = new Plant(32);
// console.log("PearTree = ", PearTree);
// console.log("OakTree = ", OakTree);
console.log("     Fresh Plantings:");
console.log("Pear tree:", PearTree.height, "tall", PearTree.branches, "branches");   // console.log current branch #
console.log("Oak tree:", OakTree.height, "tall", OakTree.branches, "branches");   // console.log current branch #

PearTree.grow(15);
OakTree.grow(19);
console.log("     Round 1");
console.log("Pear tree:", PearTree.height, "tall", PearTree.branches, "branches");   // console.log current branch #
console.log("Oak tree:", OakTree.height, "tall", OakTree.branches, "branches");   // console.log current branch #

PearTree.trim(5);
console.log("     Pear tree TRIM!", PearTree.height, "height", PearTree.branches, "branches");

PearTree.grow(23);
OakTree.grow(13);
console.log("     Round 2");
console.log("Pear tree:", PearTree.height, "tall", PearTree.branches, "branches");   // console.log current branch #
console.log("Oak tree:", OakTree.height, "tall", OakTree.branches, "branches");   // console.log current branch #

PearTree.grow(2);
OakTree.grow(24);
console.log("     * Final *");
console.log("Final pear tree is", PearTree.height, "cm tall, and has", PearTree.branches, "branches");   // console.log current branch #
console.log("Final Oak tree is", OakTree.height, "cm tall, and has", OakTree.branches, "branches");   // console.log current branch #


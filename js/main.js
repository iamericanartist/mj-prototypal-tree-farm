"use strict";
// console.log("main.js is loaded");

var $outputEl = $("#outputEl");
var makeItSoCounter = 0;

////////////////////////////////// PLANT //////////////////////////////////
function Plant(){                                     // 1. There should be a `Plant` function defined.
  this.height = null;                                 // There should be a `height` property on Plant.
}

Plant.prototype.increaseHeight = function(taller){    // 3. There should be a function named `increaseHeight` on the prototype of Plant.
  this.height += taller;                              // `increaseHeight` should increase the value of the `height` property by the amount passed in as an argument.

};
Plant.prototype.decreaseHeight = function(shorter){   // 4. There should be a function named `decreaseHeight` on the prototype of Plant.
  this.height += shorter;                             // `decreaseHeight` should decrease the value of the `height` property by the amount passed in as an argument.
};


////////////////////////////////// TREE //////////////////////////////////
function Tree(plantNewTree){                          // 2. There should be a `Tree` function defined.
  this.branches = 0;                                  // Tree should have a property of `branches`
  this.height = plantNewTree;                         // This is where we set the initial height of the tree
}
Tree.prototype = new Plant();                         // Plant should be the prototype of Tree.

Tree.prototype.grow = function (height) {
  this.increaseHeight(height);                        // Adds "amount" to the tree height
  this.branches = Math.floor(this.height / 10);       // takes current height, divides by 10, and tells us how many branches we have!
  // console.log("We grew nicely! We are now ", this.height, "cm tall!");
  // console.log("We're branching out! That makes ", this.branches , " total!");
};

Tree.prototype.trim = function (amount) {
  this.decreaseHeight(amount);
  this.branches -= 1;
  // console.log("  ~  Pruned -1 branch =", this.branches , "total!");
};


//////////////////////////// PearTree/OakTree ////////////////////////////
var PearTree = new Tree(11);
  PearTree.branches = 4;
var OakTree = new Tree(22);
  OakTree.branches = 6;
console.log("Starting PearTree = ", PearTree);
console.log("Starting OakTree = ", OakTree);


function makeItSo() {
  makeItSoCounter += 1;
  console.log("makeItSoCounter",makeItSoCounter );
  
  PearTree.grow(6);
  OakTree.grow(16);

  if (makeItSoCounter % 10 === 0) {
    console.log("It's the ", makeItSoCounter, "th cycle: time to trim");
    console.log("  ~  Pruned Pear Tree =", PearTree.branches, "branches total");
    console.log("  ~  Pruned Oak Tree =", OakTree.branches, "branches total");
    PearTree.trim(5);
    OakTree.trim(5);
  }

  if (makeItSoCounter > 29){
    console.log("30 Growth Cycles complete");
    console.log("Final pear tree is", PearTree.height, "cm tall, and has", PearTree.branches, "branches");   // console.log current branch #
    console.log("Final Oak tree is", OakTree.height, "cm tall, and has", OakTree.branches, "branches");   // console.log current branch #



    clearInterval(intervalID);
  }
};

// changed interval to be faster 
var intervalID = setInterval(makeItSo, 100);   // Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
// var intervalID = window.setInterval(makeItSo, 100);   // "window" is named in the MDN documentation, but works without... Find out why.



// /////////////////////////////// TESTING ////////////////////////////////
// console.log("PearTree = ", PearTree);
// console.log("OakTree = ", OakTree);

// console.log("Fresh Plantings:");
// console.log("     Pear tree:", PearTree.height, "tall", PearTree.branches, "branches");     // console.log current branch #
// console.log("     Oak tree:", OakTree.height, "tall", OakTree.branches, "branches");        // console.log current branch #

// PearTree.grow(15);
// OakTree.grow(19);
// console.log("Round 1");
// console.log("     Pear tree:", PearTree.height, "tall", PearTree.branches, "branches");   // console.log current branch #
// console.log("     Oak tree:", OakTree.height, "tall", OakTree.branches, "branches");   // console.log current branch #

// PearTree.trim(5);
// console.log("  ~  Pear tree TRIM!", PearTree.height, "height", PearTree.branches, "branches");

// PearTree.grow(23);
// OakTree.grow(13);
// console.log("Round 2");
// console.log("     Pear tree:", PearTree.height, "tall", PearTree.branches, "branches");   // console.log current branch #
// console.log("     Oak tree:", OakTree.height, "tall", OakTree.branches, "branches");   // console.log current branch #

// PearTree.grow(2);
// OakTree.grow(24);
// console.log("     * Final *");
// console.log("Final pear tree is", PearTree.height, "cm tall, and has", PearTree.branches, "branches");   // console.log current branch #
// console.log("Final Oak tree is", OakTree.height, "cm tall, and has", OakTree.branches, "branches");   // console.log current branch #


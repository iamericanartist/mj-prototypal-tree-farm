"use strict";
// console.log("main.js is loaded");

var $outputEl = $("#outputEl");
var $counterEl = $("#counterEl");
var makeItSoCounter = 0;

//////////////////////////////////// PLANT ////////////////////////////////////
function Plant(){                                     // 1. There should be a `Plant` function defined.
  this.height = null;                                 // There should be a `height` property on Plant.
}
Plant.prototype.increaseHeight = function(taller){    // 3. There should be a function named `increaseHeight` on the prototype of Plant.
  this.height += taller;                              // `increaseHeight` should increase the value of the `height` property by the amount passed in as an argument.
};
Plant.prototype.decreaseHeight = function(shorter){   // 4. There should be a function named `decreaseHeight` on the prototype of Plant.
  this.height -= shorter;                             // `decreaseHeight` should decrease the value of the `height` property by the amount passed in as an argument.
};


//////////////////////////////////// TREE ////////////////////////////////////
function Tree(plantNewTree){                          // 2. There should be a `Tree` function defined.
  this.branches = 0;                                  // Tree should have a property of `branches`
  this.height = plantNewTree;                         // This is where we set the initial height of the tree
}
Tree.prototype = new Plant();                         // Plant should be the prototype of Tree.

Tree.prototype.grow = function (height) {
  this.increaseHeight(height);                        // Adds "amount" to the tree height
  this.branches = Math.floor(this.height / 10);       // takes current height, divides by 10, and tells us how many branches we have!
};
Tree.prototype.trim = function (amount) {
  this.decreaseHeight(amount);                        // Decreases "amount" of tree branches
  this.branches -= (amount -1);
};


////////////////////////////// PearTree/OakTree //////////////////////////////
var PearTree = new Tree(10);                          // Create a PearTree instance of Tree.
  PearTree.branches = 4;                              // Added initial branches.
var OakTree = new Tree(20);                           // Create a OakTree instance of Tree.
  OakTree.branches = 6;                               // Added initial branches.


function makeItSo() {                                 // makeItSo brings everything together and is later closed (after invocation at the bottom) when the counter reaches 30 
  makeItSoCounter += 1;                               // starts the counter off and increments as the loop continues
  console.log("makeItSoCounter",makeItSoCounter );

  PearTree.grow(5);                                   // ...increase the height the pear tree by some integer value
  OakTree.grow(15);                                   // ...increase the height the oak tree by some integer value that is larger than what you used for the pear tree.

  if (makeItSoCounter % 10 === 0) {
    console.log("It's the ", makeItSoCounter, "th cycle: time to trim");
    console.log("  ~  Pruned Pear Tree =", PearTree.branches, "branches total");
    console.log("  ~  Pruned Oak Tree =", OakTree.branches, "branches total");
    PearTree.trim(3);                                 // Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree...
    OakTree.trim(4);                                  // ... and a larger value to the method on the oak tree.
  }
  
  /////////////////////// MAKEITSO FUNCTION > DOM OUTPUT ///////////////////////
  $outputEl.append(`<h4> Round ${makeItSoCounter}</h4>`);
  $outputEl.append(`<p class="pear">Pear tree is now ${PearTree.height} cm tall, and has ${PearTree.branches} branches.</p>`); // Also output the current height of each tree and how many branches it has to the DOM.
  $outputEl.append(`<p class="oak">Oak tree is now ${OakTree.height} cm tall, and has ${OakTree.branches} branches.</p>`); // Also output the current height of each tree and how many branches it has to the DOM.
  $('html, body').scrollTop($(document).height());  // Scrolls the window to keep up with the DOM output!  *Shout-out to jackmoch - this feature is awesome! 

  if (makeItSoCounter > 29){
    console.log(`${makeItSoCounter}`, "Growth Cycles complete");
    console.log("Final pear tree is", PearTree.height, "cm tall, and has", PearTree.branches, "branches");   // console.log current branch #
    console.log("Final Oak tree is", OakTree.height, "cm tall, and has", OakTree.branches, "branches");   // console.log current branch #

    $outputEl.append(`<hr><h3>Final pear tree is ${PearTree.height} cm tall, and has ${PearTree.branches} branches</h3>`); // Also output the current height of each tree and how many branches it has to the DOM.
    $outputEl.append(`<h3>Final Oak tree is ${OakTree.height} cm tall, and has ${OakTree.branches} branches.</h3><br>`); // Also output the current height of each tree and how many branches it has to the DOM.

    clearInterval(intervalID);                        // stops the counter/loop
  }
}


////////////////////// changed interval to be faster :) //////////////////////
var intervalID = setInterval(makeItSo, 100);   // Every second, increase the heights...




//////////////////////////////// NOTES TO SELF ////////////////////////////////
// var intervalID = window.setInterval(makeItSo, 100);   // "window" is named in the MDN documentation, but works without... Find out why.

  //Version 2 Goals
    // Create an IF (counter === 1) to only pop up at the top...
    // $outputEl.append(`<h5>Starting Pear Tree = ${PearTree.height}cm tall, and has ${PearTree.branches} branches</h5>`);
    // $outputEl.append(`<h5>Starting Oak Tree = ${OakTree.height}cm tall, and has ${OakTree.branches} branches</h5><br>`);

    // Create an IF (counter === 11) to pop up after ROUND 10...
    // $outputEl.append(`<br><p> TRIM! ${PearTree.height} cm tall, and now has ${PearTree.branches} branches.</p>`); // Also output the current height of each tree and how many branches it has to the DOM.
    // $outputEl.append(`<p> TRIM! ${OakTree.height} cm tall, and now has ${OakTree.branches} branches.</p>`); // Also output the current height of each tree and how many branches it has to the DOM.


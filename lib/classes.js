

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (obj, fromIndex) {
    if (fromIndex == null) {
      fromIndex = 0;
    } else if (fromIndex < 0) {
      fromIndex = Math.max(0, this.length + fromIndex);
    }
    for (var i = fromIndex, j = this.length; i < j; i++) {
      if (this[i] === obj)
        return i;
    }
    return -1;
  };
}

Array.prototype.compare = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].compare(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}

function stack() {                  
  var elements;
  
  this.push = function(element) {
    if (typeof(elements) === 'undefined') {
      elements = [];   
    }                            
    elements.push(element);
  }
  this.pop = function() {
    return elements.pop();
  }
  this.stackTop = function(element) {
    return elements[elements.length - 1];
  }
}

function queue() {
  var elements;
  
  this.enqueue = function(element) {
    if (typeof(elements) === 'undefined') {
      elements = [];   
    }
    elements.push(element);                       
  }
  this.dequeue = function() {
    return elements.shift();                                                
  }
  this.peek = function(){
    return elements[0];                  
  }
}




/*
var someStack = new dataStructures.stack();
 
someStack.push(1);
someStack.push(2);
someStack.push(3);
 
var stackTopResult = someStack.stackTop();                                                 
 
stackTopResults.html(stackTopResult);
 
var popResult = "";
 
popResult += someStack.pop();
popResult += someStack.pop();
popResult += someStack.pop();




someQueue.enqueue(1);
someQueue.enqueue(2);
someQueue.enqueue(3);               
                
var queuePeekResult = someQueue.peek();
 
queuePeekResults.html(queuePeekResult);
 
var dequeueResult = "";                   
                    
dequeueResult += someQueue.dequeue();
dequeueResult += someQueue.dequeue();
dequeueResult += someQueue.dequeue(); 

*/

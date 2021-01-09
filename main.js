// For pausing code
async function pause(ms) {
   return await new Promise(resolve => setTimeout(resolve, ms, "Done!"));
}

// Delete at a specific index
Array.prototype.delete = function deleteAtIndex (index) {
   return this.splice(index, 1);
}

// Add value(s) at a specific index
Array.prototype.add = function addAtIndex (index, ...things) {
   return this.splice(index, 0, ...things)
}

// To wait until some condition
const TICK_SPEED = 50;
let ticks = 0;
let todo = [];

todo.prototype.addFunction = function add(func, times) {
   if (times === undefined) {
      todo.push(func)
      return todo.length - 1;
   } else if (Number.isInteger(times) && times > 0) {
      todo.push(func)
      todo.push((amount, length) => {
         amount--;
         if (amount === 0) todo.delete(length)
         else {
            
         }
      }.bind(null, times, todo.length))
      return todo.length - 2;
   } else if (times === 0) {
      console.warn("...0 times?") 
   } else {
      console.error("Invalid amount of times");
   }
}

function RunClockThings () {
   for (let thing of todo) thing();
   ticks++;
}
let ClockInterval = setInterval(RunClockThings, TICK_SPEED)

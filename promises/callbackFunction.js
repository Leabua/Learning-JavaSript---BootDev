const write = "Testing the function.";

const callbackFunction = (write) => {
  console.log(write);
};

const milliSeconds = 1000;
setTimeout(callbackFunction, milliSeconds);

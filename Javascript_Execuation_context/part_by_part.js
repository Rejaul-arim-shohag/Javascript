console.log(window);
function takeOrder(callBack) {
  console.log("Take Order");
  callBack();
}
function processOrder(callBack) {
  console.log("Processing Order");
  callBack();
}

function completeOrder(callBack) {
  console.log("Complete Order");
  callBack();
}
takeOrder(function () {
  processOrder(function () {
    completeOrder();
  });
});

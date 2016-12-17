
function twice(num) {
  console.log(num * 2);
};

function three(num) {
  console.log(num * 3)
}

function printHello() {
  console.log("Hello World!")
}

function func(func) {
  func
}

var num = 10

func(printHello());
func(twice(num));
func(three(num));
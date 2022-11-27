let result = 0;

function init(num) {
  result = num;
  print();
}
init(0);

function add(num) {
  result += num;
  print();
}

function sub(num) {
  result -= num;
  print();
}

function divide(num) {
  result /= num;
  print();
}

function multi(num) {
  result *= num;
  print();
}

function print() {
  console.log(result);
}

function reset() {
  result = 0;
  print();
}

add(5);
add(5);
sub(1);
sub(7);
divide(2);
divide(3);
multi(2);
multi(3);
reset();

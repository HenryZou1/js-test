export function getFizzBuzzUntil(n) {
  // TODO: write your code here
  let array = [];
	for(let i = 1; n >= i; i++){
		if(i %3 ==0 && i % 5 ==0 )
			array.push("FizzBuzz");
		else if( i %3 == 0)
			array.push("Fizz");
		else if( i %5 == 0)
			array.push("Buzz");
		else
			array.push(i);
	}
	return array;
}

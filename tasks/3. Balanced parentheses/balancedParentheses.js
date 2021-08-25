export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  	let stack = [];
	for (let i = 0; i< inputString.length; i++){
		if(inputString[i] == "(")
			stack.push("(");
		if(inputString[i] == ")"){
			if(stack.length> 0)
				stack.pop();
			else
				return false;
		}

	}
	if(stack.length==0)
		return true;
	else
		return false;
}

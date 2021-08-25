export function getFibonacciUntil(num) {
  //TODO write your code here, remember it should be recursive
  	if(num == 2){
		return [0, 1];
	}
	else{
		var ans = getFibonacciUntil(num-1);
		ans.push(ans[ans.length-1] +ans[ans.length-2]);
		return ans;
	}
}

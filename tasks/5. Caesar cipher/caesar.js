export function encryptCaesar(inputString, key) {
  // TODO: write your code here
  let array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let ans = "";
	for(let i = 0; inputString.length > i; i++){
		let index = array.indexOf(inputString[i]);
		ans +=array[(index+key)%26];
	}
	return ans;
}

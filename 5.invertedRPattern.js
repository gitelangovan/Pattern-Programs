const n = 6;

for( let i= 1; i <= n; i++){
	let print = '';
  
  for( let j =1; j <= n - i ; j++){
		print += j+' ';
  }
  console.log("\n"+ print);
}	


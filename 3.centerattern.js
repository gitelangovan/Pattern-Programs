const n = 5;

for( let i= 1; i <=n; i++){
	let print = '';
	
  for( let j =1; j <= n - i ; j++){
		print += ' ';
  }
    
  for(let j = 1; j <= (2 * i -1); j++){
      print += '*';
  }
  
  console.log(print);
}	
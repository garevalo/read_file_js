const openFile = (event) => {

	const input = document.getElementById('file');

	const reader = new FileReader();

	let node = document.getElementById('output')

	node.innerHTML = render_load();

	reader.onload = () => {

	  let text = reader.result;
	  let text_to_search = document.getElementById("text_to_search").value
	  let eachLine = text.split('\n')
	  let output = ""
	  let count = 0
	  
	  //toUpperCase

	  for( let i = 0; i <  eachLine.length; i++ ) {
	     
	  	  let upper   = text_to_search.trim().toUpperCase()
      	  let ucFirst = firstWordToUpper(text_to_search.trim())
      	  let normal 	= text_to_search.trim()	

	      if( 
	      	eachLine[i].search( normal ) != -1 ||
	      	eachLine[i].search( upper ) != -1 ||
	      	eachLine[i].search( ucFirst )  != -1
	      	){

	      

	      	if(  eachLine[i].search( normal ) != -1 ){
	      		output += render_output(i,eachLine[i],normal);
	      	}
	      	
	      	if( eachLine[i].search( upper ) != -1 ){
	      		output += render_output(i,eachLine[i],upper);
	      	}

	      	if( eachLine[i].search( ucFirst )  != -1 ){
	      		output += render_output(i,eachLine[i],ucFirst);
	      	}
			
	      	count++;
	     
	      }
	  }	

	  node.innerHTML = `${output} <div class="row">  
	  								<div class="mt-3 alert alert-primary"> TOTAL :  <span class="font-weight-bold text-primary"> ${count} </span> </div> 
	  							  </div>`;

	};

	reader.readAsText(input.files[0]);

};


const render_load = () => {
	return `<div class="spinner-grow text-primary" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow text-secondary" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow text-success" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow text-danger" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow text-warning" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow text-info" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow text-light" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow text-dark" role="status">
			  <span class="sr-only">Loading...</span>
			</div>`;
}


const render_output = (number,string,text) => {

	return `<div class="row">
				<code>
					Line <span class="badge badge-pill badge-light">(${number+1})</span>: 
					${string.replace(text, `<span class="font-weight-bold text-primary"> ${text}  </span>`) } 
				</code>
			</div>`;

}

function firstWordToUpper(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
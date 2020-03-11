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
	  let countNormal = 0
	  let countUpper = 0
	  let countUcfirst = 0
	  
	  let upper   = text_to_search.trim().toUpperCase()
  	  let ucFirst = firstWordToUpper(text_to_search.trim())
  	  let normal 	= text_to_search.trim()	

	  for( let i = 0; i <  eachLine.length; i++ ) {
	     
	      if( 
	      	eachLine[i].search( normal ) 	!= -1 ||
	      	eachLine[i].search( upper ) 	!= -1 ||
	      	eachLine[i].search( ucFirst )  	!= -1
	      	){

	      	if(  eachLine[i].search( normal ) != -1 ){
	      		output += render_output(i,eachLine[i],normal);
	      		countNormal++;
	      	}
	      	
	      	if( eachLine[i].search( upper ) != -1 ){
	      		output += render_output(i,eachLine[i],upper);
	      		countUpper++;
	      	}

	      	if( eachLine[i].search( ucFirst )  != -1 ){
	      		output += render_output(i,eachLine[i],ucFirst);
	      		countUcfirst++;
	      	}
			
	      }
	  }	

	  node.innerHTML = `${output} 
	  					<hr>
	  					<div class="row">  
							<div class="mt-3 alert alert-primary"> Total <span class="font-weight-bold ">${normal}</span> :  <span class="font-weight-bold "> ${countNormal} </span> </div> 
						 
							<div class="mt-3 ml-2 alert alert-danger"> Total <span class="font-weight-bold ">${upper}</span> :  <span class="font-weight-bold "> ${countUpper} </span> </div> 
						
							<div class="mt-3 ml-2 alert alert-warning"> Total <span class="font-weight-bold ">${ucFirst}</span> :  <span class="font-weight-bold "> ${countUcfirst} </span> </div> 
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



const firstWordToUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const openFile = (event) => {

	const input = document.getElementById('file');

	const reader = new FileReader();

	let node = document.getElementById('output')

	node.innerHTML = render_load();

	//alert(document.getElementById('upper')) 

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

  	  reg_search = new RegExp( text_to_search, "i" );

	  for( let i = 0; i <  eachLine.length; i++ ) {
	     
	      if( 
	      	reg_search.test(eachLine[i]) &&
	      	eachLine[i].search( normal ) == -1
	      	){

	      	output += render_output(i,eachLine[i], getWordFromString(eachLine[i],normal) ,"primary");
	      	countNormal++;
	      	
	      	/*if(  eachLine[i].search( normal ) != -1 ){
	      		output += render_output(i,eachLine[i],normal,"primary");
	      		countNormal++;
	      	}
	      	
	      	if( eachLine[i].search( upper ) != -1 ){
	      		output += render_output(i,eachLine[i],upper,"danger");
	      		countUpper++;
	      	}

	      	if( eachLine[i].search( ucFirst )  != -1 ){
	      		output += render_output(i,eachLine[i],ucFirst,"warning");
	      		countUcfirst++;
	      	}*/
			
	      }
	  }	

	  node.innerHTML = `${output} 
	  					<hr>
	  					<div class="row">  
							<div class="mt-3 alert alert-danger"> <span class="font-weight-bold ">${normal}</span> :  <span class="font-weight-bold "> ${countNormal} </span> </div> 
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


const render_output = (number,string,text,type) => {
	regx = new RegExp(text, 'i')
	return `<div class="row">
				<code>
					Line <span class="badge badge-pill badge-light">(${number+1})</span>: 
					${string.replace(regx, `<span class="font-weight-bold text-${ type }">${text}</span>`) } 
				</code>
			</div>`;

}



const firstWordToUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1)


const equalsIgnoringCase = (text, other) => text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0

const getWordFromString = (string,text) => {
  
  regx = new RegExp(text, 'i')
  //return string.slice( 0,10 )
  return string.slice( string.search(regx),string.search(regx) + text.length )

} 
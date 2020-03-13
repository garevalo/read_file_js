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

const render_total = (normal,countNormal) => {

	return `<hr>
			<div class="row">  
				<div class="mt-3 alert alert-danger"> 
					<span class="font-weight-bold ">${normal}</span> : <span class="font-weight-bold ">${countNormal}</span> 
				</div> 
			</div>`
}

const render_output = (number,string,text,type) => {
	
	regx = regex(text)

	return `<div class="row">
				<code>
					Line <span class="badge badge-pill badge-light">(${number+1})</span>: 
					${string.replace(regx, `<span class="font-weight-bold text-${ type }">${text}</span>`) } 
				</code>
			</div>`;

}

//export { render_load, render_total, render_output }
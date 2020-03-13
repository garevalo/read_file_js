//import { render_load, render_total, render_output } from "render_html"

const openFile = (event) => {

	const input = document.getElementById('file')

	const node = document.getElementById('output')
	
	const reader = new FileReader();

	node.innerHTML = render_load();

	reader.onload = () => {

	  let text = reader.result;
	  let text_to_search = document.getElementById("text_to_search").value
	  let eachLine = text.split('\n')
	  let output = ""
	  let countNormal = 0

  	  let normal  = text_to_search.trim()	

  	  reg_search = regex(text_to_search);

	  for( let i = 0; i <  eachLine.length; i++ ) {
	     
	      if( reg_search.test(eachLine[i]) && eachLine[i].search( normal ) == -1 ){

	      	output += render_output(i,eachLine[i], getWordFromString(eachLine[i],normal) ,"primary");
	      	countNormal++;
	      				
	      }
	  }	

	  node.innerHTML = output + render_total(normal,countNormal);

	};

	reader.readAsText(input.files[0]);

};


const firstWordToUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const equalsIgnoringCase = (text, other) => text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0

const getWordFromString = (string,text) => {
  
  regx = regex(text)
  
  return string.slice( string.search(regx),string.search(regx) + text.length )

} 

const regex = (text) =>  new RegExp(text, 'i')
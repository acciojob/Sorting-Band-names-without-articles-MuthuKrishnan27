//your code here

let bandNames = ['The Beatles', 'Led Zeppelin', 'Red Hot Chili Peppers', 'Aerosmith', 'The Rolling Stones'];

// Function to extract the name without articles
function extractNameWithoutArticles(name) {
  let articles = ['a', 'an', 'the'];
  let words = name.split(' ');
  let extractedWords = words.filter(word => !articles.includes(word.toLowerCase()));
  return extractedWords.join(' ');
}

// Sorting the band names in lexicographic order without considering articles
bandNames.sort((a, b) => extractNameWithoutArticles(a).localeCompare(extractNameWithoutArticles(b)));

// Generating the HTML list
// let htmlList = '<ul id="band">';
// bandNames.forEach((name) => {
//   htmlList += '<li>' + name + '</li>';
// });
// htmlList += '</ul>';

// console.log(htmlList);
let ul = document.getElementsByTagName("ul")[0];
ul.id = "band";
for(let i=0;i<bandNames.length;i++){
	let liElement = document.createElement("li");
	var textNode = document.createTextNode(bandNames[i]);
	liElement.appendChild(textNode);
	ul.appendChild(liElement);
}


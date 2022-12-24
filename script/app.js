const mainElt = document.querySelector('main');
const max = 20;

console.log(mainElt);

let current = "1";
let maxOffset = 0;

function conway_suite(n) 
{
	let rslt = "";
	let tab = n.split("");
	let elt = tab[0];
	let count = 1;
	for (let i = 1; i < tab.length; i++) {
		if (tab[i] === elt) {
			count++;
		} else {
			rslt = rslt + `${count}${elt}`;
			count = 1;
		}
		elt = tab[i];
	}
	// console.table({count, elt});
	rslt = rslt + `${count}${elt}`;
	return rslt;
}

function display_to_main (n) 
{
	let div = document.createElement('div');
	div.textContent = n;
	mainElt.append(div);
}

display_to_main(current);
for (var i = 0; i < max; i++) {
	current = conway_suite(current);
	display_to_main(current);
}


window.addEventListener('scroll', event => {
	console.log(maxOffset, document.body.offsetHeight);
	if (document.body.offsetHeight > maxOffset) {
		maxOffset = document.body.offsetHeight;
		current = conway_suite(current);
		display_to_main(current);
	}
});
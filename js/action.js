document.getElementById("id_r1-1").addEventListener("click", ()=> {
	var el = document.querySelector('.r1-1').classList.contains('class-default, r1-1');
	if (el == true){
		return console.log('possue');
	}else{
		console.log('Não deu');
	}
});
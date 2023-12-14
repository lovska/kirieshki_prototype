function visible_secret() {
	document.getElementById('main_bot').style.display = 'block';
	document.getElementById('main_but').style.display = 'none';
}

function invisible_secret() {
	document.getElementById('main_bot').style.display = 'none';
	document.getElementById('main_but').style.display = 'block';
}

function open_2_row() {
	document.getElementById('photogalary_row_2').style.display = 'flex';
	document.getElementById('photogalary_row_2').style.justifyContent = 'space-around'
	document.getElementById('main_but_1').style.display = 'none';
	document.getElementById('main_but_2').style.display = 'inline-block';
	document.getElementById('hr_1').style.display = 'flex';
}

function open_3_row() {
	document.getElementById('photogalary_row_3').style.display = 'flex';
	document.getElementById('photogalary_row_3').style.justifyContent = 'space-around'
	document.getElementById('main_but_2').style.display = 'none';
	document.getElementById('hr_2').style.display = 'flex';
}

function open_galary() {
	document.getElementById('btn_close').style.display = 'inline-block';
	document.getElementById('btn_open').style.display = 'none';
	document.getElementById('galary').style.display = 'block'
	document.getElementById('photogalary_row_2').style.display = 'none';
	document.getElementById('photogalary_row_2').style.justifyContent = 'none'
	document.getElementById('photogalary_row_3').style.display = 'none';
	document.getElementById('photogalary_row_3').style.justifyContent = 'none'
	document.getElementById('main_but_1').style.display = 'inline-block';
	document.getElementById('main_but_2').style.display = 'none';
	document.getElementById('hr_1').style.display = 'none';
	document.getElementById('hr_2').style.display = 'none';
}

function close_galary() {
	document.getElementById('btn_close').style.display = 'none';
	document.getElementById('btn_open').style.display = 'inline-block';
	document.getElementById('galary').style.display = 'none'
}
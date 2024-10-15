window.onload = customize;

function customize(){
	window.document.getElementById('div3').style.display = 'none';
}

function countryName()
{
    window.document.getElementById('div3').style.display = 'none';
	var q_str = 'type=string&value='+document.getElementById('t1').value;
	doAjax('CountryName_servlet',q_str,'countryName_back','post',0);
}
function countryName_back(result)
{
	if (result.substring(0,5)=='error'){
	   window.document.getElementById('div3').style.display = 'block';
	   window.document.getElementById('div3').innerHTML="<p style='color:red;'><b>"+result.substring(6)+"</b></p>";
   }else{
	   window.document.getElementById('t2').value=""+result;
   }
}

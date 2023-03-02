
function getValue(e)
{
	//alert("hi");
	//document.getElementById('calc').value=(e);
	//Code to append input
	
	if (document.getElementById('calc').value == '0')
	{
		document.getElementById('calc').value = e;
	}
	else 
	{
		document.getElementById('calc').value += e;
	}
}

function clearAll()
{
	document.getElementById('calc').value ='0';
	document.getElementById('subInput').value = '';
}
function removeLast()
{
	temp = document.getElementById('calc').value;
	if(temp.length>1)
	{
		document.getElementById('calc').value = temp.slice(0,-1);
	}
	else
	{
		document.getElementById('calc').value = '0';
	}
}
function solve()
{
	temp = document.getElementById('calc').value;
	document.getElementById('calc').value = eval(temp);
	document.getElementById('subInput').value = temp +"=";
	document.getElementsByClassName('modal-body').innerText = temp +"=";
}
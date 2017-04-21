function menuToggle()
{
    var c = document.getElementById('container');
	var p = document.getElementById('panel');

	c.classList.toggle('panel-transition');
	p.classList.toggle('panel-transition');
}

var index = 0;

var arrowF;
var arrowB;

var contents;

document.addEventListener("DOMContentLoaded", function(event)
{
    arrowF = document.getElementById('forward');
    arrowB = document.getElementById('back');

    contents = document.getElementsByClassName('content-item');
});

function changeContent()
{
    Array.from(contents).forEach(function(item)
    {
        item.setAttribute('style', 'display:none')
    });
	contents[index].setAttribute('style', '');
}

function switchContentForward()
{
	switch (index)
	{
		case 0: arrowB.classList.remove('arrow-unavailable'); break;
		case 1: arrowF.classList.add('arrow-unavailable'); break;
		default: return;
	}
	++index;
	changeContent();
}

function switchContentBack()
{
	switch (index)
	{
        default: return;
        case 1: arrowB.classList.add('arrow-unavailable'); break;
		case 2: arrowF.classList.remove('arrow-unavailable'); break;
	}
	--index;
	changeContent();
}

function menuToggle()
{
    var c = document.getElementById('container');
	var p = document.getElementById('panel');

	c.classList.toggle('panel-transition');
	p.classList.toggle('panel-transition');
}

var index = 1;

var contentfirst = `
<div id="header">
	<p id="name">Václav Pelíšek <span id="twitter">@peldax</span></p>
	<p>Developer. Climber. Perfectionist.</p>
	<a href="mailto:info@peldax.com" target="_top">info@peldax.com</a>
</div>
`;

var contentsecond = `
<div id="intro">
	<p>
I am a software / web developer from the Czech Republic, currently studying for a Bachelor’s degree in Cybernetics and Control Engineering. I am also a member of the Georgiev Lab, a research laboratory at the University of West Bohemia. My passion lies in mathematics, especially mathematical analysis, which improves my ability to solve complex algorithmization problems. My approach involves using intuition hand in hand with careful analysis of a given task. I am a perfectionist with a strong enthusiasm for pinpointing the best solutions for non-trivial problems.
	</p>
</div>
`;

var contentthird = `
<div id="intro">
	<p>
TBA
	</p>
</div>
`;

function changeContent()
{
	var t = document.getElementById('content');

	if (index == 3)
	{
		t.innerHTML = contentthird;
	}
	if (index == 2)
	{
		t.innerHTML = contentsecond;
	}
	if (index == 1)
	{
		t.innerHTML = contentfirst;
	}
}

function activateArrow(id)
{
	var a = document.getElementById(id);

	a.classList.remove('arrow-unavailable');
}

function deactivateArrow(id)
{
	var a = document.getElementById(id);

	a.classList.add('arrow-unavailable');
}

function switchContentForward()
{
	switch (index)
	{
		case 1:
		activateArrow('back'); break;
		
		case 2:
		deactivateArrow('forward'); break;

		default: return;
	}
	++index;
	changeContent();
}

function switchContentBack()
{
	switch (index)
	{
		case 2:
		deactivateArrow('back'); break;
		
		case 3:
		activateArrow('forward'); break;

		default: return;
	}
	--index;
	changeContent();
}

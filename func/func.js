z1 = function ()
{
    document.querySelectorAll('p').forEach(el => el.style.backgroundColor = 'red');
};

z2 = function ()
{
    document.querySelectorAll('p').forEach(el => el.style.backgroundColor = 'transparent');
};
z3 = function ()
{
    document.querySelectorAll('p').forEach(el => el.style.textShadow = '10px 10px 15px black');
}

z4 = function ()
{
    document.querySelectorAll('p').forEach(el => el.style.textShadow = 'none');
}

z5 = function ()
{
    var p = document.querySelectorAll('p');

    for (var i = 0; i < p.length; i++)
    {
        var n = i + 1;
        p[i].innerHTML += " " + n;
    }
}



















var ys.addComma = function (a)
{
	return a ? a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : null;
};
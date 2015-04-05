# ys.js
Private javascript functions by Y Sim.
> Any comments would be appreciated :)

## List of functions
- **Object.prototype.addComma** : insert a comma every 3 characters.
	- Usage : ``obj.addComma();``
	- Examples
	```
	(1000034).addComma();				// 1,000,034
	"1000034".addComma();				// 1,000,034
	"this is not a number".addComma();	// NaN
	```
- **String.prototype.cutStr** : cut string without cutting any word
	- Usage : ``obj.cutStr(Number MIN_NUMBER_OF_CHARACTERS); `` 
	- Usage : ``obj.cutStr(Number MIN_NUMBER_OF_CHARACTERS, Boolean ADD_THREE_DOTS);``
	- Examples
	```
	"Lorem Ipsum is simply dummy text of the printing industry".cutStr(10);	
	// Lorem Ipsum
	"Lorem Ipsum is simply dummy text of the printing industry".cutStr(20,true);	
	// Lorem Ipsum is simply...
	"Lorem Ipsum is simply dummy text of the printing industry".cutStr(30,false);	
	// Lorem Ipsum is simply dummy text
	```
- **String.prototype.coloredStr** : returns HTML span element with a specified font color
	- Usage : ``str.coloredStr(String HTML_COLOR_CODE)``
	- Usage : ``str.coloredStr(String HTML_COLOR_CODE, Boolean TEXT_BOLD_OR_NOT)``
	- Examples
	```
	"Lorem Ipsum".coloredStr("55ffdd");			
	// <span style="color:#55ffdd;">Lorem Ipsum</span>
	"Lorem Ipsum".coloredStr("55ffdd",true);	
	// <span style="color:#55ffdd; font-weight:bold;">Lorem Ipsum</span>
	```
- **ys.getSearch**
	- Usage : ``ys.getSearch();``
	- Example (*In case of* : www.example.com/?search1=for&search2=example)
	```
	ys.getSearch();					// ?search1=for&search2=example
	```
- **ys.getVars** (*alternative form* : **ys.getVar**)
	- Usage : ``ys.getVars();``
	- Usage : ``ys.getVars(String SEARCH_VARIABLE);``
	- Examples (*In case of* : www.example.com/?search1=for&search2=example)
	```
	ys.getVars();					// Object {search1: "for", search2: "example"}
	ys.getVars().search1;			// for
	ys.getVars()['search1'];		// for
	ys.getVars(search2);			// example
	ys.getVars(search_none);		// null
	```
- **ys.dateToString** : returns a neat string from a *Date* object
	- Usage : ``ys.dateToString();``
		- *Note* : In this case, ``ys.dateToString(new Date());`` is called (returns present time)
	- Usage : ``ys.dateToString(Date SOME_DATE);``
	- Examples
	```
	ys.dateToString();				// 201x.xx.xx xx:xx (this represents your present time)
	ys.dateToString(1428240000000);	// 2015.04.05 22:20
	```
- **ys.generateColor** : generates random dark color (original purpose : random font color for anonymous usernames)
	- Usage : ``ys.generateColor(Number seed1);``
		- *Note* : if seed2 is missing, seed2 depends on present time (i.e. ``parseInt(new Date().getTime()/1000)`` and will be changed once in a second)
	- Usage : ``ys.generateColor(Number seed1, Number seed2);``
		- *Note* : if you fix both seed1 and seed2, this will generate exact same color repeatedly
	- Examples
	```
	ys.generateColor(184);			// 9b83ba (this varies upon your present time)
	ys.generateColor(184, Math.PI);	// 765fb2 (fixed)
	```
	
## List of variables
- Boolean **ys.isiOS**, **ys.isAndroid** : returns *true* if ``navigator.userAgent`` matches to iOS (or Android)
		- *Note* : userAgent iOS includes userAgents of iPod, iPad, and iPhone.
	- Examples (*In case of* : userAgent is iPhone)
	```
	ys.isiOS						// true
	ys.isAndroid					// false
	```

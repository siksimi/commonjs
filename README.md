# ys.js
Private javascript functions by Y Sim.
> Any comments would be appreciated :)

## List of functions
- **Object.prototype.addComma** : insert a comma every 3 characters.
	- Usage : ``obj.addComma();``
	- Example
	```
	(1000034).addComma();				// 1,000,034
	"1000034".addComma();				// 1,000,034
	"this is not a number".addComma();	// NaN
	```
- **String.prototype.cutStr** : cut string without cutting any word
	- Usage : ``obj.cutStr(*Number* MIN_NUMBER_OF_CHARACTERS); `` 
		- *Note* : In this case, three dots("...") are added at the end of phrase as a default option
	- Usage : ``obj.cutStr(*Number* MIN_NUMBER_OF_CHARACTERS, *Boolean* ADD_THREE_DOTS_OR_NOT);``
	- Example
	```
	"Lorem Ipsum is simply dummy text of the printing industry.".cutStr(10);	
	// Lorem Ipsum...
	```
	- Example
	```
	"Lorem Ipsum is simply dummy text of the printing industry".cutStr(20,true);	
	// Lorem Ipsum is simply...
	```
	- Example
	```
	"Lorem Ipsum is simply dummy text of the printing industry".cutStr(30,false);	
	// Lorem Ipsum is simply dummy text
	```
- **String.prototype.coloredStr** : returns HTML span element with a specified font color
	- Usage : ``str.coloredStr(*String* HTML_COLOR_CODE)``
	- Usage : ``str.coloredStr(*String* HTML_COLOR_CODE, *Boolean* TEXT_BOLD_OR_NOT)``
	- Example
	```
	"Lorem Ipsum".coloredStr("55ffdd");			// <span style="color:#55ffdd;">Lorem Ipsum</span>
	"Lorem Ipsum".coloredStr("55ffdd",true);	// <span style="color:#55ffdd; font-weight:bold;">Lorem Ipsum</span>
	```
- **ys.getSearch**
	- Usage : ``ys.getSearch();``
	- Example (*In case of* : www.example.com/?search1=for&search2=example)
	```
	ys.getSearch();					// ?search1=for&search2=example
	```
- **ys.getVars** (*alternative form* : **ys.getVar**)
	- Usage : ``ys.getVars();``
	- Usage : ``ys.getVars(*String* SEARCH_VARIABLE);``
	- Example (*In case of* : www.example.com/?search1=for&search2=example)
	```
	ys.getVars();					// Object {search1: "for", search2: "example"}
	ys.getVars().search1;			// for
	ys.getVars()['search1'];		// for
	ys.getVars(search2);			// example
	ys.getVars(search_none);		// null
	```
- **ys.dateToString** : ~~(My own preferred syntax)~~ returns a neat string from a *Date* object
	- Usage : ``ys.dateToString();``
		- *Note* : In this case, ``ys.dateToString(new Date());`` is called (returns present time)
	- Usage : ``ys.dateToString(*Date* SOME_DATE);``
	- Example 
	```
	ys.dateToString();				// 201x.xx.xx xx:xx *(this represents your present time)*
	ys.dateToString(1428240000000);	// 2015.04.05 22:20
	```
	
## List of variables
- *Boolean* **ys.isiOS**, **ys.isAndroid** : returns true if ``navigator.userAgent`` matches to iOS (or Android)
		- *Note* : userAgent iOS includes userAgents of iPod, iPad, and iPhone.
	- Example (*In case of* : userAgent is iPhone)
	```
	ys.isiOS						// true
	ys.isAndroid					// false
	```

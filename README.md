# ys.js
custom javascript functions

List of functions
- Object.prototype.addComma : insert a comma every 3 characters.
	- Usage : ``obj.addComma();``
	- Example
	```
	"1000034".addComma();	// 1,000,034
	```
- Object.prototype.cutStr : cut string without cutting word
	- Usage : ``obj.cutStr(integer NUMBER_OF_CHARACTERS); `` 
		- In this case, three dots("...") are added at the end of phrase as a default option
	- Usage : ``obj.cutStr(integer NUMBER_OF_CHARACTERS, boolean ADD_THREE_DOTS_OR_NOT);``
	- Example
	```
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry.".cutStr(10);	
	// Lorem Ipsum...
	```
	- Example
	```
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry.".cutStr(20,true);	
	// Lorem Ipsum is simply...
	```
	- Example
	```
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry.".cutStr(30,false);	
	// Lorem Ipsum is simply dummy text
	```
- ys.getSearch
	- Usage : ``ys.getSearch();``
	- Example 
	```
	// http://www.example.com/?search1=for&search2=example
	ys.getSearch();
	// ?search1=for&search2=example
	```
- ys.getVars
	- Usage : ``ys.getVars();``
	- Usage : ``ys.getVars(String SEARCH_VARIABLE);``
	```
	// http://www.example.com/?search1=for&search2=example
	ys.getVar();
	// Object {search1: "for", search2: "example"}
	ys.getVar(search2);
	// example
	ys.getVar(search_not_existing);
	// null
	```
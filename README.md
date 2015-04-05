# ys.js
This is a personal javascript function library

List of functions
- String.prototype.addComma : insert a comma every 3 characters.
	- Usage: str.addComma();
	- Example
	'''
	console.log(new String("10000").addComma());	// 10,000
	'''
- String.prototype.cutStr : cut string without cutting word
	- Usage: str.cutStr(integer NUMBER_OF_CHARACTERS); //in this case, three dots("...") are added at the end of phrase as a default option
	- Usage: str.cutStr(integer NUMBER_OF_CHARACTERS, boolean ADD_THREE_DOTS_OR_NOT);
	- Example
	'''
	console.log(new String("Lorem Ipsum is simply dummy text of the printing and typesetting industry.").cutStr(10);	// Lorem Ipsum...
	'''
	- Example
	'''
	console.log(new String("Lorem Ipsum is simply dummy text of the printing and typesetting industry.").cutStr(20,true);	// Lorem Ipsum is simply...
	'''
	- Example
	'''
	console.log(new String("Lorem Ipsum is simply dummy text of the printing and typesetting industry.").cutStr(30,false);	// Lorem Ipsum is simply dummy text
	'''
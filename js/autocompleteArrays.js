var moduleDescriptions = {
	Gfx:"For drawing and manipulating shapes and images.",
	Col:"So many colors!",
	Font:"All the fonts you can use (for use with <b>Text</b> functions).",
	Text:"For displaying text on screen :D",
	Music:"For all your music and sound needs.",
	Key:"A list of all of the key names. For use with <b>Input</b> functions.",
	Input:"Responding to key presses!",
	Mouse:"Checking out mouse movement and clicks.",
	Convert:"Strings to ints to floats and back again.",
	Random:"",
	Game:"House-keeping",
	Math:"",
	String:'UH, THIS PAGE ISN\'T ACCURATE RIGHT NOW. For better documentation see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String.<p>The basic String class.<p>A haxe String is immutable: it is not possible to modify individual characters, and no method of this class changes the state of this String.<p>Strings can be constructed using the string literal syntax "string value" or \'string value\'.<p>String can be concatenated by using the + operator ("cat"+"dog" produces "catdog") - you can also concatenate with other data types.',
	Array:"UH, THIS PAGE ISN\'T ACCURATE RIGHT NOW. For better documentation see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array."
};

var haxeLibraryArray = [
["Gfx",".","M"],
["Col",".","E"],
["Font",".","E"],
["Text",".","M"],
["Music",".","M"],
["Key",".","E"],
["Input",".","M"],
["Mouse",".","M"],
["Convert",".","M"],
["Random",".","M"],
["Game",".","M"],
["Math",".","M"],
["String",".","M"],
["trace","(message)","F"],
["function ",""],
["break",";"],
["case "],
["continue",";"],
["default",":"],
["new"],
["do"],
["else"],
["false"],
["true"],
["for ",""],
["if"],
["in"],
["null"],
["switch "],
["var "],
["while"],
["return "],
//putting a space after the brackets below stops autocomplete from inserting a semicolon
["update","() ","F","This function will be called every frame by the engine if you define it."]
];


var haxeMethodArray = [
	["String.length",":Int","M_P","The number of characters in this String."],
	["String.charAt","(index:Int):String","M_F",'Returns the character at position index of this String.<p>If index is negative or exceeds this.length, the empty String "" is returned.<p>This isn\'t really necessary because you can use array access to access characters - "doge"[2] returns "g", for instance.' ],
	["String.charCodeAt","(index:Int):Int","M_F",'Returns the character code at position index of this String.<p>If index is negative or exceeds this.length, null is returned.<p>To obtain the character code of a single character, "x".code can be used instead to inline the character code at compile time. Note that this only works on String literals of length 1.'],
	["String.concat","(string2:String, [...] ):String","M_F",],
	["String.indexOf","(str:String, startIndex:Int = 0):Int","M_F","Returns the position of the leftmost occurence of str within this String.<p>If startIndex is given, the search is performed within the substring of this String starting from startIndex. Otherwise the search is performed within this String. In either case, the returned position is relative to the beginning of this String.<p>If str cannot be found, -1 is returned."],
	["String.lastIndexOf","(str:String, startIndex:Int = str.length-1):Int","M_F",'Returns the position of the rightmost occurence of str within this String.<p>If startIndex is given, the search is performed within the substring of this String from 0 to startIndex. Otherwise the search is performed within this String. In either case, the returned position is relative to the beginning of this String.<p>If str cannot be found, -1 is returned.'],
	["String.split","(delimiter:String):Array<String>","M_F",'Splits this String at each occurence of delimiter.<p>If this String is the empty String "", the result is not consistent across targets and may either be [] (on Js, Cpp) or [""].<p>If delimiter is the empty String "", this String is split into an Array of this.length elements, where the elements correspond to the characters of this String.<p>If delimiter is not found within this String, the result is an Array with one element, which equals this String.<p>If delimiter is null, the result is unspecified.<p>Otherwise, this String is split into parts at each occurence of delimiter. If this String starts (or ends) with [delimiter}, the result Array contains a leading (or trailing) empty String "" element. Two subsequent delimiters also result in an empty String "" element.'],
	["String.substr","(pos:Int, len:Int = this.length-pos):String","M_F",'Returns len characters of this String, starting at position pos.<p>If len is omitted, all characters from position pos to the end of this String are included.<p>If pos is negative, its value is calculated from the end of this String by this.length + pos. If this yields a negative value, 0 is used instead.<p>If the calculated position + len exceeds this.length, the characters from that position to the end of this String are returned.<p>If len is negative, the result is unspecified.'],
	["String.substring","(startIndex:Int, endIndex:Int = this.length-1):String","M_F",'Returns the part of this String from startIndex to but not including endIndex.<p>If startIndex or endIndex are negative, 0 is used instead.<p>If startIndex exceeds endIndex, they are swapped.<p>If the (possibly swapped) endIndex is omitted or exceeds this.length, this.length is used instead.<p>If the (possibly swapped) startIndex exceeds this.length, the empty String "" is returned.'],
	["String.toLowerCase","():String","M_F",'Returns a String where all characters of this String are lower case.<p>Affects the characters A-Z. Other characters remain unchanged.'],
	["String.toString","():String","M_F","Returns the string itself.<p>A bit dumb out of context, but the idea is that you can call toString() on anything without having to worry about its type."],
	["String.toUpperCase","():String","M_F",'Returns a String where all characters of this String are upper case.<p>Affects the characters a-z. Other characters remain unchanged.'],

	["Array.length",":Int","M_P","The length of this Array."],
	["Array.concat","(a:Array):Array","M_F",'Returns a new Array by appending the elements of a to the elements of this Array.<p>This operation does not modify this Array.<p>If a is the empty Array [], a copy of this Array is returned.<p>The length of the returned Array is equal to the sum of this.length and a.length.<p>If a is null, the result is unspecified.'],
	["Array.copy","():Array","M_F",'Returns a shallow copy of this Array.<p>The elements are not copied and retain their identity, so a[i] == a.copy()[i] is true for any valid i. However, a == a.copy() is always false.'],
	["Array.filter","(f:T ‑> Bool):Array<T>","M_F","Returns an Array containing those elements of this for which f returned true.<p>The individual elements are not duplicated and retain their identity.<p>If f is null, the result is unspecified."],
	["Array.indexOf","(x:T, fromIndex:Int = 0):Int","M_F","Returns position of the first occurense of x in this Array, searching front to back.<p>If x is found by checking standard equality, the function returns its index.<p>If x is not found, the function returns -1.<p>If fromIndex is specified, it will be used as the starting index to search from, otherwise search starts with zero index. If it is negative, it will be taken as the offset from the end of this Array to compute the starting index. If given or computed starting index is less than 0, the whole array will be searched, if it is greater than or equal to the length of this Array, the function returns -1."],
	["Array.insert","(pos:Int, x:T)","M_F","Inserts the element x at the position pos.<p>This operation modifies this Array in place.<p>The offset is calculated like so:<p><ul><li>If pos exceeds this.length, the offset is this.length.</li><li>If pos is negative, the offset is calculated from the end of this Array, i.e. this.length + pos. If this yields a negative value, the offset is 0.</li><li>Otherwise, the offset is pos.</li></ul><p>If the resulting offset does not exceed this.length, all elements from and including that offset to the end of this Array are moved one index ahead."],
	["Array.iterator","():Iterator","M_F","Returns an iterator of the Array values.<p>Uh, an iterator has .next() and .hasNext() member functions that you can use to loop through all the contents. Not likely to be of use in Zeedonk."],
	["Array.join","(sep:String):String","M_F",'Returns a string representation of this Array, with sep separating each element.<p>The result of this operation is equal to Std.string(this[0]) + sep + Std.string(this[1]) + sep + ... + sep + Std.string(this[this.length-1])<p>If this is the empty Array [], the result is the empty String "". If this has exactly one element, the result is equal to a call to Std.string(this[0]).<p>If sep is null, the result is unspecified.'],
	["Array.lastIndexOf","(x:T, fromIndex:Int = this.length-1):Int","M_F",'Returns position of the last occurense of x in this Array, searching back to front.<p>If x is found by checking standard equality, the function returns its index.<p>If x is not found, the function returns -1.<p>If fromIndex is specified, it will be used as the starting index to search from, otherwise search starts with the last element index. If it is negative, it will be taken as the offset from the end of this Array to compute the starting index. If given or computed starting index is greater than or equal to the length of this Array, the whole array will be searched, if it is less than 0, the function returns -1.'],
	["Array.map","(f:S ‑> T):Array<T>","M_F","Creates a new Array by applying function f to all elements of this.<p>The order of elements is preserved.<p>If f is null, the result is unspecified."],
	["Array.pop","():T","M_F",'Removes the last element of this Array and returns it.<p>This operation modifies this Array in place.<p>If this has at least one element, this.length will decrease by 1.<p>If this is the empty Array [], null is returned and the length remains 0.'],
	["Array.push","(x:T):Int","M_F",'Adds the element x at the end of this Array and returns the new length of this Array.<p>This operation modifies this Array in place.<p>this.length increases by 1.'],
	["Array.remove","(x:T):Bool","M_F",'Removes the first occurence of x in this Array.<p>This operation modifies this Array in place.<p>If x is found by checking standard equality, it is removed from this Array and all following elements are reindexed acoordingly. The function then returns true.<p>If x is not found, this Array is not changed and the function returns false.'],
	["Array.reverse","()","M_F",'Reverse the order of elements of this Array.<p>This operation modifies this Array in place.<p>If this.length < 2, this remains unchanged.'],
	["Array.shift","()","M_F",'Removes the first element of this Array and returns it.<p>This operation modifies this Array in place.<p>If this has at least one element, this.length and the index of each remaining element is decreased by 1.<p>If this is the empty Array [], null is returned and the length remains 0.'],
	["Array.slice","(pos:Int, end:Int = this.length):Array","M_F",'Creates a shallow copy of the range of this Array, starting at and including pos, up to but not including end.<p>This operation does not modify this Array.<p>The elements are not copied and retain their identity.<p>If end is omitted or exceeds this.length, it defaults to the end of this Array.<p>If pos or end are negative, their offsets are calculated from the end of this Array by this.length + pos and this.length + end respectively. If this yields a negative value, 0 is used instead.<p>If pos exceeds this.length or if end exceeds or equals pos, the result is [].'],
	["Array.sort","(f:T ‑> T ‑> Int)","M_F",'Sorts this Array according to the comparison function f, where f(x,y) returns 0 if x == y, a positive Int if x > y and a negative Int if x < y.<p>This operation modifies this Array in place.<p>The sort operation is not guaranteed to be stable, which means that the order of equal elements may not be retained.<p>If f is null, the result is unspecified.'],
	["Array.splice","(pos:Int, len:Int):Array","M_F","Removes len elements from this Array, starting at and including pos, an returns them.<p>This operation modifies this Array in place.<p>If len is < 0 or pos exceeds this.length, the result is the empty Array [].<p>If pos is negative, its value is calculated from the end of this Array by this.length + pos. If this yields a negative value, 0 is used instead.<p>If the sum of the resulting values for len and pos exceed this.length, this operation will affect the elements from pos to the end of this Array.<p>The length of the returned Array is equal to the new length of this Array subtracted from the original length of this Array. In other words, each element of the original this Array either remains in this Array or becomes an element of the returned Array.<p>Super useful for removing elements from an array, if you know the index."],
	["Array.toString","():String","M_F","Returns a string representation of this Array.<p>The result will include the individual elements' String representations separated by comma. The enclosing [ ] may be missing on some platforms, use Std.string() to get a String representation that is consistent across platforms."],
	["Array.unshift","(x:T)","M_F",'Adds the element x at the start of this Array.<p>This operation modifies this Array in place.<p>this.length and the index of each Array element increases by 1.'],
];

var haxeHintArray = [

["Gfx.clearscreen","(color)","F"],
["Gfx.clearscreeneachframe",":Bool","P"],
["Gfx.drawbox","(x, y, width, height, col, alpha)","F"],
["Gfx.fillbox","(x, y, width, height, col, alpha)","F"],
["Gfx.drawtri","(x1, y1, x2, y2, x3, y3, col, alpha)","F"],
["Gfx.filltri","(x1, y1, x2, y2, x3, y3, col, alpha)","F"],
["Gfx.drawcircle","(x, y, radius, col, alpha)","F"],
["Gfx.fillcircle","(x, y, radius, col, alpha)","F"],
["Gfx.drawhexagon","(x, y, radius, angle, col, alpha)","F"],
["Gfx.fillhexagon","(x, y, radius, angle, col, alpha)","F"],
["Gfx.drawline","(x1, y1, x2, y2, col)","F"],
["Gfx.linethickness",":Float","P"],
["Gfx.getpixel","(x, y)","F"],
["Gfx.setpixel","(x, y, col):Int","F"],
["Gfx.rgb","(red [0-255], green [0-255], blue [0-255] ):Int","F","Converts a color with given red, green, and blue values (between 0-255 each) to a single hex number."],
["Gfx.hsl","(hue [0-0], saturation [0-1.0], lightness [0-1.0] ):Int","F","Converts a color with given hue (0-360), saturation [0-1], and lightness [0-1] values to a single hex number."],
["Gfx.getred","(col):Int","F","Returns the red component of a hex color (Between 0-255 inclusive)."],
["Gfx.getgreen","(col):Int","F","Returns the green component of a hex color (Between 0-255 inclusive)."],
["Gfx.getblue","(col):Int","F","Returns the blue component of a hex color (Between 0-255 inclusive)."],
["Gfx.gethue","(col):Int","F","Returns the hue (0-360) value of a color."],
["Gfx.getsaturation","(col):Float","F","Returns the saturation (0.0-1.0) value of a color."],
["Gfx.getlightness","(col):Int","F","Returns the lightness (0.0-1.0) value of a color."],
["Gfx.screenwidth",":Int","P"],
["Gfx.screenheight",":Int","P"],
["Gfx.screenwidthmid",":Int","P","Returns screen width divided by two."],
["Gfx.screenheightmid",":Int","P","Returns screen height divided by two."],
["Gfx.drawimage","(x, y, imagename, optional parameters)","F"],
["Gfx.imagewidth","(imagename):Int","P"],
["Gfx.imageheight","(imagename):Int","P"],
["Gfx.loadimagestring","(imagename, imagestring, optional color1, color2, color3, color4) ","F"],
["Gfx.createimage","(imagename, width, height) ","F"],
["Gfx.resizeimage","(imagename, scale)","F"],
["Gfx.drawtoscreen","()","F"],
["Gfx.drawtoimage","(imagename)","F"],
["Gfx.grabimagefromscreen","(imagename, screen x, screen y)","F","This function grabs a copy of the screen from position x,y, and places it in the image."],
["Gfx.grabimagefromimage","(imagename, sourceimagename, image x, image y)","F"],
["Gfx.showfps",":Bool","P","Whether or not to show the fps counter."],
["Col.BLACK","","Col"],
["Col.GREY","","Col"],
["Col.WHITE","","Col"],
["Col.RED","","Col"],
["Col.PINK","","Col"],
["Col.DARKBROWN","","Col"],
["Col.BROWN","","Col"],
["Col.ORANGE","","Col"],
["Col.YELLOW","","Col"],
["Col.DARKGREEN","","Col"],
["Col.GREEN","","Col"],
["Col.LIGHTGREEN","","Col"],
["Col.NIGHTBLUE","","Col"],
["Col.DARKBLUE","","Col"],
["Col.BLUE","","Col"],
["Col.LIGHTBLUE","","Col"],
["Col.MAGENTA","","Col"],
["Col.TRANSPARENT","","Col"],
["Font.C64","","E","<img src='images/fonts/Font_C64.png'><br />(This font is monospace.)"],
["Font.COMIC","","E","<img src='images/fonts/Font_COMIC.png'>"],
["Font.CRYPT","","E","<img src='images/fonts/Font_CRYPT.png'><br />(This font is monospace.)"],
["Font.DEFAULT","","E","<img src='images/fonts/Font_DEFAULT.png'>"],
["Font.DOS","","E","<img src='images/fonts/Font_DOS.png'><br />(This font is monospace.)"],
["Font.GANON","","E","<img src='images/fonts/Font_GANON.png'>"],
["Font.NOKIA","","E","<img src='images/fonts/Font_NOKIA.png'>"],
["Font.OLDENGLISH","","E","<img src='images/fonts/Font_OLDENGLISH.png'>"],
["Font.PIXEL","","E","<img src='images/fonts/Font_PIXEL.png'><br />(This font is monospace.)"],
["Font.PRESSSTART","","E","<img src='images/fonts/Font_PRESSSTART.png'><br />(This font is monospace.)"],
["Font.RETROFUTURE","","E","<img src='images/fonts/Font_RETROFUTURE.png'>"],
["Font.ROMAN","","E","<img src='images/fonts/Font_ROMAN.png'>"],
["Font.SPECIAL","","E","<img src='images/fonts/Font_SPECIAL.png'>"],
["Font.THIN","","E","<img src='images/fonts/Font_THIN.png'>"],
["Font.TINY","","E","<img src='images/fonts/Font_TINY.png'><br />(This font is monospace.)"],
["Font.YOSTER","","E","<img src='images/fonts/Font_YOSTER.png'>"],
["Font.ZERO4B11","","E","<img src='images/fonts/Font_ZERO4B11.png'>"],
["Text.setfont","(fontname:Font, size:Float = 1)","F","Type Font. to see a list of fonts in autocomplete!"],
["Text.changesize","(fontsize)","F","Change the size of the font. 1 is normal, 2 is double size, 3 is triple, etc."],
["Text.display","(x, y, text, col, optional parameters)","F","Draws text on the screen at a given coordinate."],
["Text.input",'(x, y, "Question: ", Q colour, A colour):Bool',"F"],
["Text.getinput","():String","F"],
["Text.inputsound",":Int","P","Sets an optional sound to play while typing in Text.input()."],
["Text.inputmaxlength",":Int","P","Sets maximum response length of Text.input()."],
["Text.CENTER","","P"],
["Text.LEFT","","P"],
["Text.RIGHT","","P"],
["Text.TOP","","P"],
["Text.BOTTOM","","P"],
["Text.height","():Float","F"],
["Text.len","(t:String):Float","F"],
["Music.playsound","(seed, volume [0-1] )","F"],
["Music.playnote","(seed,pitch,length,volume [0-1] )","F"],
["Music.playmusic","(musicDat)","F"],
["Music.stopmusic","()","F"],
["Music.musicvol",":Float","P","Sets the music volume, must be between 0 and 1 (default is 1)."],
["Music.musicloop",":Bool","P","Should the music loop or not? (defaults to true)"],
["Key.A","","E"],
["Key.B","","E"],
["Key.C","","E"],
["Key.D","","E"],
["Key.E","","E"],
["Key.F","","E"],
["Key.G","","E"],
["Key.H","","E"],
["Key.I","","E"],
["Key.J","","E"],
["Key.K","","E"],
["Key.L","","E"],
["Key.M","","E"],
["Key.N","","E"],
["Key.O","","E"],
["Key.P","","E"],
["Key.Q","","E"],
["Key.R","","E"],
["Key.S","","E"],
["Key.T","","E"],
["Key.U","","E"],
["Key.V","","E"],
["Key.W","","E"],
["Key.X","","E"],
["Key.Y","","E"],
["Key.Z","","E"],
["Key.ZERO","","E"],
["Key.ONE","","E"],
["Key.TWO","","E"],
["Key.THREE","","E"],
["Key.FOUR","","E"],
["Key.FIVE","","E"],
["Key.SIX","","E"],
["Key.SEVEN","","E"],
["Key.EIGHT","","E"],
["Key.NINE","","E"],
["Key.F1","","E"],
["Key.F2","","E"],
["Key.F3","","E"],
["Key.F4","","E"],
["Key.F5","","E"],
["Key.F6","","E"],
["Key.F7","","E"],
["Key.F8","","E"],
["Key.F9","","E"],
["Key.F10","","E"],
["Key.F11","","E"],
["Key.F12","","E"],
["Key.MINUS","","E"], 
["Key.PLUS","","E"], 
["Key.DELETE","","E"], 
["Key.BACKSPACE","","E"], 
["Key.LBRACKET","","E"],
["Key.RBRACKET","","E"], 
["Key.BACKSLASH","","E"],
["Key.CAPSLOCK","","E"],
["Key.SEMICOLON","","E"],
["Key.QUOTE","","E"],
["Key.COMMA","","E"],
["Key.PERIOD","","E"],
["Key.SLASH","","E"],
["Key.ESCAPE","","E"],
["Key.ENTER","","E"],
["Key.SHIFT","","E"],
["Key.CONTROL","","E"],
["Key.ALT","","E"],
["Key.SPACE","","E"],
["Key.UP","","E"],
["Key.DOWN","","E"],
["Key.LEFT","","E"],
["Key.RIGHT","","E"],
["Input.justpressed","(Key.ENTER):Bool","F","True if the key has been pressed this frame."],
["Input.pressed","(Key.LEFT):Bool","F","True if this key is currently held down."],
["Input.justreleased","(Key.SPACE):Bool","F","True if the key has been released this frame"],
["Input.delaypressed","(Key.Z, 5):Bool","F","True once every N frames, if the key is pressed."],
["Input.getchar","():String","F","Returns the last letter pressed."],
["Mouse.x",":Int","P"],
["Mouse.y",":Int","P"],
["Mouse.leftclick","():Bool","F","True if the button has been clicked this frame."],
["Mouse.leftheld","():Bool","F","True if the button is held down this frame."],
["Mouse.leftreleased","():Bool","F","True if the mouse has been released this frame."],
["Mouse.middleclick","():Bool","F","True if the button has been clicked this frame."],
["Mouse.middleheld","():Bool","F","True if the button is held down this frame."],
["Mouse.middlereleased","():Bool","F","True if the mouse has been released this frame."],
["Mouse.rightclick","():Bool","F","True if the button has been clicked this frame."],
["Mouse.rightheld","():Bool","F","True if the button is held down this frame."],
["Mouse.rightreleased","():Bool","F","True if the mouse has been released this frame."],
["Mouse.mousewheel",":Int","P"],
["Convert.tostring","(1234):String","F"],
["Convert.toint",'("15"):Int',"F","Convert a string or a floating-point number to an integer."],
["Convert.tofloat",'("3.1417826"):Float',"F","Convert a string or an integer to a floating-point number."],
["Random.int","(from, to_inclusive):Int","F"],
["Random.float","(from, to_inclusive):Int","F"],
["Random.string","(length):String","F"],
["Random.bool","():Bool","F","50:50 chance of being true/false"],
["Random.occasional","():Bool","F","True one time in five."],
["Random.rare","():Bool","F","5% chance of being true"],
["Random.pick","(list:Array<T>):T","F","Picks a random element from an array."],
["Random.pickstring",'("this one", "or this one?", "maybe this one?"):String',"F","Pick between a list of strings. Can list up to 12!"],
["Random.pickint","(5, 14, 72, 92, 1, -723, 8):Int","F","Pick between a list of integers. Can list up to 12!"],
["Random.pickfloat","(5.1, 14.2, 72.3, 92.4, 1.5, -723.6, 8.7):Float","F","Pick between a list of floating-point numbers. Can list up to 12!"],
["Game.title",":String","P","Sets the page header."],
["Game.homepage",":String","P","Set a homepage link to appear in the standalone player."],
["Game.background",":Int","P","Sets color of the background in the standalone player."],
["Game.foreground",":Int","P","Sets color of title text + links in standalone player."],
["Game.prompt","(description,defaultText):String","F"],
["Game.save","(key:String,value:String)","F","Save some data permanently that will persevere even if the game is closed and reopened."],
["Game.load","(key:String):String","F","Load save game data stored with Game.save. Returns null if no key present."],
["Game.editor","():Bool","F","True when a game is in the editor, but false when being played in the player."],
["Game.time",":Int","F","Counter. Incremented by one each frame (30 per second)."],
["Game.restart","()","F","Restarts the game, resetting all variables."],
["Math.PI",":Float","C"],
["Math.abs","(v:Float):Float","F"],
["Math.acos","(v:Float):Float","F"],
["Math.asin","(v:Float):Float","F"],
["Math.atan","(v:Float):Float","F"],
["Math.atan2","(y:Float,x:Float):Float","F"],
["Math.ceil","(v:Float):Int","F"],
["Math.cos","(v:Float):Float","F"],
["Math.exp","(v:Float):Float","F"],
["Math.floor","(v:Float):Int","F"],
["Math.fround","(v:Float):Float","F"],
["Math.log","(v:Float):Float","F"],
["Math.max","(a:Float,b:Float):Float","F"],
["Math.min","(a:Float,b:Float):Float","F"],
["Math.pow","(v:Float,exp:Float):Float","F"],
["Math.round","(v:Float):Int","F"],
["Math.sin","(v:Float):Float","F"],
["Math.sqrt","(v:Float):Float","F"],
["Math.tan","(v:Float):Float","F"],

["String.fromCharCode","(code1:Int, code2:Int, ...):String","F","Returns a string created by using the specified sequence of Unicode values."],
	/*,
["break"],
["case"],
["callback"],
["cast"],
["catch"],
["class"],
["continue"],
["default"],
["do"," expr-loop while( expr-cond );"],
["dynamic"],
["else"],
["enum"],
["extends"],
["extern"],
["false"],
["for","( variable in iterable ) expr-loop;"],
["function"],
["if","( expr-cond ) expr-1 [else expr-2]"],
["implements"],
["import"],
["in"],
["inline"],
["interface"],
["never"],
["new"],
["null"],
["override"],
["package"],
["private"],
["public"],
["return"],
["static"],
["super"],
["switch"],
["this"],
["throw"],
["trace"],
["true"],
["try"],
["typedef"],
["untyped"],
["using"],
["var"],
["while","( expr-cond ) expr-loop;"],
["Int"], 
["Float"], 
["String"], 
["Void"], 
["Bool"], 
["Dynamic"] 
["Array"]*/
];

/*
if you want the hints to be sorted
function compareFn(a,b){
	return a[0].localeCompare(b[0]);
}
haxeHintArray.sort(compareFn);
*/
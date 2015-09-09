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
["Std",".","M"],
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
];

var haxeHintArray = [
["..."],
["Gfx.resizescreen","(width, height, scale)","F"],
["Gfx.clearscreen","(color)","F"],
["Gfx.clearscreeneachframe","(true or false)","F"],
["Gfx.drawbox","(x, y, width, height, col, alpha)","F"],
["Gfx.fillbox","(x, y, width, height, col, alpha)","F"],
["Gfx.drawtri","(x1, y1, x2, y2, x3, y3, col, alpha)","F"],
["Gfx.filltri","(x1, y1, x2, y2, x3, y3, col, alpha)","F"],
["Gfx.drawcircle","(x, y, radius, col, alpha)","F"],
["Gfx.fillcircle","(x, y, radius, col, alpha)","F"],
["Gfx.drawhexagon","(x, y, radius, angle, col, alpha)","F"],
["Gfx.fillhexagon","(x, y, radius, angle, col, alpha)","F"],
["Gfx.drawline","(x1, y1, x2, y2, col)","F"],
["Gfx.setlinethickness","(linethickness)","F"],
["Gfx.getpixel","(x, y)","F"],
["Gfx.setpixel","(x, y, col):Int","F"],
["Gfx.RGB","(red [0-255], green [0-255], blue [0-255] ):Int","F","Converts a color with given red, green, and blue values (between 0-255 each) to a single hex number."],
["Gfx.HSL","(hue [0-0], saturation [0-1.0], lightness [0-1.0] ):Int","F","Converts a color with given hue (0-360), saturation [0-1], and lightness [0-1] values to a single hex number."],
["Gfx.getred","(col):Int","F","Returns the red component of a hex color (Between 0-255 inclusive)."],
["Gfx.getgreen","(col):Int","F","Returns the green component of a hex color (Between 0-255 inclusive)."],
["Gfx.getblue","(col):Int","F","Returns the blue component of a hex color (Between 0-255 inclusive)."],
["Gfx.screenwidth",":Int","P"],
["Gfx.screenheight",":Int","P"],
["Gfx.screenwidthmid",":Int","P","Returns screen width divided by two."],
["Gfx.screenheightmid",":Int","P","Returns screen height divided by two."],
["Gfx.drawimage","(x, y, imagename, optional parameters)","F"],
["Gfx.imagewidth","(imagename):Int","P"],
["Gfx.imageheight","(imagename):Int","P"],
["Gfx.createimage","(imagename, width, height) ","F"],
["Gfx.drawtoscreen","()","F"],
["Gfx.drawtoimage","(imagename)","F"],
["Gfx.grabimagefromscreen","(imagename, screen x, screen y)","F"],
["Gfx.grabimagefromimage","(imagename, sourceimagename, image x, image y)","F"],
["Gfx.showfps",":Bool","P","Whether or not to show the fps counter."],
["Col.BLACK","","E"],
["Col.GREY","","E"],
["Col.WHITE","","E"],
["Col.RED","","E"],
["Col.PINK","","E"],
["Col.DARKBROWN","","E"],
["Col.BROWN","","E"],
["Col.ORANGE","","E"],
["Col.YELLOW","","E"],
["Col.DARKGREEN","","E"],
["Col.GREEN","","E"],
["Col.LIGHTGREEN","","E"],
["Col.NIGHTBLUE","","E"],
["Col.DARKBLUE","","E"],
["Col.BLUE","","E"],
["Col.LIGHTBLUE","","E"],
["Col.MAGENTA","","E"],
["Font.ZERO4B11","","E"],
["Font.APPLE","","E"],
["Font.BOLD","","E"],
["Font.C64","","E"],
["Font.CASUAL","","E"],
["Font.COMIC","","E"],
["Font.CRYPT","","E"],
["Font.DEFAULT","","E"],
["Font.DOS","","E"],
["Font.HANDY","","E"],
["Font.GANON","","E"],
["Font.NOKIA","","E"],
["Font.OLDENGLISH","","E"],
["Font.PIXEL","","E"],
["Font.PRESSSTART","","E"],
["Font.RETROFUTURE","","E"],
["Font.ROMAN","","E"],
["Font.SPECIAL","","E"],
["Font.VISITOR","","E"],
["Font.YOSTER","","E"],
["Text.setfont","(fontname, size)","F"],
["Text.changesize","(fontsize)","F"],
["Text.display","(x, y, text, col, optional parameters)","F","Draws text on the screen at a given coordinate."],
["Text.input",'(x, y, "Question: ", Q colour, A colour):Bool',"F"],
["Text.getinput","():String","F"],
["Text.CENTER","","P"],
["Text.LEFT","","P"],
["Text.RIGHT","","P"],
["Text.TOP","","P"],
["Text.BOTTOM","","P"],
["Text.height","():Int","F"],
["Text.len","(t:String):Float","F"],
["Music.playsound","(seed, volume [0-1] )","F"],
["Music.playnote","(seed,pitch,length,volume [0-1] )","F"],
["Music.playmusic","(musicDat)","F"],
["Music.stopmusic","()","F"],
["Music.setmusicvol","(0.0-1.0)","F"],
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
["Input.justpressed","(Key.ENTER)","F"],
["Input.pressed","(Key.LEFT)","F"],
["Input.justreleased","(Key.SPACE)","F"],
["Input.delaypressed","(Key.Z, 5)","F"],
["Mouse.x",":Int","P"],
["Mouse.y",":Int","P"],
["Mouse.leftclick","()","F"],
["Mouse.leftheld","()","F"],
["Mouse.leftreleased","()","F"],
["Mouse.middleclick","()","F"],
["Mouse.middleheld","()","F"],
["Mouse.middlereleased","()","F"],
["Mouse.rightclick","()","F"],
["Mouse.rightheld","()","F"],
["Mouse.rightreleased","()","F"],
["Mouse.mousewheel",":Int","P"],
["Convert.tostring","(1234):String","F"],
["Convert.toint",'("15"):Int',"F"],
["Convert.tofloat",'("3.1417826"):Float',"F"],
["Random.int","(from, to_inclusive):Int","F"],
["Random.float","(from, to_inclusive):Int","F"],
["Random.string","(length):String","F"],
["Random.bool","():Bool","F"],
["Random.occasional","():Bool","F"],
["Random.rare","():Bool","F"],
["Random.pickstring",'("this one", "or this one?", "maybe this one?"):String',"F"],
["Random.pickint","(5, 14, 72, 92, 1, -723, 8):Int","F"],
["Random.pickfloat","(5.1, 14.2, 72.3, 92.4, 1.5, -723.6, 8.7):Float","F"],
["Game.title","(title)","F","Sets page title, and page header on standalone."],
["Game.homepage","(url)","F","Set a homepage link to appear in the standalone player."],
["Game.background","(color)","F","Sets color of the background in the standalone player."],
["Game.foreground","(color)","F","Sets color of title text + links in standalone player."],
["Game.prompt","(description,defaultText):String","F"],
["Game.save","(key:String,value:String)","F","Save some data permanently that will persevere even if the game is closed and reopened."],
["Game.load","(key:String):String","F","Load save game data stored with Game.save."],
["Game.editor","():Bool","F","True when a game is in the editor, but false when being played in the player."],
["Game.time",":Int","F","Counter. Incremented by one each frame (30 per second)."],
["Game.restart","()","F","Restarts the game, resetting all variables."],
["String.fromCharCode","(code:Int):String","F"],
["Math.PI",":Float","C"],
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
["Std"], 
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
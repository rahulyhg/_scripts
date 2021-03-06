function Player(player_number,player_symbol,player_name,player_debug,player_is_computer){
	this.player_no=player_number;// jen kvuli prehlednosti v console.log
	var number=player_number;
	var symbol=player_symbol;
	var name=player_name;
	var debug=player_debug;
	var draws=new Array();// pole odehranych tahu
	var cells=new Array();// pole obsazenych poli
	var is_computer=player_is_computer;
	var wins=0;

	this.LetPlay=function(game,computer,rival_player){
		if(is_computer){
			var cell_to_play=computer.GetCellToPlay(game.GetGroups(this),game.GetGroups(rival_player));
			cell_to_play.click();
		}
		return this;
	};

	this.AddWin=function(){
		wins++;
		return this;
	};

	this.GetWins=function(){
		return wins;
	};

	/**
	 * ulozi tah hrace
	 * @param {integer} round
	 * @param {object} cell
	 * @param {integer} row
	 * @param {integer} col
	 * @param {integer} itemid
	 * @returns {Player}
	 */
	this.SetDraw=function(round,cell,row,col,itemid){
		var arr=new Array();
		arr['cell']=cell;
		arr['row']=row*1;
		arr['col']=col*1;
		arr['itemid']=itemid*1;
		draws[round]=arr;
		cells[itemid]=cell;
		return this;
	};

	this.Reset=function(){
		draws=new Array();
		this.DebugInfo();
		return this;
	};

	/**
	 * vypisuje tahy
	 */
	this.DebugInfo=function(){
		var html='<span class="symbol">' + player_symbol + '</span><p>player ' + player_number + ': <strong>' + player_name + '</strong><br />wins: ' + wins + '</p>';
		html+=GetDrawsString();
		debug.html(html);
		return this;
	};

	/**
	 * radek pro vypis tahu
	 */
	var GetDrawsString=function(){
		var ret='';
		for(var key in draws){
			ret+=key + ') ' + 'row ' + draws[key]['row'] + '; col ' + draws[key]['col'] + '<br>';
		}
		return ret;
	};

	/**
	 * vraci tahy hrace
	 */
	this.GetDraws=function(){
		return draws;
	};

	this.GetCells=function(){
		return cells;
	};

	/**
	 * vraci symbol, kterym hrac hraje
	 */
	this.GetSymbol=function(){
		return symbol;
	};

	/**
	 * vraci cislo hrace [1,2]
	 */
	this.GetNumber=function(){
		return number;
	};

	/**
	 * vraci jmeno hrace
	 */
	this.GetName=function(){
		return name;
	};
}
function Water(width, height)
{

	this._columnCount = 201;
	this._scale = width / (this._columnCount - 1);
	this._tension = 0.025;
	this._dampening = 0.025;
	this._spread = 0.25;

	this._columns = [];
	this._particles = [];


	// initialize water springs
	for(var i = 0; i < this._columnCount ; i++)
	{
		this._columns[i] = new WaterColumn();
		this._columns[i]._targetHeight = 240;
		this._columns[i]._height = 240;
		this._columns[i]._speed = 0;
	}
}

_p = Water.prototype;

_p.getHeight = function(x){

	if (x < 0 || x > 800)
		return 240;

	return this._columns[(x / this._scale)]._height;
}


_p.update = function(){
	for(var i = 0; i < this._columns.length ; i++)
		this._columns[i].update(this._dampening, this._tension);

	var lDeltas = [];
	var rDeltas = [];

	for (var j = 0; j < 8; j++)
	{
		for (var i = 0; i < this._columns.length; i++)
		{
			if (i > 0)
			{
				lDeltas[i] = this._columns[i]._spread * (this._columns[i]._height - this._columns[i - 1]._height);
				this._columns[i - 1]._speed += lDeltas[i];
			}
			if (i < columns.Length - 1)
			{
				rDeltas[i] = this._columns[i]._spread * (this._columns[i]._height - this._columns[i + 1]._height);
				this._columns[i + 1]._speed += rDeltas[i];
			}
		}

		for (var i = 0; i < this._columns.length; i++)
		{
			if (i > 0)
				this._columns[i - 1]._height += lDeltas[i];
			if (i < columns.Length - 1)
				this._columns[i + 1]._height += rDeltas[i];
		}
	}

}


_p.draw = function(){
	
}
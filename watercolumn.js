function WaterColumn()
{
	this._targetHeight = 0;
	this._height = 0;
	this._speed = 0;

}

_p = WaterColumn.prototype;

_p.update = function(dampening, tension){

	var x = this._targetHeight - this._height;
	this._speed += tension * x - this._speed * dampening;
	this._height += this._speed;

}
/**
 * @module Match
 */
(function(M) {
    
    /**
	 * Used for knowing if the given amount of milliseconds have passed since last check.
     * This class is usefull for objects like weapons and determining if it can fire again
     * or not given its rate-of-fire
	 * @class TimeCounter
	 * @constructor
	 * @param {time} integer Time in milliseconds that need to pass from last check
	 */
	function TimeCounter(time) {
		/**
		 * Last time in milliseconds that update was called
		 * @property _lastTime
		 * @private
		 * @type int
		 */
		this._lastTime = 0;
		/**
		 * Time in milliseconds that need to pass from last check
		 * @property _lastTime
		 * @type int
		 */
		this.time = time;

	}
	TimeCounter.prototype.initialize = function() {
		this._lastTime = M.getTime();
		this.elapsed = this.run;
		return false;
	};
	/**
	 * Returns true if time has elapsed since last update or false
	 * @method elapsed
	 */
	TimeCounter.prototype.run = function() {

		var currentTime = M.getTime();

		if ( currentTime - this.time >= this._lastTime ) {
			this._lastTime = currentTime;
			return true;
		}

		return false;

	};
	TimeCounter.prototype.elapsed = TimeCounter.prototype.initialize;

	M.TimeCounter = TimeCounter;

	})(window.Match);
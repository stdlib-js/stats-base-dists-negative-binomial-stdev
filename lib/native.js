/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the standard deviation of a negative binomial distribution.
*
* @private
* @param {PositiveNumber} r - number of failures until experiment is stopped
* @param {Probability} p - success probability
* @returns {PositiveNumber} standard deviation
*
* @example
* var v = stdev( 100, 0.2 );
* // returns ~44.721
*
* @example
* var v = stdev( 20, 0.5 );
* // returns ~6.325
*
* @example
* var v = stdev( 10.3, 0.8 );
* // returns ~1.794
*
* @example
* var v = stdev( -2, 0.5 );
* // returns NaN
*
* @example
* var v = stdev( 20, 1.1 );
* // returns NaN
*
* @example
* var v = stdev( 20, NaN );
* // returns NaN
*
* @example
* var v = stdev( NaN, 0.5 );
* // returns NaN
*/
function stdev( r, p ) {
	return addon( r, p );
}


// EXPORTS //

module.exports = stdev;

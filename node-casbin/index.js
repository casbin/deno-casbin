module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(967);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports) {

//     JavaScript Expression Parser (JSEP) 0.3.4
//     JSEP may be freely distributed under the MIT License
//     http://jsep.from.so/

/*global module: true, exports: true, console: true */
(function (root) {
	'use strict';
	// Node Types
	// ----------

	// This is the full set of types that any JSEP node can be.
	// Store them here to save space when minified
	var COMPOUND = 'Compound',
		IDENTIFIER = 'Identifier',
		MEMBER_EXP = 'MemberExpression',
		LITERAL = 'Literal',
		THIS_EXP = 'ThisExpression',
		CALL_EXP = 'CallExpression',
		UNARY_EXP = 'UnaryExpression',
		BINARY_EXP = 'BinaryExpression',
		LOGICAL_EXP = 'LogicalExpression',
		CONDITIONAL_EXP = 'ConditionalExpression',
		ARRAY_EXP = 'ArrayExpression',

		PERIOD_CODE = 46, // '.'
		COMMA_CODE  = 44, // ','
		SQUOTE_CODE = 39, // single quote
		DQUOTE_CODE = 34, // double quotes
		OPAREN_CODE = 40, // (
		CPAREN_CODE = 41, // )
		OBRACK_CODE = 91, // [
		CBRACK_CODE = 93, // ]
		QUMARK_CODE = 63, // ?
		SEMCOL_CODE = 59, // ;
		COLON_CODE  = 58, // :

		throwError = function(message, index) {
			var error = new Error(message + ' at character ' + index);
			error.index = index;
			error.description = message;
			throw error;
		},

	// Operations
	// ----------

	// Set `t` to `true` to save space (when minified, not gzipped)
		t = true,
	// Use a quickly-accessible map to store all of the unary operators
	// Values are set to `true` (it really doesn't matter)
		unary_ops = {'-': t, '!': t, '~': t, '+': t},
	// Also use a map for the binary operations but set their values to their
	// binary precedence for quick reference:
	// see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
		binary_ops = {
			'||': 1, '&&': 2, '|': 3,  '^': 4,  '&': 5,
			'==': 6, '!=': 6, '===': 6, '!==': 6,
			'<': 7,  '>': 7,  '<=': 7,  '>=': 7,
			'<<':8,  '>>': 8, '>>>': 8,
			'+': 9, '-': 9,
			'*': 10, '/': 10, '%': 10
		},
	// Get return the longest key length of any object
		getMaxKeyLen = function(obj) {
			var max_len = 0, len;
			for(var key in obj) {
				if((len = key.length) > max_len && obj.hasOwnProperty(key)) {
					max_len = len;
				}
			}
			return max_len;
		},
		max_unop_len = getMaxKeyLen(unary_ops),
		max_binop_len = getMaxKeyLen(binary_ops),
	// Literals
	// ----------
	// Store the values to return for the various literals we may encounter
		literals = {
			'true': true,
			'false': false,
			'null': null
		},
	// Except for `this`, which is special. This could be changed to something like `'self'` as well
		this_str = 'this',
	// Returns the precedence of a binary operator or `0` if it isn't a binary operator
		binaryPrecedence = function(op_val) {
			return binary_ops[op_val] || 0;
		},
	// Utility function (gets called from multiple places)
	// Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
		createBinaryExpression = function (operator, left, right) {
			var type = (operator === '||' || operator === '&&') ? LOGICAL_EXP : BINARY_EXP;
			return {
				type: type,
				operator: operator,
				left: left,
				right: right
			};
		},
		// `ch` is a character code in the next three functions
		isDecimalDigit = function(ch) {
			return (ch >= 48 && ch <= 57); // 0...9
		},
		isIdentifierStart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},
		isIdentifierPart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
					(ch >= 48 && ch <= 57) || // 0...9
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},

		// Parsing
		// -------
		// `expr` is a string with the passed in expression
		jsep = function(expr) {
			// `index` stores the character number we are currently at while `length` is a constant
			// All of the gobbles below will modify `index` as we move along
			var index = 0,
				charAtFunc = expr.charAt,
				charCodeAtFunc = expr.charCodeAt,
				exprI = function(i) { return charAtFunc.call(expr, i); },
				exprICode = function(i) { return charCodeAtFunc.call(expr, i); },
				length = expr.length,

				// Push `index` up to the next non-space character
				gobbleSpaces = function() {
					var ch = exprICode(index);
					// space or tab
					while(ch === 32 || ch === 9 || ch === 10 || ch === 13) {
						ch = exprICode(++index);
					}
				},

				// The main parsing function. Much of this code is dedicated to ternary expressions
				gobbleExpression = function() {
					var test = gobbleBinaryExpression(),
						consequent, alternate;
					gobbleSpaces();
					if(exprICode(index) === QUMARK_CODE) {
						// Ternary expression: test ? consequent : alternate
						index++;
						consequent = gobbleExpression();
						if(!consequent) {
							throwError('Expected expression', index);
						}
						gobbleSpaces();
						if(exprICode(index) === COLON_CODE) {
							index++;
							alternate = gobbleExpression();
							if(!alternate) {
								throwError('Expected expression', index);
							}
							return {
								type: CONDITIONAL_EXP,
								test: test,
								consequent: consequent,
								alternate: alternate
							};
						} else {
							throwError('Expected :', index);
						}
					} else {
						return test;
					}
				},

				// Search for the operation portion of the string (e.g. `+`, `===`)
				// Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
				// and move down from 3 to 2 to 1 character until a matching binary operation is found
				// then, return that binary operation
				gobbleBinaryOp = function() {
					gobbleSpaces();
					var biop, to_check = expr.substr(index, max_binop_len), tc_len = to_check.length;
					while(tc_len > 0) {
						// Don't accept a binary op when it is an identifier.
						// Binary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
						if(binary_ops.hasOwnProperty(to_check) && (
							!isIdentifierStart(exprICode(index)) ||
							(index+to_check.length< expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
						)) {
							index += tc_len;
							return to_check;
						}
						to_check = to_check.substr(0, --tc_len);
					}
					return false;
				},

				// This function is responsible for gobbling an individual expression,
				// e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
				gobbleBinaryExpression = function() {
					var ch_i, node, biop, prec, stack, biop_info, left, right, i;

					// First, try to get the leftmost thing
					// Then, check to see if there's a binary operator operating on that leftmost thing
					left = gobbleToken();
					biop = gobbleBinaryOp();

					// If there wasn't a binary operator, just return the leftmost node
					if(!biop) {
						return left;
					}

					// Otherwise, we need to start a stack to properly place the binary operations in their
					// precedence structure
					biop_info = { value: biop, prec: binaryPrecedence(biop)};

					right = gobbleToken();
					if(!right) {
						throwError("Expected expression after " + biop, index);
					}
					stack = [left, biop_info, right];

					// Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)
					while((biop = gobbleBinaryOp())) {
						prec = binaryPrecedence(biop);

						if(prec === 0) {
							break;
						}
						biop_info = { value: biop, prec: prec };

						// Reduce: make a binary expression from the three topmost entries.
						while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
							right = stack.pop();
							biop = stack.pop().value;
							left = stack.pop();
							node = createBinaryExpression(biop, left, right);
							stack.push(node);
						}

						node = gobbleToken();
						if(!node) {
							throwError("Expected expression after " + biop, index);
						}
						stack.push(biop_info, node);
					}

					i = stack.length - 1;
					node = stack[i];
					while(i > 1) {
						node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node);
						i -= 2;
					}
					return node;
				},

				// An individual part of a binary expression:
				// e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
				gobbleToken = function() {
					var ch, to_check, tc_len;

					gobbleSpaces();
					ch = exprICode(index);

					if(isDecimalDigit(ch) || ch === PERIOD_CODE) {
						// Char code 46 is a dot `.` which can start off a numeric literal
						return gobbleNumericLiteral();
					} else if(ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
						// Single or double quotes
						return gobbleStringLiteral();
					} else if (ch === OBRACK_CODE) {
						return gobbleArray();
					} else {
						to_check = expr.substr(index, max_unop_len);
						tc_len = to_check.length;
						while(tc_len > 0) {
						// Don't accept an unary op when it is an identifier.
						// Unary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
							if(unary_ops.hasOwnProperty(to_check) && (
								!isIdentifierStart(exprICode(index)) ||
								(index+to_check.length < expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
							)) {
								index += tc_len;
								return {
									type: UNARY_EXP,
									operator: to_check,
									argument: gobbleToken(),
									prefix: true
								};
							}
							to_check = to_check.substr(0, --tc_len);
						}

						if (isIdentifierStart(ch) || ch === OPAREN_CODE) { // open parenthesis
							// `foo`, `bar.baz`
							return gobbleVariable();
						}
					}

					return false;
				},
				// Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
				// keep track of everything in the numeric literal and then calling `parseFloat` on that string
				gobbleNumericLiteral = function() {
					var number = '', ch, chCode;
					while(isDecimalDigit(exprICode(index))) {
						number += exprI(index++);
					}

					if(exprICode(index) === PERIOD_CODE) { // can start with a decimal marker
						number += exprI(index++);

						while(isDecimalDigit(exprICode(index))) {
							number += exprI(index++);
						}
					}

					ch = exprI(index);
					if(ch === 'e' || ch === 'E') { // exponent marker
						number += exprI(index++);
						ch = exprI(index);
						if(ch === '+' || ch === '-') { // exponent sign
							number += exprI(index++);
						}
						while(isDecimalDigit(exprICode(index))) { //exponent itself
							number += exprI(index++);
						}
						if(!isDecimalDigit(exprICode(index-1)) ) {
							throwError('Expected exponent (' + number + exprI(index) + ')', index);
						}
					}


					chCode = exprICode(index);
					// Check to make sure this isn't a variable name that start with a number (123abc)
					if(isIdentifierStart(chCode)) {
						throwError('Variable names cannot start with a number (' +
									number + exprI(index) + ')', index);
					} else if(chCode === PERIOD_CODE) {
						throwError('Unexpected period', index);
					}

					return {
						type: LITERAL,
						value: parseFloat(number),
						raw: number
					};
				},

				// Parses a string literal, staring with single or double quotes with basic support for escape codes
				// e.g. `"hello world"`, `'this is\nJSEP'`
				gobbleStringLiteral = function() {
					var str = '', quote = exprI(index++), closed = false, ch;

					while(index < length) {
						ch = exprI(index++);
						if(ch === quote) {
							closed = true;
							break;
						} else if(ch === '\\') {
							// Check for all of the common escape codes
							ch = exprI(index++);
							switch(ch) {
								case 'n': str += '\n'; break;
								case 'r': str += '\r'; break;
								case 't': str += '\t'; break;
								case 'b': str += '\b'; break;
								case 'f': str += '\f'; break;
								case 'v': str += '\x0B'; break;
								default : str += ch;
							}
						} else {
							str += ch;
						}
					}

					if(!closed) {
						throwError('Unclosed quote after "'+str+'"', index);
					}

					return {
						type: LITERAL,
						value: str,
						raw: quote + str + quote
					};
				},

				// Gobbles only identifiers
				// e.g.: `foo`, `_value`, `$x1`
				// Also, this function checks if that identifier is a literal:
				// (e.g. `true`, `false`, `null`) or `this`
				gobbleIdentifier = function() {
					var ch = exprICode(index), start = index, identifier;

					if(isIdentifierStart(ch)) {
						index++;
					} else {
						throwError('Unexpected ' + exprI(index), index);
					}

					while(index < length) {
						ch = exprICode(index);
						if(isIdentifierPart(ch)) {
							index++;
						} else {
							break;
						}
					}
					identifier = expr.slice(start, index);

					if(literals.hasOwnProperty(identifier)) {
						return {
							type: LITERAL,
							value: literals[identifier],
							raw: identifier
						};
					} else if(identifier === this_str) {
						return { type: THIS_EXP };
					} else {
						return {
							type: IDENTIFIER,
							name: identifier
						};
					}
				},

				// Gobbles a list of arguments within the context of a function call
				// or array literal. This function also assumes that the opening character
				// `(` or `[` has already been gobbled, and gobbles expressions and commas
				// until the terminator character `)` or `]` is encountered.
				// e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
				gobbleArguments = function(termination) {
					var ch_i, args = [], node, closed = false;
					while(index < length) {
						gobbleSpaces();
						ch_i = exprICode(index);
						if(ch_i === termination) { // done parsing
							closed = true;
							index++;
							break;
						} else if (ch_i === COMMA_CODE) { // between expressions
							index++;
						} else {
							node = gobbleExpression();
							if(!node || node.type === COMPOUND) {
								throwError('Expected comma', index);
							}
							args.push(node);
						}
					}
					if (!closed) {
						throwError('Expected ' + String.fromCharCode(termination), index);
					}
					return args;
				},

				// Gobble a non-literal variable name. This variable name may include properties
				// e.g. `foo`, `bar.baz`, `foo['bar'].baz`
				// It also gobbles function calls:
				// e.g. `Math.acos(obj.angle)`
				gobbleVariable = function() {
					var ch_i, node;
					ch_i = exprICode(index);

					if(ch_i === OPAREN_CODE) {
						node = gobbleGroup();
					} else {
						node = gobbleIdentifier();
					}
					gobbleSpaces();
					ch_i = exprICode(index);
					while(ch_i === PERIOD_CODE || ch_i === OBRACK_CODE || ch_i === OPAREN_CODE) {
						index++;
						if(ch_i === PERIOD_CODE) {
							gobbleSpaces();
							node = {
								type: MEMBER_EXP,
								computed: false,
								object: node,
								property: gobbleIdentifier()
							};
						} else if(ch_i === OBRACK_CODE) {
							node = {
								type: MEMBER_EXP,
								computed: true,
								object: node,
								property: gobbleExpression()
							};
							gobbleSpaces();
							ch_i = exprICode(index);
							if(ch_i !== CBRACK_CODE) {
								throwError('Unclosed [', index);
							}
							index++;
						} else if(ch_i === OPAREN_CODE) {
							// A function call is being made; gobble all the arguments
							node = {
								type: CALL_EXP,
								'arguments': gobbleArguments(CPAREN_CODE),
								callee: node
							};
						}
						gobbleSpaces();
						ch_i = exprICode(index);
					}
					return node;
				},

				// Responsible for parsing a group of things within parentheses `()`
				// This function assumes that it needs to gobble the opening parenthesis
				// and then tries to gobble everything within that parenthesis, assuming
				// that the next thing it should see is the close parenthesis. If not,
				// then the expression probably doesn't have a `)`
				gobbleGroup = function() {
					index++;
					var node = gobbleExpression();
					gobbleSpaces();
					if(exprICode(index) === CPAREN_CODE) {
						index++;
						return node;
					} else {
						throwError('Unclosed (', index);
					}
				},

				// Responsible for parsing Array literals `[1, 2, 3]`
				// This function assumes that it needs to gobble the opening bracket
				// and then tries to gobble the expressions as arguments.
				gobbleArray = function() {
					index++;
					return {
						type: ARRAY_EXP,
						elements: gobbleArguments(CBRACK_CODE)
					};
				},

				nodes = [], ch_i, node;

			while(index < length) {
				ch_i = exprICode(index);

				// Expressions can be separated by semicolons, commas, or just inferred without any
				// separators
				if(ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
					index++; // ignore separators
				} else {
					// Try to gobble each expression individually
					if((node = gobbleExpression())) {
						nodes.push(node);
					// If we weren't able to find a binary expression and are out of room, then
					// the expression passed in probably has too much
					} else if(index < length) {
						throwError('Unexpected "' + exprI(index) + '"', index);
					}
				}
			}

			// If there's only one expression just try returning the expression
			if(nodes.length === 1) {
				return nodes[0];
			} else {
				return {
					type: COMPOUND,
					body: nodes
				};
			}
		};

	// To be filled in by the template
	jsep.version = '0.3.4';
	jsep.toString = function() { return 'JavaScript Expression Parser (JSEP) v' + jsep.version; };

	/**
	 * @method jsep.addUnaryOp
	 * @param {string} op_name The name of the unary op to add
	 * @return jsep
	 */
	jsep.addUnaryOp = function(op_name) {
		max_unop_len = Math.max(op_name.length, max_unop_len);
		unary_ops[op_name] = t; return this;
	};

	/**
	 * @method jsep.addBinaryOp
	 * @param {string} op_name The name of the binary op to add
	 * @param {number} precedence The precedence of the binary op (can be a float)
	 * @return jsep
	 */
	jsep.addBinaryOp = function(op_name, precedence) {
		max_binop_len = Math.max(op_name.length, max_binop_len);
		binary_ops[op_name] = precedence;
		return this;
	};

	/**
	 * @method jsep.addLiteral
	 * @param {string} literal_name The name of the literal to add
	 * @param {*} literal_value The value of the literal
	 * @return jsep
	 */
	jsep.addLiteral = function(literal_name, literal_value) {
		literals[literal_name] = literal_value;
		return this;
	};

	/**
	 * @method jsep.removeUnaryOp
	 * @param {string} op_name The name of the unary op to remove
	 * @return jsep
	 */
	jsep.removeUnaryOp = function(op_name) {
		delete unary_ops[op_name];
		if(op_name.length === max_unop_len) {
			max_unop_len = getMaxKeyLen(unary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllUnaryOps
	 * @return jsep
	 */
	jsep.removeAllUnaryOps = function() {
		unary_ops = {};
		max_unop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeBinaryOp
	 * @param {string} op_name The name of the binary op to remove
	 * @return jsep
	 */
	jsep.removeBinaryOp = function(op_name) {
		delete binary_ops[op_name];
		if(op_name.length === max_binop_len) {
			max_binop_len = getMaxKeyLen(binary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllBinaryOps
	 * @return jsep
	 */
	jsep.removeAllBinaryOps = function() {
		binary_ops = {};
		max_binop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeLiteral
	 * @param {string} literal_name The name of the literal to remove
	 * @return jsep
	 */
	jsep.removeLiteral = function(literal_name) {
		delete literals[literal_name];
		return this;
	};

	/**
	 * @method jsep.removeAllLiterals
	 * @return jsep
	 */
	jsep.removeAllLiterals = function() {
		literals = {};

		return this;
	};

	// In desktop environments, have a way to restore the old value for `jsep`
	if (false) { var old_jsep; } else {
		// In Node.JS environments
		if ( true && module.exports) {
			exports = module.exports = jsep;
		} else {
			exports.parse = jsep;
		}
	}
}(this));


/***/ }),

/***/ 53:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 55:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultLogger = void 0;
// DefaultLogger is the implementation for a Logger
class DefaultLogger {
    constructor() {
        this.enable = false;
    }
    enableLog(enable) {
        this.enable = enable;
    }
    isEnable() {
        return this.enable;
    }
    print(...v) {
        if (this.enable) {
            console.log(...v);
        }
    }
    printf(format, ...v) {
        if (this.enable) {
            console.log(format, ...v);
        }
    }
}
exports.DefaultLogger = DefaultLogger;


/***/ }),

/***/ 71:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultEffectorStream = void 0;
const effector_1 = __webpack_require__(377);
/**
 * DefaultEffectorStream is the default implementation of EffectorStream.
 */
class DefaultEffectorStream {
    constructor(expr) {
        this.done = false;
        this.res = false;
        this.expr = expr;
    }
    current() {
        return this.res;
    }
    pushEffect(eft) {
        switch (this.expr) {
            case 'some(where (p_eft == allow))':
                if (eft == effector_1.Effect.Allow) {
                    this.res = true;
                    this.done = true;
                }
                break;
            case '!some(where (p_eft == deny))':
                this.res = true;
                if (eft == effector_1.Effect.Deny) {
                    this.res = false;
                    this.done = true;
                }
                break;
            case 'some(where (p_eft == allow)) && !some(where (p_eft == deny))':
                if (eft == effector_1.Effect.Allow) {
                    this.res = true;
                }
                else if (eft == effector_1.Effect.Deny) {
                    this.res = false;
                    this.done = true;
                }
                break;
            case 'priority(p_eft) || deny':
                if (eft !== effector_1.Effect.Indeterminate) {
                    this.res = eft === effector_1.Effect.Allow;
                    this.done = true;
                }
                break;
            default:
                throw new Error('unsupported effect');
        }
        return [this.res, this.done];
    }
}
exports.DefaultEffectorStream = DefaultEffectorStream;


/***/ }),

/***/ 74:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const util = __webpack_require__(669);
const braces = __webpack_require__(783);
const picomatch = __webpack_require__(827);
const utils = __webpack_require__(265);
const isEmptyString = val => typeof val === 'string' && (val === '' || val === './');

/**
 * Returns an array of strings that match one or more glob patterns.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm(list, patterns[, options]);
 *
 * console.log(mm(['a.js', 'a.txt'], ['*.js']));
 * //=> [ 'a.js' ]
 * ```
 * @param {String|Array<string>} list List of strings to match.
 * @param {String|Array<string>} patterns One or more glob patterns to use for matching.
 * @param {Object} options See available [options](#options)
 * @return {Array} Returns an array of matches
 * @summary false
 * @api public
 */

const micromatch = (list, patterns, options) => {
  patterns = [].concat(patterns);
  list = [].concat(list);

  let omit = new Set();
  let keep = new Set();
  let items = new Set();
  let negatives = 0;

  let onResult = state => {
    items.add(state.output);
    if (options && options.onResult) {
      options.onResult(state);
    }
  };

  for (let i = 0; i < patterns.length; i++) {
    let isMatch = picomatch(String(patterns[i]), { ...options, onResult }, true);
    let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
    if (negated) negatives++;

    for (let item of list) {
      let matched = isMatch(item, true);

      let match = negated ? !matched.isMatch : matched.isMatch;
      if (!match) continue;

      if (negated) {
        omit.add(matched.output);
      } else {
        omit.delete(matched.output);
        keep.add(matched.output);
      }
    }
  }

  let result = negatives === patterns.length ? [...items] : [...keep];
  let matches = result.filter(item => !omit.has(item));

  if (options && matches.length === 0) {
    if (options.failglob === true) {
      throw new Error(`No matches found for "${patterns.join(', ')}"`);
    }

    if (options.nonull === true || options.nullglob === true) {
      return options.unescape ? patterns.map(p => p.replace(/\\/g, '')) : patterns;
    }
  }

  return matches;
};

/**
 * Backwards compatibility
 */

micromatch.match = micromatch;

/**
 * Returns a matcher function from the given glob `pattern` and `options`.
 * The returned function takes a string to match as its only argument and returns
 * true if the string is a match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matcher(pattern[, options]);
 *
 * const isMatch = mm.matcher('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @param {String} `pattern` Glob pattern
 * @param {Object} `options`
 * @return {Function} Returns a matcher function.
 * @api public
 */

micromatch.matcher = (pattern, options) => picomatch(pattern, options);

/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.isMatch(string, patterns[, options]);
 *
 * console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(mm.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);

/**
 * Backwards compatibility
 */

micromatch.any = micromatch.isMatch;

/**
 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.not(list, patterns[, options]);
 *
 * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
 * //=> ['b.b', 'c.c']
 * ```
 * @param {Array} `list` Array of strings to match.
 * @param {String|Array} `patterns` One or more glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of strings that **do not match** the given patterns.
 * @api public
 */

micromatch.not = (list, patterns, options = {}) => {
  patterns = [].concat(patterns).map(String);
  let result = new Set();
  let items = [];

  let onResult = state => {
    if (options.onResult) options.onResult(state);
    items.push(state.output);
  };

  let matches = micromatch(list, patterns, { ...options, onResult });

  for (let item of items) {
    if (!matches.includes(item)) {
      result.add(item);
    }
  }
  return [...result];
};

/**
 * Returns true if the given `string` contains the given pattern. Similar
 * to [.isMatch](#isMatch) but the pattern can match any part of the string.
 *
 * ```js
 * var mm = require('micromatch');
 * // mm.contains(string, pattern[, options]);
 *
 * console.log(mm.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(mm.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String|Array} `patterns` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if the patter matches any part of `str`.
 * @api public
 */

micromatch.contains = (str, pattern, options) => {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
  }

  if (Array.isArray(pattern)) {
    return pattern.some(p => micromatch.contains(str, p, options));
  }

  if (typeof pattern === 'string') {
    if (isEmptyString(str) || isEmptyString(pattern)) {
      return false;
    }

    if (str.includes(pattern) || (str.startsWith('./') && str.slice(2).includes(pattern))) {
      return true;
    }
  }

  return micromatch.isMatch(str, pattern, { ...options, contains: true });
};

/**
 * Filter the keys of the given object with the given `glob` pattern
 * and `options`. Does not attempt to match nested keys. If you need this feature,
 * use [glob-object][] instead.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matchKeys(object, patterns[, options]);
 *
 * const obj = { aa: 'a', ab: 'b', ac: 'c' };
 * console.log(mm.matchKeys(obj, '*b'));
 * //=> { ab: 'b' }
 * ```
 * @param {Object} `object` The object with keys to filter.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Object} Returns an object with only keys that match the given patterns.
 * @api public
 */

micromatch.matchKeys = (obj, patterns, options) => {
  if (!utils.isObject(obj)) {
    throw new TypeError('Expected the first argument to be an object');
  }
  let keys = micromatch(Object.keys(obj), patterns, options);
  let res = {};
  for (let key of keys) res[key] = obj[key];
  return res;
};

/**
 * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.some(list, patterns[, options]);
 *
 * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // true
 * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

micromatch.some = (list, patterns, options) => {
  let items = [].concat(list);

  for (let pattern of [].concat(patterns)) {
    let isMatch = picomatch(String(pattern), options);
    if (items.some(item => isMatch(item))) {
      return true;
    }
  }
  return false;
};

/**
 * Returns true if every string in the given `list` matches
 * any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.every(list, patterns[, options]);
 *
 * console.log(mm.every('foo.js', ['foo.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // false
 * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

micromatch.every = (list, patterns, options) => {
  let items = [].concat(list);

  for (let pattern of [].concat(patterns)) {
    let isMatch = picomatch(String(pattern), options);
    if (!items.every(item => isMatch(item))) {
      return false;
    }
  }
  return true;
};

/**
 * Returns true if **all** of the given `patterns` match
 * the specified string.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.all(string, patterns[, options]);
 *
 * console.log(mm.all('foo.js', ['foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
 * // false
 *
 * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
 * // true
 * ```
 * @param {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

micromatch.all = (str, patterns, options) => {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
  }

  return [].concat(patterns).every(p => picomatch(p, options)(str));
};

/**
 * Returns an array of matches captured by `pattern` in `string, or `null` if the pattern did not match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.capture(pattern, string[, options]);
 *
 * console.log(mm.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(mm.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `glob` Glob pattern to use for matching.
 * @param {String} `input` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns an array of captures if the input matches the glob pattern, otherwise `null`.
 * @api public
 */

micromatch.capture = (glob, input, options) => {
  let posix = utils.isWindows(options);
  let regex = picomatch.makeRe(String(glob), { ...options, capture: true });
  let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);

  if (match) {
    return match.slice(1).map(v => v === void 0 ? '' : v);
  }
};

/**
 * Create a regular expression from the given glob `pattern`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.makeRe(pattern[, options]);
 *
 * console.log(mm.makeRe('*.js'));
 * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
 * ```
 * @param {String} `pattern` A glob pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */

micromatch.makeRe = (...args) => picomatch.makeRe(...args);

/**
 * Scan a glob pattern to separate the pattern into segments. Used
 * by the [split](#split) method.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.scan(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */

micromatch.scan = (...args) => picomatch.scan(...args);

/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm(pattern[, options]);
 * ```
 * @param {String} `glob`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as regex source string.
 * @api public
 */

micromatch.parse = (patterns, options) => {
  let res = [];
  for (let pattern of [].concat(patterns || [])) {
    for (let str of braces(String(pattern), options)) {
      res.push(picomatch.parse(str, options));
    }
  }
  return res;
};

/**
 * Process the given brace `pattern`.
 *
 * ```js
 * const { braces } = require('micromatch');
 * console.log(braces('foo/{a,b,c}/bar'));
 * //=> [ 'foo/(a|b|c)/bar' ]
 *
 * console.log(braces('foo/{a,b,c}/bar', { expand: true }));
 * //=> [ 'foo/a/bar', 'foo/b/bar', 'foo/c/bar' ]
 * ```
 * @param {String} `pattern` String with brace pattern to process.
 * @param {Object} `options` Any [options](#options) to change how expansion is performed. See the [braces][] library for all available options.
 * @return {Array}
 * @api public
 */

micromatch.braces = (pattern, options) => {
  if (typeof pattern !== 'string') throw new TypeError('Expected a string');
  if ((options && options.nobrace === true) || !/\{.*\}/.test(pattern)) {
    return [pattern];
  }
  return braces(pattern, options);
};

/**
 * Expand braces
 */

micromatch.braceExpand = (pattern, options) => {
  if (typeof pattern !== 'string') throw new TypeError('Expected a string');
  return micromatch.braces(pattern, { ...options, expand: true });
};

/**
 * Expose micromatch
 */

module.exports = micromatch;


/***/ }),

/***/ 81:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalEnforcer = void 0;
const coreEnforcer_1 = __webpack_require__(571);
const model_1 = __webpack_require__(374);
/**
 * InternalEnforcer = CoreEnforcer + Internal API.
 */
class InternalEnforcer extends coreEnforcer_1.CoreEnforcer {
    /**
     * addPolicyInternal adds a rule to the current policy.
     */
    addPolicyInternal(sec, ptype, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.model.hasPolicy(sec, ptype, rule)) {
                return false;
            }
            if (this.adapter && this.autoSave) {
                try {
                    yield this.adapter.addPolicy(sec, ptype, rule);
                }
                catch (e) {
                    if (e.message !== 'not implemented') {
                        throw e;
                    }
                }
            }
            if (this.watcher && this.autoNotifyWatcher) {
                // error intentionally ignored
                this.watcher.update();
            }
            const ok = this.model.addPolicy(sec, ptype, rule);
            if (sec === 'g' && ok) {
                yield this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, [rule]);
            }
            return ok;
        });
    }
    // addPolicies adds rules to the current policy.
    // removePolicies removes rules from the current policy.
    addPoliciesInternal(sec, ptype, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const rule of rules) {
                if (this.model.hasPolicy(sec, ptype, rule)) {
                    return false;
                }
            }
            const batchAdapter = this.adapter;
            if (batchAdapter && this.autoSave) {
                try {
                    yield batchAdapter.addPolicies(sec, ptype, rules);
                }
                catch (e) {
                    if (e.message !== 'not implemented') {
                        throw e;
                    }
                }
            }
            if (this.watcher && this.autoNotifyWatcher) {
                // error intentionally ignored
                this.watcher.update();
            }
            const [ok, effects] = yield this.model.addPolicies(sec, ptype, rules);
            if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
                yield this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyAdd, ptype, effects);
            }
            return ok;
        });
    }
    /**
     * removePolicyInternal removes a rule from the current policy.
     */
    removePolicyInternal(sec, ptype, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.model.hasPolicy(sec, ptype, rule)) {
                return false;
            }
            if (this.adapter && this.autoSave) {
                try {
                    yield this.adapter.removePolicy(sec, ptype, rule);
                }
                catch (e) {
                    if (e.message !== 'not implemented') {
                        throw e;
                    }
                }
            }
            if (this.watcher && this.autoNotifyWatcher) {
                // error intentionally ignored
                this.watcher.update();
            }
            const ok = yield this.model.removePolicy(sec, ptype, rule);
            if (sec === 'g' && ok) {
                yield this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, [rule]);
            }
            return ok;
        });
    }
    // removePolicies removes rules from the current policy.
    removePoliciesInternal(sec, ptype, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const rule of rules) {
                if (!this.model.hasPolicy(sec, ptype, rule)) {
                    return false;
                }
            }
            const batchAdapter = this.adapter;
            if (batchAdapter && this.autoSave) {
                try {
                    yield batchAdapter.removePolicies(sec, ptype, rules);
                }
                catch (e) {
                    if (e.message !== 'not implemented') {
                        throw e;
                    }
                }
            }
            if (this.watcher && this.autoNotifyWatcher) {
                // error intentionally ignored
                this.watcher.update();
            }
            const [ok, effects] = this.model.removePolicies(sec, ptype, rules);
            if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
                yield this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, effects);
            }
            return ok;
        });
    }
    /**
     * removeFilteredPolicyInternal removes rules based on field filters from the current policy.
     */
    removeFilteredPolicyInternal(sec, ptype, fieldIndex, fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.adapter && this.autoSave) {
                try {
                    yield this.adapter.removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues);
                }
                catch (e) {
                    if (e.message !== 'not implemented') {
                        throw e;
                    }
                }
            }
            if (this.watcher && this.autoNotifyWatcher) {
                // error intentionally ignored
                this.watcher.update();
            }
            const [ok, effects] = this.model.removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues);
            if (sec === 'g' && ok && (effects === null || effects === void 0 ? void 0 : effects.length)) {
                yield this.buildIncrementalRoleLinks(model_1.PolicyOp.PolicyRemove, ptype, effects);
            }
            return ok;
        });
    }
}
exports.InternalEnforcer = InternalEnforcer;


/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 91:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newSyncedEnforcer = exports.SyncedEnforcer = void 0;
const enforcer_1 = __webpack_require__(642);
const await_lock_1 = __webpack_require__(781);
// SyncedEnforcer wraps Enforcer and provides synchronized access
class SyncedEnforcer extends enforcer_1.Enforcer {
    constructor() {
        super(...arguments);
        this.lock = new await_lock_1.default();
    }
    /**
     * setWatcher sets the current watcher.
     *
     * @param watcher the watcher.
     */
    setWatcher(watcher) {
        this.watcher = watcher;
        this.watcher.setUpdateCallback(() => this.loadPolicy());
    }
    /**
     * loadPolicy reloads the policy from file/database.
     */
    loadPolicy() {
        const _super = Object.create(null, {
            loadPolicy: { get: () => super.loadPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.loadPolicy.call(this).finally(() => this.lock.release());
        });
    }
    /**
     * clearPolicy clears all policy.
     */
    clearPolicy() {
        this.lock
            .acquireAsync()
            .then(() => super.clearPolicy())
            .finally(() => this.lock.release());
    }
    /**
     * savePolicy saves the current policy (usually after changed with Casbin API) back to file/database.
     */
    savePolicy() {
        const _super = Object.create(null, {
            savePolicy: { get: () => super.savePolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.savePolicy.call(this).finally(() => this.lock.release());
        });
    }
    /**
     * buildRoleLinks manually rebuild the role inheritance relations.
     */
    buildRoleLinks() {
        const _super = Object.create(null, {
            buildRoleLinks: { get: () => super.buildRoleLinks }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.buildRoleLinks.call(this).finally(() => this.lock.release());
        });
    }
    /**
     * If the matchers does not contain an asynchronous method, call it faster.
     *
     * enforceWithSyncCompile decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request.
     */
    enforceWithSyncCompile(...rvals) {
        const _super = Object.create(null, {
            enforceWithSyncCompile: { get: () => super.enforceWithSyncCompile }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.enforceWithSyncCompile.call(this, ...rvals).finally(() => this.lock.release());
        });
    }
    /**
     * enforce decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request.
     */
    enforce(...rvals) {
        const _super = Object.create(null, {
            enforce: { get: () => super.enforce }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.enforce.call(this, ...rvals).finally(() => this.lock.release());
        });
    }
    /**
     * getAllSubjects gets the list of subjects that show up in the current policy.
     *
     * @return all the subjects in "p" policy rules. It actually collects the
     *         0-index elements of "p" policy rules. So make sure your subject
     *         is the 0-index element, like (sub, obj, act). Duplicates are removed.
     */
    getAllSubjects() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllNamedSubjects('p');
        });
    }
    /**
     * getAllNamedSubjects gets the list of subjects that show up in the currentnamed policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the subjects in policy rules of the ptype type. It actually
     *         collects the 0-index elements of the policy rules. So make sure
     *         your subject is the 0-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllNamedSubjects(ptype) {
        const _super = Object.create(null, {
            getAllNamedSubjects: { get: () => super.getAllNamedSubjects }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.getAllNamedSubjects.call(this, ptype).finally(() => this.lock.release());
        });
    }
    /**
     * getAllObjects gets the list of objects that show up in the current policy.
     *
     * @return all the objects in "p" policy rules. It actually collects the
     *         1-index elements of "p" policy rules. So make sure your object
     *         is the 1-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllObjects() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllNamedObjects('p');
        });
    }
    /**
     * getAllNamedObjects gets the list of objects that show up in the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the objects in policy rules of the ptype type. It actually
     *         collects the 1-index elements of the policy rules. So make sure
     *         your object is the 1-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllNamedObjects(ptype) {
        const _super = Object.create(null, {
            getAllNamedObjects: { get: () => super.getAllNamedObjects }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.getAllNamedObjects.call(this, ptype).finally(() => this.lock.release());
        });
    }
    /**
     * getAllActions gets the list of actions that show up in the current policy.
     *
     * @return all the actions in "p" policy rules. It actually collects
     *         the 2-index elements of "p" policy rules. So make sure your action
     *         is the 2-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllActions() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllNamedActions('p');
        });
    }
    /**
     * GetAllNamedActions gets the list of actions that show up in the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the actions in policy rules of the ptype type. It actually
     *         collects the 2-index elements of the policy rules. So make sure
     *         your action is the 2-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllNamedActions(ptype) {
        const _super = Object.create(null, {
            getAllNamedActions: { get: () => super.getAllNamedActions }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.getAllNamedActions.call(this, ptype).finally(() => this.lock.release());
        });
    }
    /**
     * getAllRoles gets the list of roles that show up in the current policy.
     *
     * @return all the roles in "g" policy rules. It actually collects
     *         the 1-index elements of "g" policy rules. So make sure your
     *         role is the 1-index element, like (sub, role).
     *         Duplicates are removed.
     */
    getAllRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllNamedRoles('g');
        });
    }
    /**
     * getAllNamedRoles gets the list of roles that show up in the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @return all the subjects in policy rules of the ptype type. It actually
     *         collects the 0-index elements of the policy rules. So make
     *         sure your subject is the 0-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllNamedRoles(ptype) {
        const _super = Object.create(null, {
            getAllNamedRoles: { get: () => super.getAllNamedRoles }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.getAllNamedRoles.call(this, ptype).finally(() => this.lock.release());
        });
    }
    /**
     * getPolicy gets all the authorization rules in the policy.
     *
     * @return all the "p" policy rules.
     */
    getPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getNamedPolicy('p');
        });
    }
    /**
     * getFilteredPolicy gets all the authorization rules in the policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "p" policy rules.
     */
    getFilteredPolicy(fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getFilteredNamedPolicy('p', fieldIndex, ...fieldValues);
        });
    }
    /**
     * getNamedPolicy gets all the authorization rules in the named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return the "p" policy rules of the specified ptype.
     */
    getNamedPolicy(ptype) {
        const _super = Object.create(null, {
            getNamedPolicy: { get: () => super.getNamedPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.getNamedPolicy.call(this, ptype).finally(() => this.lock.release());
        });
    }
    /**
     * getFilteredNamedPolicy gets all the authorization rules in the named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "p" policy rules of the specified ptype.
     */
    getFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues) {
        const _super = Object.create(null, {
            getFilteredNamedPolicy: { get: () => super.getFilteredNamedPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.getFilteredNamedPolicy.call(this, ptype, fieldIndex, ...fieldValues).finally(() => this.lock.release());
        });
    }
    /**
     * getGroupingPolicy gets all the role inheritance rules in the policy.
     *
     * @return all the "g" policy rules.
     */
    getGroupingPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getNamedGroupingPolicy('g');
        });
    }
    /**
     * getFilteredGroupingPolicy gets all the role inheritance rules in the policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value "" means not to match this field.
     * @return the filtered "g" policy rules.
     */
    getFilteredGroupingPolicy(fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getFilteredNamedGroupingPolicy('g', fieldIndex, ...fieldValues);
        });
    }
    /**
     * getNamedGroupingPolicy gets all the role inheritance rules in the policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @return the "g" policy rules of the specified ptype.
     */
    getNamedGroupingPolicy(ptype) {
        const _super = Object.create(null, {
            getNamedGroupingPolicy: { get: () => super.getNamedGroupingPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.getNamedGroupingPolicy.call(this, ptype).finally(() => this.lock.release());
        });
    }
    /**
     * getFilteredNamedGroupingPolicy gets all the role inheritance rules in the policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "g" policy rules of the specified ptype.
     */
    getFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues) {
        const _super = Object.create(null, {
            getFilteredNamedGroupingPolicy: { get: () => super.getFilteredNamedGroupingPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.getFilteredNamedGroupingPolicy.call(this, ptype, fieldIndex, ...fieldValues).finally(() => this.lock.release());
        });
    }
    /**
     * hasPolicy determines whether an authorization rule exists.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return whether the rule exists.
     */
    hasPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.hasNamedPolicy('p', ...params);
        });
    }
    /**
     * hasNamedPolicy determines whether a named authorization rule exists.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return whether the rule exists.
     */
    hasNamedPolicy(ptype, ...params) {
        const _super = Object.create(null, {
            hasNamedPolicy: { get: () => super.hasNamedPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.hasNamedPolicy.call(this, ptype, ...params).finally(() => this.lock.release());
        });
    }
    /**
     * addPolicy adds an authorization rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    addPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addNamedPolicy('p', ...params);
        });
    }
    /**
     * addNamedPolicy adds an authorization rule to the current named policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return succeeds or not.
     */
    addNamedPolicy(ptype, ...params) {
        const _super = Object.create(null, {
            addNamedPolicy: { get: () => super.addNamedPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.addNamedPolicy.call(this, ptype, ...params).finally(() => this.lock.release());
        });
    }
    /**
     * removePolicy removes an authorization rule from the current policy.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    removePolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeNamedPolicy('p', ...params);
        });
    }
    /**
     * removeFilteredPolicy removes an authorization rule from the current policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    removeFilteredPolicy(fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeFilteredNamedPolicy('p', fieldIndex, ...fieldValues);
        });
    }
    /**
     * removeNamedPolicy removes an authorization rule from the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return succeeds or not.
     */
    removeNamedPolicy(ptype, ...params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return this.removePolicyInternal('p', ptype, params).finally(() => this.lock.release());
        });
    }
    /**
     * removeFilteredNamedPolicy removes an authorization rule from the current named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    removeFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues) {
        const _super = Object.create(null, {
            removeFilteredNamedPolicy: { get: () => super.removeFilteredNamedPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.removeFilteredNamedPolicy.call(this, ptype, fieldIndex, ...fieldValues).finally(() => this.lock.release());
        });
    }
    /**
     * hasGroupingPolicy determines whether a role inheritance rule exists.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return whether the rule exists.
     */
    hasGroupingPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.hasNamedGroupingPolicy('g', ...params);
        });
    }
    /**
     * hasNamedGroupingPolicy determines whether a named role inheritance rule exists.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return whether the rule exists.
     */
    hasNamedGroupingPolicy(ptype, ...params) {
        const _super = Object.create(null, {
            hasNamedGroupingPolicy: { get: () => super.hasNamedGroupingPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.hasNamedGroupingPolicy.call(this, ptype, ...params).finally(() => this.lock.release());
        });
    }
    /**
     * addGroupingPolicy adds a role inheritance rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    addGroupingPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addNamedGroupingPolicy('g', ...params);
        });
    }
    /**
     * addNamedGroupingPolicy adds a named role inheritance rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return succeeds or not.
     */
    addNamedGroupingPolicy(ptype, ...params) {
        const _super = Object.create(null, {
            addNamedGroupingPolicy: { get: () => super.addNamedGroupingPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.addNamedGroupingPolicy.call(this, ptype, ...params).finally(() => this.lock.release());
        });
    }
    /**
     * removeGroupingPolicy removes a role inheritance rule from the current policy.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    removeGroupingPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeNamedGroupingPolicy('g', ...params);
        });
    }
    /**
     * removeFilteredGroupingPolicy removes a role inheritance rule from the current policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    removeFilteredGroupingPolicy(fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeFilteredNamedGroupingPolicy('g', fieldIndex, ...fieldValues);
        });
    }
    /**
     * removeNamedGroupingPolicy removes a role inheritance rule from the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return succeeds or not.
     */
    removeNamedGroupingPolicy(ptype, ...params) {
        const _super = Object.create(null, {
            removeNamedGroupingPolicy: { get: () => super.removeNamedGroupingPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.removeNamedGroupingPolicy.call(this, ptype, ...params).finally(() => this.lock.release());
        });
    }
    /**
     * removeFilteredNamedGroupingPolicy removes a role inheritance rule from the current named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    removeFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues) {
        const _super = Object.create(null, {
            removeFilteredNamedGroupingPolicy: { get: () => super.removeFilteredNamedGroupingPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lock.acquireAsync();
            return _super.removeFilteredNamedGroupingPolicy.call(this, ptype, fieldIndex, ...fieldValues).finally(() => this.lock.release());
        });
    }
}
exports.SyncedEnforcer = SyncedEnforcer;
// newSyncedEnforcer creates a synchronized enforcer via file or DB.
function newSyncedEnforcer(...params) {
    return __awaiter(this, void 0, void 0, function* () {
        return enforcer_1.newEnforcerWithClass(SyncedEnforcer, ...params);
    });
}
exports.newSyncedEnforcer = newSyncedEnforcer;


/***/ }),

/***/ 111:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCachedEnforcer = exports.CachedEnforcer = void 0;
const enforcer_1 = __webpack_require__(642);
// CachedEnforcer wraps Enforcer and provides decision cache
class CachedEnforcer extends enforcer_1.Enforcer {
    constructor() {
        super(...arguments);
        this.enableCache = true;
        this.m = new Map();
    }
    // invalidateCache deletes all the existing cached decisions.
    invalidateCache() {
        this.m = new Map();
    }
    // setEnableCache determines whether to enable cache on e nforce(). When enableCache is enabled, cached result (true | false) will be returned for previous decisions.
    setEnableCache(enableCache) {
        this.enableCache = enableCache;
    }
    static canCache(...rvals) {
        return rvals.every(n => typeof n === 'string');
    }
    static getCacheKey(...rvals) {
        return rvals.join('$$');
    }
    getCache(key) {
        return this.m.get(key);
    }
    setCache(key, value) {
        this.m.set(key, value);
    }
    // enforce decides whether a "subject" can access a "object" with the operation "action", input parameters are usually: (sub, obj, act).
    // if rvals is not string , ingore the cache
    enforce(...rvals) {
        const _super = Object.create(null, {
            enforce: { get: () => super.enforce }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.enableCache) {
                return _super.enforce.call(this, ...rvals);
            }
            let key = '';
            const cache = CachedEnforcer.canCache(...rvals);
            if (cache) {
                key = CachedEnforcer.getCacheKey(...rvals);
                const res = this.getCache(key);
                if (res != undefined) {
                    return res;
                }
            }
            const res = yield _super.enforce.call(this, ...rvals);
            if (cache) {
                this.setCache(key, res);
            }
            return res;
        });
    }
}
exports.CachedEnforcer = CachedEnforcer;
// newCachedEnforcer creates a cached enforcer via file or DB.
function newCachedEnforcer(...params) {
    return __awaiter(this, void 0, void 0, function* () {
        return enforcer_1.newEnforcerWithClass(CachedEnforcer, ...params);
    });
}
exports.newCachedEnforcer = newCachedEnforcer;


/***/ }),

/***/ 118:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 137:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAdapter = void 0;
const helper_1 = __webpack_require__(932);
const util_1 = __webpack_require__(703);
/**
 * FileAdapter is the file adapter for Casbin.
 * It can load policy from file or save policy to file.
 */
class FileAdapter {
    /**
     * FileAdapter is the constructor for FileAdapter.
     * @param {string} filePath filePath the path of the policy file.
     */
    constructor(filePath) {
        this.filePath = filePath;
    }
    loadPolicy(model) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.filePath) {
                // throw new Error('invalid file path, file path cannot be empty');
                return;
            }
            yield this.loadPolicyFile(model, helper_1.Helper.loadPolicyLine);
        });
    }
    loadPolicyFile(model, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyBuf = yield util_1.readFile(this.filePath);
            const lines = bodyBuf.toString().split('\n');
            lines.forEach((n, index) => {
                const line = n.trim();
                if (!line) {
                    return;
                }
                handler(n, model);
            });
        });
    }
    /**
     * savePolicy saves all policy rules to the storage.
     */
    savePolicy(model) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.filePath) {
                // throw new Error('invalid file path, file path cannot be empty');
                return false;
            }
            let result = '';
            const pList = model.model.get('p');
            if (!pList) {
                return false;
            }
            pList.forEach(n => {
                n.policy.forEach(m => {
                    result += n.key + ', ';
                    result += util_1.arrayToString(m);
                    result += '\n';
                });
            });
            const gList = model.model.get('g');
            if (!gList) {
                return false;
            }
            gList.forEach(n => {
                n.policy.forEach(m => {
                    result += n.key + ', ';
                    result += util_1.arrayToString(m);
                    result += '\n';
                });
            });
            yield this.savePolicyFile(result.trim());
            return true;
        });
    }
    savePolicyFile(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield util_1.writeFile(this.filePath, text);
        });
    }
    /**
     * addPolicy adds a policy rule to the storage.
     */
    addPolicy(sec, ptype, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
    /**
     * removePolicy removes a policy rule from the storage.
     */
    removePolicy(sec, ptype, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
    /**
     * removeFilteredPolicy removes policy rules that match the filter from the storage.
     */
    removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.FileAdapter = FileAdapter;


/***/ }),

/***/ 199:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const path = __webpack_require__(622);
const WIN_SLASH = '\\\\/';
const WIN_NO_SLASH = `[^${WIN_SLASH}]`;

/**
 * Posix glob regex
 */

const DOT_LITERAL = '\\.';
const PLUS_LITERAL = '\\+';
const QMARK_LITERAL = '\\?';
const SLASH_LITERAL = '\\/';
const ONE_CHAR = '(?=.)';
const QMARK = '[^/]';
const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
const NO_DOT = `(?!${DOT_LITERAL})`;
const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
const STAR = `${QMARK}*?`;

const POSIX_CHARS = {
  DOT_LITERAL,
  PLUS_LITERAL,
  QMARK_LITERAL,
  SLASH_LITERAL,
  ONE_CHAR,
  QMARK,
  END_ANCHOR,
  DOTS_SLASH,
  NO_DOT,
  NO_DOTS,
  NO_DOT_SLASH,
  NO_DOTS_SLASH,
  QMARK_NO_DOT,
  STAR,
  START_ANCHOR
};

/**
 * Windows glob regex
 */

const WINDOWS_CHARS = {
  ...POSIX_CHARS,

  SLASH_LITERAL: `[${WIN_SLASH}]`,
  QMARK: WIN_NO_SLASH,
  STAR: `${WIN_NO_SLASH}*?`,
  DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
  NO_DOT: `(?!${DOT_LITERAL})`,
  NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
  NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
  START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
  END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
};

/**
 * POSIX Bracket Regex
 */

const POSIX_REGEX_SOURCE = {
  alnum: 'a-zA-Z0-9',
  alpha: 'a-zA-Z',
  ascii: '\\x00-\\x7F',
  blank: ' \\t',
  cntrl: '\\x00-\\x1F\\x7F',
  digit: '0-9',
  graph: '\\x21-\\x7E',
  lower: 'a-z',
  print: '\\x20-\\x7E ',
  punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
  space: ' \\t\\r\\n\\v\\f',
  upper: 'A-Z',
  word: 'A-Za-z0-9_',
  xdigit: 'A-Fa-f0-9'
};

module.exports = {
  MAX_LENGTH: 1024 * 64,
  POSIX_REGEX_SOURCE,

  // regular expressions
  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,

  // Replace globs with equivalent patterns to reduce parsing time.
  REPLACEMENTS: {
    '***': '*',
    '**/**': '**',
    '**/**/**': '**'
  },

  // Digits
  CHAR_0: 48, /* 0 */
  CHAR_9: 57, /* 9 */

  // Alphabet chars.
  CHAR_UPPERCASE_A: 65, /* A */
  CHAR_LOWERCASE_A: 97, /* a */
  CHAR_UPPERCASE_Z: 90, /* Z */
  CHAR_LOWERCASE_Z: 122, /* z */

  CHAR_LEFT_PARENTHESES: 40, /* ( */
  CHAR_RIGHT_PARENTHESES: 41, /* ) */

  CHAR_ASTERISK: 42, /* * */

  // Non-alphabetic chars.
  CHAR_AMPERSAND: 38, /* & */
  CHAR_AT: 64, /* @ */
  CHAR_BACKWARD_SLASH: 92, /* \ */
  CHAR_CARRIAGE_RETURN: 13, /* \r */
  CHAR_CIRCUMFLEX_ACCENT: 94, /* ^ */
  CHAR_COLON: 58, /* : */
  CHAR_COMMA: 44, /* , */
  CHAR_DOT: 46, /* . */
  CHAR_DOUBLE_QUOTE: 34, /* " */
  CHAR_EQUAL: 61, /* = */
  CHAR_EXCLAMATION_MARK: 33, /* ! */
  CHAR_FORM_FEED: 12, /* \f */
  CHAR_FORWARD_SLASH: 47, /* / */
  CHAR_GRAVE_ACCENT: 96, /* ` */
  CHAR_HASH: 35, /* # */
  CHAR_HYPHEN_MINUS: 45, /* - */
  CHAR_LEFT_ANGLE_BRACKET: 60, /* < */
  CHAR_LEFT_CURLY_BRACE: 123, /* { */
  CHAR_LEFT_SQUARE_BRACKET: 91, /* [ */
  CHAR_LINE_FEED: 10, /* \n */
  CHAR_NO_BREAK_SPACE: 160, /* \u00A0 */
  CHAR_PERCENT: 37, /* % */
  CHAR_PLUS: 43, /* + */
  CHAR_QUESTION_MARK: 63, /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: 62, /* > */
  CHAR_RIGHT_CURLY_BRACE: 125, /* } */
  CHAR_RIGHT_SQUARE_BRACKET: 93, /* ] */
  CHAR_SEMICOLON: 59, /* ; */
  CHAR_SINGLE_QUOTE: 39, /* ' */
  CHAR_SPACE: 32, /*   */
  CHAR_TAB: 9, /* \t */
  CHAR_UNDERSCORE: 95, /* _ */
  CHAR_VERTICAL_LINE: 124, /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, /* \uFEFF */

  SEP: path.sep,

  /**
   * Create EXTGLOB_CHARS
   */

  extglobChars(chars) {
    return {
      '!': { type: 'negate', open: '(?:(?!(?:', close: `))${chars.STAR})` },
      '?': { type: 'qmark', open: '(?:', close: ')?' },
      '+': { type: 'plus', open: '(?:', close: ')+' },
      '*': { type: 'star', open: '(?:', close: ')*' },
      '@': { type: 'at', open: '(?:', close: ')' }
    };
  },

  /**
   * Create GLOB_CHARS
   */

  globChars(win32) {
    return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
  }
};


/***/ }),

/***/ 213:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright 2020 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 225:
/***/ (function(__unusedmodule, exports) {

"use strict";


exports.isInteger = num => {
  if (typeof num === 'number') {
    return Number.isInteger(num);
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isInteger(Number(num));
  }
  return false;
};

/**
 * Find a node of the given type
 */

exports.find = (node, type) => node.nodes.find(node => node.type === type);

/**
 * Find a node of the given type
 */

exports.exceedsLimit = (min, max, step = 1, limit) => {
  if (limit === false) return false;
  if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
  return ((Number(max) - Number(min)) / Number(step)) >= limit;
};

/**
 * Escape the given node with '\\' before node.value
 */

exports.escapeNode = (block, n = 0, type) => {
  let node = block.nodes[n];
  if (!node) return;

  if ((type && node.type === type) || node.type === 'open' || node.type === 'close') {
    if (node.escaped !== true) {
      node.value = '\\' + node.value;
      node.escaped = true;
    }
  }
};

/**
 * Returns true if the given brace node should be enclosed in literal braces
 */

exports.encloseBrace = node => {
  if (node.type !== 'brace') return false;
  if ((node.commas >> 0 + node.ranges >> 0) === 0) {
    node.invalid = true;
    return true;
  }
  return false;
};

/**
 * Returns true if a brace node is invalid.
 */

exports.isInvalidBrace = block => {
  if (block.type !== 'brace') return false;
  if (block.invalid === true || block.dollar) return true;
  if ((block.commas >> 0 + block.ranges >> 0) === 0) {
    block.invalid = true;
    return true;
  }
  if (block.open !== true || block.close !== true) {
    block.invalid = true;
    return true;
  }
  return false;
};

/**
 * Returns true if a node is an open or close node
 */

exports.isOpenOrClose = node => {
  if (node.type === 'open' || node.type === 'close') {
    return true;
  }
  return node.open === true || node.close === true;
};

/**
 * Reduce an array of text nodes.
 */

exports.reduce = nodes => nodes.reduce((acc, node) => {
  if (node.type === 'text') acc.push(node.value);
  if (node.type === 'range') node.type = 'text';
  return acc;
}, []);

/**
 * Flatten an array
 */

exports.flatten = (...args) => {
  const result = [];
  const flat = arr => {
    for (let i = 0; i < arr.length; i++) {
      let ele = arr[i];
      Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
    }
    return result;
  };
  flat(args);
  return result;
};


/***/ }),

/***/ 227:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const stringify = __webpack_require__(382);

/**
 * Constants
 */

const {
  MAX_LENGTH,
  CHAR_BACKSLASH, /* \ */
  CHAR_BACKTICK, /* ` */
  CHAR_COMMA, /* , */
  CHAR_DOT, /* . */
  CHAR_LEFT_PARENTHESES, /* ( */
  CHAR_RIGHT_PARENTHESES, /* ) */
  CHAR_LEFT_CURLY_BRACE, /* { */
  CHAR_RIGHT_CURLY_BRACE, /* } */
  CHAR_LEFT_SQUARE_BRACKET, /* [ */
  CHAR_RIGHT_SQUARE_BRACKET, /* ] */
  CHAR_DOUBLE_QUOTE, /* " */
  CHAR_SINGLE_QUOTE, /* ' */
  CHAR_NO_BREAK_SPACE,
  CHAR_ZERO_WIDTH_NOBREAK_SPACE
} = __webpack_require__(807);

/**
 * parse
 */

const parse = (input, options = {}) => {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string');
  }

  let opts = options || {};
  let max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
  if (input.length > max) {
    throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
  }

  let ast = { type: 'root', input, nodes: [] };
  let stack = [ast];
  let block = ast;
  let prev = ast;
  let brackets = 0;
  let length = input.length;
  let index = 0;
  let depth = 0;
  let value;
  let memo = {};

  /**
   * Helpers
   */

  const advance = () => input[index++];
  const push = node => {
    if (node.type === 'text' && prev.type === 'dot') {
      prev.type = 'text';
    }

    if (prev && prev.type === 'text' && node.type === 'text') {
      prev.value += node.value;
      return;
    }

    block.nodes.push(node);
    node.parent = block;
    node.prev = prev;
    prev = node;
    return node;
  };

  push({ type: 'bos' });

  while (index < length) {
    block = stack[stack.length - 1];
    value = advance();

    /**
     * Invalid chars
     */

    if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
      continue;
    }

    /**
     * Escaped chars
     */

    if (value === CHAR_BACKSLASH) {
      push({ type: 'text', value: (options.keepEscaping ? value : '') + advance() });
      continue;
    }

    /**
     * Right square bracket (literal): ']'
     */

    if (value === CHAR_RIGHT_SQUARE_BRACKET) {
      push({ type: 'text', value: '\\' + value });
      continue;
    }

    /**
     * Left square bracket: '['
     */

    if (value === CHAR_LEFT_SQUARE_BRACKET) {
      brackets++;

      let closed = true;
      let next;

      while (index < length && (next = advance())) {
        value += next;

        if (next === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          continue;
        }

        if (next === CHAR_BACKSLASH) {
          value += advance();
          continue;
        }

        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
          brackets--;

          if (brackets === 0) {
            break;
          }
        }
      }

      push({ type: 'text', value });
      continue;
    }

    /**
     * Parentheses
     */

    if (value === CHAR_LEFT_PARENTHESES) {
      block = push({ type: 'paren', nodes: [] });
      stack.push(block);
      push({ type: 'text', value });
      continue;
    }

    if (value === CHAR_RIGHT_PARENTHESES) {
      if (block.type !== 'paren') {
        push({ type: 'text', value });
        continue;
      }
      block = stack.pop();
      push({ type: 'text', value });
      block = stack[stack.length - 1];
      continue;
    }

    /**
     * Quotes: '|"|`
     */

    if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
      let open = value;
      let next;

      if (options.keepQuotes !== true) {
        value = '';
      }

      while (index < length && (next = advance())) {
        if (next === CHAR_BACKSLASH) {
          value += next + advance();
          continue;
        }

        if (next === open) {
          if (options.keepQuotes === true) value += next;
          break;
        }

        value += next;
      }

      push({ type: 'text', value });
      continue;
    }

    /**
     * Left curly brace: '{'
     */

    if (value === CHAR_LEFT_CURLY_BRACE) {
      depth++;

      let dollar = prev.value && prev.value.slice(-1) === '$' || block.dollar === true;
      let brace = {
        type: 'brace',
        open: true,
        close: false,
        dollar,
        depth,
        commas: 0,
        ranges: 0,
        nodes: []
      };

      block = push(brace);
      stack.push(block);
      push({ type: 'open', value });
      continue;
    }

    /**
     * Right curly brace: '}'
     */

    if (value === CHAR_RIGHT_CURLY_BRACE) {
      if (block.type !== 'brace') {
        push({ type: 'text', value });
        continue;
      }

      let type = 'close';
      block = stack.pop();
      block.close = true;

      push({ type, value });
      depth--;

      block = stack[stack.length - 1];
      continue;
    }

    /**
     * Comma: ','
     */

    if (value === CHAR_COMMA && depth > 0) {
      if (block.ranges > 0) {
        block.ranges = 0;
        let open = block.nodes.shift();
        block.nodes = [open, { type: 'text', value: stringify(block) }];
      }

      push({ type: 'comma', value });
      block.commas++;
      continue;
    }

    /**
     * Dot: '.'
     */

    if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
      let siblings = block.nodes;

      if (depth === 0 || siblings.length === 0) {
        push({ type: 'text', value });
        continue;
      }

      if (prev.type === 'dot') {
        block.range = [];
        prev.value += value;
        prev.type = 'range';

        if (block.nodes.length !== 3 && block.nodes.length !== 5) {
          block.invalid = true;
          block.ranges = 0;
          prev.type = 'text';
          continue;
        }

        block.ranges++;
        block.args = [];
        continue;
      }

      if (prev.type === 'range') {
        siblings.pop();

        let before = siblings[siblings.length - 1];
        before.value += prev.value + value;
        prev = before;
        block.ranges--;
        continue;
      }

      push({ type: 'dot', value });
      continue;
    }

    /**
     * Text
     */

    push({ type: 'text', value });
  }

  // Mark imbalanced braces and brackets as invalid
  do {
    block = stack.pop();

    if (block.type !== 'root') {
      block.nodes.forEach(node => {
        if (!node.nodes) {
          if (node.type === 'open') node.isOpen = true;
          if (node.type === 'close') node.isClose = true;
          if (!node.nodes) node.type = 'text';
          node.invalid = true;
        }
      });

      // get the location of the block on parent.nodes (block's siblings)
      let parent = stack[stack.length - 1];
      let index = parent.nodes.indexOf(block);
      // replace the (invalid) block with it's nodes
      parent.nodes.splice(index, 1, ...block.nodes);
    }
  } while (stack.length > 0);

  push({ type: 'eos' });
  return ast;
};

module.exports = parse;


/***/ }),

/***/ 259:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(988), exports);
__exportStar(__webpack_require__(53), exports);


/***/ }),

/***/ 265:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(622);
const win32 = process.platform === 'win32';
const {
  REGEX_BACKSLASH,
  REGEX_REMOVE_BACKSLASH,
  REGEX_SPECIAL_CHARS,
  REGEX_SPECIAL_CHARS_GLOBAL
} = __webpack_require__(199);

exports.isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);
exports.hasRegexChars = str => REGEX_SPECIAL_CHARS.test(str);
exports.isRegexChar = str => str.length === 1 && exports.hasRegexChars(str);
exports.escapeRegex = str => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
exports.toPosixSlashes = str => str.replace(REGEX_BACKSLASH, '/');

exports.removeBackslashes = str => {
  return str.replace(REGEX_REMOVE_BACKSLASH, match => {
    return match === '\\' ? '' : match;
  });
};

exports.supportsLookbehinds = () => {
  const segs = process.version.slice(1).split('.').map(Number);
  if (segs.length === 3 && segs[0] >= 9 || (segs[0] === 8 && segs[1] >= 10)) {
    return true;
  }
  return false;
};

exports.isWindows = options => {
  if (options && typeof options.windows === 'boolean') {
    return options.windows;
  }
  return win32 === true || path.sep === '\\';
};

exports.escapeLast = (input, char, lastIdx) => {
  const idx = input.lastIndexOf(char, lastIdx);
  if (idx === -1) return input;
  if (input[idx - 1] === '\\') return exports.escapeLast(input, char, idx - 1);
  return `${input.slice(0, idx)}\\${input.slice(idx)}`;
};

exports.removePrefix = (input, state = {}) => {
  let output = input;
  if (output.startsWith('./')) {
    output = output.slice(2);
    state.prefix = './';
  }
  return output;
};

exports.wrapOutput = (input, state = {}, options = {}) => {
  const prepend = options.contains ? '' : '^';
  const append = options.contains ? '' : '$';

  let output = `${prepend}(?:${input})${append}`;
  if (state.negated === true) {
    output = `(?:^(?!${output}).*$)`;
  }
  return output;
};


/***/ }),

/***/ 266:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultEffector = void 0;
const defaultEffectorStream_1 = __webpack_require__(71);
/**
 * DefaultEffector is default effector for Casbin.
 */
class DefaultEffector {
    newStream(expr) {
        return new defaultEffectorStream_1.DefaultEffectorStream(expr);
    }
}
exports.DefaultEffector = DefaultEffector;


/***/ }),

/***/ 283:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(118), exports);
__exportStar(__webpack_require__(137), exports);
__exportStar(__webpack_require__(999), exports);
__exportStar(__webpack_require__(932), exports);
__exportStar(__webpack_require__(777), exports);
__exportStar(__webpack_require__(913), exports);
__exportStar(__webpack_require__(884), exports);
__exportStar(__webpack_require__(576), exports);
__exportStar(__webpack_require__(518), exports);


/***/ }),

/***/ 293:
/***/ (function(module) {

module.exports = require("buffer");

/***/ }),

/***/ 311:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPrintf = exports.logPrint = exports.getLogger = exports.setLogger = void 0;
const defaultLogger_1 = __webpack_require__(55);
let logger = new defaultLogger_1.DefaultLogger();
// setLogger sets the current logger.
function setLogger(l) {
    logger = l;
}
exports.setLogger = setLogger;
// getLogger returns the current logger.
function getLogger() {
    return logger;
}
exports.getLogger = getLogger;
// logPrint prints the log.
function logPrint(...v) {
    logger.print(...v);
}
exports.logPrint = logPrint;
// logPrintf prints the log with the format.
function logPrintf(format, ...v) {
    logger.printf(format, ...v);
}
exports.logPrintf = logPrintf;


/***/ }),

/***/ 366:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const path = __webpack_require__(622);
const scan = __webpack_require__(537);
const parse = __webpack_require__(806);
const utils = __webpack_require__(265);
const constants = __webpack_require__(199);
const isObject = val => val && typeof val === 'object' && !Array.isArray(val);

/**
 * Creates a matcher function from one or more glob patterns. The
 * returned function takes a string to match as its first argument,
 * and returns true if the string is a match. The returned matcher
 * function also takes a boolean as the second argument that, when true,
 * returns an object with additional information.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch(glob[, options]);
 *
 * const isMatch = picomatch('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @name picomatch
 * @param {String|Array} `globs` One or more glob patterns.
 * @param {Object=} `options`
 * @return {Function=} Returns a matcher function.
 * @api public
 */

const picomatch = (glob, options, returnState = false) => {
  if (Array.isArray(glob)) {
    const fns = glob.map(input => picomatch(input, options, returnState));
    const arrayMatcher = str => {
      for (const isMatch of fns) {
        const state = isMatch(str);
        if (state) return state;
      }
      return false;
    };
    return arrayMatcher;
  }

  const isState = isObject(glob) && glob.tokens && glob.input;

  if (glob === '' || (typeof glob !== 'string' && !isState)) {
    throw new TypeError('Expected pattern to be a non-empty string');
  }

  const opts = options || {};
  const posix = utils.isWindows(options);
  const regex = isState
    ? picomatch.compileRe(glob, options)
    : picomatch.makeRe(glob, options, false, true);

  const state = regex.state;
  delete regex.state;

  let isIgnored = () => false;
  if (opts.ignore) {
    const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
    isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
  }

  const matcher = (input, returnObject = false) => {
    const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
    const result = { glob, state, regex, posix, input, output, match, isMatch };

    if (typeof opts.onResult === 'function') {
      opts.onResult(result);
    }

    if (isMatch === false) {
      result.isMatch = false;
      return returnObject ? result : false;
    }

    if (isIgnored(input)) {
      if (typeof opts.onIgnore === 'function') {
        opts.onIgnore(result);
      }
      result.isMatch = false;
      return returnObject ? result : false;
    }

    if (typeof opts.onMatch === 'function') {
      opts.onMatch(result);
    }
    return returnObject ? result : true;
  };

  if (returnState) {
    matcher.state = state;
  }

  return matcher;
};

/**
 * Test `input` with the given `regex`. This is used by the main
 * `picomatch()` function to test the input string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.test(input, regex[, options]);
 *
 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp} `regex`
 * @return {Object} Returns an object with matching info.
 * @api public
 */

picomatch.test = (input, regex, options, { glob, posix } = {}) => {
  if (typeof input !== 'string') {
    throw new TypeError('Expected input to be a string');
  }

  if (input === '') {
    return { isMatch: false, output: '' };
  }

  const opts = options || {};
  const format = opts.format || (posix ? utils.toPosixSlashes : null);
  let match = input === glob;
  let output = (match && format) ? format(input) : input;

  if (match === false) {
    output = format ? format(input) : input;
    match = output === glob;
  }

  if (match === false || opts.capture === true) {
    if (opts.matchBase === true || opts.basename === true) {
      match = picomatch.matchBase(input, regex, options, posix);
    } else {
      match = regex.exec(output);
    }
  }

  return { isMatch: Boolean(match), match, output };
};

/**
 * Match the basename of a filepath.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.matchBase(input, glob[, options]);
 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
 * @return {Boolean}
 * @api public
 */

picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
  const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
  return regex.test(path.basename(input));
};

/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.isMatch(string, patterns[, options]);
 *
 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String|Array} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */

picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);

/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const result = picomatch.parse(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
 * @api public
 */

picomatch.parse = (pattern, options) => {
  if (Array.isArray(pattern)) return pattern.map(p => picomatch.parse(p, options));
  return parse(pattern, { ...options, fastpaths: false });
};

/**
 * Scan a glob pattern to separate the pattern into segments.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.scan(input[, options]);
 *
 * const result = picomatch.scan('!./foo/*.js');
 * console.log(result);
 * { prefix: '!./',
 *   input: '!./foo/*.js',
 *   start: 3,
 *   base: 'foo',
 *   glob: '*.js',
 *   isBrace: false,
 *   isBracket: false,
 *   isGlob: true,
 *   isExtglob: false,
 *   isGlobstar: false,
 *   negated: true }
 * ```
 * @param {String} `input` Glob pattern to scan.
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */

picomatch.scan = (input, options) => scan(input, options);

/**
 * Create a regular expression from a parsed glob pattern.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const state = picomatch.parse('*.js');
 * // picomatch.compileRe(state[, options]);
 *
 * console.log(picomatch.compileRe(state));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `state` The object returned from the `.parse` method.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */

picomatch.compileRe = (parsed, options, returnOutput = false, returnState = false) => {
  if (returnOutput === true) {
    return parsed.output;
  }

  const opts = options || {};
  const prepend = opts.contains ? '' : '^';
  const append = opts.contains ? '' : '$';

  let source = `${prepend}(?:${parsed.output})${append}`;
  if (parsed && parsed.negated === true) {
    source = `^(?!${source}).*$`;
  }

  const regex = picomatch.toRegex(source, options);
  if (returnState === true) {
    regex.state = parsed;
  }

  return regex;
};

picomatch.makeRe = (input, options, returnOutput = false, returnState = false) => {
  if (!input || typeof input !== 'string') {
    throw new TypeError('Expected a non-empty string');
  }

  const opts = options || {};
  let parsed = { negated: false, fastpaths: true };
  let prefix = '';
  let output;

  if (input.startsWith('./')) {
    input = input.slice(2);
    prefix = parsed.prefix = './';
  }

  if (opts.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
    output = parse.fastpaths(input, options);
  }

  if (output === undefined) {
    parsed = parse(input, options);
    parsed.prefix = prefix + (parsed.prefix || '');
  } else {
    parsed.output = output;
  }

  return picomatch.compileRe(parsed, options, returnOutput, returnState);
};

/**
 * Create a regular expression from the given regex source string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.toRegex(source[, options]);
 *
 * const { output } = picomatch.parse('*.js');
 * console.log(picomatch.toRegex(output));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `source` Regular expression source string.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */

picomatch.toRegex = (source, options) => {
  try {
    const opts = options || {};
    return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
  } catch (err) {
    if (options && options.debug === true) throw err;
    return /$^/;
  }
};

/**
 * Picomatch constants.
 * @return {Object}
 */

picomatch.constants = constants;

/**
 * Expose "picomatch"
 */

module.exports = picomatch;


/***/ }),

/***/ 374:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(494), exports);
__exportStar(__webpack_require__(929), exports);
__exportStar(__webpack_require__(721), exports);


/***/ }),

/***/ 377:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = void 0;
var Effect;
(function (Effect) {
    Effect[Effect["Allow"] = 1] = "Allow";
    Effect[Effect["Indeterminate"] = 2] = "Indeterminate";
    Effect[Effect["Deny"] = 3] = "Deny";
})(Effect = exports.Effect || (exports.Effect = {}));


/***/ }),

/***/ 382:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(225);

module.exports = (ast, options = {}) => {
  let stringify = (node, parent = {}) => {
    let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
    let invalidNode = node.invalid === true && options.escapeInvalid === true;
    let output = '';

    if (node.value) {
      if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
        return '\\' + node.value;
      }
      return node.value;
    }

    if (node.value) {
      return node.value;
    }

    if (node.nodes) {
      for (let child of node.nodes) {
        output += stringify(child);
      }
    }
    return output;
  };

  return stringify(ast);
};



/***/ }),

/***/ 435:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const fill = __webpack_require__(730);
const utils = __webpack_require__(225);

const compile = (ast, options = {}) => {
  let walk = (node, parent = {}) => {
    let invalidBlock = utils.isInvalidBrace(parent);
    let invalidNode = node.invalid === true && options.escapeInvalid === true;
    let invalid = invalidBlock === true || invalidNode === true;
    let prefix = options.escapeInvalid === true ? '\\' : '';
    let output = '';

    if (node.isOpen === true) {
      return prefix + node.value;
    }
    if (node.isClose === true) {
      return prefix + node.value;
    }

    if (node.type === 'open') {
      return invalid ? (prefix + node.value) : '(';
    }

    if (node.type === 'close') {
      return invalid ? (prefix + node.value) : ')';
    }

    if (node.type === 'comma') {
      return node.prev.type === 'comma' ? '' : (invalid ? node.value : '|');
    }

    if (node.value) {
      return node.value;
    }

    if (node.nodes && node.ranges > 0) {
      let args = utils.reduce(node.nodes);
      let range = fill(...args, { ...options, wrap: false, toRegex: true });

      if (range.length !== 0) {
        return args.length > 1 && range.length > 1 ? `(${range})` : range;
      }
    }

    if (node.nodes) {
      for (let child of node.nodes) {
        output += walk(child, node);
      }
    }
    return output;
  };

  return walk(ast);
};

module.exports = compile;


/***/ }),

/***/ 441:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const fill = __webpack_require__(730);
const stringify = __webpack_require__(382);
const utils = __webpack_require__(225);

const append = (queue = '', stash = '', enclose = false) => {
  let result = [];

  queue = [].concat(queue);
  stash = [].concat(stash);

  if (!stash.length) return queue;
  if (!queue.length) {
    return enclose ? utils.flatten(stash).map(ele => `{${ele}}`) : stash;
  }

  for (let item of queue) {
    if (Array.isArray(item)) {
      for (let value of item) {
        result.push(append(value, stash, enclose));
      }
    } else {
      for (let ele of stash) {
        if (enclose === true && typeof ele === 'string') ele = `{${ele}}`;
        result.push(Array.isArray(ele) ? append(item, ele, enclose) : (item + ele));
      }
    }
  }
  return utils.flatten(result);
};

const expand = (ast, options = {}) => {
  let rangeLimit = options.rangeLimit === void 0 ? 1000 : options.rangeLimit;

  let walk = (node, parent = {}) => {
    node.queue = [];

    let p = parent;
    let q = parent.queue;

    while (p.type !== 'brace' && p.type !== 'root' && p.parent) {
      p = p.parent;
      q = p.queue;
    }

    if (node.invalid || node.dollar) {
      q.push(append(q.pop(), stringify(node, options)));
      return;
    }

    if (node.type === 'brace' && node.invalid !== true && node.nodes.length === 2) {
      q.push(append(q.pop(), ['{}']));
      return;
    }

    if (node.nodes && node.ranges > 0) {
      let args = utils.reduce(node.nodes);

      if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
        throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
      }

      let range = fill(...args, options);
      if (range.length === 0) {
        range = stringify(node, options);
      }

      q.push(append(q.pop(), range));
      node.nodes = [];
      return;
    }

    let enclose = utils.encloseBrace(node);
    let queue = node.queue;
    let block = node;

    while (block.type !== 'brace' && block.type !== 'root' && block.parent) {
      block = block.parent;
      queue = block.queue;
    }

    for (let i = 0; i < node.nodes.length; i++) {
      let child = node.nodes[i];

      if (child.type === 'comma' && node.type === 'brace') {
        if (i === 1) queue.push('');
        queue.push('');
        continue;
      }

      if (child.type === 'close') {
        q.push(append(q.pop(), queue, enclose));
        continue;
      }

      if (child.value && child.type !== 'open') {
        queue.push(append(queue.pop(), child.value));
        continue;
      }

      if (child.nodes) {
        walk(child, node);
      }
    }

    return queue;
  };

  return utils.flatten(walk(ast));
};

module.exports = expand;


/***/ }),

/***/ 494:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assertion = void 0;
const rbac = __webpack_require__(259);
const log_1 = __webpack_require__(811);
const model_1 = __webpack_require__(721);
// Assertion represents an expression in a section of the model.
// For example: r = sub, obj, act
class Assertion {
    /**
     * constructor is the constructor for Assertion.
     */
    constructor() {
        this.key = '';
        this.value = '';
        this.tokens = [];
        this.policy = [];
        this.rm = new rbac.DefaultRoleManager(10);
    }
    buildIncrementalRoleLinks(rm, op, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rm = rm;
            const count = (this.value.match(/_/g) || []).length;
            if (count < 2) {
                throw new Error('the number of "_" in role definition should be at least 2');
            }
            for (let rule of rules) {
                if (rule.length < count) {
                    throw new Error('grouping policy elements do not meet role definition');
                }
                if (rule.length > count) {
                    rule = rule.slice(0, count);
                }
                switch (op) {
                    case model_1.PolicyOp.PolicyAdd:
                        yield this.rm.addLink(rule[0], rule[1], ...rule.slice(2));
                        break;
                    case model_1.PolicyOp.PolicyRemove:
                        yield this.rm.deleteLink(rule[0], rule[1], ...rule.slice(2));
                        break;
                    default:
                        throw new Error('unsupported operation');
                }
            }
        });
    }
    buildRoleLinks(rm) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rm = rm;
            const count = (this.value.match(/_/g) || []).length;
            if (count < 2) {
                throw new Error('the number of "_" in role definition should be at least 2');
            }
            for (let rule of this.policy) {
                if (rule.length > count) {
                    rule = rule.slice(0, count);
                }
                yield this.rm.addLink(rule[0], rule[1], ...rule.slice(2));
            }
            log_1.logPrint(`Role links for: ${this.key}`);
            yield this.rm.printRoles();
        });
    }
}
exports.Assertion = Assertion;


/***/ }),

/***/ 499:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const fs_1 = __webpack_require__(747);
class Config {
    constructor() {
        this.data = new Map();
    }
    /**
     * newConfig create an empty configuration representation from file.
     *
     * @param confName the path of the model file.
     * @return the constructor of Config.
     */
    static newConfig(confName) {
        const config = new Config();
        config.parse(confName);
        return config;
    }
    /**
     * newConfigFromText create an empty configuration representation from text.
     *
     * @param text the model text.
     * @return the constructor of Config.
     */
    static newConfigFromText(text) {
        const config = new Config();
        config.parseBuffer(Buffer.from(text));
        return config;
    }
    /**
     * addConfig adds a new section->key:value to the configuration.
     */
    addConfig(section, option, value) {
        if (section === '') {
            section = Config.DEFAULT_SECTION;
        }
        const hasKey = this.data.has(section);
        if (!hasKey) {
            this.data.set(section, new Map());
        }
        const item = this.data.get(section);
        if (item) {
            item.set(option, value);
            return item.has(option);
        }
        else {
            return false;
        }
    }
    parse(path) {
        const buf = fs_1.readFileSync(path);
        this.parseBuffer(buf);
    }
    parseBuffer(buf) {
        const lines = buf.toString().split('\n');
        const linesCount = lines.length;
        let section = '';
        let currentLine = '';
        lines.forEach((n, index) => {
            let commentPos = n.indexOf(Config.DEFAULT_COMMENT);
            if (commentPos > -1) {
                n = n.slice(0, commentPos);
            }
            commentPos = n.indexOf(Config.DEFAULT_COMMENT_SEM);
            if (commentPos > -1) {
                n = n.slice(0, commentPos);
            }
            const line = n.trim();
            if (!line) {
                return;
            }
            const lineNumber = index + 1;
            if (line.startsWith('[') && line.endsWith(']')) {
                if (currentLine.length !== 0) {
                    this.write(section, lineNumber - 1, currentLine);
                    currentLine = '';
                }
                section = line.substring(1, line.length - 1);
            }
            else {
                let shouldWrite = false;
                if (line.includes(Config.DEFAULT_MULTI_LINE_SEPARATOR)) {
                    currentLine += line.substring(0, line.length - 1).trim();
                    // when the last line has a "\" string
                    if (lineNumber + 1 === linesCount) {
                        shouldWrite = true;
                    }
                }
                else {
                    currentLine += line;
                    shouldWrite = true;
                }
                if (shouldWrite) {
                    this.write(section, lineNumber, currentLine);
                    currentLine = '';
                }
            }
        });
    }
    write(section, lineNum, line) {
        const equalIndex = line.indexOf('=');
        if (equalIndex === -1) {
            throw new Error(`parse the content error : line ${lineNum}`);
        }
        const key = line.substring(0, equalIndex);
        const value = line.substring(equalIndex + 1);
        this.addConfig(section, key.trim(), value.trim());
    }
    getBool(key) {
        return !!this.get(key);
    }
    getInt(key) {
        return Number.parseInt(this.get(key), 10);
    }
    getFloat(key) {
        return Number.parseFloat(this.get(key));
    }
    getString(key) {
        return this.get(key);
    }
    getStrings(key) {
        const v = this.get(key);
        return v.split(',');
    }
    set(key, value) {
        if (!key) {
            throw new Error('key is empty');
        }
        let section = '';
        let option;
        const keys = key.toLowerCase().split('::');
        if (keys.length >= 2) {
            section = keys[0];
            option = keys[1];
        }
        else {
            option = keys[0];
        }
        this.addConfig(section, option, value);
    }
    get(key) {
        let section;
        let option;
        const keys = key.toLowerCase().split('::');
        if (keys.length >= 2) {
            section = keys[0];
            option = keys[1];
        }
        else {
            section = Config.DEFAULT_SECTION;
            option = keys[0];
        }
        const item = this.data.get(section);
        const itemChild = item && item.get(option);
        return itemChild ? itemChild : '';
    }
}
exports.Config = Config;
Config.DEFAULT_SECTION = 'default';
Config.DEFAULT_COMMENT = '#';
Config.DEFAULT_COMMENT_SEM = ';';
Config.DEFAULT_MULTI_LINE_SEPARATOR = '\\';


/***/ }),

/***/ 518:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchFileAdapter = void 0;
const fileAdapter_1 = __webpack_require__(137);
/**
 * FileAdapter is the file adapter for Casbin.
 * It can load policy from file or save policy to file.
 */
class BatchFileAdapter extends fileAdapter_1.FileAdapter {
    /**
     * FileAdapter is the constructor for FileAdapter.
     * @param {string} filePath filePath the path of the policy file.
     */
    constructor(filePath) {
        super(filePath);
    }
    // addPolicies adds policy rules to the storage.
    // This is part of the Auto-Save feature.
    addPolicies(sec, ptype, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
    // removePolicies removes policy rules from the storage.
    // This is part of the Auto-Save feature.
    removePolicies(sec, ptype, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BatchFileAdapter = BatchFileAdapter;


/***/ }),

/***/ 537:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(265);
const {
  CHAR_ASTERISK,             /* * */
  CHAR_AT,                   /* @ */
  CHAR_BACKWARD_SLASH,       /* \ */
  CHAR_COMMA,                /* , */
  CHAR_DOT,                  /* . */
  CHAR_EXCLAMATION_MARK,     /* ! */
  CHAR_FORWARD_SLASH,        /* / */
  CHAR_LEFT_CURLY_BRACE,     /* { */
  CHAR_LEFT_PARENTHESES,     /* ( */
  CHAR_LEFT_SQUARE_BRACKET,  /* [ */
  CHAR_PLUS,                 /* + */
  CHAR_QUESTION_MARK,        /* ? */
  CHAR_RIGHT_CURLY_BRACE,    /* } */
  CHAR_RIGHT_PARENTHESES,    /* ) */
  CHAR_RIGHT_SQUARE_BRACKET  /* ] */
} = __webpack_require__(199);

const isPathSeparator = code => {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};

const depth = token => {
  if (token.isPrefix !== true) {
    token.depth = token.isGlobstar ? Infinity : 1;
  }
};

/**
 * Quickly scans a glob pattern and returns an object with a handful of
 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
 * `glob` (the actual pattern), and `negated` (true if the path starts with `!`).
 *
 * ```js
 * const pm = require('picomatch');
 * console.log(pm.scan('foo/bar/*.js'));
 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an object with tokens and regex source string.
 * @api public
 */

const scan = (input, options) => {
  const opts = options || {};

  const length = input.length - 1;
  const scanToEnd = opts.parts === true || opts.scanToEnd === true;
  const slashes = [];
  const tokens = [];
  const parts = [];

  let str = input;
  let index = -1;
  let start = 0;
  let lastIndex = 0;
  let isBrace = false;
  let isBracket = false;
  let isGlob = false;
  let isExtglob = false;
  let isGlobstar = false;
  let braceEscaped = false;
  let backslashes = false;
  let negated = false;
  let finished = false;
  let braces = 0;
  let prev;
  let code;
  let token = { value: '', depth: 0, isGlob: false };

  const eos = () => index >= length;
  const peek = () => str.charCodeAt(index + 1);
  const advance = () => {
    prev = code;
    return str.charCodeAt(++index);
  };

  while (index < length) {
    code = advance();
    let next;

    if (code === CHAR_BACKWARD_SLASH) {
      backslashes = token.backslashes = true;
      code = advance();

      if (code === CHAR_LEFT_CURLY_BRACE) {
        braceEscaped = true;
      }
      continue;
    }

    if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
      braces++;

      while (eos() !== true && (code = advance())) {
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }

        if (code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          continue;
        }

        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
          isBrace = token.isBrace = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }

          break;
        }

        if (braceEscaped !== true && code === CHAR_COMMA) {
          isBrace = token.isBrace = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }

          break;
        }

        if (code === CHAR_RIGHT_CURLY_BRACE) {
          braces--;

          if (braces === 0) {
            braceEscaped = false;
            isBrace = token.isBrace = true;
            finished = true;
            break;
          }
        }
      }

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (code === CHAR_FORWARD_SLASH) {
      slashes.push(index);
      tokens.push(token);
      token = { value: '', depth: 0, isGlob: false };

      if (finished === true) continue;
      if (prev === CHAR_DOT && index === (start + 1)) {
        start += 2;
        continue;
      }

      lastIndex = index + 1;
      continue;
    }

    if (opts.noext !== true) {
      const isExtglobChar = code === CHAR_PLUS
        || code === CHAR_AT
        || code === CHAR_ASTERISK
        || code === CHAR_QUESTION_MARK
        || code === CHAR_EXCLAMATION_MARK;

      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
        isGlob = token.isGlob = true;
        isExtglob = token.isExtglob = true;
        finished = true;

        if (scanToEnd === true) {
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              code = advance();
              continue;
            }

            if (code === CHAR_RIGHT_PARENTHESES) {
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          continue;
        }
        break;
      }
    }

    if (code === CHAR_ASTERISK) {
      if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
      isGlob = token.isGlob = true;
      finished = true;

      if (scanToEnd === true) {
        continue;
      }
      break;
    }

    if (code === CHAR_QUESTION_MARK) {
      isGlob = token.isGlob = true;
      finished = true;

      if (scanToEnd === true) {
        continue;
      }
      break;
    }

    if (code === CHAR_LEFT_SQUARE_BRACKET) {
      while (eos() !== true && (next = advance())) {
        if (next === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }

        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
          isBracket = token.isBracket = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
    }

    if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
      negated = token.negated = true;
      start++;
      continue;
    }

    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
      isGlob = token.isGlob = true;

      if (scanToEnd === true) {
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_LEFT_PARENTHESES) {
            backslashes = token.backslashes = true;
            code = advance();
            continue;
          }

          if (code === CHAR_RIGHT_PARENTHESES) {
            finished = true;
            break;
          }
        }
        continue;
      }
      break;
    }

    if (isGlob === true) {
      finished = true;

      if (scanToEnd === true) {
        continue;
      }

      break;
    }
  }

  if (opts.noext === true) {
    isExtglob = false;
    isGlob = false;
  }

  let base = str;
  let prefix = '';
  let glob = '';

  if (start > 0) {
    prefix = str.slice(0, start);
    str = str.slice(start);
    lastIndex -= start;
  }

  if (base && isGlob === true && lastIndex > 0) {
    base = str.slice(0, lastIndex);
    glob = str.slice(lastIndex);
  } else if (isGlob === true) {
    base = '';
    glob = str;
  } else {
    base = str;
  }

  if (base && base !== '' && base !== '/' && base !== str) {
    if (isPathSeparator(base.charCodeAt(base.length - 1))) {
      base = base.slice(0, -1);
    }
  }

  if (opts.unescape === true) {
    if (glob) glob = utils.removeBackslashes(glob);

    if (base && backslashes === true) {
      base = utils.removeBackslashes(base);
    }
  }

  const state = {
    prefix,
    input,
    start,
    base,
    glob,
    isBrace,
    isBracket,
    isGlob,
    isExtglob,
    isGlobstar,
    negated
  };

  if (opts.tokens === true) {
    state.maxDepth = 0;
    if (!isPathSeparator(code)) {
      tokens.push(token);
    }
    state.tokens = tokens;
  }

  if (opts.parts === true || opts.tokens === true) {
    let prevIndex;

    for (let idx = 0; idx < slashes.length; idx++) {
      const n = prevIndex ? prevIndex + 1 : start;
      const i = slashes[idx];
      const value = input.slice(n, i);
      if (opts.tokens) {
        if (idx === 0 && start !== 0) {
          tokens[idx].isPrefix = true;
          tokens[idx].value = prefix;
        } else {
          tokens[idx].value = value;
        }
        depth(tokens[idx]);
        state.maxDepth += tokens[idx].depth;
      }
      if (idx !== 0 || value !== '') {
        parts.push(value);
      }
      prevIndex = i;
    }

    if (prevIndex && prevIndex + 1 < input.length) {
      const value = input.slice(prevIndex + 1);
      parts.push(value);

      if (opts.tokens) {
        tokens[tokens.length - 1].value = value;
        depth(tokens[tokens.length - 1]);
        state.maxDepth += tokens[tokens.length - 1].depth;
      }
    }

    state.slashes = slashes;
    state.parts = parts;
  }

  return state;
};

module.exports = scan;


/***/ }),

/***/ 538:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(377), exports);
__exportStar(__webpack_require__(213), exports);
__exportStar(__webpack_require__(266), exports);
__exportStar(__webpack_require__(71), exports);


/***/ }),

/***/ 571:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreEnforcer = void 0;
const expression_eval_1 = __webpack_require__(621);
const effect_1 = __webpack_require__(538);
const model_1 = __webpack_require__(374);
const rbac_1 = __webpack_require__(259);
const util_1 = __webpack_require__(703);
const log_1 = __webpack_require__(811);
/**
 * CoreEnforcer defines the core functionality of an enforcer.
 */
class CoreEnforcer {
    constructor() {
        this.fm = model_1.FunctionMap.loadFunctionMap();
        this.eft = new effect_1.DefaultEffector();
        this.matcherMap = new Map();
        this.watcher = null;
        this.rm = new rbac_1.DefaultRoleManager(10);
        this.enabled = true;
        this.autoSave = true;
        this.autoBuildRoleLinks = true;
        this.autoNotifyWatcher = true;
    }
    getExpression(asyncCompile, exp) {
        const matcherKey = `${asyncCompile ? 'ASYNC[' : 'SYNC['}${exp}]`;
        let expression = this.matcherMap.get(matcherKey);
        if (!expression) {
            expression = asyncCompile ? expression_eval_1.compileAsync(exp) : expression_eval_1.compile(exp);
            this.matcherMap.set(matcherKey, expression);
        }
        return expression;
    }
    /**
     * loadModel reloads the model from the model CONF file.
     * Because the policy is attached to a model,
     * so the policy is invalidated and needs to be reloaded by calling LoadPolicy().
     */
    loadModel() {
        this.model = model_1.newModel();
        this.model.loadModel(this.modelPath);
        this.model.printModel();
    }
    /**
     * getModel gets the current model.
     *
     * @return the model of the enforcer.
     */
    getModel() {
        return this.model;
    }
    /**
     * setModel sets the current model.
     *
     * @param m the model.
     */
    setModel(m) {
        this.model = m;
    }
    /**
     * getAdapter gets the current adapter.
     *
     * @return the adapter of the enforcer.
     */
    getAdapter() {
        return this.adapter;
    }
    /**
     * setAdapter sets the current adapter.
     *
     * @param adapter the adapter.
     */
    setAdapter(adapter) {
        this.adapter = adapter;
    }
    /**
     * setWatcher sets the current watcher.
     *
     * @param watcher the watcher.
     */
    setWatcher(watcher) {
        this.watcher = watcher;
        watcher.setUpdateCallback(() => __awaiter(this, void 0, void 0, function* () { return yield this.loadPolicy(); }));
    }
    /**
     * setRoleManager sets the current role manager.
     *
     * @param rm the role manager.
     */
    setRoleManager(rm) {
        this.rm = rm;
    }
    /**
     * getRoleManager gets the current role manager.
     */
    getRoleManager() {
        return this.rm;
    }
    /**
     * setEffector sets the current effector.
     *
     * @param eft the effector.
     */
    setEffector(eft) {
        this.eft = eft;
    }
    /**
     * clearPolicy clears all policy.
     */
    clearPolicy() {
        this.model.clearPolicy();
    }
    /**
     * loadPolicy reloads the policy from file/database.
     */
    loadPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            this.model.clearPolicy();
            yield this.adapter.loadPolicy(this.model);
            this.model.printPolicy();
            if (this.autoBuildRoleLinks) {
                yield this.buildRoleLinksInternal();
            }
        });
    }
    /**
     * loadFilteredPolicy reloads a filtered policy from file/database.
     *
     * @param filter the filter used to specify which type of policy should be loaded.
     */
    loadFilteredPolicy(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            this.model.clearPolicy();
            if ('isFiltered' in this.adapter) {
                yield this.adapter.loadFilteredPolicy(this.model, filter);
            }
            else {
                throw new Error('filtered policies are not supported by this adapter');
            }
            this.model.printPolicy();
            if (this.autoBuildRoleLinks) {
                yield this.buildRoleLinksInternal();
            }
            return true;
        });
    }
    /**
     * isFiltered returns true if the loaded policy has been filtered.
     *
     * @return if the loaded policy has been filtered.
     */
    isFiltered() {
        if ('isFiltered' in this.adapter) {
            return this.adapter.isFiltered();
        }
        return false;
    }
    /**
     * savePolicy saves the current policy (usually after changed with
     * Casbin API) back to file/database.
     */
    savePolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isFiltered()) {
                throw new Error('Cannot save a filtered policy');
            }
            const flag = yield this.adapter.savePolicy(this.model);
            if (!flag) {
                return false;
            }
            if (this.watcher) {
                return yield this.watcher.update();
            }
            return true;
        });
    }
    /**
     * enableEnforce changes the enforcing state of Casbin, when Casbin is
     * disabled, all access will be allowed by the enforce() function.
     *
     * @param enable whether to enable the enforcer.
     */
    enableEnforce(enable) {
        this.enabled = enable;
    }
    /**
     * enableLog changes whether to print Casbin log to the standard output.
     *
     * @param enable whether to enable Casbin's log.
     */
    enableLog(enable) {
        log_1.getLogger().enableLog(enable);
    }
    /**
     * enableAutoSave controls whether to save a policy rule automatically to
     * the adapter when it is added or removed.
     *
     * @param autoSave whether to enable the AutoSave feature.
     */
    enableAutoSave(autoSave) {
        this.autoSave = autoSave;
    }
    /**
     * enableAutoNotifyWatcher controls whether to save a policy rule automatically notify the Watcher when it is added or removed.
     * @param enable whether to enable the AutoNotifyWatcher feature.
     */
    enableAutoNotifyWatcher(enable) {
        this.autoNotifyWatcher = enable;
    }
    /**
     * enableAutoBuildRoleLinks controls whether to save a policy rule
     * automatically to the adapter when it is added or removed.
     *
     * @param autoBuildRoleLinks whether to automatically build the role links.
     */
    enableAutoBuildRoleLinks(autoBuildRoleLinks) {
        this.autoBuildRoleLinks = autoBuildRoleLinks;
    }
    /**
     * buildRoleLinks manually rebuild the role inheritance relations.
     */
    buildRoleLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.buildRoleLinksInternal();
        });
    }
    /**
     * buildIncrementalRoleLinks provides incremental build the role inheritance relations.
     * @param op policy operation
     * @param ptype g
     * @param rules policies
     */
    buildIncrementalRoleLinks(op, ptype, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.buildIncrementalRoleLinks(this.rm, op, 'g', ptype, rules);
        });
    }
    buildRoleLinksInternal() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.rm.clear();
            yield this.model.buildRoleLinks(this.rm);
        });
    }
    privateEnforce(asyncCompile = true, ...rvals) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return true;
            }
            const functions = {};
            this.fm.getFunctions().forEach((value, key) => {
                functions[key] = value;
            });
            const astMap = this.model.model.get('g');
            astMap === null || astMap === void 0 ? void 0 : astMap.forEach((value, key) => {
                const rm = value.rm;
                functions[key] = util_1.generateGFunction(rm);
            });
            const expString = (_b = (_a = this.model.model.get('m')) === null || _a === void 0 ? void 0 : _a.get('m')) === null || _b === void 0 ? void 0 : _b.value;
            if (!expString) {
                throw new Error('Unable to find matchers in model');
            }
            const effectExpr = (_d = (_c = this.model.model.get('e')) === null || _c === void 0 ? void 0 : _c.get('e')) === null || _d === void 0 ? void 0 : _d.value;
            if (!effectExpr) {
                throw new Error('Unable to find policy_effect in model');
            }
            const HasEval = util_1.hasEval(expString);
            let expression;
            if (!HasEval) {
                expression = this.getExpression(asyncCompile, expString);
            }
            const p = (_e = this.model.model.get('p')) === null || _e === void 0 ? void 0 : _e.get('p');
            const policyLen = (_f = p === null || p === void 0 ? void 0 : p.policy) === null || _f === void 0 ? void 0 : _f.length;
            const rTokens = (_h = (_g = this.model.model.get('r')) === null || _g === void 0 ? void 0 : _g.get('r')) === null || _h === void 0 ? void 0 : _h.tokens;
            const rTokensLen = rTokens === null || rTokens === void 0 ? void 0 : rTokens.length;
            const effectStream = this.eft.newStream(effectExpr);
            if (policyLen && policyLen !== 0) {
                for (let i = 0; i < policyLen; i++) {
                    const parameters = {};
                    if ((rTokens === null || rTokens === void 0 ? void 0 : rTokens.length) !== rvals.length) {
                        throw new Error(`invalid request size: expected ${rTokensLen}, got ${rvals.length}, rvals: ${rvals}"`);
                    }
                    rTokens.forEach((token, j) => {
                        parameters[token] = rvals[j];
                    });
                    p === null || p === void 0 ? void 0 : p.tokens.forEach((token, j) => {
                        parameters[token] = p === null || p === void 0 ? void 0 : p.policy[i][j];
                    });
                    if (HasEval) {
                        const ruleNames = util_1.getEvalValue(expString);
                        let expWithRule = expString;
                        for (const ruleName of ruleNames) {
                            if (ruleName in parameters) {
                                const rule = util_1.escapeAssertion(parameters[ruleName]);
                                expWithRule = util_1.replaceEval(expWithRule, rule);
                            }
                            else {
                                return false;
                            }
                            expression = this.getExpression(asyncCompile, expWithRule);
                        }
                    }
                    let result;
                    if (expression != undefined) {
                        const context = Object.assign(Object.assign({}, parameters), functions);
                        result = asyncCompile ? yield expression(context) : expression(context);
                    }
                    let eftRes;
                    switch (typeof result) {
                        case 'boolean':
                            eftRes = result ? effect_1.Effect.Allow : effect_1.Effect.Indeterminate;
                            break;
                        case 'number':
                            if (result === 0) {
                                eftRes = effect_1.Effect.Indeterminate;
                            }
                            else {
                                eftRes = result;
                            }
                            break;
                        default:
                            throw new Error('matcher result should be boolean or number');
                    }
                    const eft = parameters['p_eft'];
                    if (eft && eftRes === effect_1.Effect.Allow) {
                        if (eft === 'allow') {
                            eftRes = effect_1.Effect.Allow;
                        }
                        else if (eft === 'deny') {
                            eftRes = effect_1.Effect.Deny;
                        }
                        else {
                            eftRes = effect_1.Effect.Indeterminate;
                        }
                    }
                    const [res, done] = effectStream.pushEffect(eftRes);
                    if (done) {
                        break;
                    }
                }
            }
            else {
                const parameters = {};
                rTokens === null || rTokens === void 0 ? void 0 : rTokens.forEach((token, j) => {
                    parameters[token] = rvals[j];
                });
                (_j = p === null || p === void 0 ? void 0 : p.tokens) === null || _j === void 0 ? void 0 : _j.forEach(token => {
                    parameters[token] = '';
                });
                let result = false;
                if (expression != undefined) {
                    const context = Object.assign(Object.assign({}, parameters), functions);
                    result = asyncCompile ? yield expression(context) : expression(context);
                }
                if (result) {
                    effectStream.pushEffect(effect_1.Effect.Allow);
                }
                else {
                    effectStream.pushEffect(effect_1.Effect.Indeterminate);
                }
            }
            const res = effectStream.current();
            // only generate the request --> result string if the message
            // is going to be logged.
            if (log_1.getLogger().isEnable()) {
                let reqStr = 'Request: ';
                for (let i = 0; i < rvals.length; i++) {
                    if (i !== rvals.length - 1) {
                        reqStr += `${rvals[i]}, `;
                    }
                    else {
                        reqStr += rvals[i];
                    }
                }
                reqStr += ` ---> ${res}`;
                log_1.logPrint(reqStr);
            }
            return res;
        });
    }
    /**
     * If the matchers does not contain an asynchronous method, call it faster.
     *
     * enforceWithSyncCompile decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request.
     */
    enforceWithSyncCompile(...rvals) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.privateEnforce(false, ...rvals);
        });
    }
    /**
     * enforce decides whether a "subject" can access a "object" with
     * the operation "action", input parameters are usually: (sub, obj, act).
     *
     * @param rvals the request needs to be mediated, usually an array
     *              of strings, can be class instances if ABAC is used.
     * @return whether to allow the request.
     */
    enforce(...rvals) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.privateEnforce(true, ...rvals);
        });
    }
}
exports.CoreEnforcer = CoreEnforcer;


/***/ }),

/***/ 576:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 621:
/***/ (function(module, __unusedexports, __webpack_require__) {

const jsep = __webpack_require__(14);

/**
 * Evaluation code from JSEP project, under MIT License.
 * Copyright (c) 2013 Stephen Oney, http://jsep.from.so/
 */

const binops = {
  '||':  function (a, b) { return a || b; },
  '&&':  function (a, b) { return a && b; },
  '|':   function (a, b) { return a | b; },
  '^':   function (a, b) { return a ^ b; },
  '&':   function (a, b) { return a & b; },
  '==':  function (a, b) { return a == b; }, // jshint ignore:line
  '!=':  function (a, b) { return a != b; }, // jshint ignore:line
  '===': function (a, b) { return a === b; },
  '!==': function (a, b) { return a !== b; },
  '<':   function (a, b) { return a < b; },
  '>':   function (a, b) { return a > b; },
  '<=':  function (a, b) { return a <= b; },
  '>=':  function (a, b) { return a >= b; },
  '<<':  function (a, b) { return a << b; },
  '>>':  function (a, b) { return a >> b; },
  '>>>': function (a, b) { return a >>> b; },
  '+':   function (a, b) { return a + b; },
  '-':   function (a, b) { return a - b; },
  '*':   function (a, b) { return a * b; },
  '/':   function (a, b) { return a / b; },
  '%':   function (a, b) { return a % b; }
};

const unops = {
  '-' :  function (a) { return -a; },
  '+' :  function (a) { return +a; },
  '~' :  function (a) { return ~a; },
  '!' :  function (a) { return !a; },
};

function evaluateArray ( list, context ) {
  return list.map(function (v) { return evaluate(v, context); });
}

async function evaluateArrayAsync( list, context ) {
  const res = await Promise.all(list.map((v) => evaluateAsync(v, context)));
  return res;
}

function evaluateMember ( node, context ) {
  const object = evaluate(node.object, context);
  if ( node.computed ) {
    return [object, object[evaluate(node.property, context)]];
  } else {
    return [object, object[node.property.name]];
  }
}

async function evaluateMemberAsync( node, context ) {
  const object = await evaluateAsync(node.object, context);
  if (  node.computed) {
    return [object, object[await evaluateAsync(node.property, context)]];
  } else {
    return [object, object[node.property.name]];
  }
}

function evaluate ( node, context ) {

  switch ( node.type ) {

    case 'ArrayExpression':
      return evaluateArray( node.elements, context );

    case 'BinaryExpression':
      return binops[ node.operator ]( evaluate( node.left, context ), evaluate( node.right, context ) );

    case 'CallExpression':
      let caller, fn, assign;
      if (node.callee.type === 'MemberExpression') {
        assign = evaluateMember( node.callee, context );
        caller = assign[0];
        fn = assign[1];
      } else {
        fn = evaluate( node.callee, context );
      }
      if (typeof fn  !== 'function') { return undefined; }
      return fn.apply( caller, evaluateArray( node.arguments, context ) );

    case 'ConditionalExpression':
      return evaluate( node.test, context )
        ? evaluate( node.consequent, context )
        : evaluate( node.alternate, context );

    case 'Identifier':
      return context[node.name];

    case 'Literal':
      return node.value;

    case 'LogicalExpression':
      if (node.operator === '||') {
        return evaluate( node.left, context ) || evaluate( node.right, context );
      } else if (node.operator === '&&') {
        return evaluate( node.left, context ) && evaluate( node.right, context );
      }
      return binops[ node.operator ]( evaluate( node.left, context ), evaluate( node.right, context ) );

    case 'MemberExpression':
      return evaluateMember(node, context)[1];

    case 'ThisExpression':
      return context;

    case 'UnaryExpression':
      return unops[ node.operator ]( evaluate( node.argument, context ) );

    default:
      return undefined;
  }

}

async function evaluateAsync( node, context ) {

  switch ( node.type ) {

    case 'ArrayExpression':
      return await evaluateArrayAsync( node.elements, context );

    case 'BinaryExpression': {
      const [left, right] = await Promise.all([
        evaluateAsync( node.left, context ),
        evaluateAsync( node.right, context )
      ]);
      return binops[ node.operator ]( left, right );
    }

    case 'CallExpression':
      let caller, fn, assign;
      if (node.callee.type === 'MemberExpression') {
        assign = await evaluateMemberAsync( node.callee, context );
        caller = assign[0];
        fn = assign[1];
      } else {
        fn = await evaluateAsync( node.callee, context );
      }
      if (typeof fn !== 'function') {
        return undefined;
      }
      return await fn.apply(
        caller,
        await evaluateArrayAsync( node.arguments, context )
      );

    case 'ConditionalExpression':
      return (await evaluateAsync( node.test, context ))
        ? await evaluateAsync( node.consequent, context )
        : await evaluateAsync( node.alternate, context );

    case 'Identifier':
      return context[node.name];

    case 'Literal':
      return node.value;

    case 'LogicalExpression': {
      if (node.operator === '||') {
        return (
          (await evaluateAsync( node.left, context )) ||
          (await evaluateAsync( node.right, context ))
        );
      } else if (node.operator === '&&') {
        return (
          (await evaluateAsync( node.left, context )) &&
          (await evaluateAsync( node.right, context ))
        );
      }

      const [left, right] = await Promise.all([
        evaluateAsync( node.left, context ),
        evaluateAsync( node.right, context )
      ]);

      return binops[ node.operator ]( left, right );
    }

    case 'MemberExpression':
      return (await evaluateMemberAsync(node, context))[1];

    case 'ThisExpression':
      return context;

    case 'UnaryExpression':
      return unops[ node.operator ](await evaluateAsync( node.argument, context ));

    default:
      return undefined;
  }
}

function compile (expression) {
  return evaluate.bind(null, jsep(expression));
}

function compileAsync(expression) {
  return evaluateAsync.bind(null, jsep(expression));
}

module.exports = {
  parse: jsep,
  eval: evaluate,
  evalAsync: evaluateAsync,
  compile: compile,
  compileAsync: compileAsync
};


/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 633:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvalValue = exports.replaceEval = exports.hasEval = exports.writeFile = exports.readFile = exports.setEquals = exports.paramsToString = exports.arrayToString = exports.arrayRemoveDuplicates = exports.array2DEquals = exports.arrayEquals = exports.removeComments = exports.escapeAssertion = void 0;
const fs = __webpack_require__(747);
// escapeAssertion escapes the dots in the assertion,
// because the expression evaluation doesn't support such variable names.
function escapeAssertion(s) {
    s = s.replace(/r\./g, 'r_');
    s = s.replace(/p\./g, 'p_');
    return s;
}
exports.escapeAssertion = escapeAssertion;
// removeComments removes the comments starting with # in the text.
function removeComments(s) {
    const pos = s.indexOf('#');
    return pos > -1 ? s.slice(0, pos).trim() : s;
}
exports.removeComments = removeComments;
// arrayEquals determines whether two string arrays are identical.
function arrayEquals(a = [], b = []) {
    const aLen = a.length;
    const bLen = b.length;
    if (aLen !== bLen) {
        return false;
    }
    for (let i = 0; i < aLen; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;
}
exports.arrayEquals = arrayEquals;
// array2DEquals determines whether two 2-dimensional string arrays are identical.
function array2DEquals(a = [], b = []) {
    const aLen = a.length;
    const bLen = a.length;
    if (aLen != bLen) {
        return false;
    }
    for (let i = 0; i < aLen; i++) {
        if (!arrayEquals(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
exports.array2DEquals = array2DEquals;
// arrayRemoveDuplicates removes any duplicated elements in a string array.
function arrayRemoveDuplicates(s) {
    return [...new Set(s)];
}
exports.arrayRemoveDuplicates = arrayRemoveDuplicates;
// arrayToString gets a printable string for a string array.
function arrayToString(a) {
    return a.join(', ');
}
exports.arrayToString = arrayToString;
// paramsToString gets a printable string for variable number of parameters.
function paramsToString(...v) {
    return v.join(', ');
}
exports.paramsToString = paramsToString;
// setEquals determines whether two string sets are identical.
function setEquals(a, b) {
    return arrayEquals(a.sort(), b.sort());
}
exports.setEquals = setEquals;
// readFile return a promise for readFile.
function readFile(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding || 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }
            resolve(data);
        });
    });
}
exports.readFile = readFile;
// writeFile return a promise for writeFile.
function writeFile(path, file, encoding) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, file, encoding || 'utf8', error => {
            if (error) {
                reject(error);
            }
            resolve(true);
        });
    });
}
exports.writeFile = writeFile;
const evalReg = new RegExp(/\beval\(([^),]*)\)/g);
// hasEval determine whether matcher contains function eval
function hasEval(s) {
    return evalReg.test(s);
}
exports.hasEval = hasEval;
// replaceEval replace function eval with the value of its parameters
function replaceEval(s, rule) {
    return s.replace(evalReg, '(' + rule + ')');
}
exports.replaceEval = replaceEval;
// getEvalValue returns the parameters of function eval
function getEvalValue(s) {
    const subMatch = s.match(evalReg);
    const rules = [];
    if (!subMatch) {
        return [];
    }
    for (const rule of subMatch) {
        const index = rule.indexOf('(');
        rules.push(rule.slice(index + 1, -1));
    }
    return rules;
}
exports.getEvalValue = getEvalValue;


/***/ }),

/***/ 642:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newEnforcer = exports.newEnforcerWithClass = exports.Enforcer = void 0;
const managementEnforcer_1 = __webpack_require__(791);
const model_1 = __webpack_require__(374);
const persist_1 = __webpack_require__(283);
const log_1 = __webpack_require__(811);
const util_1 = __webpack_require__(703);
/**
 * Enforcer = ManagementEnforcer + RBAC API.
 */
class Enforcer extends managementEnforcer_1.ManagementEnforcer {
    /**
     * initWithFile initializes an enforcer with a model file and a policy file.
     * @param modelPath model file path
     * @param policyPath policy file path
     */
    initWithFile(modelPath, policyPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = new persist_1.FileAdapter(policyPath);
            yield this.initWithAdapter(modelPath, a);
        });
    }
    /**
     * initWithFile initializes an enforcer with a model file and a policy file.
     * @param modelPath model file path
     * @param policyString policy CSV string
     */
    initWithString(modelPath, policyString) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = new persist_1.StringAdapter(policyString);
            yield this.initWithAdapter(modelPath, a);
        });
    }
    /**
     * initWithAdapter initializes an enforcer with a database adapter.
     * @param modelPath model file path
     * @param adapter current adapter instance
     */
    initWithAdapter(modelPath, adapter) {
        return __awaiter(this, void 0, void 0, function* () {
            const m = model_1.newModel(modelPath, '');
            yield this.initWithModelAndAdapter(m, adapter);
            this.modelPath = modelPath;
        });
    }
    /**
     * initWithModelAndAdapter initializes an enforcer with a model and a database adapter.
     * @param m model instance
     * @param adapter current adapter instance
     */
    initWithModelAndAdapter(m, adapter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (adapter) {
                this.adapter = adapter;
            }
            this.model = m;
            this.model.printModel();
            if (this.adapter) {
                yield this.loadPolicy();
            }
        });
    }
    /**
     * getRolesForUser gets the roles that a user has.
     *
     * @param name the user.
     * @param domain the domain.
     * @return the roles that the user has.
     */
    getRolesForUser(name, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain == null) {
                return this.rm.getRoles(name);
            }
            else {
                return this.rm.getRoles(name, domain);
            }
        });
    }
    /**
     * getUsersForRole gets the users that has a role.
     *
     * @param name the role.
     * @param domain the domain.
     * @return the users that has the role.
     */
    getUsersForRole(name, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain == null) {
                return this.rm.getUsers(name);
            }
            else {
                return this.rm.getUsers(name, domain);
            }
        });
    }
    /**
     * hasRoleForUser determines whether a user has a role.
     *
     * @param name the user.
     * @param role the role.
     * @param domain the domain.
     * @return whether the user has the role.
     */
    hasRoleForUser(name, role, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield this.getRolesForUser(name, domain);
            let hasRole = false;
            for (const r of roles) {
                if (r === role) {
                    hasRole = true;
                    break;
                }
            }
            return hasRole;
        });
    }
    /**
     * addRoleForUser adds a role for a user.
     * Returns false if the user already has the role (aka not affected).
     *
     * @param user the user.
     * @param role the role.
     * @param domain the domain.
     * @return succeeds or not.
     */
    addRoleForUser(user, role, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain == null) {
                return this.addGroupingPolicy(user, role);
            }
            else {
                return this.addGroupingPolicy(user, role, domain);
            }
        });
    }
    /**
     * deleteRoleForUser deletes a role for a user.
     * Returns false if the user does not have the role (aka not affected).
     *
     * @param user the user.
     * @param role the role.
     * @param domain the domain.
     * @return succeeds or not.
     */
    deleteRoleForUser(user, role, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain == null) {
                return this.removeGroupingPolicy(user, role);
            }
            else {
                return this.removeGroupingPolicy(user, role, domain);
            }
        });
    }
    /**
     * deleteRolesForUser deletes all roles for a user.
     * Returns false if the user does not have any roles (aka not affected).
     *
     * @param user the user.
     * @param domain the domain.
     * @return succeeds or not.
     */
    deleteRolesForUser(user, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain == null) {
                return this.removeFilteredGroupingPolicy(0, user);
            }
            else {
                return this.removeFilteredGroupingPolicy(0, user, '', domain);
            }
        });
    }
    /**
     * deleteUser deletes a user.
     * Returns false if the user does not exist (aka not affected).
     *
     * @param user the user.
     * @return succeeds or not.
     */
    deleteUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const res1 = yield this.removeFilteredGroupingPolicy(0, user);
            const res2 = yield this.removeFilteredPolicy(0, user);
            return res1 || res2;
        });
    }
    /**
     * deleteRole deletes a role.
     * Returns false if the role does not exist (aka not affected).
     *
     * @param role the role.
     * @return succeeds or not.
     */
    deleteRole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            const res1 = yield this.removeFilteredGroupingPolicy(1, role);
            const res2 = yield this.removeFilteredPolicy(0, role);
            return res1 || res2;
        });
    }
    /**
     * deletePermission deletes a permission.
     * Returns false if the permission does not exist (aka not affected).
     *
     * @param permission the permission, usually be (obj, act). It is actually the rule without the subject.
     * @return succeeds or not.
     */
    deletePermission(...permission) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeFilteredPolicy(1, ...permission);
        });
    }
    /**
     * addPermissionForUser adds a permission for a user or role.
     * Returns false if the user or role already has the permission (aka not affected).
     *
     * @param user the user.
     * @param permission the permission, usually be (obj, act). It is actually the rule without the subject.
     * @return succeeds or not.
     */
    addPermissionForUser(user, ...permission) {
        return __awaiter(this, void 0, void 0, function* () {
            permission.unshift(user);
            return this.addPolicy(...permission);
        });
    }
    /**
     * deletePermissionForUser deletes a permission for a user or role.
     * Returns false if the user or role does not have the permission (aka not affected).
     *
     * @param user the user.
     * @param permission the permission, usually be (obj, act). It is actually the rule without the subject.
     * @return succeeds or not.
     */
    deletePermissionForUser(user, ...permission) {
        return __awaiter(this, void 0, void 0, function* () {
            permission.unshift(user);
            return this.removePolicy(...permission);
        });
    }
    /**
     * deletePermissionsForUser deletes permissions for a user or role.
     * Returns false if the user or role does not have any permissions (aka not affected).
     *
     * @param user the user.
     * @return succeeds or not.
     */
    deletePermissionsForUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeFilteredPolicy(0, user);
        });
    }
    /**
     * getPermissionsForUser gets permissions for a user or role.
     *
     * @param user the user.
     * @return the permissions, a permission is usually like (obj, act). It is actually the rule without the subject.
     */
    getPermissionsForUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getFilteredPolicy(0, user);
        });
    }
    /**
     * hasPermissionForUser determines whether a user has a permission.
     *
     * @param user the user.
     * @param permission the permission, usually be (obj, act). It is actually the rule without the subject.
     * @return whether the user has the permission.
     */
    hasPermissionForUser(user, ...permission) {
        return __awaiter(this, void 0, void 0, function* () {
            permission.unshift(user);
            return this.hasPolicy(...permission);
        });
    }
    /**
     * getImplicitRolesForUser gets implicit roles that a user has.
     * Compared to getRolesForUser(), this function retrieves indirect roles besides direct roles.
     * For example:
     * g, alice, role:admin
     * g, role:admin, role:user
     *
     * getRolesForUser("alice") can only get: ["role:admin"].
     * But getImplicitRolesForUser("alice") will get: ["role:admin", "role:user"].
     */
    getImplicitRolesForUser(name, ...domain) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new Set();
            const q = [name];
            let n;
            while ((n = q.shift()) != undefined) {
                const role = yield this.getRoleManager().getRoles(n, ...domain);
                role.forEach(r => {
                    if (!res.has(r)) {
                        res.add(r);
                        q.push(r);
                    }
                });
            }
            return Array.from(res);
        });
    }
    /**
     * getImplicitPermissionsForUser gets implicit permissions for a user or role.
     * Compared to getPermissionsForUser(), this function retrieves permissions for inherited roles.
     * For example:
     * p, admin, data1, read
     * p, alice, data2, read
     * g, alice, admin
     *
     * getPermissionsForUser("alice") can only get: [["alice", "data2", "read"]].
     * But getImplicitPermissionsForUser("alice") will get: [["admin", "data1", "read"], ["alice", "data2", "read"]].
     */
    getImplicitPermissionsForUser(user, ...domain) {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield this.getImplicitRolesForUser(user, ...domain);
            roles.unshift(user);
            const res = [];
            const withDomain = domain && domain.length !== 0;
            for (const n of roles) {
                if (withDomain) {
                    const p = yield this.getFilteredPolicy(0, n, ...domain);
                    res.push(...p);
                }
                else {
                    const p = yield this.getPermissionsForUser(n);
                    res.push(...p);
                }
            }
            return res;
        });
    }
    /**
     * getImplicitUsersForPermission gets implicit users for a permission.
     * For example:
     * p, admin, data1, read
     * p, bob, data1, read
     * g, alice, admin
     *
     * getImplicitUsersForPermission("data1", "read") will get: ["alice", "bob"].
     * Note: only users will be returned, roles (2nd arg in "g") will be excluded.
     */
    getImplicitUsersForPermission(...permission) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = [];
            const policySubjects = yield this.getAllSubjects();
            const subjects = util_1.arrayRemoveDuplicates([...policySubjects, ...this.model.getValuesForFieldInPolicyAllTypes('g', 0)]);
            const inherits = this.model.getValuesForFieldInPolicyAllTypes('g', 1);
            for (const user of subjects) {
                const allowed = yield this.enforce(user, ...permission);
                if (allowed) {
                    res.push(user);
                }
            }
            return res.filter(n => !inherits.some(m => n === m));
        });
    }
}
exports.Enforcer = Enforcer;
function newEnforcerWithClass(enforcer, ...params) {
    return __awaiter(this, void 0, void 0, function* () {
        const e = new enforcer();
        let parsedParamLen = 0;
        if (params.length >= 1) {
            const enableLog = params[params.length - 1];
            if (typeof enableLog === 'boolean') {
                log_1.getLogger().enableLog(enableLog);
                parsedParamLen++;
            }
        }
        if (params.length - parsedParamLen === 2) {
            if (typeof params[0] === 'string') {
                if (typeof params[1] === 'string') {
                    yield e.initWithFile(params[0].toString(), params[1].toString());
                }
                else {
                    yield e.initWithAdapter(params[0].toString(), params[1]);
                }
            }
            else {
                if (typeof params[1] === 'string') {
                    throw new Error('Invalid parameters for enforcer.');
                }
                else {
                    yield e.initWithModelAndAdapter(params[0], params[1]);
                }
            }
        }
        else if (params.length - parsedParamLen === 1) {
            if (typeof params[0] === 'string') {
                yield e.initWithFile(params[0], '');
            }
            else {
                yield e.initWithModelAndAdapter(params[0]);
            }
        }
        else if (params.length === parsedParamLen) {
            yield e.initWithFile('', '');
        }
        else {
            throw new Error('Invalid parameters for enforcer.');
        }
        return e;
    });
}
exports.newEnforcerWithClass = newEnforcerWithClass;
/**
 * newEnforcer creates an enforcer via file or DB.
 *
 * File:
 * ```js
 * const e = new Enforcer('path/to/basic_model.conf', 'path/to/basic_policy.csv');
 * ```
 *
 * MySQL DB:
 * ```js
 * const a = new MySQLAdapter('mysql', 'mysql_username:mysql_password@tcp(127.0.0.1:3306)/');
 * const e = new Enforcer('path/to/basic_model.conf', a);
 * ```
 *
 * @param params
 */
function newEnforcer(...params) {
    return __awaiter(this, void 0, void 0, function* () {
        return newEnforcerWithClass(Enforcer, ...params);
    });
}
exports.newEnforcer = newEnforcer;


/***/ }),

/***/ 669:
/***/ (function(module) {

module.exports = require("util");

/***/ }),

/***/ 703:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(973), exports);
__exportStar(__webpack_require__(633), exports);


/***/ }),

/***/ 721:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newModelFromString = exports.newModelFromFile = exports.newModel = exports.Model = exports.requiredSections = exports.PolicyOp = exports.sectionNameMap = void 0;
const util = __webpack_require__(703);
const config_1 = __webpack_require__(499);
const assertion_1 = __webpack_require__(494);
const log_1 = __webpack_require__(811);
exports.sectionNameMap = {
    r: 'request_definition',
    p: 'policy_definition',
    g: 'role_definition',
    e: 'policy_effect',
    m: 'matchers'
};
var PolicyOp;
(function (PolicyOp) {
    PolicyOp[PolicyOp["PolicyAdd"] = 0] = "PolicyAdd";
    PolicyOp[PolicyOp["PolicyRemove"] = 1] = "PolicyRemove";
})(PolicyOp = exports.PolicyOp || (exports.PolicyOp = {}));
exports.requiredSections = ['r', 'p', 'e', 'm'];
class Model {
    /**
     * constructor is the constructor for Model.
     */
    constructor() {
        this.model = new Map();
    }
    loadAssertion(cfg, sec, key) {
        const secName = exports.sectionNameMap[sec];
        const value = cfg.getString(`${secName}::${key}`);
        return this.addDef(sec, key, value);
    }
    getKeySuffix(i) {
        if (i === 1) {
            return '';
        }
        return i.toString();
    }
    loadSection(cfg, sec) {
        let i = 1;
        for (;;) {
            if (!this.loadAssertion(cfg, sec, sec + this.getKeySuffix(i))) {
                break;
            }
            else {
                i++;
            }
        }
    }
    // addDef adds an assertion to the model.
    addDef(sec, key, value) {
        if (value === '') {
            return false;
        }
        const ast = new assertion_1.Assertion();
        ast.key = key;
        ast.value = value;
        if (sec === 'r' || sec === 'p') {
            const tokens = value.split(',').map(n => n.trim());
            for (let i = 0; i < tokens.length; i++) {
                tokens[i] = key + '_' + tokens[i];
            }
            ast.tokens = tokens;
        }
        else if (sec === 'm') {
            const stringArguments = value.match(/\"(.*?)\"/g) || [];
            stringArguments.forEach((n, index) => {
                value = value.replace(n, `$<${index}>`);
            });
            value = util.escapeAssertion(value);
            stringArguments.forEach((n, index) => {
                value = value.replace(`$<${index}>`, n);
            });
            ast.value = value;
        }
        else {
            ast.value = util.escapeAssertion(value);
        }
        const nodeMap = this.model.get(sec);
        if (nodeMap) {
            nodeMap.set(key, ast);
        }
        else {
            const assertionMap = new Map();
            assertionMap.set(key, ast);
            this.model.set(sec, assertionMap);
        }
        return true;
    }
    // loadModel loads the model from model CONF file.
    loadModel(path) {
        const cfg = config_1.Config.newConfig(path);
        this.loadModelFromConfig(cfg);
    }
    // loadModelFromText loads the model from the text.
    loadModelFromText(text) {
        const cfg = config_1.Config.newConfigFromText(text);
        this.loadModelFromConfig(cfg);
    }
    loadModelFromConfig(cfg) {
        for (const s in exports.sectionNameMap) {
            this.loadSection(cfg, s);
        }
        const ms = [];
        exports.requiredSections.forEach(n => {
            if (!this.hasSection(n)) {
                ms.push(exports.sectionNameMap[n]);
            }
        });
        if (ms.length > 0) {
            throw new Error(`missing required sections: ${ms.join(',')}`);
        }
    }
    hasSection(sec) {
        return this.model.get(sec) !== undefined;
    }
    // printModel prints the model to the log.
    printModel() {
        log_1.logPrint('Model:');
        this.model.forEach((value, key) => {
            value.forEach((ast, astKey) => {
                log_1.logPrint(`${key}.${astKey}: ${ast.value}`);
            });
        });
    }
    // buildIncrementalRoleLinks provides incremental build the role inheritance relations.
    buildIncrementalRoleLinks(rm, op, sec, ptype, rules) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (sec === 'g') {
                yield ((_b = (_a = this.model
                    .get(sec)) === null || _a === void 0 ? void 0 : _a.get(ptype)) === null || _b === void 0 ? void 0 : _b.buildIncrementalRoleLinks(rm, op, rules));
            }
        });
    }
    // buildRoleLinks initializes the roles in RBAC.
    buildRoleLinks(rm) {
        return __awaiter(this, void 0, void 0, function* () {
            const astMap = this.model.get('g');
            if (!astMap) {
                return;
            }
            for (const value of astMap.values()) {
                yield value.buildRoleLinks(rm);
            }
        });
    }
    // clearPolicy clears all current policy.
    clearPolicy() {
        this.model.forEach((value, key) => {
            if (key === 'p' || key === 'g') {
                value.forEach(ast => {
                    ast.policy = [];
                });
            }
        });
    }
    // getPolicy gets all rules in a policy.
    getPolicy(sec, key) {
        var _a;
        const policy = [];
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (ast) {
            policy.push(...ast.policy);
        }
        return policy;
    }
    // hasPolicy determines whether a model has the specified policy rule.
    hasPolicy(sec, key, rule) {
        var _a;
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (!ast) {
            return false;
        }
        return ast.policy.some((n) => util.arrayEquals(n, rule));
    }
    // addPolicy adds a policy rule to the model.
    addPolicy(sec, key, rule) {
        var _a;
        if (!this.hasPolicy(sec, key, rule)) {
            const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
            if (!ast) {
                return false;
            }
            ast.policy.push(rule);
            return true;
        }
        return false;
    }
    // addPolicies adds policy rules to the model.
    addPolicies(sec, ptype, rules) {
        var _a;
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(ptype);
        if (!ast) {
            return [false, []];
        }
        for (const rule of rules) {
            if (this.hasPolicy(sec, ptype, rule)) {
                return [false, []];
            }
        }
        ast.policy = ast.policy.concat(rules);
        return [true, rules];
    }
    // removePolicy removes a policy rule from the model.
    removePolicy(sec, key, rule) {
        var _a;
        if (this.hasPolicy(sec, key, rule)) {
            const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
            if (!ast) {
                return false;
            }
            ast.policy = ast.policy.filter(r => !util.arrayEquals(rule, r));
            return true;
        }
        return false;
    }
    // removePolicies removes policy rules from the model.
    removePolicies(sec, ptype, rules) {
        var _a;
        const effects = [];
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(ptype);
        if (!ast) {
            return [false, []];
        }
        for (const rule of rules) {
            if (!this.hasPolicy(sec, ptype, rule)) {
                return [false, []];
            }
        }
        for (const rule of rules) {
            ast.policy = ast.policy.filter((r) => {
                const equals = util.arrayEquals(rule, r);
                if (equals) {
                    effects.push(r);
                }
                return !equals;
            });
        }
        return [true, effects];
    }
    // getFilteredPolicy gets rules based on field filters from a policy.
    getFilteredPolicy(sec, key, fieldIndex, ...fieldValues) {
        var _a;
        const res = [];
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (!ast) {
            return res;
        }
        for (const rule of ast.policy) {
            let matched = true;
            for (let i = 0; i < fieldValues.length; i++) {
                const fieldValue = fieldValues[i];
                if (fieldValue !== '' && rule[fieldIndex + i] !== fieldValue) {
                    matched = false;
                    break;
                }
            }
            if (matched) {
                res.push(rule);
            }
        }
        return res;
    }
    // removeFilteredPolicy removes policy rules based on field filters from the model.
    removeFilteredPolicy(sec, key, fieldIndex, ...fieldValues) {
        var _a;
        const res = [];
        const effects = [];
        let bool = false;
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (!ast) {
            return [false, []];
        }
        for (const rule of ast.policy) {
            let matched = true;
            for (let i = 0; i < fieldValues.length; i++) {
                const fieldValue = fieldValues[i];
                if (fieldValue !== '' && rule[fieldIndex + i] !== fieldValue) {
                    matched = false;
                    break;
                }
            }
            if (matched) {
                bool = true;
                effects.push(rule);
            }
            else {
                res.push(rule);
            }
        }
        ast.policy = res;
        return [bool, effects];
    }
    // getValuesForFieldInPolicy gets all values for a field for all rules in a policy, duplicated values are removed.
    getValuesForFieldInPolicy(sec, key, fieldIndex) {
        var _a;
        const values = [];
        const ast = (_a = this.model.get(sec)) === null || _a === void 0 ? void 0 : _a.get(key);
        if (!ast) {
            return values;
        }
        return util.arrayRemoveDuplicates(ast.policy.map((n) => n[fieldIndex]));
    }
    // getValuesForFieldInPolicyAllTypes gets all values for a field for all rules in a policy of all ptypes, duplicated values are removed.
    getValuesForFieldInPolicyAllTypes(sec, fieldIndex) {
        const values = [];
        const ast = this.model.get(sec);
        if (!ast) {
            return values;
        }
        for (const ptype of ast.keys()) {
            values.push(...this.getValuesForFieldInPolicy(sec, ptype, fieldIndex));
        }
        return util.arrayRemoveDuplicates(values);
    }
    // printPolicy prints the policy to log.
    printPolicy() {
        log_1.logPrint('Policy:');
        this.model.forEach((map, key) => {
            if (key === 'p' || key === 'g') {
                map.forEach(ast => {
                    log_1.logPrint(`key, : ${ast.value}, : , ${ast.policy}`);
                });
            }
        });
    }
}
exports.Model = Model;
/**
 * newModel creates a model.
 */
function newModel(...text) {
    const m = new Model();
    if (text.length === 2) {
        if (text[0] !== '') {
            m.loadModel(text[0]);
        }
    }
    else if (text.length === 1) {
        m.loadModelFromText(text[0]);
    }
    else if (text.length !== 0) {
        throw new Error('Invalid parameters for model.');
    }
    return m;
}
exports.newModel = newModel;
/**
 * newModelFromFile creates a model from a .CONF file.
 */
function newModelFromFile(path) {
    const m = new Model();
    m.loadModel(path);
    return m;
}
exports.newModelFromFile = newModelFromFile;
/**
 * newModelFromString creates a model from a string which contains model text.
 */
function newModelFromString(text) {
    const m = new Model();
    m.loadModelFromText(text);
    return m;
}
exports.newModelFromString = newModelFromString;


/***/ }),

/***/ 730:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */



const util = __webpack_require__(669);
const toRegexRange = __webpack_require__(789);

const isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);

const transform = toNumber => {
  return value => toNumber === true ? Number(value) : String(value);
};

const isValidValue = value => {
  return typeof value === 'number' || (typeof value === 'string' && value !== '');
};

const isNumber = num => Number.isInteger(+num);

const zeros = input => {
  let value = `${input}`;
  let index = -1;
  if (value[0] === '-') value = value.slice(1);
  if (value === '0') return false;
  while (value[++index] === '0');
  return index > 0;
};

const stringify = (start, end, options) => {
  if (typeof start === 'string' || typeof end === 'string') {
    return true;
  }
  return options.stringify === true;
};

const pad = (input, maxLength, toNumber) => {
  if (maxLength > 0) {
    let dash = input[0] === '-' ? '-' : '';
    if (dash) input = input.slice(1);
    input = (dash + input.padStart(dash ? maxLength - 1 : maxLength, '0'));
  }
  if (toNumber === false) {
    return String(input);
  }
  return input;
};

const toMaxLen = (input, maxLength) => {
  let negative = input[0] === '-' ? '-' : '';
  if (negative) {
    input = input.slice(1);
    maxLength--;
  }
  while (input.length < maxLength) input = '0' + input;
  return negative ? ('-' + input) : input;
};

const toSequence = (parts, options) => {
  parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

  let prefix = options.capture ? '' : '?:';
  let positives = '';
  let negatives = '';
  let result;

  if (parts.positives.length) {
    positives = parts.positives.join('|');
  }

  if (parts.negatives.length) {
    negatives = `-(${prefix}${parts.negatives.join('|')})`;
  }

  if (positives && negatives) {
    result = `${positives}|${negatives}`;
  } else {
    result = positives || negatives;
  }

  if (options.wrap) {
    return `(${prefix}${result})`;
  }

  return result;
};

const toRange = (a, b, isNumbers, options) => {
  if (isNumbers) {
    return toRegexRange(a, b, { wrap: false, ...options });
  }

  let start = String.fromCharCode(a);
  if (a === b) return start;

  let stop = String.fromCharCode(b);
  return `[${start}-${stop}]`;
};

const toRegex = (start, end, options) => {
  if (Array.isArray(start)) {
    let wrap = options.wrap === true;
    let prefix = options.capture ? '' : '?:';
    return wrap ? `(${prefix}${start.join('|')})` : start.join('|');
  }
  return toRegexRange(start, end, options);
};

const rangeError = (...args) => {
  return new RangeError('Invalid range arguments: ' + util.inspect(...args));
};

const invalidRange = (start, end, options) => {
  if (options.strictRanges === true) throw rangeError([start, end]);
  return [];
};

const invalidStep = (step, options) => {
  if (options.strictRanges === true) {
    throw new TypeError(`Expected step "${step}" to be a number`);
  }
  return [];
};

const fillNumbers = (start, end, step = 1, options = {}) => {
  let a = Number(start);
  let b = Number(end);

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    if (options.strictRanges === true) throw rangeError([start, end]);
    return [];
  }

  // fix negative zero
  if (a === 0) a = 0;
  if (b === 0) b = 0;

  let descending = a > b;
  let startString = String(start);
  let endString = String(end);
  let stepString = String(step);
  step = Math.max(Math.abs(step), 1);

  let padded = zeros(startString) || zeros(endString) || zeros(stepString);
  let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
  let toNumber = padded === false && stringify(start, end, options) === false;
  let format = options.transform || transform(toNumber);

  if (options.toRegex && step === 1) {
    return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
  }

  let parts = { negatives: [], positives: [] };
  let push = num => parts[num < 0 ? 'negatives' : 'positives'].push(Math.abs(num));
  let range = [];
  let index = 0;

  while (descending ? a >= b : a <= b) {
    if (options.toRegex === true && step > 1) {
      push(a);
    } else {
      range.push(pad(format(a, index), maxLen, toNumber));
    }
    a = descending ? a - step : a + step;
    index++;
  }

  if (options.toRegex === true) {
    return step > 1
      ? toSequence(parts, options)
      : toRegex(range, null, { wrap: false, ...options });
  }

  return range;
};

const fillLetters = (start, end, step = 1, options = {}) => {
  if ((!isNumber(start) && start.length > 1) || (!isNumber(end) && end.length > 1)) {
    return invalidRange(start, end, options);
  }


  let format = options.transform || (val => String.fromCharCode(val));
  let a = `${start}`.charCodeAt(0);
  let b = `${end}`.charCodeAt(0);

  let descending = a > b;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  if (options.toRegex && step === 1) {
    return toRange(min, max, false, options);
  }

  let range = [];
  let index = 0;

  while (descending ? a >= b : a <= b) {
    range.push(format(a, index));
    a = descending ? a - step : a + step;
    index++;
  }

  if (options.toRegex === true) {
    return toRegex(range, null, { wrap: false, options });
  }

  return range;
};

const fill = (start, end, step, options = {}) => {
  if (end == null && isValidValue(start)) {
    return [start];
  }

  if (!isValidValue(start) || !isValidValue(end)) {
    return invalidRange(start, end, options);
  }

  if (typeof step === 'function') {
    return fill(start, end, 1, { transform: step });
  }

  if (isObject(step)) {
    return fill(start, end, 0, step);
  }

  let opts = { ...options };
  if (opts.capture === true) opts.wrap = true;
  step = step || opts.step || 1;

  if (!isNumber(step)) {
    if (step != null && !isObject(step)) return invalidStep(step, opts);
    return fill(start, end, 1, step);
  }

  if (isNumber(start) && isNumber(end)) {
    return fillNumbers(start, end, step, opts);
  }

  return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
};

module.exports = fill;


/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 769:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


var ip = exports;
var Buffer = __webpack_require__(293).Buffer;
var os = __webpack_require__(87);

ip.toBuffer = function(ip, buff, offset) {
  offset = ~~offset;

  var result;

  if (this.isV4Format(ip)) {
    result = buff || new Buffer(offset + 4);
    ip.split(/\./g).map(function(byte) {
      result[offset++] = parseInt(byte, 10) & 0xff;
    });
  } else if (this.isV6Format(ip)) {
    var sections = ip.split(':', 8);

    var i;
    for (i = 0; i < sections.length; i++) {
      var isv4 = this.isV4Format(sections[i]);
      var v4Buffer;

      if (isv4) {
        v4Buffer = this.toBuffer(sections[i]);
        sections[i] = v4Buffer.slice(0, 2).toString('hex');
      }

      if (v4Buffer && ++i < 8) {
        sections.splice(i, 0, v4Buffer.slice(2, 4).toString('hex'));
      }
    }

    if (sections[0] === '') {
      while (sections.length < 8) sections.unshift('0');
    } else if (sections[sections.length - 1] === '') {
      while (sections.length < 8) sections.push('0');
    } else if (sections.length < 8) {
      for (i = 0; i < sections.length && sections[i] !== ''; i++);
      var argv = [ i, 1 ];
      for (i = 9 - sections.length; i > 0; i--) {
        argv.push('0');
      }
      sections.splice.apply(sections, argv);
    }

    result = buff || new Buffer(offset + 16);
    for (i = 0; i < sections.length; i++) {
      var word = parseInt(sections[i], 16);
      result[offset++] = (word >> 8) & 0xff;
      result[offset++] = word & 0xff;
    }
  }

  if (!result) {
    throw Error('Invalid ip address: ' + ip);
  }

  return result;
};

ip.toString = function(buff, offset, length) {
  offset = ~~offset;
  length = length || (buff.length - offset);

  var result = [];
  if (length === 4) {
    // IPv4
    for (var i = 0; i < length; i++) {
      result.push(buff[offset + i]);
    }
    result = result.join('.');
  } else if (length === 16) {
    // IPv6
    for (var i = 0; i < length; i += 2) {
      result.push(buff.readUInt16BE(offset + i).toString(16));
    }
    result = result.join(':');
    result = result.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
    result = result.replace(/:{3,4}/, '::');
  }

  return result;
};

var ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
var ipv6Regex =
    /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

ip.isV4Format = function(ip) {
  return ipv4Regex.test(ip);
};

ip.isV6Format = function(ip) {
  return ipv6Regex.test(ip);
};
function _normalizeFamily(family) {
  return family ? family.toLowerCase() : 'ipv4';
}

ip.fromPrefixLen = function(prefixlen, family) {
  if (prefixlen > 32) {
    family = 'ipv6';
  } else {
    family = _normalizeFamily(family);
  }

  var len = 4;
  if (family === 'ipv6') {
    len = 16;
  }
  var buff = new Buffer(len);

  for (var i = 0, n = buff.length; i < n; ++i) {
    var bits = 8;
    if (prefixlen < 8) {
      bits = prefixlen;
    }
    prefixlen -= bits;

    buff[i] = ~(0xff >> bits) & 0xff;
  }

  return ip.toString(buff);
};

ip.mask = function(addr, mask) {
  addr = ip.toBuffer(addr);
  mask = ip.toBuffer(mask);

  var result = new Buffer(Math.max(addr.length, mask.length));

  var i = 0;
  // Same protocol - do bitwise and
  if (addr.length === mask.length) {
    for (i = 0; i < addr.length; i++) {
      result[i] = addr[i] & mask[i];
    }
  } else if (mask.length === 4) {
    // IPv6 address and IPv4 mask
    // (Mask low bits)
    for (i = 0; i < mask.length; i++) {
      result[i] = addr[addr.length - 4  + i] & mask[i];
    }
  } else {
    // IPv6 mask and IPv4 addr
    for (var i = 0; i < result.length - 6; i++) {
      result[i] = 0;
    }

    // ::ffff:ipv4
    result[10] = 0xff;
    result[11] = 0xff;
    for (i = 0; i < addr.length; i++) {
      result[i + 12] = addr[i] & mask[i + 12];
    }
    i = i + 12;
  }
  for (; i < result.length; i++)
    result[i] = 0;

  return ip.toString(result);
};

ip.cidr = function(cidrString) {
  var cidrParts = cidrString.split('/');

  var addr = cidrParts[0];
  if (cidrParts.length !== 2)
    throw new Error('invalid CIDR subnet: ' + addr);

  var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));

  return ip.mask(addr, mask);
};

ip.subnet = function(addr, mask) {
  var networkAddress = ip.toLong(ip.mask(addr, mask));

  // Calculate the mask's length.
  var maskBuffer = ip.toBuffer(mask);
  var maskLength = 0;

  for (var i = 0; i < maskBuffer.length; i++) {
    if (maskBuffer[i] === 0xff) {
      maskLength += 8;
    } else {
      var octet = maskBuffer[i] & 0xff;
      while (octet) {
        octet = (octet << 1) & 0xff;
        maskLength++;
      }
    }
  }

  var numberOfAddresses = Math.pow(2, 32 - maskLength);

  return {
    networkAddress: ip.fromLong(networkAddress),
    firstAddress: numberOfAddresses <= 2 ?
                    ip.fromLong(networkAddress) :
                    ip.fromLong(networkAddress + 1),
    lastAddress: numberOfAddresses <= 2 ?
                    ip.fromLong(networkAddress + numberOfAddresses - 1) :
                    ip.fromLong(networkAddress + numberOfAddresses - 2),
    broadcastAddress: ip.fromLong(networkAddress + numberOfAddresses - 1),
    subnetMask: mask,
    subnetMaskLength: maskLength,
    numHosts: numberOfAddresses <= 2 ?
                numberOfAddresses : numberOfAddresses - 2,
    length: numberOfAddresses,
    contains: function(other) {
      return networkAddress === ip.toLong(ip.mask(other, mask));
    }
  };
};

ip.cidrSubnet = function(cidrString) {
  var cidrParts = cidrString.split('/');

  var addr = cidrParts[0];
  if (cidrParts.length !== 2)
    throw new Error('invalid CIDR subnet: ' + addr);

  var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));

  return ip.subnet(addr, mask);
};

ip.not = function(addr) {
  var buff = ip.toBuffer(addr);
  for (var i = 0; i < buff.length; i++) {
    buff[i] = 0xff ^ buff[i];
  }
  return ip.toString(buff);
};

ip.or = function(a, b) {
  a = ip.toBuffer(a);
  b = ip.toBuffer(b);

  // same protocol
  if (a.length === b.length) {
    for (var i = 0; i < a.length; ++i) {
      a[i] |= b[i];
    }
    return ip.toString(a);

  // mixed protocols
  } else {
    var buff = a;
    var other = b;
    if (b.length > a.length) {
      buff = b;
      other = a;
    }

    var offset = buff.length - other.length;
    for (var i = offset; i < buff.length; ++i) {
      buff[i] |= other[i - offset];
    }

    return ip.toString(buff);
  }
};

ip.isEqual = function(a, b) {
  a = ip.toBuffer(a);
  b = ip.toBuffer(b);

  // Same protocol
  if (a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // Swap
  if (b.length === 4) {
    var t = b;
    b = a;
    a = t;
  }

  // a - IPv4, b - IPv6
  for (var i = 0; i < 10; i++) {
    if (b[i] !== 0) return false;
  }

  var word = b.readUInt16BE(10);
  if (word !== 0 && word !== 0xffff) return false;

  for (var i = 0; i < 4; i++) {
    if (a[i] !== b[i + 12]) return false;
  }

  return true;
};

ip.isPrivate = function(addr) {
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i
      .test(addr) ||
    /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
    /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
      .test(addr) ||
    /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
    /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
    /^f[cd][0-9a-f]{2}:/i.test(addr) ||
    /^fe80:/i.test(addr) ||
    /^::1$/.test(addr) ||
    /^::$/.test(addr);
};

ip.isPublic = function(addr) {
  return !ip.isPrivate(addr);
};

ip.isLoopback = function(addr) {
  return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
      .test(addr) ||
    /^fe80::1$/.test(addr) ||
    /^::1$/.test(addr) ||
    /^::$/.test(addr);
};

ip.loopback = function(family) {
  //
  // Default to `ipv4`
  //
  family = _normalizeFamily(family);

  if (family !== 'ipv4' && family !== 'ipv6') {
    throw new Error('family must be ipv4 or ipv6');
  }

  return family === 'ipv4' ? '127.0.0.1' : 'fe80::1';
};

//
// ### function address (name, family)
// #### @name {string|'public'|'private'} **Optional** Name or security
//      of the network interface.
// #### @family {ipv4|ipv6} **Optional** IP family of the address (defaults
//      to ipv4).
//
// Returns the address for the network interface on the current system with
// the specified `name`:
//   * String: First `family` address of the interface.
//             If not found see `undefined`.
//   * 'public': the first public ip address of family.
//   * 'private': the first private ip address of family.
//   * undefined: First address with `ipv4` or loopback address `127.0.0.1`.
//
ip.address = function(name, family) {
  var interfaces = os.networkInterfaces();
  var all;

  //
  // Default to `ipv4`
  //
  family = _normalizeFamily(family);

  //
  // If a specific network interface has been named,
  // return the address.
  //
  if (name && name !== 'private' && name !== 'public') {
    var res = interfaces[name].filter(function(details) {
      var itemFamily = details.family.toLowerCase();
      return itemFamily === family;
    });
    if (res.length === 0)
      return undefined;
    return res[0].address;
  }

  var all = Object.keys(interfaces).map(function (nic) {
    //
    // Note: name will only be `public` or `private`
    // when this is called.
    //
    var addresses = interfaces[nic].filter(function (details) {
      details.family = details.family.toLowerCase();
      if (details.family !== family || ip.isLoopback(details.address)) {
        return false;
      } else if (!name) {
        return true;
      }

      return name === 'public' ? ip.isPrivate(details.address) :
          ip.isPublic(details.address);
    });

    return addresses.length ? addresses[0].address : undefined;
  }).filter(Boolean);

  return !all.length ? ip.loopback(family) : all[0];
};

ip.toLong = function(ip) {
  var ipl = 0;
  ip.split('.').forEach(function(octet) {
    ipl <<= 8;
    ipl += parseInt(octet);
  });
  return(ipl >>> 0);
};

ip.fromLong = function(ipl) {
  return ((ipl >>> 24) + '.' +
      (ipl >> 16 & 255) + '.' +
      (ipl >> 8 & 255) + '.' +
      (ipl & 255) );
};


/***/ }),

/***/ 777:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 781:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A mutex lock for coordination across async functions
 */
class AwaitLock {
    constructor() {
        this._acquired = false;
        this._waitingResolvers = [];
    }
    /**
     * Acquires the lock, waiting if necessary for it to become free if it is already locked. The
     * returned promise is fulfilled once the lock is acquired.
     *
     * After acquiring the lock, you **must** call `release` when you are done with it.
     */
    acquireAsync() {
        if (!this._acquired) {
            this._acquired = true;
            return Promise.resolve();
        }
        return new Promise(resolve => {
            this._waitingResolvers.push(resolve);
        });
    }
    /**
     * Acquires the lock if it is free and otherwise returns immediately without waiting. Returns
     * `true` if the lock was free and is now acquired, and `false` otherwise,
     */
    tryAcquire() {
        if (!this._acquired) {
            this._acquired = true;
            return true;
        }
        return false;
    }
    /**
     * Releases the lock and gives it to the next waiting acquirer, if there is one. Each acquirer
     * must release the lock exactly once.
     */
    release() {
        if (!this._acquired) {
            throw new Error(`Cannot release an unacquired lock`);
        }
        if (this._waitingResolvers.length > 0) {
            let resolve = this._waitingResolvers.shift();
            resolve();
        }
        else {
            this._acquired = false;
        }
    }
}
exports.default = AwaitLock;
//# sourceMappingURL=AwaitLock.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const stringify = __webpack_require__(382);
const compile = __webpack_require__(435);
const expand = __webpack_require__(441);
const parse = __webpack_require__(227);

/**
 * Expand the given pattern or create a regex-compatible string.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
 * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

const braces = (input, options = {}) => {
  let output = [];

  if (Array.isArray(input)) {
    for (let pattern of input) {
      let result = braces.create(pattern, options);
      if (Array.isArray(result)) {
        output.push(...result);
      } else {
        output.push(result);
      }
    }
  } else {
    output = [].concat(braces.create(input, options));
  }

  if (options && options.expand === true && options.nodupes === true) {
    output = [...new Set(output)];
  }
  return output;
};

/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * // braces.parse(pattern, [, options]);
 * const ast = braces.parse('a/{b,c}/d');
 * console.log(ast);
 * ```
 * @param {String} pattern Brace pattern to parse
 * @param {Object} options
 * @return {Object} Returns an AST
 * @api public
 */

braces.parse = (input, options = {}) => parse(input, options);

/**
 * Creates a braces string from an AST, or an AST node.
 *
 * ```js
 * const braces = require('braces');
 * let ast = braces.parse('foo/{a,b}/bar');
 * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */

braces.stringify = (input, options = {}) => {
  if (typeof input === 'string') {
    return stringify(braces.parse(input, options), options);
  }
  return stringify(input, options);
};

/**
 * Compiles a brace pattern into a regex-compatible, optimized string.
 * This method is called by the main [braces](#braces) function by default.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.compile('a/{b,c}/d'));
 * //=> ['a/(b|c)/d']
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */

braces.compile = (input, options = {}) => {
  if (typeof input === 'string') {
    input = braces.parse(input, options);
  }
  return compile(input, options);
};

/**
 * Expands a brace pattern into an array. This method is called by the
 * main [braces](#braces) function when `options.expand` is true. Before
 * using this method it's recommended that you read the [performance notes](#performance))
 * and advantages of using [.compile](#compile) instead.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/b/d', 'a/c/d'];
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */

braces.expand = (input, options = {}) => {
  if (typeof input === 'string') {
    input = braces.parse(input, options);
  }

  let result = expand(input, options);

  // filter out empty strings if specified
  if (options.noempty === true) {
    result = result.filter(Boolean);
  }

  // filter out duplicates if specified
  if (options.nodupes === true) {
    result = [...new Set(result)];
  }

  return result;
};

/**
 * Processes a brace pattern and returns either an expanded array
 * (if `options.expand` is true), a highly optimized regex-compatible string.
 * This method is called by the main [braces](#braces) function.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */

braces.create = (input, options = {}) => {
  if (input === '' || input.length < 3) {
    return [input];
  }

 return options.expand !== true
    ? braces.compile(input, options)
    : braces.expand(input, options);
};

/**
 * Expose "braces"
 */

module.exports = braces;


/***/ }),

/***/ 789:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const isNumber = __webpack_require__(914);

const toRegexRange = (min, max, options) => {
  if (isNumber(min) === false) {
    throw new TypeError('toRegexRange: expected the first argument to be a number');
  }

  if (max === void 0 || min === max) {
    return String(min);
  }

  if (isNumber(max) === false) {
    throw new TypeError('toRegexRange: expected the second argument to be a number.');
  }

  let opts = { relaxZeros: true, ...options };
  if (typeof opts.strictZeros === 'boolean') {
    opts.relaxZeros = opts.strictZeros === false;
  }

  let relax = String(opts.relaxZeros);
  let shorthand = String(opts.shorthand);
  let capture = String(opts.capture);
  let wrap = String(opts.wrap);
  let cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;

  if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
    return toRegexRange.cache[cacheKey].result;
  }

  let a = Math.min(min, max);
  let b = Math.max(min, max);

  if (Math.abs(a - b) === 1) {
    let result = min + '|' + max;
    if (opts.capture) {
      return `(${result})`;
    }
    if (opts.wrap === false) {
      return result;
    }
    return `(?:${result})`;
  }

  let isPadded = hasPadding(min) || hasPadding(max);
  let state = { min, max, a, b };
  let positives = [];
  let negatives = [];

  if (isPadded) {
    state.isPadded = isPadded;
    state.maxLen = String(state.max).length;
  }

  if (a < 0) {
    let newMin = b < 0 ? Math.abs(b) : 1;
    negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
    a = state.a = 0;
  }

  if (b >= 0) {
    positives = splitToPatterns(a, b, state, opts);
  }

  state.negatives = negatives;
  state.positives = positives;
  state.result = collatePatterns(negatives, positives, opts);

  if (opts.capture === true) {
    state.result = `(${state.result})`;
  } else if (opts.wrap !== false && (positives.length + negatives.length) > 1) {
    state.result = `(?:${state.result})`;
  }

  toRegexRange.cache[cacheKey] = state;
  return state.result;
};

function collatePatterns(neg, pos, options) {
  let onlyNegative = filterPatterns(neg, pos, '-', false, options) || [];
  let onlyPositive = filterPatterns(pos, neg, '', false, options) || [];
  let intersected = filterPatterns(neg, pos, '-?', true, options) || [];
  let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
  return subpatterns.join('|');
}

function splitToRanges(min, max) {
  let nines = 1;
  let zeros = 1;

  let stop = countNines(min, nines);
  let stops = new Set([max]);

  while (min <= stop && stop <= max) {
    stops.add(stop);
    nines += 1;
    stop = countNines(min, nines);
  }

  stop = countZeros(max + 1, zeros) - 1;

  while (min < stop && stop <= max) {
    stops.add(stop);
    zeros += 1;
    stop = countZeros(max + 1, zeros) - 1;
  }

  stops = [...stops];
  stops.sort(compare);
  return stops;
}

/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */

function rangeToPattern(start, stop, options) {
  if (start === stop) {
    return { pattern: start, count: [], digits: 0 };
  }

  let zipped = zip(start, stop);
  let digits = zipped.length;
  let pattern = '';
  let count = 0;

  for (let i = 0; i < digits; i++) {
    let [startDigit, stopDigit] = zipped[i];

    if (startDigit === stopDigit) {
      pattern += startDigit;

    } else if (startDigit !== '0' || stopDigit !== '9') {
      pattern += toCharacterClass(startDigit, stopDigit, options);

    } else {
      count++;
    }
  }

  if (count) {
    pattern += options.shorthand === true ? '\\d' : '[0-9]';
  }

  return { pattern, count: [count], digits };
}

function splitToPatterns(min, max, tok, options) {
  let ranges = splitToRanges(min, max);
  let tokens = [];
  let start = min;
  let prev;

  for (let i = 0; i < ranges.length; i++) {
    let max = ranges[i];
    let obj = rangeToPattern(String(start), String(max), options);
    let zeros = '';

    if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
      if (prev.count.length > 1) {
        prev.count.pop();
      }

      prev.count.push(obj.count[0]);
      prev.string = prev.pattern + toQuantifier(prev.count);
      start = max + 1;
      continue;
    }

    if (tok.isPadded) {
      zeros = padZeros(max, tok, options);
    }

    obj.string = zeros + obj.pattern + toQuantifier(obj.count);
    tokens.push(obj);
    start = max + 1;
    prev = obj;
  }

  return tokens;
}

function filterPatterns(arr, comparison, prefix, intersection, options) {
  let result = [];

  for (let ele of arr) {
    let { string } = ele;

    // only push if _both_ are negative...
    if (!intersection && !contains(comparison, 'string', string)) {
      result.push(prefix + string);
    }

    // or _both_ are positive
    if (intersection && contains(comparison, 'string', string)) {
      result.push(prefix + string);
    }
  }
  return result;
}

/**
 * Zip strings
 */

function zip(a, b) {
  let arr = [];
  for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
  return arr;
}

function compare(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}

function contains(arr, key, val) {
  return arr.some(ele => ele[key] === val);
}

function countNines(min, len) {
  return Number(String(min).slice(0, -len) + '9'.repeat(len));
}

function countZeros(integer, zeros) {
  return integer - (integer % Math.pow(10, zeros));
}

function toQuantifier(digits) {
  let [start = 0, stop = ''] = digits;
  if (stop || start > 1) {
    return `{${start + (stop ? ',' + stop : '')}}`;
  }
  return '';
}

function toCharacterClass(a, b, options) {
  return `[${a}${(b - a === 1) ? '' : '-'}${b}]`;
}

function hasPadding(str) {
  return /^-?(0+)\d/.test(str);
}

function padZeros(value, tok, options) {
  if (!tok.isPadded) {
    return value;
  }

  let diff = Math.abs(tok.maxLen - String(value).length);
  let relax = options.relaxZeros !== false;

  switch (diff) {
    case 0:
      return '';
    case 1:
      return relax ? '0?' : '0';
    case 2:
      return relax ? '0{0,2}' : '00';
    default: {
      return relax ? `0{0,${diff}}` : `0{${diff}}`;
    }
  }
}

/**
 * Cache
 */

toRegexRange.cache = {};
toRegexRange.clearCache = () => (toRegexRange.cache = {});

/**
 * Expose `toRegexRange`
 */

module.exports = toRegexRange;


/***/ }),

/***/ 791:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementEnforcer = void 0;
const internalEnforcer_1 = __webpack_require__(81);
/**
 * ManagementEnforcer = InternalEnforcer + Management API.
 */
class ManagementEnforcer extends internalEnforcer_1.InternalEnforcer {
    /**
     * getAllSubjects gets the list of subjects that show up in the current policy.
     *
     * @return all the subjects in "p" policy rules. It actually collects the
     *         0-index elements of "p" policy rules. So make sure your subject
     *         is the 0-index element, like (sub, obj, act). Duplicates are removed.
     */
    getAllSubjects() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllNamedSubjects('p');
        });
    }
    /**
     * getAllNamedSubjects gets the list of subjects that show up in the currentnamed policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the subjects in policy rules of the ptype type. It actually
     *         collects the 0-index elements of the policy rules. So make sure
     *         your subject is the 0-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllNamedSubjects(ptype) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.getValuesForFieldInPolicy('p', ptype, 0);
        });
    }
    /**
     * getAllObjects gets the list of objects that show up in the current policy.
     *
     * @return all the objects in "p" policy rules. It actually collects the
     *         1-index elements of "p" policy rules. So make sure your object
     *         is the 1-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllObjects() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllNamedObjects('p');
        });
    }
    /**
     * getAllNamedObjects gets the list of objects that show up in the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the objects in policy rules of the ptype type. It actually
     *         collects the 1-index elements of the policy rules. So make sure
     *         your object is the 1-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllNamedObjects(ptype) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.getValuesForFieldInPolicy('p', ptype, 1);
        });
    }
    /**
     * getAllActions gets the list of actions that show up in the current policy.
     *
     * @return all the actions in "p" policy rules. It actually collects
     *         the 2-index elements of "p" policy rules. So make sure your action
     *         is the 2-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllActions() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllNamedActions('p');
        });
    }
    /**
     * GetAllNamedActions gets the list of actions that show up in the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return all the actions in policy rules of the ptype type. It actually
     *         collects the 2-index elements of the policy rules. So make sure
     *         your action is the 2-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllNamedActions(ptype) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.getValuesForFieldInPolicy('p', ptype, 2);
        });
    }
    /**
     * getAllRoles gets the list of roles that show up in the current policy.
     *
     * @return all the roles in "g" policy rules. It actually collects
     *         the 1-index elements of "g" policy rules. So make sure your
     *         role is the 1-index element, like (sub, role).
     *         Duplicates are removed.
     */
    getAllRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllNamedRoles('g');
        });
    }
    /**
     * getAllNamedRoles gets the list of roles that show up in the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @return all the subjects in policy rules of the ptype type. It actually
     *         collects the 0-index elements of the policy rules. So make
     *         sure your subject is the 0-index element, like (sub, obj, act).
     *         Duplicates are removed.
     */
    getAllNamedRoles(ptype) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.getValuesForFieldInPolicy('g', ptype, 1);
        });
    }
    /**
     * getPolicy gets all the authorization rules in the policy.
     *
     * @return all the "p" policy rules.
     */
    getPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getNamedPolicy('p');
        });
    }
    /**
     * getFilteredPolicy gets all the authorization rules in the policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "p" policy rules.
     */
    getFilteredPolicy(fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getFilteredNamedPolicy('p', fieldIndex, ...fieldValues);
        });
    }
    /**
     * getNamedPolicy gets all the authorization rules in the named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @return the "p" policy rules of the specified ptype.
     */
    getNamedPolicy(ptype) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.getPolicy('p', ptype);
        });
    }
    /**
     * getFilteredNamedPolicy gets all the authorization rules in the named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "p" policy rules of the specified ptype.
     */
    getFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.getFilteredPolicy('p', ptype, fieldIndex, ...fieldValues);
        });
    }
    /**
     * getGroupingPolicy gets all the role inheritance rules in the policy.
     *
     * @return all the "g" policy rules.
     */
    getGroupingPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getNamedGroupingPolicy('g');
        });
    }
    /**
     * getFilteredGroupingPolicy gets all the role inheritance rules in the policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value "" means not to match this field.
     * @return the filtered "g" policy rules.
     */
    getFilteredGroupingPolicy(fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getFilteredNamedGroupingPolicy('g', fieldIndex, ...fieldValues);
        });
    }
    /**
     * getNamedGroupingPolicy gets all the role inheritance rules in the policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @return the "g" policy rules of the specified ptype.
     */
    getNamedGroupingPolicy(ptype) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.getPolicy('g', ptype);
        });
    }
    /**
     * getFilteredNamedGroupingPolicy gets all the role inheritance rules in the policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return the filtered "g" policy rules of the specified ptype.
     */
    getFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.getFilteredPolicy('g', ptype, fieldIndex, ...fieldValues);
        });
    }
    /**
     * hasPolicy determines whether an authorization rule exists.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return whether the rule exists.
     */
    hasPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.hasNamedPolicy('p', ...params);
        });
    }
    /**
     * hasNamedPolicy determines whether a named authorization rule exists.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return whether the rule exists.
     */
    hasNamedPolicy(ptype, ...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.hasPolicy('p', ptype, params);
        });
    }
    /**
     * addPolicy adds an authorization rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    addPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addNamedPolicy('p', ...params);
        });
    }
    /**
     * addPolicies adds authorization rules to the current policy.
     * If the rule already exists, the function returns false and the rules will not be added.
     * Otherwise the function returns true by adding the new rules.
     *
     * @param rules the "p" policy rules, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    addPolicies(rules) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addNamedPolicies('p', rules);
        });
    }
    /**
     * addNamedPolicy adds an authorization rule to the current named policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return succeeds or not.
     */
    addNamedPolicy(ptype, ...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addPolicyInternal('p', ptype, params);
        });
    }
    /**
     * addNamedPolicies adds authorization rules to the current named policy.
     * If the rule already exists, the function returns false and the rules will not be added.
     * Otherwise the function returns true by adding the new rules.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param rules the "p" policy rules.
     * @return succeeds or not.
     */
    addNamedPolicies(ptype, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addPoliciesInternal('p', ptype, rules);
        });
    }
    /**
     * removePolicy removes an authorization rule from the current policy.
     *
     * @param params the "p" policy rule, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    removePolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeNamedPolicy('p', ...params);
        });
    }
    /**
     * removePolicies removes an authorization rules from the current policy.
     *
     * @param rules the "p" policy rules, ptype "p" is implicitly used.
     * @return succeeds or not.
     */
    removePolicies(rules) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeNamedPolicies('p', rules);
        });
    }
    /**
     * removeFilteredPolicy removes an authorization rule from the current policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    removeFilteredPolicy(fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeFilteredNamedPolicy('p', fieldIndex, ...fieldValues);
        });
    }
    /**
     * removeNamedPolicy removes an authorization rule from the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param params the "p" policy rule.
     * @return succeeds or not.
     */
    removeNamedPolicy(ptype, ...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removePolicyInternal('p', ptype, params);
        });
    }
    /**
     * removeNamedPolicies removes authorization rules from the current named policy.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param rules the "p" policy rules.
     * @return succeeds or not.
     */
    removeNamedPolicies(ptype, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removePoliciesInternal('p', ptype, rules);
        });
    }
    /**
     * removeFilteredNamedPolicy removes an authorization rule from the current named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "p", "p2", "p3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    removeFilteredNamedPolicy(ptype, fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeFilteredPolicyInternal('p', ptype, fieldIndex, fieldValues);
        });
    }
    /**
     * hasGroupingPolicy determines whether a role inheritance rule exists.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return whether the rule exists.
     */
    hasGroupingPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.hasNamedGroupingPolicy('g', ...params);
        });
    }
    /**
     * hasNamedGroupingPolicy determines whether a named role inheritance rule exists.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return whether the rule exists.
     */
    hasNamedGroupingPolicy(ptype, ...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.hasPolicy('g', ptype, params);
        });
    }
    /**
     * addGroupingPolicy adds a role inheritance rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    addGroupingPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addNamedGroupingPolicy('g', ...params);
        });
    }
    /**
     * addGroupingPolicies adds a role inheritance rules to the current policy.
     * If the rule already exists, the function returns false and the rules will not be added.
     * Otherwise the function returns true by adding the new rules.
     *
     * @param rules the "g" policy rules, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    addGroupingPolicies(rules) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addNamedGroupingPolicies('g', rules);
        });
    }
    /**
     * addNamedGroupingPolicy adds a named role inheritance rule to the current policy.
     * If the rule already exists, the function returns false and the rule will not be added.
     * Otherwise the function returns true by adding the new rule.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return succeeds or not.
     */
    addNamedGroupingPolicy(ptype, ...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addPolicyInternal('g', ptype, params);
        });
    }
    /**
     * addNamedGroupingPolicies adds named role inheritance rules to the current policy.
     * If the rule already exists, the function returns false and the rules will not be added.
     * Otherwise the function returns true by adding the new rules.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param rules the "g" policy rule.
     * @return succeeds or not.
     */
    addNamedGroupingPolicies(ptype, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addPoliciesInternal('g', ptype, rules);
        });
    }
    /**
     * removeGroupingPolicy removes a role inheritance rule from the current policy.
     *
     * @param params the "g" policy rule, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    removeGroupingPolicy(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeNamedGroupingPolicy('g', ...params);
        });
    }
    /**
     * removeGroupingPolicies removes role inheritance rules from the current policy.
     *
     * @param rules the "g" policy rules, ptype "g" is implicitly used.
     * @return succeeds or not.
     */
    removeGroupingPolicies(rules) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeNamedGroupingPolicies('g', rules);
        });
    }
    /**
     * removeFilteredGroupingPolicy removes a role inheritance rule from the current policy, field filters can be specified.
     *
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    removeFilteredGroupingPolicy(fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeFilteredNamedGroupingPolicy('g', fieldIndex, ...fieldValues);
        });
    }
    /**
     * removeNamedGroupingPolicy removes a role inheritance rule from the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param params the "g" policy rule.
     * @return succeeds or not.
     */
    removeNamedGroupingPolicy(ptype, ...params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removePolicyInternal('g', ptype, params);
        });
    }
    /**
     * removeNamedGroupingPolicies removes role inheritance rules from the current named policy.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param rules the "g" policy rules.
     * @return succeeds or not.
     */
    removeNamedGroupingPolicies(ptype, rules) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removePoliciesInternal('g', ptype, rules);
        });
    }
    /**
     * removeFilteredNamedGroupingPolicy removes a role inheritance rule from the current named policy, field filters can be specified.
     *
     * @param ptype the policy type, can be "g", "g2", "g3", ..
     * @param fieldIndex the policy rule's start index to be matched.
     * @param fieldValues the field values to be matched, value ""
     *                    means not to match this field.
     * @return succeeds or not.
     */
    removeFilteredNamedGroupingPolicy(ptype, fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeFilteredPolicyInternal('g', ptype, fieldIndex, fieldValues);
        });
    }
    /**
     * addFunction adds a customized function.
     * @param name custom function name
     * @param func function
     */
    addFunction(name, func) {
        return __awaiter(this, void 0, void 0, function* () {
            this.fm.addFunction(name, func);
        });
    }
}
exports.ManagementEnforcer = ManagementEnforcer;


/***/ }),

/***/ 806:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


const constants = __webpack_require__(199);
const utils = __webpack_require__(265);

/**
 * Constants
 */

const {
  MAX_LENGTH,
  POSIX_REGEX_SOURCE,
  REGEX_NON_SPECIAL_CHARS,
  REGEX_SPECIAL_CHARS_BACKREF,
  REPLACEMENTS
} = constants;

/**
 * Helpers
 */

const expandRange = (args, options) => {
  if (typeof options.expandRange === 'function') {
    return options.expandRange(...args, options);
  }

  args.sort();
  const value = `[${args.join('-')}]`;

  try {
    /* eslint-disable-next-line no-new */
    new RegExp(value);
  } catch (ex) {
    return args.map(v => utils.escapeRegex(v)).join('..');
  }

  return value;
};

/**
 * Create the message for a syntax error
 */

const syntaxError = (type, char) => {
  return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
};

/**
 * Parse the given input string.
 * @param {String} input
 * @param {Object} options
 * @return {Object}
 */

const parse = (input, options) => {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string');
  }

  input = REPLACEMENTS[input] || input;

  const opts = { ...options };
  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;

  let len = input.length;
  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }

  const bos = { type: 'bos', value: '', output: opts.prepend || '' };
  const tokens = [bos];

  const capture = opts.capture ? '' : '?:';
  const win32 = utils.isWindows(options);

  // create constants based on platform, for windows or posix
  const PLATFORM_CHARS = constants.globChars(win32);
  const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);

  const {
    DOT_LITERAL,
    PLUS_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOT_SLASH,
    NO_DOTS_SLASH,
    QMARK,
    QMARK_NO_DOT,
    STAR,
    START_ANCHOR
  } = PLATFORM_CHARS;

  const globstar = (opts) => {
    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
  };

  const nodot = opts.dot ? '' : NO_DOT;
  const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
  let star = opts.bash === true ? globstar(opts) : STAR;

  if (opts.capture) {
    star = `(${star})`;
  }

  // minimatch options support
  if (typeof opts.noext === 'boolean') {
    opts.noextglob = opts.noext;
  }

  const state = {
    input,
    index: -1,
    start: 0,
    dot: opts.dot === true,
    consumed: '',
    output: '',
    prefix: '',
    backtrack: false,
    negated: false,
    brackets: 0,
    braces: 0,
    parens: 0,
    quotes: 0,
    globstar: false,
    tokens
  };

  input = utils.removePrefix(input, state);
  len = input.length;

  const extglobs = [];
  const braces = [];
  const stack = [];
  let prev = bos;
  let value;

  /**
   * Tokenizing helpers
   */

  const eos = () => state.index === len - 1;
  const peek = state.peek = (n = 1) => input[state.index + n];
  const advance = state.advance = () => input[++state.index];
  const remaining = () => input.slice(state.index + 1);
  const consume = (value = '', num = 0) => {
    state.consumed += value;
    state.index += num;
  };
  const append = token => {
    state.output += token.output != null ? token.output : token.value;
    consume(token.value);
  };

  const negate = () => {
    let count = 1;

    while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
      advance();
      state.start++;
      count++;
    }

    if (count % 2 === 0) {
      return false;
    }

    state.negated = true;
    state.start++;
    return true;
  };

  const increment = type => {
    state[type]++;
    stack.push(type);
  };

  const decrement = type => {
    state[type]--;
    stack.pop();
  };

  /**
   * Push tokens onto the tokens array. This helper speeds up
   * tokenizing by 1) helping us avoid backtracking as much as possible,
   * and 2) helping us avoid creating extra tokens when consecutive
   * characters are plain text. This improves performance and simplifies
   * lookbehinds.
   */

  const push = tok => {
    if (prev.type === 'globstar') {
      const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
      const isExtglob = tok.extglob === true || (extglobs.length && (tok.type === 'pipe' || tok.type === 'paren'));

      if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = 'star';
        prev.value = '*';
        prev.output = star;
        state.output += prev.output;
      }
    }

    if (extglobs.length && tok.type !== 'paren' && !EXTGLOB_CHARS[tok.value]) {
      extglobs[extglobs.length - 1].inner += tok.value;
    }

    if (tok.value || tok.output) append(tok);
    if (prev && prev.type === 'text' && tok.type === 'text') {
      prev.value += tok.value;
      prev.output = (prev.output || '') + tok.value;
      return;
    }

    tok.prev = prev;
    tokens.push(tok);
    prev = tok;
  };

  const extglobOpen = (type, value) => {
    const token = { ...EXTGLOB_CHARS[value], conditions: 1, inner: '' };

    token.prev = prev;
    token.parens = state.parens;
    token.output = state.output;
    const output = (opts.capture ? '(' : '') + token.open;

    increment('parens');
    push({ type, value, output: state.output ? '' : ONE_CHAR });
    push({ type: 'paren', extglob: true, value: advance(), output });
    extglobs.push(token);
  };

  const extglobClose = token => {
    let output = token.close + (opts.capture ? ')' : '');

    if (token.type === 'negate') {
      let extglobStar = star;

      if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
        extglobStar = globstar(opts);
      }

      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
        output = token.close = `)$))${extglobStar}`;
      }

      if (token.prev.type === 'bos' && eos()) {
        state.negatedExtglob = true;
      }
    }

    push({ type: 'paren', extglob: true, value, output });
    decrement('parens');
  };

  /**
   * Fast paths
   */

  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
    let backslashes = false;

    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
      if (first === '\\') {
        backslashes = true;
        return m;
      }

      if (first === '?') {
        if (esc) {
          return esc + first + (rest ? QMARK.repeat(rest.length) : '');
        }
        if (index === 0) {
          return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
        }
        return QMARK.repeat(chars.length);
      }

      if (first === '.') {
        return DOT_LITERAL.repeat(chars.length);
      }

      if (first === '*') {
        if (esc) {
          return esc + first + (rest ? star : '');
        }
        return star;
      }
      return esc ? m : `\\${m}`;
    });

    if (backslashes === true) {
      if (opts.unescape === true) {
        output = output.replace(/\\/g, '');
      } else {
        output = output.replace(/\\+/g, m => {
          return m.length % 2 === 0 ? '\\\\' : (m ? '\\' : '');
        });
      }
    }

    if (output === input && opts.contains === true) {
      state.output = input;
      return state;
    }

    state.output = utils.wrapOutput(output, state, options);
    return state;
  }

  /**
   * Tokenize input until we reach end-of-string
   */

  while (!eos()) {
    value = advance();

    if (value === '\u0000') {
      continue;
    }

    /**
     * Escaped characters
     */

    if (value === '\\') {
      const next = peek();

      if (next === '/' && opts.bash !== true) {
        continue;
      }

      if (next === '.' || next === ';') {
        continue;
      }

      if (!next) {
        value += '\\';
        push({ type: 'text', value });
        continue;
      }

      // collapse slashes to reduce potential for exploits
      const match = /^\\+/.exec(remaining());
      let slashes = 0;

      if (match && match[0].length > 2) {
        slashes = match[0].length;
        state.index += slashes;
        if (slashes % 2 !== 0) {
          value += '\\';
        }
      }

      if (opts.unescape === true) {
        value = advance() || '';
      } else {
        value += advance() || '';
      }

      if (state.brackets === 0) {
        push({ type: 'text', value });
        continue;
      }
    }

    /**
     * If we're inside a regex character class, continue
     * until we reach the closing bracket.
     */

    if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
      if (opts.posix !== false && value === ':') {
        const inner = prev.value.slice(1);
        if (inner.includes('[')) {
          prev.posix = true;

          if (inner.includes(':')) {
            const idx = prev.value.lastIndexOf('[');
            const pre = prev.value.slice(0, idx);
            const rest = prev.value.slice(idx + 2);
            const posix = POSIX_REGEX_SOURCE[rest];
            if (posix) {
              prev.value = pre + posix;
              state.backtrack = true;
              advance();

              if (!bos.output && tokens.indexOf(prev) === 1) {
                bos.output = ONE_CHAR;
              }
              continue;
            }
          }
        }
      }

      if ((value === '[' && peek() !== ':') || (value === '-' && peek() === ']')) {
        value = `\\${value}`;
      }

      if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
        value = `\\${value}`;
      }

      if (opts.posix === true && value === '!' && prev.value === '[') {
        value = '^';
      }

      prev.value += value;
      append({ value });
      continue;
    }

    /**
     * If we're inside a quoted string, continue
     * until we reach the closing double quote.
     */

    if (state.quotes === 1 && value !== '"') {
      value = utils.escapeRegex(value);
      prev.value += value;
      append({ value });
      continue;
    }

    /**
     * Double quotes
     */

    if (value === '"') {
      state.quotes = state.quotes === 1 ? 0 : 1;
      if (opts.keepQuotes === true) {
        push({ type: 'text', value });
      }
      continue;
    }

    /**
     * Parentheses
     */

    if (value === '(') {
      increment('parens');
      push({ type: 'paren', value });
      continue;
    }

    if (value === ')') {
      if (state.parens === 0 && opts.strictBrackets === true) {
        throw new SyntaxError(syntaxError('opening', '('));
      }

      const extglob = extglobs[extglobs.length - 1];
      if (extglob && state.parens === extglob.parens + 1) {
        extglobClose(extglobs.pop());
        continue;
      }

      push({ type: 'paren', value, output: state.parens ? ')' : '\\)' });
      decrement('parens');
      continue;
    }

    /**
     * Square brackets
     */

    if (value === '[') {
      if (opts.nobracket === true || !remaining().includes(']')) {
        if (opts.nobracket !== true && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError('closing', ']'));
        }

        value = `\\${value}`;
      } else {
        increment('brackets');
      }

      push({ type: 'bracket', value });
      continue;
    }

    if (value === ']') {
      if (opts.nobracket === true || (prev && prev.type === 'bracket' && prev.value.length === 1)) {
        push({ type: 'text', value, output: `\\${value}` });
        continue;
      }

      if (state.brackets === 0) {
        if (opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError('opening', '['));
        }

        push({ type: 'text', value, output: `\\${value}` });
        continue;
      }

      decrement('brackets');

      const prevValue = prev.value.slice(1);
      if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
        value = `/${value}`;
      }

      prev.value += value;
      append({ value });

      // when literal brackets are explicitly disabled
      // assume we should match with a regex character class
      if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
        continue;
      }

      const escaped = utils.escapeRegex(prev.value);
      state.output = state.output.slice(0, -prev.value.length);

      // when literal brackets are explicitly enabled
      // assume we should escape the brackets to match literal characters
      if (opts.literalBrackets === true) {
        state.output += escaped;
        prev.value = escaped;
        continue;
      }

      // when the user specifies nothing, try to match both
      prev.value = `(${capture}${escaped}|${prev.value})`;
      state.output += prev.value;
      continue;
    }

    /**
     * Braces
     */

    if (value === '{' && opts.nobrace !== true) {
      increment('braces');

      const open = {
        type: 'brace',
        value,
        output: '(',
        outputIndex: state.output.length,
        tokensIndex: state.tokens.length
      };

      braces.push(open);
      push(open);
      continue;
    }

    if (value === '}') {
      const brace = braces[braces.length - 1];

      if (opts.nobrace === true || !brace) {
        push({ type: 'text', value, output: value });
        continue;
      }

      let output = ')';

      if (brace.dots === true) {
        const arr = tokens.slice();
        const range = [];

        for (let i = arr.length - 1; i >= 0; i--) {
          tokens.pop();
          if (arr[i].type === 'brace') {
            break;
          }
          if (arr[i].type !== 'dots') {
            range.unshift(arr[i].value);
          }
        }

        output = expandRange(range, opts);
        state.backtrack = true;
      }

      if (brace.comma !== true && brace.dots !== true) {
        const out = state.output.slice(0, brace.outputIndex);
        const toks = state.tokens.slice(brace.tokensIndex);
        brace.value = brace.output = '\\{';
        value = output = '\\}';
        state.output = out;
        for (const t of toks) {
          state.output += (t.output || t.value);
        }
      }

      push({ type: 'brace', value, output });
      decrement('braces');
      braces.pop();
      continue;
    }

    /**
     * Pipes
     */

    if (value === '|') {
      if (extglobs.length > 0) {
        extglobs[extglobs.length - 1].conditions++;
      }
      push({ type: 'text', value });
      continue;
    }

    /**
     * Commas
     */

    if (value === ',') {
      let output = value;

      const brace = braces[braces.length - 1];
      if (brace && stack[stack.length - 1] === 'braces') {
        brace.comma = true;
        output = '|';
      }

      push({ type: 'comma', value, output });
      continue;
    }

    /**
     * Slashes
     */

    if (value === '/') {
      // if the beginning of the glob is "./", advance the start
      // to the current index, and don't add the "./" characters
      // to the state. This greatly simplifies lookbehinds when
      // checking for BOS characters like "!" and "." (not "./")
      if (prev.type === 'dot' && state.index === state.start + 1) {
        state.start = state.index + 1;
        state.consumed = '';
        state.output = '';
        tokens.pop();
        prev = bos; // reset "prev" to the first token
        continue;
      }

      push({ type: 'slash', value, output: SLASH_LITERAL });
      continue;
    }

    /**
     * Dots
     */

    if (value === '.') {
      if (state.braces > 0 && prev.type === 'dot') {
        if (prev.value === '.') prev.output = DOT_LITERAL;
        const brace = braces[braces.length - 1];
        prev.type = 'dots';
        prev.output += value;
        prev.value += value;
        brace.dots = true;
        continue;
      }

      if ((state.braces + state.parens) === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
        push({ type: 'text', value, output: DOT_LITERAL });
        continue;
      }

      push({ type: 'dot', value, output: DOT_LITERAL });
      continue;
    }

    /**
     * Question marks
     */

    if (value === '?') {
      const isGroup = prev && prev.value === '(';
      if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        extglobOpen('qmark', value);
        continue;
      }

      if (prev && prev.type === 'paren') {
        const next = peek();
        let output = value;

        if (next === '<' && !utils.supportsLookbehinds()) {
          throw new Error('Node.js v10 or higher is required for regex lookbehinds');
        }

        if ((prev.value === '(' && !/[!=<:]/.test(next)) || (next === '<' && !/<([!=]|\w+>)/.test(remaining()))) {
          output = `\\${value}`;
        }

        push({ type: 'text', value, output });
        continue;
      }

      if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
        push({ type: 'qmark', value, output: QMARK_NO_DOT });
        continue;
      }

      push({ type: 'qmark', value, output: QMARK });
      continue;
    }

    /**
     * Exclamation
     */

    if (value === '!') {
      if (opts.noextglob !== true && peek() === '(') {
        if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
          extglobOpen('negate', value);
          continue;
        }
      }

      if (opts.nonegate !== true && state.index === 0) {
        negate();
        continue;
      }
    }

    /**
     * Plus
     */

    if (value === '+') {
      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        extglobOpen('plus', value);
        continue;
      }

      if ((prev && prev.value === '(') || opts.regex === false) {
        push({ type: 'plus', value, output: PLUS_LITERAL });
        continue;
      }

      if ((prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace')) || state.parens > 0) {
        push({ type: 'plus', value });
        continue;
      }

      push({ type: 'plus', value: PLUS_LITERAL });
      continue;
    }

    /**
     * Plain text
     */

    if (value === '@') {
      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        push({ type: 'at', extglob: true, value, output: '' });
        continue;
      }

      push({ type: 'text', value });
      continue;
    }

    /**
     * Plain text
     */

    if (value !== '*') {
      if (value === '$' || value === '^') {
        value = `\\${value}`;
      }

      const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
      if (match) {
        value += match[0];
        state.index += match[0].length;
      }

      push({ type: 'text', value });
      continue;
    }

    /**
     * Stars
     */

    if (prev && (prev.type === 'globstar' || prev.star === true)) {
      prev.type = 'star';
      prev.star = true;
      prev.value += value;
      prev.output = star;
      state.backtrack = true;
      state.globstar = true;
      consume(value);
      continue;
    }

    let rest = remaining();
    if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
      extglobOpen('star', value);
      continue;
    }

    if (prev.type === 'star') {
      if (opts.noglobstar === true) {
        consume(value);
        continue;
      }

      const prior = prev.prev;
      const before = prior.prev;
      const isStart = prior.type === 'slash' || prior.type === 'bos';
      const afterStar = before && (before.type === 'star' || before.type === 'globstar');

      if (opts.bash === true && (!isStart || (rest[0] && rest[0] !== '/'))) {
        push({ type: 'star', value, output: '' });
        continue;
      }

      const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
      const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
      if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
        push({ type: 'star', value, output: '' });
        continue;
      }

      // strip consecutive `/**/`
      while (rest.slice(0, 3) === '/**') {
        const after = input[state.index + 4];
        if (after && after !== '/') {
          break;
        }
        rest = rest.slice(3);
        consume('/**', 3);
      }

      if (prior.type === 'bos' && eos()) {
        prev.type = 'globstar';
        prev.value += value;
        prev.output = globstar(opts);
        state.output = prev.output;
        state.globstar = true;
        consume(value);
        continue;
      }

      if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;

        prev.type = 'globstar';
        prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
        prev.value += value;
        state.globstar = true;
        state.output += prior.output + prev.output;
        consume(value);
        continue;
      }

      if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
        const end = rest[1] !== void 0 ? '|$' : '';

        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;

        prev.type = 'globstar';
        prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
        prev.value += value;

        state.output += prior.output + prev.output;
        state.globstar = true;

        consume(value + advance());

        push({ type: 'slash', value: '/', output: '' });
        continue;
      }

      if (prior.type === 'bos' && rest[0] === '/') {
        prev.type = 'globstar';
        prev.value += value;
        prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
        state.output = prev.output;
        state.globstar = true;
        consume(value + advance());
        push({ type: 'slash', value: '/', output: '' });
        continue;
      }

      // remove single star from output
      state.output = state.output.slice(0, -prev.output.length);

      // reset previous token to globstar
      prev.type = 'globstar';
      prev.output = globstar(opts);
      prev.value += value;

      // reset output with globstar
      state.output += prev.output;
      state.globstar = true;
      consume(value);
      continue;
    }

    const token = { type: 'star', value, output: star };

    if (opts.bash === true) {
      token.output = '.*?';
      if (prev.type === 'bos' || prev.type === 'slash') {
        token.output = nodot + token.output;
      }
      push(token);
      continue;
    }

    if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
      token.output = value;
      push(token);
      continue;
    }

    if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
      if (prev.type === 'dot') {
        state.output += NO_DOT_SLASH;
        prev.output += NO_DOT_SLASH;

      } else if (opts.dot === true) {
        state.output += NO_DOTS_SLASH;
        prev.output += NO_DOTS_SLASH;

      } else {
        state.output += nodot;
        prev.output += nodot;
      }

      if (peek() !== '*') {
        state.output += ONE_CHAR;
        prev.output += ONE_CHAR;
      }
    }

    push(token);
  }

  while (state.brackets > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
    state.output = utils.escapeLast(state.output, '[');
    decrement('brackets');
  }

  while (state.parens > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
    state.output = utils.escapeLast(state.output, '(');
    decrement('parens');
  }

  while (state.braces > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
    state.output = utils.escapeLast(state.output, '{');
    decrement('braces');
  }

  if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
    push({ type: 'maybe_slash', value: '', output: `${SLASH_LITERAL}?` });
  }

  // rebuild the output if we had to backtrack at any point
  if (state.backtrack === true) {
    state.output = '';

    for (const token of state.tokens) {
      state.output += token.output != null ? token.output : token.value;

      if (token.suffix) {
        state.output += token.suffix;
      }
    }
  }

  return state;
};

/**
 * Fast paths for creating regular expressions for common glob patterns.
 * This can significantly speed up processing and has very little downside
 * impact when none of the fast paths match.
 */

parse.fastpaths = (input, options) => {
  const opts = { ...options };
  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
  const len = input.length;
  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }

  input = REPLACEMENTS[input] || input;
  const win32 = utils.isWindows(options);

  // create constants based on platform, for windows or posix
  const {
    DOT_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOTS,
    NO_DOTS_SLASH,
    STAR,
    START_ANCHOR
  } = constants.globChars(win32);

  const nodot = opts.dot ? NO_DOTS : NO_DOT;
  const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
  const capture = opts.capture ? '' : '?:';
  const state = { negated: false, prefix: '' };
  let star = opts.bash === true ? '.*?' : STAR;

  if (opts.capture) {
    star = `(${star})`;
  }

  const globstar = (opts) => {
    if (opts.noglobstar === true) return star;
    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
  };

  const create = str => {
    switch (str) {
      case '*':
        return `${nodot}${ONE_CHAR}${star}`;

      case '.*':
        return `${DOT_LITERAL}${ONE_CHAR}${star}`;

      case '*.*':
        return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

      case '*/*':
        return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;

      case '**':
        return nodot + globstar(opts);

      case '**/*':
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;

      case '**/*.*':
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

      case '**/.*':
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;

      default: {
        const match = /^(.*?)\.(\w+)$/.exec(str);
        if (!match) return;

        const source = create(match[1]);
        if (!source) return;

        return source + DOT_LITERAL + match[2];
      }
    }
  };

  const output = utils.removePrefix(input, state);
  let source = create(output);

  if (source && opts.strictSlashes !== true) {
    source += `${SLASH_LITERAL}?`;
  }

  return source;
};

module.exports = parse;


/***/ }),

/***/ 807:
/***/ (function(module) {

"use strict";


module.exports = {
  MAX_LENGTH: 1024 * 64,

  // Digits
  CHAR_0: '0', /* 0 */
  CHAR_9: '9', /* 9 */

  // Alphabet chars.
  CHAR_UPPERCASE_A: 'A', /* A */
  CHAR_LOWERCASE_A: 'a', /* a */
  CHAR_UPPERCASE_Z: 'Z', /* Z */
  CHAR_LOWERCASE_Z: 'z', /* z */

  CHAR_LEFT_PARENTHESES: '(', /* ( */
  CHAR_RIGHT_PARENTHESES: ')', /* ) */

  CHAR_ASTERISK: '*', /* * */

  // Non-alphabetic chars.
  CHAR_AMPERSAND: '&', /* & */
  CHAR_AT: '@', /* @ */
  CHAR_BACKSLASH: '\\', /* \ */
  CHAR_BACKTICK: '`', /* ` */
  CHAR_CARRIAGE_RETURN: '\r', /* \r */
  CHAR_CIRCUMFLEX_ACCENT: '^', /* ^ */
  CHAR_COLON: ':', /* : */
  CHAR_COMMA: ',', /* , */
  CHAR_DOLLAR: '$', /* . */
  CHAR_DOT: '.', /* . */
  CHAR_DOUBLE_QUOTE: '"', /* " */
  CHAR_EQUAL: '=', /* = */
  CHAR_EXCLAMATION_MARK: '!', /* ! */
  CHAR_FORM_FEED: '\f', /* \f */
  CHAR_FORWARD_SLASH: '/', /* / */
  CHAR_HASH: '#', /* # */
  CHAR_HYPHEN_MINUS: '-', /* - */
  CHAR_LEFT_ANGLE_BRACKET: '<', /* < */
  CHAR_LEFT_CURLY_BRACE: '{', /* { */
  CHAR_LEFT_SQUARE_BRACKET: '[', /* [ */
  CHAR_LINE_FEED: '\n', /* \n */
  CHAR_NO_BREAK_SPACE: '\u00A0', /* \u00A0 */
  CHAR_PERCENT: '%', /* % */
  CHAR_PLUS: '+', /* + */
  CHAR_QUESTION_MARK: '?', /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: '>', /* > */
  CHAR_RIGHT_CURLY_BRACE: '}', /* } */
  CHAR_RIGHT_SQUARE_BRACKET: ']', /* ] */
  CHAR_SEMICOLON: ';', /* ; */
  CHAR_SINGLE_QUOTE: '\'', /* ' */
  CHAR_SPACE: ' ', /*   */
  CHAR_TAB: '\t', /* \t */
  CHAR_UNDERSCORE: '_', /* _ */
  CHAR_VERTICAL_LINE: '|', /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: '\uFEFF' /* \uFEFF */
};


/***/ }),

/***/ 811:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(55), exports);
__exportStar(__webpack_require__(897), exports);
__exportStar(__webpack_require__(311), exports);


/***/ }),

/***/ 827:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(366);


/***/ }),

/***/ 884:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFilteredAdapter = exports.Filter = void 0;
const fileAdapter_1 = __webpack_require__(137);
const helper_1 = __webpack_require__(932);
const util_1 = __webpack_require__(703);
class Filter {
    constructor() {
        this.g = [];
        this.p = [];
    }
}
exports.Filter = Filter;
class DefaultFilteredAdapter extends fileAdapter_1.FileAdapter {
    constructor(filePath) {
        super(filePath);
        this.filtered = false;
    }
    // loadPolicy loads all policy rules from the storage.
    loadPolicy(model) {
        const _super = Object.create(null, {
            loadPolicy: { get: () => super.loadPolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.filtered = false;
            yield _super.loadPolicy.call(this, model);
        });
    }
    loadFilteredPolicy(model, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter) {
                yield this.loadPolicy(model);
                return;
            }
            if (!this.filePath) {
                throw new Error('invalid file path, file path cannot be empty');
            }
            yield this.loadFilteredPolicyFile(model, filter, helper_1.Helper.loadPolicyLine);
            this.filtered = true;
        });
    }
    loadFilteredPolicyFile(model, filter, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyBuf = yield util_1.readFile(this.filePath);
            const lines = bodyBuf.toString().split('\n');
            lines.forEach((n, index) => {
                const line = n.trim();
                if (!line || DefaultFilteredAdapter.filterLine(line, filter)) {
                    return;
                }
                handler(line, model);
            });
        });
    }
    isFiltered() {
        return this.filtered;
    }
    savePolicy(model) {
        const _super = Object.create(null, {
            savePolicy: { get: () => super.savePolicy }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (this.filtered) {
                throw new Error('cannot save a filtered policy');
            }
            yield _super.savePolicy.call(this, model);
            return true;
        });
    }
    static filterLine(line, filter) {
        if (!filter) {
            return false;
        }
        const p = line.split(',');
        if (p.length === 0) {
            return true;
        }
        let filterSlice = [];
        switch (p[0].trim()) {
            case 'p':
                filterSlice = filter.p;
                break;
            case 'g':
                filterSlice = filter.g;
                break;
        }
        return DefaultFilteredAdapter.filterWords(p, filterSlice);
    }
    static filterWords(line, filter) {
        if (line.length < filter.length + 1) {
            return true;
        }
        let skipLine = false;
        for (let i = 0; i < filter.length; i++) {
            if (filter[i] && filter[i].trim() !== filter[i + 1].trim()) {
                skipLine = true;
                break;
            }
        }
        return skipLine;
    }
}
exports.DefaultFilteredAdapter = DefaultFilteredAdapter;


/***/ }),

/***/ 897:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 913:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 914:
/***/ (function(module) {

"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function(num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};


/***/ }),

/***/ 929:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionMap = void 0;
const util = __webpack_require__(703);
// FunctionMap represents the collection of Function.
class FunctionMap {
    /**
     * constructor is the constructor for FunctionMap.
     */
    constructor() {
        this.functions = new Map();
    }
    // loadFunctionMap loads an initial function map.
    static loadFunctionMap() {
        const fm = new FunctionMap();
        fm.addFunction('keyMatch', util.keyMatchFunc);
        fm.addFunction('keyMatch2', util.keyMatch2Func);
        fm.addFunction('keyMatch3', util.keyMatch3Func);
        fm.addFunction('keyMatch4', util.keyMatch4Func);
        fm.addFunction('regexMatch', util.regexMatchFunc);
        fm.addFunction('ipMatch', util.ipMatchFunc);
        fm.addFunction('globMatch', util.globMatch);
        return fm;
    }
    // addFunction adds an expression function.
    addFunction(name, func) {
        if (!this.functions.get(name)) {
            this.functions.set(name, func);
        }
    }
    // getFunctions return all functions.
    getFunctions() {
        return this.functions;
    }
}
exports.FunctionMap = FunctionMap;


/***/ }),

/***/ 932:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
class Helper {
    static loadPolicyLine(line, model) {
        if (!line || line.trim() === '' || line.charAt(0) === '#') {
            return;
        }
        const tokens = line.split(',').map(n => n.trim());
        const key = tokens[0];
        const sec = key.substring(0, 1);
        const item = model.model.get(sec);
        if (!item) {
            return;
        }
        const policy = item.get(key);
        if (!policy) {
            return;
        }
        policy.policy.push(tokens.slice(1));
    }
}
exports.Helper = Helper;


/***/ }),

/***/ 967:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2019 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const Util = __webpack_require__(703);
exports.Util = Util;
__exportStar(__webpack_require__(499), exports);
__exportStar(__webpack_require__(642), exports);
__exportStar(__webpack_require__(111), exports);
__exportStar(__webpack_require__(91), exports);
__exportStar(__webpack_require__(538), exports);
__exportStar(__webpack_require__(374), exports);
__exportStar(__webpack_require__(283), exports);
__exportStar(__webpack_require__(259), exports);
__exportStar(__webpack_require__(811), exports);


/***/ }),

/***/ 973:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globMatch = exports.keyMatch4Func = exports.generateGFunction = exports.ipMatchFunc = exports.regexMatchFunc = exports.keyMatch3Func = exports.keyMatch2Func = exports.keyMatchFunc = void 0;
const ip = __webpack_require__(769);
const micromatch_1 = __webpack_require__(74);
// regexMatch determines whether key1 matches the pattern of key2 in regular expression.
function regexMatch(key1, key2) {
    return new RegExp(key2).test(key1);
}
// keyMatch determines whether key1 matches the pattern of key2 (similar to RESTful path),
// key2 can contain a *.
// For example, '/foo/bar' matches '/foo/*'
function keyMatch(key1, key2) {
    const pos = key2.indexOf('*');
    if (pos === -1) {
        return key1 === key2;
    }
    if (key1.length > pos) {
        return key1.slice(0, pos) === key2.slice(0, pos);
    }
    return key1 === key2.slice(0, pos);
}
// keyMatchFunc is the wrapper for keyMatch.
function keyMatchFunc(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return keyMatch(name1, name2);
}
exports.keyMatchFunc = keyMatchFunc;
// keyMatch2 determines whether key1 matches the pattern of key2 (similar to RESTful path),
// key2 can contain a *.
// For example, '/foo/bar' matches '/foo/*', '/resource1' matches '/:resource'
function keyMatch2(key1, key2) {
    key2 = key2.replace(/\/\*/g, '/.*');
    const regexp = new RegExp(/(.*):[^/]+(.*)/g);
    for (;;) {
        if (!key2.includes('/:')) {
            break;
        }
        key2 = key2.replace(regexp, '$1[^/]+$2');
    }
    return regexMatch(key1, '^' + key2 + '$');
}
// keyMatch2Func is the wrapper for keyMatch2.
function keyMatch2Func(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return keyMatch2(name1, name2);
}
exports.keyMatch2Func = keyMatch2Func;
// keyMatch3 determines whether key1 matches the pattern of key2 (similar to RESTful path), key2 can contain a *.
// For example, '/foo/bar' matches '/foo/*', '/resource1' matches '/{resource}'
function keyMatch3(key1, key2) {
    key2 = key2.replace(/\/\*/g, '/.*');
    const regexp = new RegExp(/(.*){[^/]+}(.*)/g);
    for (;;) {
        if (!key2.includes('/{')) {
            break;
        }
        key2 = key2.replace(regexp, '$1[^/]+$2');
    }
    return regexMatch(key1, key2);
}
// keyMatch3Func is the wrapper for keyMatch3.
function keyMatch3Func(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return keyMatch3(name1, name2);
}
exports.keyMatch3Func = keyMatch3Func;
// keyMatch4 determines whether key1 matches the pattern of key2 (similar to RESTful path), key2 can contain a *.
// Besides what keyMatch3 does, keyMatch4 can also match repeated patterns:
// "/parent/123/child/123" matches "/parent/{id}/child/{id}"
// "/parent/123/child/456" does not match "/parent/{id}/child/{id}"
// But keyMatch3 will match both.
function keyMatch4(key1, key2) {
    key2 = key2.replace(/\/\*/g, '/.*');
    const tokens = [];
    let j = -1;
    for (let i = 0; i < key2.length; i++) {
        const c = key2.charAt(i);
        if (c === '{') {
            j = i;
        }
        else if (c === '}') {
            tokens.push(key2.substring(j, i + 1));
        }
    }
    let regexp = new RegExp(/(.*){[^/]+}(.*)/g);
    for (;;) {
        if (!key2.includes('/{')) {
            break;
        }
        key2 = key2.replace(regexp, '$1([^/]+)$2');
    }
    regexp = new RegExp('^' + key2 + '$');
    let values = regexp.exec(key1);
    if (!values) {
        return false;
    }
    values = values.slice(1);
    if (tokens.length !== values.length) {
        throw new Error('KeyMatch4: number of tokens is not equal to number of values');
    }
    const m = new Map();
    tokens.forEach((n, index) => {
        const key = tokens[index];
        let v = m.get(key);
        if (!v) {
            v = [];
        }
        if (values) {
            v.push(values[index]);
        }
        m.set(key, v);
    });
    for (const value of m.values()) {
        if (value.length > 1) {
            for (let i = 1; i < values.length; i++) {
                if (values[i] !== values[0]) {
                    return false;
                }
            }
        }
    }
    return true;
}
// keyMatch4Func is the wrapper for keyMatch4.
function keyMatch4Func(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return keyMatch4(name1, name2);
}
exports.keyMatch4Func = keyMatch4Func;
// regexMatchFunc is the wrapper for regexMatch.
function regexMatchFunc(...args) {
    const [arg0, arg1] = args;
    const name1 = (arg0 || '').toString();
    const name2 = (arg1 || '').toString();
    return regexMatch(name1, name2);
}
exports.regexMatchFunc = regexMatchFunc;
// ipMatch determines whether IP address ip1 matches the pattern of IP address ip2,
// ip2 can be an IP address or a CIDR pattern.
// For example, '192.168.2.123' matches '192.168.2.0/24'
function ipMatch(ip1, ip2) {
    // check ip1
    if (!(ip.isV4Format(ip1) || ip.isV6Format(ip1))) {
        throw new Error('invalid argument: ip1 in ipMatch() function is not an IP address.');
    }
    // check ip2
    const cidrParts = ip2.split('/');
    if (cidrParts.length === 2) {
        return ip.cidrSubnet(ip2).contains(ip1);
    }
    else {
        if (!(ip.isV4Format(ip2) || ip.isV6Format(ip2))) {
            console.log(ip2);
            throw new Error('invalid argument: ip2 in ipMatch() function is not an IP address.');
        }
        return ip.isEqual(ip1, ip2);
    }
}
// ipMatchFunc is the wrapper for ipMatch.
function ipMatchFunc(...args) {
    const [arg0, arg1] = args;
    const ip1 = (arg0 || '').toString();
    const ip2 = (arg1 || '').toString();
    return ipMatch(ip1, ip2);
}
exports.ipMatchFunc = ipMatchFunc;
/**
 * Returns true if the specified `string` matches the given glob `pattern`.
 *
 * @param string String to match
 * @param pattern Glob pattern to use for matching.
 * @returns Returns true if the string matches the glob pattern.
 *
 * @example
 * ```javascript
 * globMatch("abc.conf", "*.conf") => true
 * ```
 */
function globMatch(string, pattern) {
    const ok = micromatch_1.isMatch(string, pattern);
    return ok;
}
exports.globMatch = globMatch;
// generateGFunction is the factory method of the g(_, _) function.
function generateGFunction(rm) {
    return function func(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [arg0, arg1] = args;
            const name1 = (arg0 || '').toString();
            const name2 = (arg1 || '').toString();
            if (!rm) {
                return name1 === name2;
            }
            else if (args.length === 2) {
                return yield rm.hasLink(name1, name2);
            }
            else {
                const domain = args[2].toString();
                return yield rm.hasLink(name1, name2, domain);
            }
        });
    };
}
exports.generateGFunction = generateGFunction;


/***/ }),

/***/ 988:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultRoleManager = void 0;
const log_1 = __webpack_require__(811);
/**
 * Role represents the data structure for a role in RBAC.
 */
class Role {
    constructor(name) {
        this.name = name;
        this.roles = [];
    }
    addRole(role) {
        if (this.roles.some(n => n.name === role.name)) {
            return;
        }
        this.roles.push(role);
    }
    deleteRole(role) {
        this.roles = this.roles.filter(n => n.name !== role.name);
    }
    hasRole(name, hierarchyLevel) {
        if (this.name === name) {
            return true;
        }
        if (hierarchyLevel <= 0) {
            return false;
        }
        for (const role of this.roles) {
            if (role.hasRole(name, hierarchyLevel - 1)) {
                return true;
            }
        }
        return false;
    }
    hasDirectRole(name) {
        return this.roles.some(n => n.name === name);
    }
    toString() {
        return this.name + this.roles.join(', ');
    }
    getRoles() {
        return this.roles.map(n => n.name);
    }
}
// RoleManager provides a default implementation for the RoleManager interface
class DefaultRoleManager {
    /**
     * DefaultRoleManager is the constructor for creating an instance of the
     * default RoleManager implementation.
     *
     * @param maxHierarchyLevel the maximized allowed RBAC hierarchy level.
     */
    constructor(maxHierarchyLevel) {
        this.hasPattern = false;
        this.allRoles = new Map();
        this.maxHierarchyLevel = maxHierarchyLevel;
    }
    /**
     * e.buildRoleLinks must be called after addMatchingFunc().
     * @param name
     * @param fn
     * @example ```javascript
     * await e.GetRoleManager().addMatchingFunc('matcher', util.keyMatch); await e.buildRoleLinks();
     * ```
     */
    addMatchingFunc(name, fn) {
        return __awaiter(this, void 0, void 0, function* () {
            this.hasPattern = true;
            this.matchingFunc = fn;
        });
    }
    /**
     * addLink adds the inheritance link between role: name1 and role: name2.
     * aka role: name1 inherits role: name2.
     * domain is a prefix to the roles.
     */
    addLink(name1, name2, ...domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain.length === 1) {
                name1 = domain[0] + '::' + name1;
                name2 = domain[0] + '::' + name2;
            }
            else if (domain.length > 1) {
                throw new Error('error: domain should be 1 parameter');
            }
            const role1 = this.createRole(name1);
            const role2 = this.createRole(name2);
            role1.addRole(role2);
        });
    }
    /**
     * clear clears all stored data and resets the role manager to the initial state.
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            this.allRoles = new Map();
        });
    }
    /**
     * deleteLink deletes the inheritance link between role: name1 and role: name2.
     * aka role: name1 does not inherit role: name2 any more.
     * domain is a prefix to the roles.
     */
    deleteLink(name1, name2, ...domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain.length === 1) {
                name1 = domain[0] + '::' + name1;
                name2 = domain[0] + '::' + name2;
            }
            else if (domain.length > 1) {
                throw new Error('error: domain should be 1 parameter');
            }
            if (!this.hasRole(name1) || !this.hasRole(name2)) {
                return;
            }
            const role1 = this.createRole(name1);
            const role2 = this.createRole(name2);
            role1.deleteRole(role2);
        });
    }
    /**
     * getRoles gets the roles that a subject inherits.
     * domain is a prefix to the roles.
     */
    getRoles(name, ...domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain.length === 1) {
                name = domain[0] + '::' + name;
            }
            else if (domain.length > 1) {
                throw new Error('error: domain should be 1 parameter');
            }
            if (!this.hasRole(name)) {
                return [];
            }
            let roles = this.createRole(name).getRoles();
            if (domain.length === 1) {
                roles = roles.map(n => n.substring(domain[0].length + 2, n.length));
            }
            return roles;
        });
    }
    /**
     * getUsers gets the users that inherits a subject.
     * domain is an unreferenced parameter here, may be used in other implementations.
     */
    getUsers(name, ...domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain.length === 1) {
                name = domain[0] + '::' + name;
            }
            else if (domain.length > 1) {
                throw new Error('error: domain should be 1 parameter');
            }
            if (!this.hasRole(name)) {
                return [];
            }
            let users = [...this.allRoles.values()].filter(n => n.hasDirectRole(name)).map(n => n.name);
            if (domain.length === 1) {
                users = users.map(n => n.substring(domain[0].length + 2, n.length));
            }
            return users;
        });
    }
    /**
     * hasLink determines whether role: name1 inherits role: name2.
     * domain is a prefix to the roles.
     */
    hasLink(name1, name2, ...domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain.length === 1) {
                name1 = domain[0] + '::' + name1;
                name2 = domain[0] + '::' + name2;
            }
            else if (domain.length > 1) {
                throw new Error('error: domain should be 1 parameter');
            }
            if (name1 === name2) {
                return true;
            }
            if (!this.hasRole(name1) || !this.hasRole(name2)) {
                return false;
            }
            const role1 = this.createRole(name1);
            return role1.hasRole(name2, this.maxHierarchyLevel);
        });
    }
    /**
     * printRoles prints all the roles to log.
     */
    printRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            [...this.allRoles.values()].forEach(n => {
                log_1.logPrint(n.toString());
            });
        });
    }
    createRole(name) {
        let role = this.allRoles.get(name);
        if (!role) {
            const newRole = new Role(name);
            role = newRole;
            this.allRoles.set(name, newRole);
        }
        if (!this.hasPattern) {
            return role;
        }
        for (const roleName of this.allRoles.keys()) {
            if (!(this.matchingFunc(name, roleName) && name !== roleName)) {
                continue;
            }
            const inherit = this.allRoles.get(roleName);
            if (inherit) {
                role.addRole(inherit);
            }
        }
        return role;
    }
    hasRole(name) {
        if (!this.hasPattern) {
            return this.allRoles.has(name);
        }
        else {
            for (const role of this.allRoles.keys()) {
                if (this.matchingFunc(name, role)) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.DefaultRoleManager = DefaultRoleManager;


/***/ }),

/***/ 999:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringAdapter = void 0;
const helper_1 = __webpack_require__(932);
/**
 * StringAdapter is the string adapter for Casbin.
 * It can load policy from a string.
 */
class StringAdapter {
    /**
     * StringAdapter is the constructor for StringAdapter.
     * @param {string} policy policy formatted as a CSV string.
     */
    constructor(policy) {
        this.policy = policy;
    }
    loadPolicy(model) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.policy) {
                throw new Error('Invalid policy, policy document cannot be false-y');
            }
            yield this.loadRules(model, helper_1.Helper.loadPolicyLine);
        });
    }
    loadRules(model, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const rules = this.policy.split('\n');
            rules.forEach((n, index) => {
                const line = n.trim();
                if (!line) {
                    return;
                }
                handler(n, model);
            });
        });
    }
    /**
     * savePolicy saves all policy rules to the storage.
     */
    savePolicy(model) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
    /**
     * addPolicy adds a policy rule to the storage.
     */
    addPolicy(sec, ptype, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
    /**
     * removePolicy removes a policy rule from the storage.
     */
    removePolicy(sec, ptype, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
    /**
     * removeFilteredPolicy removes policy rules that match the filter from the storage.
     */
    removeFilteredPolicy(sec, ptype, fieldIndex, ...fieldValues) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.StringAdapter = StringAdapter;


/***/ })

/******/ });
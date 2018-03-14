/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.main = (function() {

    /**
     * Namespace main.
     * @exports main
     * @namespace
     */
    var main = {};

    main.State = (function() {

        /**
         * Properties of a State.
         * @memberof main
         * @interface IState
         * @property {number|Long|null} [counterVal] State counterVal
         */

        /**
         * Constructs a new State.
         * @memberof main
         * @classdesc Represents a State.
         * @implements IState
         * @constructor
         * @param {main.IState=} [properties] Properties to set
         */
        function State(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * State counterVal.
         * @member {number|Long} counterVal
         * @memberof main.State
         * @instance
         */
        State.prototype.counterVal = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new State instance using the specified properties.
         * @function create
         * @memberof main.State
         * @static
         * @param {main.IState=} [properties] Properties to set
         * @returns {main.State} State instance
         */
        State.create = function create(properties) {
            return new State(properties);
        };

        /**
         * Encodes the specified State message. Does not implicitly {@link main.State.verify|verify} messages.
         * @function encode
         * @memberof main.State
         * @static
         * @param {main.IState} message State message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        State.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.counterVal != null && message.hasOwnProperty("counterVal"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.counterVal);
            return writer;
        };

        /**
         * Encodes the specified State message, length delimited. Does not implicitly {@link main.State.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.State
         * @static
         * @param {main.IState} message State message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        State.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a State message from the specified reader or buffer.
         * @function decode
         * @memberof main.State
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.State} State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        State.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.State();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.counterVal = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a State message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.State
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.State} State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        State.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a State message.
         * @function verify
         * @memberof main.State
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        State.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.counterVal != null && message.hasOwnProperty("counterVal"))
                if (!$util.isInteger(message.counterVal) && !(message.counterVal && $util.isInteger(message.counterVal.low) && $util.isInteger(message.counterVal.high)))
                    return "counterVal: integer|Long expected";
            return null;
        };

        /**
         * Creates a State message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.State
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.State} State
         */
        State.fromObject = function fromObject(object) {
            if (object instanceof $root.main.State)
                return object;
            var message = new $root.main.State();
            if (object.counterVal != null)
                if ($util.Long)
                    (message.counterVal = $util.Long.fromValue(object.counterVal)).unsigned = true;
                else if (typeof object.counterVal === "string")
                    message.counterVal = parseInt(object.counterVal, 10);
                else if (typeof object.counterVal === "number")
                    message.counterVal = object.counterVal;
                else if (typeof object.counterVal === "object")
                    message.counterVal = new $util.LongBits(object.counterVal.low >>> 0, object.counterVal.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a State message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.State
         * @static
         * @param {main.State} message State
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        State.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.counterVal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.counterVal = options.longs === String ? "0" : 0;
            if (message.counterVal != null && message.hasOwnProperty("counterVal"))
                if (typeof message.counterVal === "number")
                    object.counterVal = options.longs === String ? String(message.counterVal) : message.counterVal;
                else
                    object.counterVal = options.longs === String ? $util.Long.prototype.toString.call(message.counterVal) : options.longs === Number ? new $util.LongBits(message.counterVal.low >>> 0, message.counterVal.high >>> 0).toNumber(true) : message.counterVal;
            return object;
        };

        /**
         * Converts this State to JSON.
         * @function toJSON
         * @memberof main.State
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        State.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return State;
    })();

    return main;
})();

module.exports = $root;

/* tslint:disable */
import * as $protobuf from 'protobufjs'

/** Namespace main. */
export namespace main {
  /** Properties of a State. */
  interface IState {
    /** State counterVal */
    counterVal?: number | Long | null
  }

  /** Represents a State. */
  class State implements IState {
    /**
     * Constructs a new State.
     * @param [properties] Properties to set
     */
    constructor(properties?: main.IState)

    /** State counterVal. */
    public counterVal: number | Long

    /**
     * Creates a new State instance using the specified properties.
     * @param [properties] Properties to set
     * @returns State instance
     */
    public static create(properties?: main.IState): main.State

    /**
     * Encodes the specified State message. Does not implicitly {@link main.State.verify|verify} messages.
     * @param message State message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: main.IState,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified State message, length delimited. Does not implicitly {@link main.State.verify|verify} messages.
     * @param message State message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: main.IState,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a State message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): main.State

    /**
     * Decodes a State message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): main.State

    /**
     * Verifies a State message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a State message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns State
     */
    public static fromObject(object: { [k: string]: any }): main.State

    /**
     * Creates a plain object from a State message. Also converts values to other types if specified.
     * @param message State
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: main.State,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this State to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }
}

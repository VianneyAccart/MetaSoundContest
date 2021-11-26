export class Instrument {
  private _id: string;
  private _description: string;
  private _image: string;
  private _name: string;
  private _origin: string;
  private _score: number;
  private _sound: string;

  constructor(
    id: string,
    description: string,
    image: string,
    name: string,
    origin: string,
    score: number,
    sound: string
  ) {
    this._id = id;
    this._description = description;
    this._image = image;
    this._name = name;
    this._origin = origin;
    this._score = score;
    this._sound = sound;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter image
   * @return {string}
   */
  public get image(): string {
    return this._image;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter origin
   * @return {string}
   */
  public get origin(): string {
    return this._origin;
  }

  /**
   * Getter score
   * @return {number}
   */
  public get score(): number {
    return this._score;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter image
   * @param {string} value
   */
  public set image(value: string) {
    this._image = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter origin
   * @param {string} value
   */
  public set origin(value: string) {
    this._origin = value;
  }

  /**
   * Setter score
   * @param {number} value
   */
  public set score(value: number) {
    this._score = value;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Setter score
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get sound(): string {
    return this._sound;
  }

  /**
   * Setter score
   * @param {string} value
   */
  public set sound(value: string) {
    this._sound = value;
  }
}

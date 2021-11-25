export class Instrument {

    private _id?: string;
    private _description?: string;
    private _image?: string;
    private _name?: string;
    private _origin?: string;
    private _score?: number;

     /**
     * Getter description
     * @return {string}
     */
	public get description(): string | undefined {
		return this._description;
	}

    /**
     * Getter image
     * @return {string}
     */
	public get image(): string | undefined {
		return this._image;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string | undefined {
		return this._name;
	}

    /**
     * Getter origin
     * @return {string}
     */
	public get origin(): string | undefined {
		return this._origin;
	}

    /**
     * Getter score
     * @return {number}
     */
	public get score(): number | undefined {
		return this._score;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string | undefined) {
		this._description = value;
	}

    /**
     * Setter image
     * @param {string} value
     */
	public set image(value: string | undefined) {
		this._image = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string | undefined) {
		this._name = value;
	}

    /**
     * Setter origin
     * @param {string} value
     */
	public set origin(value: string | undefined) {
		this._origin = value;
	}

    /**
     * Setter score
     * @param {number} value
     */
	public set score(value: number | undefined) {
		this._score = value;
	}

         /**
     * Getter description
     * @return {string}
     */
	public get id(): string | undefined {
		return this._id;
	}

        /**
     * Setter score
     * @param {string} value
     */
	public set id(value: string | undefined) {
		this._id = value;
	}
}
export class Aegi {
    private _OrignText: string;
    private _AegiText: string;

    constructor(t: string) {
        this._OrignText = t;
        this._AegiText = t;
    }
    public get OrignText() { return this._OrignText; }
    public get AegiText() { return this._AegiText; }
    public getRandom(n:number, m:number){ return Math.floor(Math.random() * (m + 1 - n) + n); }

    public insertText(char: string, ratio = 0.2, self = this): this {
        const dotLen = Math.floor(self.AegiText.length * ratio);
        const res = self.AegiText.length % dotLen == 0 ? new Array(self.AegiText.length / dotLen) : new Array(Math.floor(self.AegiText.length / dotLen) + 1);
        for(let i = 0; i < self.AegiText.length; i=i+dotLen){
            const text = self.AegiText.slice(i, i + dotLen);
            const rand = this.getRandom(1,text.length);
            res[i / dotLen] = text.slice(0, rand) + char + text.slice(rand);
        }
        self._AegiText = res.join('');
        return self
    }

    public genAegiText(): string{
        this._AegiText = this.insertText('っ', 0.3).insertText('♡').insertText('…').AegiText
        return this.AegiText
    }
}
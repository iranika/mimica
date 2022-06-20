import { Aegi } from 'src/store/utils/Aegi';
import { describe, test, expect } from "@jest/globals";

test('AegiTest', () => {
    expect((new Aegi('ふぃくしょんじゃないのかよ、騙された')).OrignText).toBe('ふぃくしょんじゃないのかよ、騙された');
    const aegi = new Aegi('しもたけせんせぇはえっちじゃないよ！')
    console.log(aegi);
});
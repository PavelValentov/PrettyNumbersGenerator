class PrettyNumbers {
    constructor() {

    }

    static isNumberMirrored(n) {
        let s = n.toString();

        if (s.length < 3) return false;

        let mirrored = true;
        const mid = Math.floor(s.length / 2);
        for (let m = 0; m < mid; m++) {
            if (s[m] !== s[s.length - m - 1]) {
                mirrored = false;
                break;
            }
        }

        return mirrored;
    }

    static isOneDigitNumber(n) {
        let s = n.toString();

        let oneNumbered = true;
        for (let m = 0; m < s.length - 1; m++) {
            if (s[m] !== s[m + 1]) {
                oneNumbered = false;
                break;
            }
        }

        return oneNumbered;
    }

    static getPairsCountInNumber(n) {
        let s = n.toString();
        let pairs = 0;

        let oneNumbered = true;
        for (let m = 0; m < s.length - 1; m++) {
            if (s[m] === s[m + 1]) {
                pairs++;
                m++;
            }
        }

        return pairs;
    }
}

for (let i = 100000; i < 200000; i++) {
    let s = i.toString();

    PrettyNumbers.isNumberMirrored(i) ? s += ';1' : s += ';0';

    PrettyNumbers.isOneDigitNumber(i) ? s += ';1' : s += ';0';

    s += ';' + PrettyNumbers.getPairsCountInNumber(i).toString();

    console.log(s);
}

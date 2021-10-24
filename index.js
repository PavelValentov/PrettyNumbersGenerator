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

    for (let m = 0; m < s.length - 1; m++) {
      if (s[m] === s[m + 1]) {
        pairs++;
        m++;
      }
    }

    return pairs;
  }

  static getTriplesCountInNumber(n) {
    let s = n.toString();
    let triples = 0;

    for (let m = 0; m < s.length - 2; m++) {
      if (s[m] === s[m + 1] && s[m] === s[m + 2] ) {
        triples++;
        m += 2;
      }
    }

    return triples;
  }
}

console.log('number;mirrored;one-digit;pairs;triples');

let count = 0;
let s;
let isPremium;

for (let i = 0; i < 1000000; i++) {
  s = i.toString();
  isPremium = false;

  if (PrettyNumbers.isNumberMirrored(i)) {
    isPremium = true;
    s += ';1';
  } else {
    s += ';0';
  }

  if (PrettyNumbers.isOneDigitNumber(i)) {
    isPremium = true;
    s += ';1';
  } else {
    s += ';0';
  }

  if (PrettyNumbers.getPairsCountInNumber(i) > 2) {
    isPremium = true;
    s += ';' + PrettyNumbers.getPairsCountInNumber(i).toString();
  } else {
    s += ';0';
  }

  if (PrettyNumbers.getTriplesCountInNumber(i) > 0) {
    isPremium = true;
    s += ';' + PrettyNumbers.getTriplesCountInNumber(i).toString();
  } else {
    s += ';0';
  }

  if (isPremium) {
    console.log(s);

    count++;
  }

}

console.log('***', count.toString());

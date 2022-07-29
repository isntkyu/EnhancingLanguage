class Word {
  constructor(public term: string, public def: string) {}
}

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  get(term: string): string {
    return this.words[term];
  }

  delete(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }

  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }

  showAll(): void {
    const keys = Object.keys(this.words);

    for (let i = 0; i < keys.length; i++) {
      console.log(this.words[keys[i]]);
    }
  }

  count(): number {
    const keys = Object.keys(this.words);
    return keys.length;
  }
}

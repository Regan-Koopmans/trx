export class Stream {
  private elements: any[];

  private constructor(incoming: any[]) {
    this.elements = incoming;
  }

  static fromList(elements: any[]): Stream {
    return new Stream(elements);
  }

  static of(...elements: any[]): Stream {
    return new Stream(elements);
  }

  public map(lambda: any) {
    return new Stream(this.elements.map(lambda));
  }

  public filter(predicate: any) {
    return new Stream(this.elements.filter(predicate));
  }

  public reduce(collector: any) {
    return new Stream(this.elements.reduce(collector));
  }

  public sum() {
    return this.reduce((x: any, y: any) => x + y);
  }

  public blockingGet(): any[] {
    return this.elements;
  }
}

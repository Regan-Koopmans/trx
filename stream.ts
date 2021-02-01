
export class Stream { 

    private elements: any[];

    private constructor(incoming: any[]) {
        this.elements = incoming;
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

    public blockingGet(): any[] {
        return this.elements;
    }
}

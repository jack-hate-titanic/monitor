interface Array<T> {
    MyReduce(callbackfn: (pre: T, cur: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
}
declare let arr: number[];

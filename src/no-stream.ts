import { ANS } from "./ans";
import { ANSR } from "./ansr";
import { NS } from "./ns";
import { NSR } from "./nsr";

export function ns<T>(
  iter:
    | { [Symbol.iterator](): IterableIterator<T> }
    | (() => IterableIterator<T>)
) {
  return NS.create(iter);
}

ns.concat = NS.concat;

export function nsr<T>() {
  return NSR.create<T>();
}

export function ans<T>(
  iter:
    | { [Symbol.iterator](): IterableIterator<T> }
    | (() => AsyncIterableIterator<T>)
) {
  return ANS.create(iter);
}

ans.ob = ANS.observable;
ans.concat = ANS.concat;
ans.zip = ANS.zip;
ans.race = ANS.race;

export function ansr<T>() {
  return ANSR.create<T>();
}

import Rx from 'rxjs';

const arrayValues = [1,2,3,4,5,6];
const arrayPromise = Promise.resolve(arrayValues);

Rx.Observable.from(
  arrayPromise
).subscribe(console.log)
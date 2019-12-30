import Rx from 'rxjs';

const range = Rx.Observable.range(1,100)
  .every(n => n % 2 === 0)
  .subscribe(console.log)
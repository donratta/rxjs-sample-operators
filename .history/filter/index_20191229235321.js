import Rx from 'rxjs';

Rx.Observable.range(1,10)
  .filter(x => x%2 === 0)
  .subscribe(console.log)
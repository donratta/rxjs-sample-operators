import Rx from 'rxjs';

const interval = Rx.Observable.timer(1000, 500)
  .map(n => n+ 1)
  .startWith(0)
  .subscribe(console.log)
import Rx from 'rxjs';

const interval = Rx.Observable.timer(1000, 500)
  .map(n => n+ 1)
  .subscribe(console.log)
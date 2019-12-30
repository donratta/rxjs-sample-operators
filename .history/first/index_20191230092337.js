import Rx from 'rxjs';

const interval = Rx.Observable.interval(100)
  .first()
  .subscribe(console.log)
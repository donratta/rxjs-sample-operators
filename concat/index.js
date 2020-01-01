import Rx from 'rxjs';

Rx.Observable
  .range(1,20)
  .concat(
    Rx.Observable
      .range(1,20)
      .skip(10)
  )
  .subscribe(console.log)
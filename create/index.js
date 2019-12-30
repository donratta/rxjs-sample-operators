import Rx from 'rxjs';

const sub = Rx.Observable.create(observer => {
  observer.next(42)
})

sub.subscribe(console.log)
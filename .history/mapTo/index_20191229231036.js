import Rx from 'rxjs';

const range = Rx.Observable.range(1,9);

range.subscribe(console.log);
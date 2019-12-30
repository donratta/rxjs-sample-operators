import Rx from 'rxjs';

const ticker = Rx.Observable.interval(1000);
ticker.subscribe((a) => console.log(a))
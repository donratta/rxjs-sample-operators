import Rx from 'rxjs';

const ticker = Rx.Observable.ticker(1000);
ticker.subscribe((a) => console.log(a))
import Rx from 'rxjs';


const rangeObservable = Rx.Observable.range(0,50)

rangeObservable.subscribe( e=> console.log(e));
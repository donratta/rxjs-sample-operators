import Rx from 'rxjs';


const rangeObservable = Rx.Observable.range(0,-1)

rangeObservable.subscribe( e=> console.log(e));
import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable()
export class HttpProgressService {
    public progress$: ReplaySubject<number> = new ReplaySubject();

    constructor() {

    }

    update(number: number) {
        this.progress$.next(number);
    }

    complete() {
        this.progress$.next(0); 
    }
}

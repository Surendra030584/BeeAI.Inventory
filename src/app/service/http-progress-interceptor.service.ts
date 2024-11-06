import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpProgressService } from "./http-progress.service";


@Injectable()
export class HttpProgressInterceptor implements HttpInterceptor {

    constructor(
        private httpSrv: HttpProgressService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.reportProgress) {
            return next.handle(req).pipe(
                tap((event: HttpEvent<any>) => {
                    if (event.type === HttpEventType.Sent) {
                        this.httpSrv.update(10);
                    }
                    else if (event.type === HttpEventType.DownloadProgress) {
                      const n = Math.round(100 * (event.loaded || 1) / (event.total || 1))
                        this.httpSrv.update(n);
                    } else if (event.type === HttpEventType.Response) {
                        setTimeout(() => {
                            this.httpSrv.complete(); // hide progress bar
                        }, 100);
                    }
                }, error => {
                    this.httpSrv.complete(); // hide progress bar
                })
            );
        } else {
            return next.handle(req);
        }
    }
}

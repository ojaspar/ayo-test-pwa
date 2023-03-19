import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { setAPILoadingState } from 'src/app/store/shared/app.action';
import { AppResponseInterface } from 'src/app/store/types/appState.interface';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private appStore: Store<AppResponseInterface>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    Promise.resolve(null).then(() =>
      this.appStore.dispatch(
        setAPILoadingState({ apiLoading: { isLoading: true } })
      )
    );
    return next.handle(req).pipe(
      finalize(() => {
        this.appStore.dispatch(
          setAPILoadingState({ apiLoading: { isLoading: false } })
        );
      })
    );
  }
}

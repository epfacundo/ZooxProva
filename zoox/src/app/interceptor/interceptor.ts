import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            request = request.clone({
                setHeaders: { 
                    "x-api-key": `${API_CONFIG.KEY}`
                }
            });       

        return next.handle(request);
    }
}
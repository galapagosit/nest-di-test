import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TestAService } from 'src/test-a/test-a.service';

@Injectable()
export class InterceptorA implements NestInterceptor {
  constructor(private readonly testAService: TestAService) {}

  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('InterceptorA called');
    console.log('this.testAService', this.testAService);
    return next.handle();
  }
}

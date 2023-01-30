import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterceptorA } from './interceptors/interceptor-a';
import { TestAModule } from './test-a/test-a.module';

@Module({
  imports: [TestAModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: InterceptorA,
    },
  ],
})
export class AppModule {}

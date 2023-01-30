import { Module } from '@nestjs/common';
import { TestAService } from './test-a.service';

@Module({
  providers: [TestAService],
  exports: [TestAService],
})
export class TestAModule {}

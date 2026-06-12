import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthResponse } from './dto/health.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  HealthCheck(): HealthResponse {
    return this.appService.HealthCheck();
  }
}

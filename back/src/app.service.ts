import { Injectable } from '@nestjs/common';
import { HealthResponse } from './dto/health.dto';

@Injectable()
export class AppService {
  HealthCheck(): HealthResponse {
    return {
      status: 'ok',
      timestamp: new Date().toLocaleString(),
    };
  }
}

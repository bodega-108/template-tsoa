import { Health } from '../models/health';

class HealthService {
    
    getStatus():Health{
        const healthCheck:Health ={
            status: "running"
        }
        return healthCheck;
    }
}

export default new HealthService();
import { Controller, Get, Route } from "tsoa";
import { Health } from "../models/health";
import pupu from "../services/health.service";


@Route("health")
export class HealthController extends Controller {
    @Get("status")
    getHealhtCheck():Health{
        return pupu.getStatus()
    }
}
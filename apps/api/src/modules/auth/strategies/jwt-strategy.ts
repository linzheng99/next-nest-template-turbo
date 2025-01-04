import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Inject, Injectable } from "@nestjs/common";
import jwtConfig from "../config/jwt-config";
import { ConfigType } from "@nestjs/config";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { AuthService } from "../auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(jwtConfig.KEY)
    private jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfiguration.secret,
      ignoreExpiration: false,
    })
  }

  async validate(payload: AuthJwtPayload) {
    const userId = payload.sub;
    return await this.authService.validateJwtUser(userId);
  }
}

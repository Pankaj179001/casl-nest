/*import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
@Injectable()
export class AdminRoleGaurd implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (req?.user) {
      const role = req.user?.roles;
      for (const key of role) {
        const userRole = key.roles.role;
        if (userRole == 'admin') {
          return true;
        }
      }
    }
    throw new UnauthorizedException(
      'you are not authorize for this url' + HttpStatus.BAD_REQUEST,
    );
  }
}
 */
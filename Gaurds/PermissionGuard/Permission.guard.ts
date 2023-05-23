/*import {  subject } from '@casl/ability';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { type } from 'os';

import {
  AppAbility,
  CaslAbilityFactory,
} from 'src/Access-Controll/Casl-Ability.Factory';
import {
  PERMISSION_CHECKER_KEY,
  RequiredPermission,
} from 'src/Custom-Decorators/Permission-Check.decorator';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly casleFactory: CaslAbilityFactory,
    private reflector: Reflector, // private readonly prisma: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const requiredPermissions =
      this.reflector.get<RequiredPermission[]>(
        PERMISSION_CHECKER_KEY,
        context.getHandler(),
      ) || [];
    const req: Request = context.switchToHttp().getRequest();
    const user = req.user as any;
    console.log({ user, requiredPermissions });
    const role = user?.roles[0]?.roles?.role;
    console.log({ role });
    const ability = await this.casleFactory.createForUser(user, role);
    const casl = requiredPermissions.every((permission) => {
      const condition = subject(permission[1], { business_id: +req.params.id });
      return this.isAllowed(ability, permission[0], condition);
    });

    return casl;
  }

  private isAllowed = (ability: any, permissions: any, condition: any) => {
    if (ability.can(permissions, condition) === false) {
      const message = "you're not authorize to visit this page";
      const error = 'Forbidden resource';
      throw new ForbiddenException({ statusCode: 403, message, error });
    }
    return ability.can(permissions, condition);
  }; //matches permissions from builder
}*/

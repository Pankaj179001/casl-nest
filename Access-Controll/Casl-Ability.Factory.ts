/*import {
  AbilityBuilder,
  AbilityClass,
  AbilityTuple,
  MatchConditions,
  PureAbility,
  subject,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { errfunction } from 'ErrorFunction';
import { RolePermissionService } from 'src/Role_Permission/Service/Role_Permission.Service';
export enum PermissionAction {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  MANAGE = 'manage',
}
export type AppAbility = PureAbility<AbilityTuple, MatchConditions>;
export const AppAbility = PureAbility as AbilityClass<AppAbility>;
const lambdaMatcher = (matchConditions: MatchConditions) => matchConditions;

export type PermissionObjectType = any;
@Injectable()
export class CaslAbilityFactory {
  constructor(private PermissionService: RolePermissionService) {}
  async createForUser(user: any, role: string): Promise<PureAbility> {
    // Retrieve user's permissions from the database (e.g., Prisma query)
    const userPermissions = await this.PermissionService.findPermissionsByRole(
      user,
    );

    const { can, build } = new AbilityBuilder(AppAbility);

    // Define rules based on the retrieved user permissions
    userPermissions.forEach((p) => {
      const id = role == 'member' ? user.id : user.business_id;
      const condition =
        role == 'super-admin' ? '' : ({ business_id }) => business_id === id;
      const action = p.permissions.name.split('-')[0];
      const route = p.permissions.name.split('-')[1];
      can(action, route, condition as any);
    });
    return build({ conditionsMatcher: lambdaMatcher });
  }
}*/

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RenkaList, UserDashbordModel, MileyPersonModel } = initSchema(schema);

export {
  RenkaList,
  UserDashbordModel,
  MileyPersonModel
};
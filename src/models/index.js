// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PersonRole, IllustratorModel, CircleModel, ProductModel, ActorModel, PriceModel } = initSchema(schema);

export {
  PersonRole,
  IllustratorModel,
  CircleModel,
  ProductModel,
  ActorModel,
  PriceModel
};
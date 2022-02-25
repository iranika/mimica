import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PersonRoleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IllustratorModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CircleModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ActorModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PriceModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PersonRole {
  readonly id: string;
  readonly Role?: string;
  readonly actormodelID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PersonRole, PersonRoleMetaData>);
  static copyOf(source: PersonRole, mutator: (draft: MutableModel<PersonRole, PersonRoleMetaData>) => MutableModel<PersonRole, PersonRoleMetaData> | void): PersonRole;
}

export declare class IllustratorModel {
  readonly id: string;
  readonly name?: string;
  readonly twitter_id?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<IllustratorModel, IllustratorModelMetaData>);
  static copyOf(source: IllustratorModel, mutator: (draft: MutableModel<IllustratorModel, IllustratorModelMetaData>) => MutableModel<IllustratorModel, IllustratorModelMetaData> | void): IllustratorModel;
}

export declare class CircleModel {
  readonly id: string;
  readonly name?: string;
  readonly dlsite_id?: string;
  readonly ProductModels?: (ProductModel | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CircleModel, CircleModelMetaData>);
  static copyOf(source: CircleModel, mutator: (draft: MutableModel<CircleModel, CircleModelMetaData>) => MutableModel<CircleModel, CircleModelMetaData> | void): CircleModel;
}

export declare class ProductModel {
  readonly id: string;
  readonly title?: string;
  readonly ActorModels?: (ActorModel | null)[];
  readonly PriceModels?: (PriceModel | null)[];
  readonly circlemodelID: string;
  readonly IllustratorModel?: (ActorModel | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProductModel, ProductModelMetaData>);
  static copyOf(source: ProductModel, mutator: (draft: MutableModel<ProductModel, ProductModelMetaData>) => MutableModel<ProductModel, ProductModelMetaData> | void): ProductModel;
}

export declare class ActorModel {
  readonly id: string;
  readonly name?: string;
  readonly twitter_id?: string;
  readonly productmodelID: string;
  readonly PersonRoles?: (PersonRole | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ActorModel, ActorModelMetaData>);
  static copyOf(source: ActorModel, mutator: (draft: MutableModel<ActorModel, ActorModelMetaData>) => MutableModel<ActorModel, ActorModelMetaData> | void): ActorModel;
}

export declare class PriceModel {
  readonly id: string;
  readonly price?: number;
  readonly productmodelID: string;
  readonly timestamp?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PriceModel, PriceModelMetaData>);
  static copyOf(source: PriceModel, mutator: (draft: MutableModel<PriceModel, PriceModelMetaData>) => MutableModel<PriceModel, PriceModelMetaData> | void): PriceModel;
}
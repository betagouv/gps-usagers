/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  email: string;
  firstName: string;
  lastName: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ForgotPasswordChangeMutation
// ====================================================

export interface ForgotPasswordChangeMutation_forgotPasswordChange {
  path: string;
  message: string;
}

export interface ForgotPasswordChangeMutation {
  forgotPasswordChange: ForgotPasswordChangeMutation_forgotPasswordChange[] | null;
}

export interface ForgotPasswordChangeMutationVariables {
  newPassword: string;
  key: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendForgotPasswordEmailMutation
// ====================================================

export interface SendForgotPasswordEmailMutation {
  sendForgotPasswordEmail: boolean | null;
}

export interface SendForgotPasswordEmailMutationVariables {
  email: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateJourneyMutation
// ====================================================

export interface CreateJourneyMutation_createJourney {
  id: string;
  type: string;
  name: string;
  title: string | null;
  description: string | null;
  icon: string | null;
  color: string;
  order: number;
  isActive: boolean;
}

export interface CreateJourneyMutation {
  createJourney: CreateJourneyMutation_createJourney;
}

export interface CreateJourneyMutationVariables {
  input: CreateJourneyInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteJourneyMutation
// ====================================================

export interface DeleteJourneyMutation_deleteJourney {
  id: string;
  type: string;
  name: string;
  title: string | null;
  description: string | null;
  icon: string | null;
  color: string;
  order: number;
  isActive: boolean;
}

export interface DeleteJourneyMutation {
  deleteJourney: DeleteJourneyMutation_deleteJourney;
}

export interface DeleteJourneyMutationVariables {
  journeyId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindDescendantJourneysQuery
// ====================================================

export interface FindDescendantJourneysQuery_findDescendantJourneys_data {
  type: string;
  value: string;
  link: string | null;
  address: string | null;
  zip: string | null;
  city: string | null;
}

export interface FindDescendantJourneysQuery_findDescendantJourneys_parent {
  id: string;
  name: string;
}

export interface FindDescendantJourneysQuery_findDescendantJourneys_ancestors {
  id: string;
  name: string;
}

export interface FindDescendantJourneysQuery_findDescendantJourneys_children_data {
  type: string;
  value: string;
  link: string | null;
  address: string | null;
  zip: string | null;
  city: string | null;
}

export interface FindDescendantJourneysQuery_findDescendantJourneys_children {
  id: string;
  type: string;
  name: string;
  title: string | null;
  description: string | null;
  icon: string | null;
  color: string;
  order: number;
  isActive: boolean;
  data: (FindDescendantJourneysQuery_findDescendantJourneys_children_data | null)[] | null;
}

export interface FindDescendantJourneysQuery_findDescendantJourneys {
  id: string;
  type: string;
  name: string;
  title: string | null;
  description: string | null;
  icon: string | null;
  color: string;
  order: number;
  isActive: boolean;
  data: (FindDescendantJourneysQuery_findDescendantJourneys_data | null)[] | null;
  parent: FindDescendantJourneysQuery_findDescendantJourneys_parent | null;
  ancestors: (FindDescendantJourneysQuery_findDescendantJourneys_ancestors | null)[] | null;
  children: (FindDescendantJourneysQuery_findDescendantJourneys_children | null)[] | null;
}

export interface FindDescendantJourneysQuery {
  findDescendantJourneys: FindDescendantJourneysQuery_findDescendantJourneys | null;
}

export interface FindDescendantJourneysQueryVariables {
  parentJourneyId?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindRootJourneysQuery
// ====================================================

export interface FindRootJourneysQuery_findRootJourneys_data {
  type: string;
  value: string;
  link: string | null;
  address: string | null;
  zip: string | null;
  city: string | null;
}

export interface FindRootJourneysQuery_findRootJourneys {
  id: string;
  type: string;
  name: string;
  title: string | null;
  description: string | null;
  icon: string | null;
  color: string;
  order: number;
  isActive: boolean;
  data: (FindRootJourneysQuery_findRootJourneys_data | null)[] | null;
}

export interface FindRootJourneysQuery {
  findRootJourneys: FindRootJourneysQuery_findRootJourneys[];
}

export interface FindRootJourneysQueryVariables {
  parentJourneyId?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: OrderJourneysMutation
// ====================================================

export interface OrderJourneysMutation {
  orderJourneys: boolean;
}

export interface OrderJourneysMutationVariables {
  input: (OrderJourneysInput | null)[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReadJourneyQuery
// ====================================================

export interface ReadJourneyQuery_readJourney {
  id: string;
  type: string;
  name: string;
  title: string | null;
  description: string | null;
  icon: string | null;
  color: string;
  order: number;
  isActive: boolean;
}

export interface ReadJourneyQuery {
  readJourney: ReadJourneyQuery_readJourney | null;
}

export interface ReadJourneyQueryVariables {
  journeyId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateJourneyMutation
// ====================================================

export interface UpdateJourneyMutation_updateJourney_data {
  type: string;
  value: string;
  link: string | null;
  address: string | null;
  zip: string | null;
  city: string | null;
}

export interface UpdateJourneyMutation_updateJourney {
  id: string;
  type: string;
  name: string;
  title: string | null;
  description: string | null;
  icon: string | null;
  color: string;
  order: number;
  isActive: boolean;
  data: (UpdateJourneyMutation_updateJourney_data | null)[] | null;
}

export interface UpdateJourneyMutation {
  updateJourney: UpdateJourneyMutation_updateJourney;
}

export interface UpdateJourneyMutationVariables {
  input: UpdateJourneyInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_errors {
  path: string;
  message: string;
}

export interface LoginMutation_login {
  errors: LoginMutation_login_errors[] | null;
  sessionId: string | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogoutMutation
// ====================================================

export interface LogoutMutation {
  logout: boolean | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register {
  path: string;
  message: string;
}

export interface RegisterMutation {
  register: RegisterMutation_register[] | null;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Journey create input
 */
export interface CreateJourneyInput {
  name: string;
  title?: string | null;
  description?: string | null;
  type: string;
  icon?: string | null;
  parent?: string | null;
  color: string;
  isActive: boolean;
}

export interface DataJourneyInput {
  type: string;
  value: string;
  link?: string | null;
  address?: string | null;
  zip?: string | null;
  city?: string | null;
}

export interface OrderJourneysInput {
  id: string;
  order: number;
}

/**
 * Journey update input
 */
export interface UpdateJourneyInput {
  id?: string | null;
  name?: string | null;
  title?: string | null;
  description?: string | null;
  data?: (DataJourneyInput | null)[] | null;
  icon?: string | null;
  type?: string | null;
  color?: string | null;
  isActive?: boolean | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

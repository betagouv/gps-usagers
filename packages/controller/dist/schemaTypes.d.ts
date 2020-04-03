export interface MeQuery_me {
    email: string;
    firstName: string;
    lastName: string;
}
export interface MeQuery {
    me: MeQuery_me | null;
}
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
export interface SendForgotPasswordEmailMutation {
    sendForgotPasswordEmail: boolean | null;
}
export interface SendForgotPasswordEmailMutationVariables {
    email: string;
}
export interface CreateJourneyMutation_createJourney_parent {
    id: string;
    name: string;
}
export interface CreateJourneyMutation_createJourney {
    id: string;
    type: string;
    name: string;
    title: string | null;
    description: string | null;
    icon: string | null;
    color: string | null;
    order: number;
    isActive: boolean;
    parent: CreateJourneyMutation_createJourney_parent | null;
}
export interface CreateJourneyMutation {
    createJourney: CreateJourneyMutation_createJourney;
}
export interface CreateJourneyMutationVariables {
    input: CreateJourneyInput;
}
export interface DeleteJourneyMutation_deleteJourney_parent {
    id: string;
}
export interface DeleteJourneyMutation_deleteJourney {
    id: string;
    type: string;
    name: string;
    title: string | null;
    description: string | null;
    icon: string | null;
    color: string | null;
    order: number;
    isActive: boolean;
    parent: DeleteJourneyMutation_deleteJourney_parent | null;
}
export interface DeleteJourneyMutation {
    deleteJourney: DeleteJourneyMutation_deleteJourney | null;
}
export interface DeleteJourneyMutationVariables {
    journeyId: string;
}
export interface FindDescendantJourneysQuery_findDescendantJourneys_data {
    type: string;
    value: string;
    link: string | null;
    address: string | null;
    zip: string | null;
    city: string | null;
}
export interface FindDescendantJourneysQuery_findDescendantJourneys_special {
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
    color: string | null;
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
    color: string | null;
    order: number;
    isActive: boolean;
    data: (FindDescendantJourneysQuery_findDescendantJourneys_data | null)[] | null;
    special: (FindDescendantJourneysQuery_findDescendantJourneys_special | null)[] | null;
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
    color: string | null;
    order: number;
    isActive: boolean;
    data: (FindRootJourneysQuery_findRootJourneys_data | null)[] | null;
}
export interface FindRootJourneysQuery {
    findRootJourneys: FindRootJourneysQuery_findRootJourneys[];
}
export interface OrderJourneysMutation {
    orderJourneys: boolean;
}
export interface OrderJourneysMutationVariables {
    input: (OrderJourneysInput | null)[];
}
export interface ReadJourneyQuery_readJourney {
    id: string;
    type: string;
    name: string;
    title: string | null;
    description: string | null;
    icon: string | null;
    color: string | null;
    order: number;
    isActive: boolean;
}
export interface ReadJourneyQuery {
    readJourney: ReadJourneyQuery_readJourney | null;
}
export interface ReadJourneyQueryVariables {
    journeyId: string;
}
export interface UpdateJourneyMutation_updateJourney_data {
    type: string;
    value: string;
    link: string | null;
    address: string | null;
    zip: string | null;
    city: string | null;
}
export interface UpdateJourneyMutation_updateJourney_parent {
    id: string;
    name: string;
}
export interface UpdateJourneyMutation_updateJourney {
    id: string;
    type: string;
    name: string;
    title: string | null;
    description: string | null;
    icon: string | null;
    color: string | null;
    order: number;
    isActive: boolean;
    data: (UpdateJourneyMutation_updateJourney_data | null)[] | null;
    parent: UpdateJourneyMutation_updateJourney_parent | null;
}
export interface UpdateJourneyMutation {
    updateJourney: UpdateJourneyMutation_updateJourney;
}
export interface UpdateJourneyMutationVariables {
    input: UpdateJourneyInput;
}
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
export interface LogoutMutation {
    logout: boolean | null;
}
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
/**
 * Journey create input
 */
export interface CreateJourneyInput {
    name: string;
    title?: string | null;
    description?: string | null;
    type: string;
    order?: number | null;
    icon?: string | null;
    parent?: string | null;
    color?: string | null;
    isActive?: boolean | null;
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
    special?: (DataJourneyInput | null)[] | null;
    icon?: string | null;
    type?: string | null;
    color?: string | null;
    isActive?: boolean | null;
}

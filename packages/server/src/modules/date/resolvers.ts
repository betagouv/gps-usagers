// import { GraphQLScalarType } from "graphql";
import { IResolvers } from "graphql-tools";
// import { Kind } from "graphql/language";

export const resolvers: IResolvers = {
  // MyDateTime: new GraphQLScalarType({
  //   name: "MyDateTime",
  //   description: "Date custom scalar type",
  //   parseValue(value:any) {
  //     return new Date(value); // value from the client
  //   },
  //   serialize(value:any) {
  //     return value.getTime(); // value sent to the client
  //   },
  //   parseLiteral(ast:any) {
  //     if (ast.kind === Kind.INT) {
  //       return new Date(ast.value); // ast value is always in string format
  //     }
  //     return null;
  //   }
  // }) as any,
  Query: {
    currentDate: () => new Date()
  }
};

export type GraphQLErrorResponse = {
  errors: GraphQLError[];
};

type GraphQLError = {
  message: string;
  locations: Location[];
  extensions: Extensions;
};

type Extensions = {
  classification: string;
};

type Location = {
  line: number;
  column: number;
};

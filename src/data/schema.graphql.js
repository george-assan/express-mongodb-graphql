import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Footfall {
    id: ID
    Prop_0: String
    Prop_1: String
    Prop_2: String
    Prop_3: String
    Prop_4: String
    Prop_5: String
    Prop_6: String
  }

  type Query {
    getFootfallRecords: [Footfall]
    findFootfallRecord(id: String): Footfall
  }
`;

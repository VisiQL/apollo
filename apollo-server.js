import {ApolloServer}  from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone'
import {typeDefs} from './schema';
// import typeDefs from './schema'
import {Query, People, PeopleInFilm, Pilot, PlanetsInFilm, Species, SpeciesInFilm, StarshipSpec, VesselsInFilm, Planet, Film, Vessel, Mutation} from   './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query, People, PeopleInFilm, Pilot, PlanetsInFilm, Species, SpeciesInFilm, StarshipSpec, VesselsInFilm, Planet, Film, Vessel, Mutation
  },
  introspection: true
});

async function startServer(server) {
  const { url } = await startStandaloneServer(server, {
    listen: {port: process.env.PORT || 4000},
  });
  console.log(`🚀 Server ready at ${url}`);
}
startServer(server);

// server will be listening at 4000
// server.listen().then(({ url }) => {
//   console.log('Server listening at ' + url);
// });  

// async function startApolloServer(server) {
//   const { url } = await server.listen({ port: process.env.PORT || 4000 });
//   console.log(`Server ready at ${url}`);
// }
// startApolloServer(server);
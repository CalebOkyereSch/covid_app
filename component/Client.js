import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";

const restLink = new HttpLink({
    uri:'https://covid19-graphql.netlify.app/'
})

export const client = new ApolloClient({
    link:restLink,
    cache: new InMemoryCache()
})
# React / Freezer / GraphQL (without Relay!)/ Webpack

# Current Version 0.1.0

# Overview

This is the GraphQL development server for the [react-freezer-graphql-client](https://github.com/BerndWessels/react-freezer-graphql-server).

# Create the Client Schema

To be able to consume a GraphQL Endpoint you have to create a `Client Schema` based on the `GraphQL Schema`.

To do so just run `npm run schema:update`.

This will create a `schema.client.js` besides your `schema.js`.

Copy only the `schema.client.js` to your [react-freezer-graphql-client](https://github.com/BerndWessels/react-freezer-graphql-server) project.

Repeat this whenever your `GraphQL Schema` changes.

# Production

Use [graphql-js](https://github.com/graphql/graphql-js) in a [lambda function](https://aws.amazon.com/lambda/details/).

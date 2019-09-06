# vixxstats
web app to view VIXX video statistics

## Server

#### Process for adding/updating a GraphQL query
1. Add a typeDef
2. Add a resolver
3. When using the query use this format to declare it in the component:
```js
const QUERY_NAME = gql`
  query($argument_to_send: DataType) {
    typeDefQueryName(query_param: $argument_to_send) {
      field_to_return
    }
  }
`;
```
4. Then use it like this:
```js
const { data, loading, error } = useQuery(QUERY_NAME, {variables: { query_param: 'argument' }});

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  let dataRaw = data['typeDefQueryName'];
```

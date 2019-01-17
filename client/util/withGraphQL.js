import { graphql } from "react-apollo";

export default (component, ...fns) => {
  const pipe = c => fns.reduce((acc, fn) => graphql(fn)(acc), c);
  return pipe(component);
};

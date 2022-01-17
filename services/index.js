import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        backgroundImg {
          url
        }
        createdAt
        slug
        title
        bigSized
        postDescription
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

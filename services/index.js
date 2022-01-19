import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC) {
        backgroundImg {
          url
        }
        createdAt
        slug
        title
        large
        tall
        titleColor {
          hex
        }
        
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};
export const getPostDetails = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        titleColor {
          hex
        }
        hasNotionLink
        notionLink
        fullPostText
        createdAt
        downloadFile {
          url
          fileName
        }
        hasDownload
        backgroundImg {
          url
        }
        backgroundClr {
          hex
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

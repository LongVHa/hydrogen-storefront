export const COLLECTION_QUERY = `#graphql
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      handle
      products(first: 4) {
        nodes {
          id
          title
          publishedAt
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;
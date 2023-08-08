export const PRODUCT_QUERY = `#graphql
  query product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      descriptionHtml
      media(first: 10) {
        nodes {
          ... on MediaImage {
            mediaContentType
            image {
              id
              url
              altText
              width
              height
            }
          }
          ... on Model3d {
            id
            mediaContentType
            sources {
              mimeType
              url
            }
          }
        }
      }
      SizeGuide: metafield (
        namespace: "custom"
        key: "size_guide") { 
            value
        }
      heroImage: metafield (
        namespace: "custom"
        key: "hero_image") { 
        reference {
            ... on MediaImage {
              image {
                originalSrc
              }
            }
          }
        }  
    }
  }
`;

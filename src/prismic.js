import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "arbirck";
const endpoint = prismic.getEndpoint(repositoryName);

export const client = prismic.createClient(endpoint, {
  // If your repo is private, add an access token
  accessToken: "",
});

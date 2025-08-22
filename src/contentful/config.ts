const ContentfulConfig = {
  space: '8nmbnmef5jq7',
  accessToken:
    '2b0af88ae087bef7c88668c9a00cd778656e22d726598b797a246415c9176eaf',
} as const;

export const createContentfulGraphQlUri = (): string => {
  const { space, accessToken } = ContentfulConfig;

  return `https://graphql.contentful.com/content/v1/spaces/${space}?access_token=${accessToken}`;
};

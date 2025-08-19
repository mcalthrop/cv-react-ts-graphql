import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Dimension: { input: any; output: any };
  HexColor: { input: any; output: any };
  Quality: { input: any; output: any };
};

export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};

export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type AssetLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetOrder =
  | 'contentType_ASC'
  | 'contentType_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'width_ASC'
  | 'width_DESC';

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Cv = Entry & {
  __typename?: 'Cv';
  contentfulMetadata: ContentfulMetadata;
  educationCollection?: Maybe<CvEducationCollection>;
  image?: Maybe<Asset>;
  interestsCollection?: Maybe<CvInterestsCollection>;
  linkedFrom?: Maybe<CvLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  onTheWebCollection?: Maybe<CvOnTheWebCollection>;
  overviewCollection?: Maybe<CvOverviewCollection>;
  sys: Sys;
  workHistoryCollection?: Maybe<CvWorkHistoryCollection>;
};

export type CvEducationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CvImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CvInterestsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CvLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CvNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CvOnTheWebCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CvOverviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CvWorkHistoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CvCollection = {
  __typename?: 'CvCollection';
  items: Array<Maybe<Cv>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CvEducationCollection = {
  __typename?: 'CvEducationCollection';
  items: Array<Maybe<Paragraph>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CvFilter = {
  AND?: InputMaybe<Array<InputMaybe<CvFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CvFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  educationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  interestsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onTheWebCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  overviewCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  workHistoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CvInterestsCollection = {
  __typename?: 'CvInterestsCollection';
  items: Array<Maybe<Paragraph>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CvLinkingCollections = {
  __typename?: 'CvLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type CvLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CvOnTheWebCollection = {
  __typename?: 'CvOnTheWebCollection';
  items: Array<Maybe<OnTheWeb>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CvOrder =
  | 'name_ASC'
  | 'name_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export type CvOverviewCollection = {
  __typename?: 'CvOverviewCollection';
  items: Array<Maybe<Paragraph>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CvWorkHistoryCollection = {
  __typename?: 'CvWorkHistoryCollection';
  items: Array<Maybe<WorkHistory>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type EntryOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export type ImageFormat =
  | 'AVIF'
  | 'JPG'
  | 'JPG_PROGRESSIVE'
  | 'PNG'
  | 'PNG8'
  | 'WEBP';

export type ImageResizeFocus =
  | 'BOTTOM'
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'CENTER'
  | 'FACE'
  | 'FACES'
  | 'LEFT'
  | 'RIGHT'
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT';

export type ImageResizeStrategy =
  | 'CROP'
  | 'FILL'
  | 'FIT'
  | 'PAD'
  | 'SCALE'
  | 'THUMB';

export type ImageTransformOptions = {
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<ImageFormat>;
  height?: InputMaybe<Scalars['Dimension']['input']>;
  quality?: InputMaybe<Scalars['Quality']['input']>;
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

export type OnTheWeb = Entry & {
  __typename?: 'OnTheWeb';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<OnTheWebLinkingCollections>;
  sys: Sys;
  url?: Maybe<Scalars['String']['output']>;
};

export type OnTheWebDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type OnTheWebLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type OnTheWebLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OnTheWebUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type OnTheWebCollection = {
  __typename?: 'OnTheWebCollection';
  items: Array<Maybe<OnTheWeb>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OnTheWebFilter = {
  AND?: InputMaybe<Array<InputMaybe<OnTheWebFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OnTheWebFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OnTheWebLinkingCollections = {
  __typename?: 'OnTheWebLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type OnTheWebLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type OnTheWebLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type OnTheWebOrder =
  | 'description_ASC'
  | 'description_DESC'
  | 'linkText_ASC'
  | 'linkText_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'url_ASC'
  | 'url_DESC';

export type Paragraph = Entry & {
  __typename?: 'Paragraph';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ParagraphLinkingCollections>;
  para?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};

export type ParagraphLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ParagraphParaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ParagraphCollection = {
  __typename?: 'ParagraphCollection';
  items: Array<Maybe<Paragraph>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ParagraphFilter = {
  AND?: InputMaybe<Array<InputMaybe<ParagraphFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ParagraphFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  para?: InputMaybe<Scalars['String']['input']>;
  para_contains?: InputMaybe<Scalars['String']['input']>;
  para_exists?: InputMaybe<Scalars['Boolean']['input']>;
  para_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  para_not?: InputMaybe<Scalars['String']['input']>;
  para_not_contains?: InputMaybe<Scalars['String']['input']>;
  para_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ParagraphLinkingCollections = {
  __typename?: 'ParagraphLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
  workHistoryCollection?: Maybe<WorkHistoryCollection>;
};

export type ParagraphLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ParagraphLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ParagraphLinkingCollectionsWorkHistoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ParagraphOrder =
  | 'para_ASC'
  | 'para_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  cv?: Maybe<Cv>;
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
  onTheWeb?: Maybe<OnTheWeb>;
  onTheWebCollection?: Maybe<OnTheWebCollection>;
  paragraph?: Maybe<Paragraph>;
  paragraphCollection?: Maybe<ParagraphCollection>;
  workHistory?: Maybe<WorkHistory>;
  workHistoryCollection?: Maybe<WorkHistoryCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryCvArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CvOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CvFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryOnTheWebArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryOnTheWebCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OnTheWebOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OnTheWebFilter>;
};

export type QueryParagraphArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryParagraphCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ParagraphOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ParagraphFilter>;
};

export type QueryWorkHistoryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryWorkHistoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<WorkHistoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkHistoryFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >;
};

export type WorkHistory = Entry & {
  __typename?: 'WorkHistory';
  contentfulMetadata: ContentfulMetadata;
  dateFrom?: Maybe<Scalars['String']['output']>;
  dateTo?: Maybe<Scalars['String']['output']>;
  employerName?: Maybe<Scalars['String']['output']>;
  employerUrl?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<WorkHistoryLinkingCollections>;
  location?: Maybe<Scalars['String']['output']>;
  responsibilitiesCollection?: Maybe<WorkHistoryResponsibilitiesCollection>;
  roleTitle?: Maybe<Scalars['String']['output']>;
  skillSummary?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
  viaEmployerName?: Maybe<Scalars['String']['output']>;
  viaEmployerUrl?: Maybe<Scalars['String']['output']>;
};

export type WorkHistoryDateFromArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WorkHistoryDateToArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WorkHistoryEmployerNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WorkHistoryEmployerUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WorkHistoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkHistoryLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WorkHistoryResponsibilitiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkHistoryRoleTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WorkHistorySkillSummaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WorkHistoryViaEmployerNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WorkHistoryViaEmployerUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WorkHistoryCollection = {
  __typename?: 'WorkHistoryCollection';
  items: Array<Maybe<WorkHistory>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type WorkHistoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<WorkHistoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WorkHistoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dateFrom?: InputMaybe<Scalars['String']['input']>;
  dateFrom_contains?: InputMaybe<Scalars['String']['input']>;
  dateFrom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dateFrom_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateFrom_not?: InputMaybe<Scalars['String']['input']>;
  dateFrom_not_contains?: InputMaybe<Scalars['String']['input']>;
  dateFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateTo?: InputMaybe<Scalars['String']['input']>;
  dateTo_contains?: InputMaybe<Scalars['String']['input']>;
  dateTo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dateTo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateTo_not?: InputMaybe<Scalars['String']['input']>;
  dateTo_not_contains?: InputMaybe<Scalars['String']['input']>;
  dateTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  employerName?: InputMaybe<Scalars['String']['input']>;
  employerName_contains?: InputMaybe<Scalars['String']['input']>;
  employerName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  employerName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  employerName_not?: InputMaybe<Scalars['String']['input']>;
  employerName_not_contains?: InputMaybe<Scalars['String']['input']>;
  employerName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  employerUrl?: InputMaybe<Scalars['String']['input']>;
  employerUrl_contains?: InputMaybe<Scalars['String']['input']>;
  employerUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  employerUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  employerUrl_not?: InputMaybe<Scalars['String']['input']>;
  employerUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  employerUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  location?: InputMaybe<Scalars['String']['input']>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsibilitiesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  roleTitle?: InputMaybe<Scalars['String']['input']>;
  roleTitle_contains?: InputMaybe<Scalars['String']['input']>;
  roleTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  roleTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roleTitle_not?: InputMaybe<Scalars['String']['input']>;
  roleTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  roleTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skillSummary_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  skillSummary_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  skillSummary_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  skillSummary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  viaEmployerName?: InputMaybe<Scalars['String']['input']>;
  viaEmployerName_contains?: InputMaybe<Scalars['String']['input']>;
  viaEmployerName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  viaEmployerName_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  viaEmployerName_not?: InputMaybe<Scalars['String']['input']>;
  viaEmployerName_not_contains?: InputMaybe<Scalars['String']['input']>;
  viaEmployerName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  viaEmployerUrl?: InputMaybe<Scalars['String']['input']>;
  viaEmployerUrl_contains?: InputMaybe<Scalars['String']['input']>;
  viaEmployerUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  viaEmployerUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  viaEmployerUrl_not?: InputMaybe<Scalars['String']['input']>;
  viaEmployerUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  viaEmployerUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type WorkHistoryLinkingCollections = {
  __typename?: 'WorkHistoryLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type WorkHistoryLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkHistoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkHistoryOrder =
  | 'dateFrom_ASC'
  | 'dateFrom_DESC'
  | 'dateTo_ASC'
  | 'dateTo_DESC'
  | 'employerName_ASC'
  | 'employerName_DESC'
  | 'employerUrl_ASC'
  | 'employerUrl_DESC'
  | 'location_ASC'
  | 'location_DESC'
  | 'roleTitle_ASC'
  | 'roleTitle_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'viaEmployerName_ASC'
  | 'viaEmployerName_DESC'
  | 'viaEmployerUrl_ASC'
  | 'viaEmployerUrl_DESC';

export type WorkHistoryResponsibilitiesCollection = {
  __typename?: 'WorkHistoryResponsibilitiesCollection';
  items: Array<Maybe<Paragraph>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CvFragment = {
  __typename?: 'Cv';
  image?: { __typename?: 'Asset'; url?: string | undefined } | undefined;
  overviewCollection?:
    | {
        __typename?: 'CvOverviewCollection';
        items: Array<
          { __typename?: 'Paragraph'; para?: string | undefined } | undefined
        >;
      }
    | undefined;
  onTheWebCollection?:
    | {
        __typename?: 'CvOnTheWebCollection';
        items: Array<
          | {
              __typename?: 'OnTheWeb';
              linkText?: string | undefined;
              url?: string | undefined;
            }
          | undefined
        >;
      }
    | undefined;
  workHistoryCollection?:
    | {
        __typename?: 'CvWorkHistoryCollection';
        total: number;
        skip: number;
        limit: number;
        items: Array<
          | {
              __typename?: 'WorkHistory';
              roleTitle?: string | undefined;
              employerName?: string | undefined;
              employerUrl?: string | undefined;
              viaEmployerName?: string | undefined;
              viaEmployerUrl?: string | undefined;
              location?: string | undefined;
              dateFrom?: string | undefined;
              dateTo?: string | undefined;
              skillSummary?: Array<string | undefined> | undefined;
              responsibilitiesCollection?:
                | {
                    __typename?: 'WorkHistoryResponsibilitiesCollection';
                    items: Array<
                      | { __typename?: 'Paragraph'; para?: string | undefined }
                      | undefined
                    >;
                  }
                | undefined;
            }
          | undefined
        >;
      }
    | undefined;
  interestsCollection?:
    | {
        __typename?: 'CvInterestsCollection';
        items: Array<
          { __typename?: 'Paragraph'; para?: string | undefined } | undefined
        >;
      }
    | undefined;
  educationCollection?:
    | {
        __typename?: 'CvEducationCollection';
        items: Array<
          { __typename?: 'Paragraph'; para?: string | undefined } | undefined
        >;
      }
    | undefined;
};

export type GetCvQueryVariables = Exact<{
  workHistorySkip?: InputMaybe<Scalars['Int']['input']>;
  workHistoryLimit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetCvQuery = {
  __typename?: 'Query';
  cvCollection?:
    | {
        __typename?: 'CvCollection';
        items: Array<
          | {
              __typename?: 'Cv';
              image?:
                | { __typename?: 'Asset'; url?: string | undefined }
                | undefined;
              overviewCollection?:
                | {
                    __typename?: 'CvOverviewCollection';
                    items: Array<
                      | { __typename?: 'Paragraph'; para?: string | undefined }
                      | undefined
                    >;
                  }
                | undefined;
              onTheWebCollection?:
                | {
                    __typename?: 'CvOnTheWebCollection';
                    items: Array<
                      | {
                          __typename?: 'OnTheWeb';
                          linkText?: string | undefined;
                          url?: string | undefined;
                        }
                      | undefined
                    >;
                  }
                | undefined;
              workHistoryCollection?:
                | {
                    __typename?: 'CvWorkHistoryCollection';
                    total: number;
                    skip: number;
                    limit: number;
                    items: Array<
                      | {
                          __typename?: 'WorkHistory';
                          roleTitle?: string | undefined;
                          employerName?: string | undefined;
                          employerUrl?: string | undefined;
                          viaEmployerName?: string | undefined;
                          viaEmployerUrl?: string | undefined;
                          location?: string | undefined;
                          dateFrom?: string | undefined;
                          dateTo?: string | undefined;
                          skillSummary?: Array<string | undefined> | undefined;
                          responsibilitiesCollection?:
                            | {
                                __typename?: 'WorkHistoryResponsibilitiesCollection';
                                items: Array<
                                  | {
                                      __typename?: 'Paragraph';
                                      para?: string | undefined;
                                    }
                                  | undefined
                                >;
                              }
                            | undefined;
                        }
                      | undefined
                    >;
                  }
                | undefined;
              interestsCollection?:
                | {
                    __typename?: 'CvInterestsCollection';
                    items: Array<
                      | { __typename?: 'Paragraph'; para?: string | undefined }
                      | undefined
                    >;
                  }
                | undefined;
              educationCollection?:
                | {
                    __typename?: 'CvEducationCollection';
                    items: Array<
                      | { __typename?: 'Paragraph'; para?: string | undefined }
                      | undefined
                    >;
                  }
                | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type OnTheWebFragment = {
  __typename?: 'OnTheWeb';
  linkText?: string | undefined;
  url?: string | undefined;
};

export type ParagraphFragment = {
  __typename?: 'Paragraph';
  para?: string | undefined;
};

export type WorkHistoryFragment = {
  __typename?: 'WorkHistory';
  roleTitle?: string | undefined;
  employerName?: string | undefined;
  employerUrl?: string | undefined;
  viaEmployerName?: string | undefined;
  viaEmployerUrl?: string | undefined;
  location?: string | undefined;
  dateFrom?: string | undefined;
  dateTo?: string | undefined;
  skillSummary?: Array<string | undefined> | undefined;
  responsibilitiesCollection?:
    | {
        __typename?: 'WorkHistoryResponsibilitiesCollection';
        items: Array<
          { __typename?: 'Paragraph'; para?: string | undefined } | undefined
        >;
      }
    | undefined;
};

export const ParagraphFragmentDoc = gql`
  fragment Paragraph on Paragraph {
    para
  }
`;
export const OnTheWebFragmentDoc = gql`
  fragment OnTheWeb on OnTheWeb {
    linkText
    url
  }
`;
export const WorkHistoryFragmentDoc = gql`
  fragment WorkHistory on WorkHistory {
    roleTitle
    employerName
    employerUrl
    viaEmployerName
    viaEmployerUrl
    location
    dateFrom
    dateTo
    responsibilitiesCollection {
      items {
        ...Paragraph
      }
    }
    skillSummary
  }
  ${ParagraphFragmentDoc}
`;
export const CvFragmentDoc = gql`
  fragment Cv on Cv {
    image {
      url
    }
    overviewCollection {
      items {
        ...Paragraph
      }
    }
    onTheWebCollection {
      items {
        ...OnTheWeb
      }
    }
    workHistoryCollection(skip: $workHistorySkip, limit: $workHistoryLimit) {
      total
      skip
      limit
      items {
        ...WorkHistory
      }
    }
    interestsCollection {
      items {
        ...Paragraph
      }
    }
    educationCollection {
      items {
        ...Paragraph
      }
    }
  }
  ${ParagraphFragmentDoc}
  ${OnTheWebFragmentDoc}
  ${WorkHistoryFragmentDoc}
`;
export const GetCvDocument = gql`
  query GetCv($workHistorySkip: Int = 0, $workHistoryLimit: Int = 5) {
    cvCollection(limit: 1, where: { name: "Matt Calthrop" }) {
      items {
        ...Cv
      }
    }
  }
  ${CvFragmentDoc}
`;

/**
 * __useGetCvQuery__
 *
 * To run a query within a React component, call `useGetCvQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCvQuery({
 *   variables: {
 *      workHistorySkip: // value for 'workHistorySkip'
 *      workHistoryLimit: // value for 'workHistoryLimit'
 *   },
 * });
 */
export function useGetCvQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCvQuery, GetCvQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCvQuery, GetCvQueryVariables>(
    GetCvDocument,
    options,
  );
}
export function useGetCvLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCvQuery, GetCvQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCvQuery, GetCvQueryVariables>(
    GetCvDocument,
    options,
  );
}
export function useGetCvSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetCvQuery, GetCvQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCvQuery, GetCvQueryVariables>(
    GetCvDocument,
    options,
  );
}
export type GetCvQueryHookResult = ReturnType<typeof useGetCvQuery>;
export type GetCvLazyQueryHookResult = ReturnType<typeof useGetCvLazyQuery>;
export type GetCvSuspenseQueryHookResult = ReturnType<
  typeof useGetCvSuspenseQuery
>;
export type GetCvQueryResult = Apollo.QueryResult<
  GetCvQuery,
  GetCvQueryVariables
>;

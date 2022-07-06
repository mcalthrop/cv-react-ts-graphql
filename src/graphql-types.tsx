import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
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
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  Quality: any;
};

export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};

export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type AssetLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Cv = Entry & {
  __typename?: 'Cv';
  contentfulMetadata: ContentfulMetadata;
  educationCollection?: Maybe<CvEducationCollection>;
  image?: Maybe<Asset>;
  interestsCollection?: Maybe<CvInterestsCollection>;
  linkedFrom?: Maybe<CvLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  onTheWebCollection?: Maybe<CvOnTheWebCollection>;
  overviewCollection?: Maybe<CvOverviewCollection>;
  sys: Sys;
  workHistoryCollection?: Maybe<CvWorkHistoryCollection>;
};

export type CvEducationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CvImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type CvInterestsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CvLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CvNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CvOnTheWebCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CvOverviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CvWorkHistoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CvCollection = {
  __typename?: 'CvCollection';
  items: Array<Maybe<Cv>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CvEducationCollection = {
  __typename?: 'CvEducationCollection';
  items: Array<Maybe<Paragraph>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CvFilter = {
  AND?: InputMaybe<Array<InputMaybe<CvFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CvFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  educationCollection_exists?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  interestsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onTheWebCollection_exists?: InputMaybe<Scalars['Boolean']>;
  overviewCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  workHistoryCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CvInterestsCollection = {
  __typename?: 'CvInterestsCollection';
  items: Array<Maybe<Paragraph>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CvLinkingCollections = {
  __typename?: 'CvLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type CvLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CvOnTheWebCollection = {
  __typename?: 'CvOnTheWebCollection';
  items: Array<Maybe<OnTheWeb>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CvWorkHistoryCollection = {
  __typename?: 'CvWorkHistoryCollection';
  items: Array<Maybe<WorkHistory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<ImageFormat>;
  height?: InputMaybe<Scalars['Dimension']>;
  quality?: InputMaybe<Scalars['Quality']>;
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  width?: InputMaybe<Scalars['Dimension']>;
};

export type OnTheWeb = Entry & {
  __typename?: 'OnTheWeb';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<OnTheWebLinkingCollections>;
  sys: Sys;
  url?: Maybe<Scalars['String']>;
};

export type OnTheWebDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type OnTheWebLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type OnTheWebLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OnTheWebUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type OnTheWebCollection = {
  __typename?: 'OnTheWebCollection';
  items: Array<Maybe<OnTheWeb>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type OnTheWebFilter = {
  AND?: InputMaybe<Array<InputMaybe<OnTheWebFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OnTheWebFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText?: InputMaybe<Scalars['String']>;
  linkText_contains?: InputMaybe<Scalars['String']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText_not?: InputMaybe<Scalars['String']>;
  linkText_not_contains?: InputMaybe<Scalars['String']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OnTheWebLinkingCollections = {
  __typename?: 'OnTheWebLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type OnTheWebLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type OnTheWebLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  para?: Maybe<Scalars['String']>;
  sys: Sys;
};

export type ParagraphLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ParagraphParaArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ParagraphCollection = {
  __typename?: 'ParagraphCollection';
  items: Array<Maybe<Paragraph>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ParagraphFilter = {
  AND?: InputMaybe<Array<InputMaybe<ParagraphFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ParagraphFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  para?: InputMaybe<Scalars['String']>;
  para_contains?: InputMaybe<Scalars['String']>;
  para_exists?: InputMaybe<Scalars['Boolean']>;
  para_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  para_not?: InputMaybe<Scalars['String']>;
  para_not_contains?: InputMaybe<Scalars['String']>;
  para_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ParagraphLinkingCollections = {
  __typename?: 'ParagraphLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
  workHistoryCollection?: Maybe<WorkHistoryCollection>;
};

export type ParagraphLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ParagraphLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ParagraphLinkingCollectionsWorkHistoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryCvArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CvOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CvFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryOnTheWebArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryOnTheWebCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<OnTheWebOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OnTheWebFilter>;
};

export type QueryParagraphArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryParagraphCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ParagraphOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParagraphFilter>;
};

export type QueryWorkHistoryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryWorkHistoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<WorkHistoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkHistoryFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type WorkHistory = Entry & {
  __typename?: 'WorkHistory';
  contentfulMetadata: ContentfulMetadata;
  dateFrom?: Maybe<Scalars['String']>;
  dateTo?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
  employerUrl?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<WorkHistoryLinkingCollections>;
  location?: Maybe<Scalars['String']>;
  responsibilitiesCollection?: Maybe<WorkHistoryResponsibilitiesCollection>;
  roleTitle?: Maybe<Scalars['String']>;
  skillSummary?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
  viaEmployerName?: Maybe<Scalars['String']>;
  viaEmployerUrl?: Maybe<Scalars['String']>;
};

export type WorkHistoryDateFromArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WorkHistoryDateToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WorkHistoryEmployerNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WorkHistoryEmployerUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WorkHistoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WorkHistoryLocationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WorkHistoryResponsibilitiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type WorkHistoryRoleTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WorkHistorySkillSummaryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WorkHistoryViaEmployerNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WorkHistoryViaEmployerUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type WorkHistoryCollection = {
  __typename?: 'WorkHistoryCollection';
  items: Array<Maybe<WorkHistory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type WorkHistoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<WorkHistoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WorkHistoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dateFrom?: InputMaybe<Scalars['String']>;
  dateFrom_contains?: InputMaybe<Scalars['String']>;
  dateFrom_exists?: InputMaybe<Scalars['Boolean']>;
  dateFrom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateFrom_not?: InputMaybe<Scalars['String']>;
  dateFrom_not_contains?: InputMaybe<Scalars['String']>;
  dateFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateTo?: InputMaybe<Scalars['String']>;
  dateTo_contains?: InputMaybe<Scalars['String']>;
  dateTo_exists?: InputMaybe<Scalars['Boolean']>;
  dateTo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateTo_not?: InputMaybe<Scalars['String']>;
  dateTo_not_contains?: InputMaybe<Scalars['String']>;
  dateTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  employerName?: InputMaybe<Scalars['String']>;
  employerName_contains?: InputMaybe<Scalars['String']>;
  employerName_exists?: InputMaybe<Scalars['Boolean']>;
  employerName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  employerName_not?: InputMaybe<Scalars['String']>;
  employerName_not_contains?: InputMaybe<Scalars['String']>;
  employerName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  employerUrl?: InputMaybe<Scalars['String']>;
  employerUrl_contains?: InputMaybe<Scalars['String']>;
  employerUrl_exists?: InputMaybe<Scalars['Boolean']>;
  employerUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  employerUrl_not?: InputMaybe<Scalars['String']>;
  employerUrl_not_contains?: InputMaybe<Scalars['String']>;
  employerUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_contains?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_not?: InputMaybe<Scalars['String']>;
  location_not_contains?: InputMaybe<Scalars['String']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  responsibilitiesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  roleTitle?: InputMaybe<Scalars['String']>;
  roleTitle_contains?: InputMaybe<Scalars['String']>;
  roleTitle_exists?: InputMaybe<Scalars['Boolean']>;
  roleTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  roleTitle_not?: InputMaybe<Scalars['String']>;
  roleTitle_not_contains?: InputMaybe<Scalars['String']>;
  roleTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillSummary_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillSummary_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillSummary_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillSummary_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  viaEmployerName?: InputMaybe<Scalars['String']>;
  viaEmployerName_contains?: InputMaybe<Scalars['String']>;
  viaEmployerName_exists?: InputMaybe<Scalars['Boolean']>;
  viaEmployerName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  viaEmployerName_not?: InputMaybe<Scalars['String']>;
  viaEmployerName_not_contains?: InputMaybe<Scalars['String']>;
  viaEmployerName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  viaEmployerUrl?: InputMaybe<Scalars['String']>;
  viaEmployerUrl_contains?: InputMaybe<Scalars['String']>;
  viaEmployerUrl_exists?: InputMaybe<Scalars['Boolean']>;
  viaEmployerUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  viaEmployerUrl_not?: InputMaybe<Scalars['String']>;
  viaEmployerUrl_not_contains?: InputMaybe<Scalars['String']>;
  viaEmployerUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WorkHistoryLinkingCollections = {
  __typename?: 'WorkHistoryLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type WorkHistoryLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type WorkHistoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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

export type GetCvQueryVariables = Exact<{ [key: string]: never }>;

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

export type ParagraphFragment = {
  __typename?: 'Paragraph';
  para?: string | undefined;
};

export const CvFragmentDoc = gql`
  fragment Cv on Cv {
    image {
      url
    }
    overviewCollection {
      items {
        para
      }
    }
    onTheWebCollection {
      items {
        linkText
        url
      }
    }
    workHistoryCollection {
      items {
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
            para
          }
        }
        skillSummary
      }
    }
    interestsCollection {
      items {
        para
      }
    }
    educationCollection {
      items {
        para
      }
    }
  }
`;
export const ParagraphFragmentDoc = gql`
  fragment Paragraph on Paragraph {
    para
  }
`;
export const GetCvDocument = gql`
  query GetCv {
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
export type GetCvQueryHookResult = ReturnType<typeof useGetCvQuery>;
export type GetCvLazyQueryHookResult = ReturnType<typeof useGetCvLazyQuery>;
export type GetCvQueryResult = Apollo.QueryResult<
  GetCvQuery,
  GetCvQueryVariables
>;

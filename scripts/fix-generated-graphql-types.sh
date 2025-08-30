#!/bin/bash

set -xeuo pipefail

GENERATED_TYPES_FILE=src/graphql-types.tsx
GENERATED_TYPES_FILE_TMP=/tmp/$(basename ${GENERATED_TYPES_FILE})
cat ${GENERATED_TYPES_FILE} | sed "s#import \* as Apollo from '@apollo/client'#import * as Apollo from '@apollo/client/react'#" > ${GENERATED_TYPES_FILE_TMP}
mv ${GENERATED_TYPES_FILE_TMP} ${GENERATED_TYPES_FILE}

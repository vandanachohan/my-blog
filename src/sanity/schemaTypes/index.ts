import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {authorType} from './authorType'
import slug from './slug'
import post from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType,post , authorType,
    slug
  ]
}

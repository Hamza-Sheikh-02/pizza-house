import { type SchemaTypeDefinition } from 'sanity'
import { testimonials } from './testimonials'
import { teamMembers } from './teamMembers'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonials, teamMembers, product],
}

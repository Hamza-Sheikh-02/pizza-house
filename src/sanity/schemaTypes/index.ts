import { type SchemaTypeDefinition } from 'sanity'
import { testimonials } from './testimonials'
import { teamMembers } from './teamMembers'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonials, teamMembers],
}

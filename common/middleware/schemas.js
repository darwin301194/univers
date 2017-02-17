import { Schema } from 'normalizr'

const listSchema = new Schema('list', {
  idAttribute: list => list.toLowerCase()
})

const Schemas = {
  LIST: listSchema
}

export default Schemas

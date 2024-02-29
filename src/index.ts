import { Database } from 'arangojs'
import type { Document } from 'arangojs/documents'

const main = async () => {

  const db = new Database({
    url: process.env.DB_URL,
    databaseName: process.env.DATABASE_NAME,
    auth: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    }
  })

  const SampleCollection = db.collection('Sample')
  const docs: Document[] = await SampleCollection.documents(['186'])
  const libraries = docs[0].libraries

  console.log(libraries)
}

main()

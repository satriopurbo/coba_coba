import { Dialect, Sequelize } from 'sequelize'

const dbName = 'coba'as string
const dbUser = 'root'as string
const dbHost = 'fosan.id' as string
const dbDialect = 'postgres' as Dialect
const dbPassword = 'Grafika9' as string

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect
})

export default sequelizeConnection
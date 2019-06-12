module.exports = {
  Query: {
    me: (_, args, ctx) => ctx.db.user({ email: 'beatyshot@gmail.com' })
  },
  User: {
    __resolveReference: (_, args) => args.db.user({ id: _.id })
  }
}
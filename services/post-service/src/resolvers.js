module.exports = {
  Query: {
    posts: (_, args, ctx) => ctx.db.posts()
  },
  Post: {
    author: (_, args, ctx) => ({ __typename: 'User', id: _.authorId })
  },
  User: {
    posts: (_, args, ctx) => ctx.db.posts({
      where: {
        authorId: _.id
      }
    })
  }
}

// const posts = [
//   { id: '1', title: 'Hello world!!', content: ':))', authorId: '1' },
//   { id: '2', title: 'Hi there :3', content: '123 123', authorId: '2' },
// ]

import test from 'zopf'

module.exports = test.module({
  find: () => ({
    _id: 'kalamazoo',
    upload_id: 42,
    uploads: [ {id: 42, filename: 'hehe'} ],
    game_id: 84,
    launch_type: 'native'
  }),
  archive_path: () => '/tmp/archive',
  app_path: () => '/tmp/app'
})

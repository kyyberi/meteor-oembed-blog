import { Mongo } from 'meteor/mongo';

const Posts = new Mongo.Collection('posts');

export { Posts };

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('posts', function postsPublication() {
    return Posts.find();
  });
}

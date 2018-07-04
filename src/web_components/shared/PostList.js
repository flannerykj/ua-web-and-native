import React from 'react';
import type { Post } from '../../types/post-types';
import moment from 'moment';

import { Card, Image } from 'semantic-ui-react';

type Props = {
  posts: Post[],
  history: {}
}

const PostList = (props: Props) => {
  console.log(props.posts);
  return (
    <div>
      {props.posts.map((post, i) => {
        console.log(post);
        return (
          <Card
            key={i}
            style={{margin: '0 auto'}}
            fluid
            onClick={() => props.history.push(`/posts/${post.id}`)}
          >
            <Image src={post.image} />
            <Card.Content>
              <Card.Header>
                {post.artist}
              </Card.Header>
              <Card.Meta>
                {post.formatted_address}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              {`${moment(post.date_posted).fromNow()} ago`}
            </Card.Content>
          </Card>
        );
      })}
    </div>
  )
}

export default PostList;

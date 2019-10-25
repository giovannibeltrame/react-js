import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          text="Nice post bro!"
          image={getFakerAvatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          text="Wow, amazing"
          image={getFakerAvatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          text="I love you <3"
          image={getFakerAvatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const getFakerAvatar = () => {
  return faker.image.avatar();
};

ReactDOM.render(<App />, document.querySelector('#root'));

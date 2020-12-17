import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>WARNING!!!!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
              <CommentDetail 
                author="Sam"  
                timeAgo="Today at 4:45PM" 
                content="Some Comment 1" 
                image={faker.image.people()} 
              />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Alex"  
                timeAgo="Today at 2:00AM" 
                content="Some Comment 2" 
                image={faker.image.animals()} 
                />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author="Jane"  
                timeAgo="Yesterday at 5:00PM" 
                content="Some Comment 3" 
                image={faker.image.nature()} 
                />
            </ApprovalCard>

        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
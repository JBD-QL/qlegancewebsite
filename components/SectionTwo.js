import React, { Component, PropTypes } from 'react';

const SectionTwo = (props) => {
  
  return (
    <div className="sectionTwo" id="documentation">
      <div className="row sectionTwoContent">
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>Setting up QLegance</h2>
            <hr />
            <p>We here at QLegance wanted to create a library that was as simple to set up as it is easy to use.  That&#39;s why we did all the heavy lifting on our side and made the work for the developer - you - as straightforward as could be.  Enjoy!</p>
            <h3>Setting Up Object Types</h3>
            <pre>
              const UserQL = new GraphQLObjectType(&#123;<br />
                &emsp;name: 'UserQL',<br />
                &emsp;fields: () => (&#123;<br />
                  &emsp;&emsp;username: &#123;type: new GraphQLNonNull(GraphQLString)&#125;,<br />
                  &emsp;&emsp;alt: &#123;type: new GraphQLNonNull(GraphQLString)&#125;,<br />
                  &emsp;&emsp;password: &#123;type: new GraphQLNonNull(GraphQLString)&#125;<br />
                &emsp;&#125;)<br />
              &#125;);<br />
            </pre>
            <h3>Setting Up Query and Mutation Types</h3>
            <pre>
              const Query = new GraphQLObjectType(&#123;<br />
                &emsp;name: 'RootQueries',<br />
                &emsp;fields: () => (&#123;<br />
                  &emsp;&emsp;allUsers: &#123;<br />
                    &emsp;&emsp;&emsp;...<br />
                  &emsp;&emsp;&#125;<br />
              &#125;);<br />
              <br />
              const Mutation = new GraphQLObjectType(&#123;<br />
                &emsp;name: 'MutationQL',<br />
                &emsp;fields: &#123;<br />
                  &emsp;&emsp;create: &#123;<br />
                    &emsp;&emsp;&emsp;...<br />
                  &emsp;&emsp;&#125;<br />
                &emsp;&#125;<br />
              &#125;);<br />
            </pre>
            <h3>Querying from the Database</h3>
            <pre>
              QLegance.create(username: "Joe", alt: "Kim", password: "password", ['username', 'alt', 'passsword'])
            {/*
              Template: QLegance.field_name(&#123; parameters &#125;, [ what they want ])<br />
              Example: QLegance.create(&#123;<br /> &emsp;username: "Joe",<br /> &emsp;alt: "Kim",<br /> &emsp;password: "password"<br /> &#125;,<br /> ['username', 'alt', 'passsword']<br />)
            */}
            </pre>
            <br />
            <button type="button" className="btn btn-primary lastButton"><a href="https://github.com/JBD-QL/QLegance/wiki/QLegance-API">Find Out More About QLegance</a></button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
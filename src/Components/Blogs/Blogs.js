import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container mt-5 qna">
      <h4>
        What is the difference between authorization &
        authentication?
      </h4>
      <p>Answer: </p>
      <table>
        <thead>
          <tr>
            <th>Authentication</th>
            <th>Authorization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Authentication verifies credentials.</td>
            <td>Authorization grants or denies permissions.</td>
          </tr>
          <tr>
            <td>Authentication is visible to the user.</td>
            <td>Authorization isn't visible to the user.</td>
          </tr>
          <tr>
            <td>Authentication is partially changeable by the user.</td>
            <td>Authorization isn't changeable by the user.</td>
          </tr>
          <tr>
            <td>Authentication needs usually user's login details..</td>
            <td>Authorization needs user's privilege or security levels..</td>
          </tr>
          <tr>
            <td>Authentication data moves through ID tokens.</td>
            <td>Authorization data moves through access tokens.</td>
          </tr>
        </tbody>
      </table> <br />
      <h4>
        Why are you using firebase? What other options do you have
        to implement authentication?
      </h4>
      <p>
        Answer: With Firebase, it's very easy to connect & use built-in 3rd
        party authentication providers like Google, Facebook, Twitter, Github
        etc. These can save a lot of development cost. As I don't have to pay as
        high as developing from scratch. Firebase pricing is also adaptable.
        Although there is a pay as you go services but I can start on a free
        plan & use primary features. <br />
        There are many alternatives to firebase authentication. They are:
      </p>
      <div>
        <ul>
          <li>Amazon Cognito</li>
          <li>Auth0</li>
          <li>Authress</li>
          <li>Firehouse</li>
          <li>Keycloak</li>
          <li>Ory</li>
          <li>Okta</li>
          <li>OneLogin</li>
        </ul>
      </div>
      <h4>
        What other services does firebase provide other than
        authentication?
      </h4>
      <p>
        Answer: There are many services provides by Firebase. Most useful of
        them are:
      </p>
      <div>
        <ul>
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Cloud Storage</li>
          <li>Cloud Messaging</li>
          <li>Google Analytics</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
          <li>Predictions</li>
          <li>Hosting</li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
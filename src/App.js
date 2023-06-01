
import React from 'react';
import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div>
      <h1>Hello from AWS Amplify</h1>
    </div>
  )
}
export default withAuthenticator(App)
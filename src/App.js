import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

import './App.css';


const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm />

	return (
		<ChatEngine
		height='100vh'
	 userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
			projectID='43c39cec-7e40-4d3e-ae1f-5e40e8197436'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()} 
		/>
	);
}

export default App;

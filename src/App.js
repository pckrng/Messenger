import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
	return (
		<ChatEngine
			height='100vh'
			userName='Pickering'
			userSecret='Jamjar01'
      projectID='3cca6f3f-be8c-4582-8b89-3b00f4b35cd8'
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />} 
		/>
	);
}

export default App;

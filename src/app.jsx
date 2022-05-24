import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/header/header.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Content from './components/content/content.jsx';

class App extends React.Component {


	render() {
		return (
			<div className='app app-header-fixed'>
				<Header />
				<Sidebar />
				<Content />
			</div>
		)
	}
}

export default App;
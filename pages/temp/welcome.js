const welcome = () => {
	
	return (
			<p>Welcome {window.localStorage.getItem('username')}</p>
		)
};
export default welcome
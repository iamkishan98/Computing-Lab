async function sendPswdSetupLink(user, data) {
	const { _id, email, mobile } = user;
	const { token } = data;
	// mailjet
	const mailjet = require('node-mailjet').connect(
		process.env.MAILJET_USER,
		process.env.MAILJET_AUTH
	);
	let link = `http://localhost:5050/users/pswdsetup?user_id=${_id}&token=${token}`;
	console.log('sending password setup link');
	console.log(link);
	//! just for testing
	if(token) {
		return Promise.resolve();
	}
	// const request =
	return mailjet.post('send', { version: 'v3.1' }).request({
		Messages: [
			{
				From: {
					Email: 'ngshvardhan@gmail.com',
					Name: 'Apartment Management'
				},
				To: [
					{
						Email: email,
						Name: email
					}
				],
				TemplateID: 1028351,
				TemplateLanguage: true,
				Subject: 'Setup your password',
				Variables: {
					link,
					expiresIn: Math.floor(900 / 60)
				}
			}
		]
	});
	// request
	// 	.then(result => {
	// 		console.log(result.body);
	// 	})
	// 	.catch(err => {
	// 		console.log(err.statusCode);
	// 	});
}

module.exports = sendPswdSetupLink;
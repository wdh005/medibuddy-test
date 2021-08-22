export const verifyEmail = email => {
	const regex =
		/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	if (regex.test(email)) {
		return true;
	} else {
		return false;
	}
};

export const verifyPassword = password => {
	const regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

	if (regex.test(password)) {
		return true;
	} else {
		return false;
	}
};

import React, { useState, useCallback, useEffect } from "react";
import { verifyEmail, verifyPassword } from "../../utils/helper";
import axios from "axios";
import { useHistory } from "react-router";

const LoginPage = () => {
	const [email, setEamil] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [emailCheck, setEamilCheck] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const [staySignIn, setStaySignedIn] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const history = useHistory();
	const onEmailHandler = e => {
		setEamil(e.currentTarget.value);
		setEmailError(false);
	};
	const onPasswordHandler = e => {
		setPassword(e.currentTarget.value);
		setPasswordError(false);
	};
	const onStaySignin = useCallback(() => {
		setStaySignedIn(prev => !prev);
	}, []);
	const onSubmitHandler = useCallback(
		e => {
			e.preventDefault();
			setEmailError(false);
			setPasswordError(false);

			if (!verifyEmail(email)) {
				setEmailError(true);
			}
			if (!verifyPassword(password)) {
				setPasswordError(true);
			}
			if (email === emailCheck && password === passwordCheck) {
				if (staySignIn) {
					localStorage.setItem("staySignIn", true);
				} else {
					localStorage.setItem("staySignIn", false);
				}
				localStorage.setItem("email", email);
				localStorage.setItem("password", password);
				localStorage.setItem("name", name);
				history.push("/main");
			} else {
				console.log("이메일과 비밀번호가 일치하지 않습니다.");
			}
		},
		[staySignIn, email, password, emailCheck, passwordCheck, history, name],
	);

	useEffect(() => {
		axios
			.get("http://localhost:3000/data/data.json")
			.then(res => {
				console.log(res.data.users[0]);
				setEamilCheck(res.data.users[0].email);
				setPasswordCheck(res.data.users[0].password);
				setName(res.data.users[0].name);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100vh",
			}}
		>
			<form
				style={{ display: "flex", flexDirection: "column" }}
				onSubmit={onSubmitHandler}
			>
				<label>Email</label>
				<input type="email" value={email} onChange={onEmailHandler} />
				{emailError && <p>이메일 형식에 맞지않습니다.</p>}
				<label>Password</label>
				<input
					type="password"
					value={password}
					onChange={onPasswordHandler}
				/>
				{passwordError && <p>비밀번호 형식에 맞지않습니다.</p>}
				<br />
				<label>
					<span onClick={onStaySignin}>Stay sign in</span>
					<input type="checkbox" onClick={onStaySignin} />
				</label>
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginPage;

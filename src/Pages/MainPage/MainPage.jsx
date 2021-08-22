import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const MainPage = () => {
	const [email, setEamil] = useState("");
	const [name, setName] = useState("");
	const history = useHistory();
	const onLogOut = () => {
		history.push("/login");
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		localStorage.removeItem("name");
		localStorage.removeItem("staySignIn");
	};
	useEffect(() => {
		setEamil(localStorage.getItem("email"));
		setName(localStorage.getItem("name"));
	}, []);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100vh",
				flexDirection: "column",
			}}
		>
			<Link style={{ cursor: "pointer" }} to={`/detail?email=${email}`}>
				{email}
			</Link>
			<p>{name}</p>
			<button type="button" onClick={onLogOut}>
				로그아웃
			</button>
		</div>
	);
};

export default MainPage;

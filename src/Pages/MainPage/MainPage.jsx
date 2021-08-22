import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MainPage = () => {
	const [email, setEamil] = useState("");
	const [name, setName] = useState("");
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
		</div>
	);
};

export default MainPage;

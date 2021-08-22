import React, { useState, useCallback, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";

const DetailPage = () => {
	const query = queryString.parse(useLocation().search);
	const { email } = query;
	const [openInput, setOpenInput] = useState(false);
	const [updateEmail, setUpdateEmail] = useState("");
    const history = useHistory()
	const onInputHandler = () => {
		setOpenInput(prev => !prev);
	};
	const onEmailChangeHandler = e => {
		setUpdateEmail(e.currentTarget.value);
	};
	const onSubmitHandler = e => {
        localStorage.setItem("email", updateEmail);
        history.push('/main')
	};
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
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<p style={{ marginRight: "10px" }}>{email}</p>
				<button onClick={onInputHandler}>수정하기</button>
			</div>
			{openInput && (
				<form
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onSubmit={onSubmitHandler}
				>
					<label style={{ marginRight: "10px" }}>Email</label>
					<input
						type="email"
						value={updateEmail}
						onChange={onEmailChangeHandler}
					/>
					<button style={{ marginLeft: "10px" }} type="submit">
						입력
					</button>
				</form>
			)}
		</div>
	);
};

export default DetailPage;

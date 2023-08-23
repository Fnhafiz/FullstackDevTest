import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

interface RegisterModalProps {
	isOpen: boolean;
	onClose: () => void;
	openLoginModal: () => void;
}

export const RegisterModal = ({
	isOpen,
	onClose,
	openLoginModal,
}: RegisterModalProps) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

	const handleLoginClick = () => {
		onClose(); // Close the RegisterModal
		openLoginModal(); // Open the LoginModal
	};

	const handleCloseModal = () => {
		onClose();
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value);
	};

	const toggleShowConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Perform login logic here
		console.log("Name:", name);
		console.log("Email:", email);
		console.log("Password:", password);
		console.log("Confirm Password:", confirmPassword);
		// if (!passwordRegex.test(password)) {
		// 	toast.error(
		// 		"Password need to contains at least 1 lower-case, 1 upper-case, and 1 number with 8 character minimum"
		// 	);
		// 	return;
		// } else if (password !== confirmPassword) {
		// 	toast.error("Password and Confirm Password must be the same");
		// 	return;
		// }
		// try {
		// 	// If the password and confirm password is the same, then perform register logic here
		// 	const response = await axios.post(BASEAPI_URL + "/auth/register", {
		// 		name: name,
		// 		email: email,
		// 		password: password,
		// 		company_name: companyName,
		// 	});
		// 	console.log(response);
		// 	toast.success(response.data.message);
		// 	onClose();
		// } catch (err: any) {
		// 	if (err.response && err.response.status === 400) {
		// 		const errorMessage = err.response.data.message;
		// 		toast.error(errorMessage);
		// 	} else {
		// 		toast.error("An error occurred. Please try again.");
		// 	}
		// }
	};

	return (
		<>
			{isOpen && (
				<>
					<div className="fixed inset-0 bg-black-main opacity-60 cursor-pointer"></div>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-full max-w-md max-h-full">
							<div className="relative bg-white rounded-lg shadow">
								<button
									type="button"
									className="absolute top-3 right-2.5 text-purple-600 bg-transparent hover:bg-purple-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
									onClick={handleCloseModal}
								>
									<svg
										aria-hidden="true"
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
									<span className="sr-only">Close modal</span>
								</button>
								<div className="px-6 py-6 lg:px-8">
									<h3 className="mt-2 mb-4 text-xl font-medium text-gray-900">
										Register
									</h3>
									<form
										className="space-y-6"
										onSubmit={handleSubmit}
									>
										<div>
											<label
												htmlFor="name"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Name
											</label>
											<input
												type="text"
												name="name"
												id="name"
												className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-purple-600 block w-full p-2.5"
												placeholder="John Doe"
												onChange={handleNameChange}
												required
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Email
											</label>
											<input
												type="email"
												name="email"
												id="email"
												className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-purple-600 block w-full p-2.5"
												placeholder="example@gmail.com"
												onChange={handleEmailChange}
												required
											/>
										</div>

										<div className="flex flex-col">
											<label
												htmlFor="password"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Password
											</label>
											<input
												type={
													showPassword
														? "text"
														: "password"
												}
												name="password"
												id="password"
												placeholder="••••••••"
												className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-purple-600 block w-full p-2.5"
												onChange={handlePasswordChange}
												required
												pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
												title="Should contains at least 1 lower-case, 1 upper-case, and 1 number with 8 character minimum"
											/>
											<button
												type="button"
												className="absolute mt-12 right-12 transform -translate-y-1/2"
												onClick={toggleShowPassword}
											>
												{showPassword ? (
													<FaEye />
												) : (
													<FaEyeSlash />
												)}
											</button>
										</div>
										{/* {!eligiblePass && (
											<div className="w-full rounded-md bg-yellow-600 p-2 mt-5">
												<span className="text-white text-sm text-center">
													Should contains at least{" "}
													<b>1 lower-case</b>,{" "}
													<b>1 upper-case</b>, and{" "}
													<b>1 number</b> with 8
													character minimum
												</span>
											</div>
										)} */}
										<div className="flex flex-col">
											<label
												htmlFor="confirmPassword"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Confirm Password
											</label>
											<input
												type={
													showConfirmPassword
														? "text"
														: "password"
												}
												name="confirmPassword"
												id="confirmPassword"
												placeholder="••••••••"
												className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-purple-600 block w-full p-2.5"
												onChange={
													handleConfirmPasswordChange
												}
												required
											/>
											<button
												type="button"
												className="absolute mt-12 right-12 transform -translate-y-1/2"
												onClick={
													toggleShowConfirmPassword
												}
											>
												{showConfirmPassword ? (
													<FaEye />
												) : (
													<FaEyeSlash />
												)}
											</button>
										</div>
										<button
											type="submit"
											className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-purple-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
										>
											Register
										</button>
										<div className="text-sm font-medium text-gray-700">
											Already have an account?{" "}
											<a
												href="#"
												className="text-purple-600 hover:underline"
												onClick={handleLoginClick}
											>
												Sign in
											</a>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

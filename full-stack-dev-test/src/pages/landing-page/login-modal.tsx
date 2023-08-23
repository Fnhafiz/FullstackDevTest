import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
	openRegisterModal: () => void;
}

export const LoginModal = ({
	isOpen,
	onClose,
	openRegisterModal,
}: LoginModalProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleRegisterClick = () => {
		onClose(); // Close the LoginModal
		openRegisterModal(); // Open the RegisterModal
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

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Perform login logic here
		// try {
		// 	console.log("masuk");
		// 	const response = await axios.post(BASEAPI_URL + "/auth/login", {
		// 		email: email,
		// 		password: password,
		// 	});

		// 	//get the response
		// 	//if not error, set the local storage
		// 	console.log(response.data.data);
		// 	// Convert the JSON object to a string
		// 	const userJSONString = JSON.stringify(response.data.data);

		// 	// Save the JSON string to localStorage
		// 	localStorage.setItem("@manager/user", userJSONString);

		// 	toast.success("Login successful!");
		// 	onClose();
		// 	window.location.href = "/dashboard";
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
									onClick={onClose}
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
										Sign in to your account
									</h3>
									<form
										className="space-y-6"
										onSubmit={handleSubmit}
									>
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
										<div>
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
											/>
											<button
												type="button"
												className="absolute top-1/2 right-3 transform -translate-y-1/2 pt-5 pr-8"
												onClick={toggleShowPassword}
											>
												{showPassword ? (
													<FaEye />
												) : (
													<FaEyeSlash />
												)}
											</button>
										</div>
										<div className="flex justify-end">
											<a
												href="#"
												className="text-sm text-purple-600 hover:underline focus:outline-purple-600 self-end"
											>
												Forgot Password?
											</a>
										</div>
										<button
											type="submit"
											className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-purple-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
										>
											Login
										</button>
										<div className="text-sm font-medium text-gray-700">
											Don't have an account?{" "}
											<a
												href="#"
												className="text-purple-600 hover:underline"
												onClick={handleRegisterClick}
											>
												Create account
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

import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { LoginModal } from "./login-modal";
import { RegisterModal } from "./register-modal";

export const LandingPage = () => {
	const [isLoginModalOpen, setLoginModalOpen] = useState(false);
	const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

	const openLoginModal = () => {
		setLoginModalOpen(true);
	};

	const closeLoginModal = () => {
		setLoginModalOpen(false);
	};

	const openRegisterModal = () => {
		setRegisterModalOpen(true);
	};

	const closeRegisterModal = () => {
		setRegisterModalOpen(false);
	};

	return (
		<div className="flex flex-col md:flex-row">
			<div className="w-full md:w-3/5 h-screen bg-purple-600 flex flex-col justify-center px-20]">
				<p className="w-full text-6xl font-bold text-center text-white pt-8 mb-8 mt">
					Fullstack Developer Test
				</p>
				<p className="w-full text-2xl text-center text-white pt-8">
					This is a website for the Technical Test of Fullstack
					Developer Intern.
				</p>
			</div>
			<div className="w-full md:w-2/5 h-screen flex flex-col items-center justify-center px-24">
				<button
					className="w-full lg:w-3/5 bg-purple-600 hover:bg-purple-400 text-white text-2xl font-bold py-3 px-4 rounded-md"
					onClick={openLoginModal}
				>
					Login
				</button>
				<LoginModal
					isOpen={isLoginModalOpen}
					onClose={closeLoginModal}
					openRegisterModal={openRegisterModal}
				/>
				{/* Render the RegisterModal component */}
				<RegisterModal
					isOpen={isRegisterModalOpen}
					onClose={closeRegisterModal}
					openLoginModal={openLoginModal}
				/>

				<button
					className="w-full lg:w-3/5 bg-purple-600 hover:bg-purple-400 text-white text-2xl font-bold py-3 px-4 rounded-md mt-8"
					onClick={openRegisterModal}
				>
					Register
				</button>
				<RegisterModal
					isOpen={isRegisterModalOpen}
					onClose={closeRegisterModal}
					openLoginModal={openLoginModal}
				/>
				<LoginModal
					isOpen={isLoginModalOpen}
					onClose={closeLoginModal}
					openRegisterModal={openRegisterModal}
				/>
			</div>
		</div>
	);
};

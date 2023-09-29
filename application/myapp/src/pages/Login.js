/** @format */

import React from 'react';
import { githubLogo, googleLogo } from '../assets';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/denovoSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
	// const userInfo = useSelector((state) => state.denovo.userInfo);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	const handleLogin = () => {
		signInWithPopup(
			auth,
			provider.setCustomParameters({ prompt: 'select_account' })
		)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;
				dispatch(
					addUser({
						_id: user.uid,
						name: user.displayName,
						email: user.email,
						image: user.photoURL,
					})
				);
				setTimeout(() => {
					navigate('/');
				}, 1500);
			})
			.catch((error) => {
				// Handle Errors here.
				console.log(error);
			});
	};

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				toast.success('Log out Successfully!');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className='w-full flex flex-col items-center justify-centergap-10 py-20'>
			<div className='w-full flex items-center justify-center gap-10'>
				<div
					onClick={handleLogin}
					className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
					<img
						className='w-8'
						src={googleLogo}
						alt='googleLogo'
					/>
					<span className='text-sm text-gray-900'>Sign in with Google</span>
				</div>
				<button
					onClick={handleSignOut}
					className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>
					Sign Out
				</button>
			</div>
			<br />
			{/* <div className='w-full flex items-center justify-center gap-10'>
				<div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
					<img
						className='w-8'
						src={githubLogo}
						alt='googleLogo'
					/>
					<span className='text-sm text-gray-900'>Sign in with GitHub</span>
				</div>
				<button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>
					Sign Out
				</button>
			</div> */}
		</div>
	);
};

export default Login;

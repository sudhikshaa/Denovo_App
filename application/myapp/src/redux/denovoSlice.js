/** @format */

// /** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	productData: [],
	userInfo: null,
};

export const denovoSlice = createSlice({
	name: 'denovo',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.productData.find(
				(item) => item._id === action.payload._id
			);

			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.productData.push(action.payload);
			}
		},
		increamentQuantity: (state, action) => {
			const item = state.productData.find(
				(item) => item._id === action.payload._id
			);
			if (item) {
				item.quantity++;
			}
		},
		decrementQuantity: (state, action) => {
			const item = state.productData.find(
				(item) => item._id === action.payload._id
			);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		deleteItem: (state, action) => {
			state.productData = state.productData.filter(
				(item) => item._id !== action.payload
			);
		},
		resetCart: (state) => {
			state.productData = [];
		},
		// =============== User Start here ==============
		addUser: (state, action) => {
			state.userInfo = action.payload;
		},
		removeUser: (state) => {
			state.userInfo = null;
		},
		// =============== User End here ================
	},
});

export const {
	addToCart,
	deleteItem,
	resetCart,
	increamentQuantity,
	decrementQuantity,
	addUser,
	removeUser,
} = denovoSlice.actions;

export default denovoSlice.reducer;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { MdOutlineClose } from 'react-icons/md';
// import {
// 	decrementQuantity,
// 	incrementQuantity,
// 	deleteItem,
// 	resetCart,
// } from '../redux/denovoSlice';

// const CartItem = () => {
// 	const dispatch = useDispatch();
// 	const productData = useSelector((state) => state.denovo.productData);

// 	return (
// 		<div className='w-2/3 pr-10'>
// 			<div className='w-full'>
// 				<h2 className='font-titleFont text-2xl'>Shopping Cart</h2>
// 			</div>
// 			<div>
// 				{productData.map((item) => (
// 					<div
// 						key={item._id}
// 						className='flex items-center justify-between gap-6 mt-6'>
// 						<div className='flex items-center gap-2'>
// 							<MdOutlineClose
// 								className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300'
// 								onClick={() => dispatch(deleteItem(item._id))}
// 							/>
// 							<img
// 								className='w-32 h-32 object-cover'
// 								src={item.image}
// 								alt='productImg'
// 							/>
// 						</div>
// 						<h2 className='w-52'>{item.title}</h2>
// 						<p className='w-10'>${item.price}</p>
// 						<div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
// 							<p className='text-sm'>Quantity</p>
// 							<div className='flex items-center gap-4 text-sm font-semibold'>
// 								<span
// 									onClick={() => dispatch(decrementQuantity(item._id))}
// 									className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
// 									-
// 								</span>
// 								{item.quantity}
// 								<span
// 									onClick={() => dispatch(incrementQuantity(item._id))}
// 									className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
// 									+
// 								</span>
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default CartItem;

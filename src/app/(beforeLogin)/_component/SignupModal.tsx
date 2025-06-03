'use client';

import { useState } from 'react';

export default function SignupModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [nickname, setNickname] = useState();
  const [image, setImage] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};
  const onChangePassword = () => {};
  const onChangeNickname = () => {};
  const onChangeImage = () => {};

  return (
    <div className="flex items-center justify-center bg-black/50 fixed inset-0 z-1  max-w-lg mx-auto">
      <div className="mx-auto p-6 w-full max-w-md text-foreground bg-background rounded-2xl shadow-xl relative">
        <button
          onClick={onClickClose}
          className="text-foreground absolute right-4 top-4"
        >
          <svg
            width={24}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-6 h-6"
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
            </g>
          </svg>
        </button>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="id" className="block ml-2 mb-1 font-medium text-sm">
              ID
            </label>
            <input
              id="id"
              type="text"
              value={id}
              onChange={onChangeId}
              className="p-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block ml-2 mb-1 font-medium text-sm"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={onChangePassword}
              className="p-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="nickname"
              className="block ml-2 mb-1 font-medium text-sm"
            >
              Nickname
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={onChangeNickname}
              className="p-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block ml-2 mb-1 font-medium text-sm"
            >
              Image
            </label>
            <input
              id="image"
              type="file"
              onChange={onChangeImage}
              className="p-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {message && <div className="text-sm text-red-500">{message}</div>}

          <div className="pt-2">
            <button
              type="submit"
              disabled={!id || !password}
              className="btn-primary w-full cursor-pointer disabled:opacity-50"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

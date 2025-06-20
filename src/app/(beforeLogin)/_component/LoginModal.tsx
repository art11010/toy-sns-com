'use client';

import { useState } from 'react';

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};
  return (
    <div className="flex items-center justify-center bg-black/50 fixed inset-0 z-1">
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

          {message && <div className="text-sm text-red-500">{message}</div>}

          <div className="pt-2">
            <button
              type="submit"
              disabled={!id || !password}
              className="btn-primary w-full cursor-pointer disabled:opacity-75"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

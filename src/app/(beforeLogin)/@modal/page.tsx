'use client';

import { useState } from 'react';

export default function ModalPage() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};
  return (
    <div className="fixed inset-0 z-1 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md mx-auto rounded-2xl bg-white p-6 shadow-xl">
        {/* 닫기 버튼 */}
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            width={24}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-6 h-6"
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
            </g>
          </svg>
        </button>

        <div className="text-center mb-6 text-xl font-semibold">
          로그인하세요.
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* 아이디 */}
          <div>
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              아이디
            </label>
            <input
              id="id"
              type="text"
              value={id}
              onChange={onChangeId}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={onChangePassword}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 메시지 */}
          {message && <div className="text-sm text-red-500">{message}</div>}

          {/* 로그인 버튼 */}
          <div>
            <button
              type="submit"
              disabled={!id || !password}
              className="w-full rounded-lg bg-blue-500 text-white py-2 font-semibold hover:bg-blue-600 disabled:opacity-50"
            >
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

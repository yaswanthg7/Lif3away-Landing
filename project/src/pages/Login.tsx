import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <Navbar/>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-light text-white">LOG IN</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <input
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-transparent placeholder-gray-500 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-transparent placeholder-gray-500 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-700 rounded bg-transparent"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link to="/forgot-password" className="text-emerald-500 hover:text-emerald-400">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Log in
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-transparent text-sm font-medium text-white hover:bg-gray-900">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" />
                Log in with Google
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-transparent text-sm font-medium text-white hover:bg-gray-900">
                <img src="https://www.svgrepo.com/show/452156/apple.svg" className="w-5 h-5 mr-2" />
                Log in with Apple
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-transparent text-sm font-medium text-white hover:bg-gray-900">
                <img src="https://www.svgrepo.com/show/452045/microsoft.svg" className="w-5 h-5 mr-2" />
                Log in with Microsoft
              </button>
            </div>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-400">Do not you have an account? </span>
            <Link to="/signup" className="text-emerald-500 hover:text-emerald-400">
              Sign up from here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
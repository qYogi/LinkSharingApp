import { Devlinks } from "../../../svg/devlinks.tsx";
import { PasswordSvg } from "../../../svg/PasswordSvg.tsx";
import { EmailSvg } from "../../../svg/EmailSvg.tsx";

export default function LoginForm() {
  return (
    <div className="md:flex md:min-h-screen md:justify-center md:items-center md:bg-light-gray">
      <div className="flex flex-col max-w-[470px] max-h-[540px] md:h-full md:w-full ">
        <div className="mb-9 m-spacing md:self-center md:mb-12 md:mt-0 md:mx-0">
          <Devlinks />
        </div>
        <div className="flex flex-col gap-2 m-spacing md:bg-white md:m-0 rounded-xl md:p-10">
          <div className="mb-10">
            <h2 className="text-2xl text-dark-gray mb-2">Login</h2>
            <p className="text-base text-gray">
              Add your details below to get back into the app
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative">
              <label htmlFor="email" className="text-dark-gray text-sm">
                Email address
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. alex@email.com"
                  className="input border rounded-lg border-borders h-12 pl-12 pr-4 w-full focus:border-purple transition duration-300 focus:shadow-purple-hover focus:shadow-2xl focus:outline-none"
                />
                <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center">
                  <EmailSvg />
                </div>
              </div>
            </div>

            <div className="relative">
              <label htmlFor="password" className="text-dark-gray text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input border rounded-lg border-borders h-12 pl-12 pr-4 w-full focus:border-purple transition duration-300 focus:shadow-purple-hover focus:shadow-2xl focus:outline-none"
                />
                <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center">
                  <PasswordSvg />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="button mb-6 bg-purple text-white h-12 rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-purple-hover hover:bg-purple-hover transition duration-300 ease-in-out"
            >
              Login
            </button>
            <div className="flex flex-col place-items-center text-base">
              <p className="text-gray ">
                Don't have an account?
                <a href="#" className="text-purple text-base">
                  Create account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

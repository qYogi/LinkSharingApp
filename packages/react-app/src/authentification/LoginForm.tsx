import { Devlinks } from "../svg/devlinks.tsx";
import { PasswordSvg } from "../svg/PasswordSvg.tsx";
import { EmailSvg } from "../svg/EmailSvg.tsx";
import { useNavigate } from "@tanstack/react-router";
import { Auth } from "aws-amplify";
import { useAppContext } from "../lib/contextLib.ts";
import { useFormFields } from "../lib/hooksLib.ts";

export function LoginForm() {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });
  const { userHasAuthenticated } = useAppContext();
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      console.log(fields);
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      await navigate({ to: "/dashboard" });
    } catch (error) {
      // Prints the full error
      console.error(error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert(String(error));
      }
    }
  }

  const navigateToSignup = () => {
    navigate({ to: "/signup" });
  };

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

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative">
              <label htmlFor="email" className="text-dark-gray text-sm">
                Email address
              </label>
              <div className="relative">
                <input
                  id="email"
                  placeholder="e.g. alex@email.com"
                  className="input border rounded-lg border-borders h-12 pl-12 pr-4 w-full focus:border-purple transition duration-300 focus:shadow-purple-hover focus:shadow-2xl focus:outline-none"
                  type="email"
                  value={fields.email}
                  onChange={handleFieldChange}
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
                  id="password"
                  placeholder="Enter your password"
                  className="input border rounded-lg border-borders h-12 pl-12 pr-4 w-full focus:border-purple transition duration-300 focus:shadow-purple-hover focus:shadow-2xl focus:outline-none"
                  type="password"
                  value={fields.password}
                  onChange={handleFieldChange}
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
                Don't have an account?{" "}
                <a onClick={navigateToSignup} className="text-purple text-base">
                  Create account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

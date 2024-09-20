import { Devlinks } from "../svg/devlinks.tsx";
import { PasswordSvg } from "../svg/PasswordSvg.tsx";
import { EmailSvg } from "../svg/EmailSvg.tsx";
import { useFormFields } from "../lib/hooksLib.ts";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { onError } from "../lib/errorLib";
import { useAppContext } from "../lib/contextLib.ts";
import { ISignUpResult } from "amazon-cognito-identity-js";
import { useNavigate } from "@tanstack/react-router";

export function SignupScreen() {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });

  const [newUser, setNewUser] = useState<null | ISignUpResult>(null);
  const { userHasAuthenticated } = useAppContext();
  const navigate = useNavigate();

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length >= 8 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      });
      setNewUser(newUser);
    } catch (e) {
      onError(e);
    }
  }

  async function handleConfirmationSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
    } catch (e) {
      onError(e);
    }
  }

  const navigateToLogin = () => {
    navigate({ to: "/login" });
  };

  function renderForm() {
    return (
      <div className="md:flex md:min-h-screen md:justify-center md:items-center md:bg-light-gray">
        <div className="flex flex-col justify-center max-w-[470px]  md:h-full md:w-full ">
          <div className="mb-9 m-spacing md:self-center md:mb-12 md:mt-0 md:mx-0">
            <Devlinks />
          </div>
          <div className="flex flex-col gap-2 m-spacing md:bg-white md:m-0 rounded-xl md:p-10">
            <div className="mb-10">
              <h2 className="text-2xl text-dark-gray mb-2">Create Account</h2>
              <p className="text-base text-gray">
                Let's get you started sharing your links!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="relative">
                <label htmlFor="email" className="text-dark-gray text-sm">
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="email"
                    placeholder="e.g. alex@email.com"
                    className="input border rounded-lg border-borders h-12 pl-12 pr-4 w-full focus:border-purple transition duration-300 focus:shadow-purple-hover focus:shadow-2xl focus:outline-none"
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
                  Create Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="At least .8 characters"
                    className="input border rounded-lg border-borders h-12 pl-12 pr-4 w-full focus:border-purple transition duration-300 focus:shadow-purple-hover focus:shadow-2xl focus:outline-none"
                    value={fields.password}
                    onChange={handleFieldChange}
                  />
                  <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center">
                    <PasswordSvg />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="password" className="text-dark-gray text-sm">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="At least .8 characters"
                    className="input border rounded-lg border-borders h-12 pl-12 pr-4 w-full focus:border-purple transition duration-300 focus:shadow-purple-hover focus:shadow-2xl focus:outline-none"
                    value={fields.confirmPassword}
                    onChange={handleFieldChange}
                  />
                  <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center">
                    <PasswordSvg />
                  </div>
                </div>
                <p className="text-sm text-gray mt-6">
                  Password must contain at least 8 characters
                </p>
              </div>

              <button
                type="submit"
                className="button mb-6 bg-purple text-white h-12 rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-purple-hover hover:bg-purple-hover transition duration-300 ease-in-out"
                disabled={!validateForm()}
              >
                Create New Account
              </button>
              <div className="flex flex-col place-items-center text-base">
                <p className="text-gray ">
                  Already have an account?
                  <a
                    onClick={navigateToLogin}
                    className="text-purple text-base"
                  >
                    {" "}
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  function renderConfirmationForm() {
    return (
      <div className="md:flex md:min-h-screen md:justify-center md:items-center md:bg-light-gray">
        <div className="flex flex-col justify-center max-w-[470px]  md:h-full md:w-full ">
          <div className="mb-9 m-spacing md:self-center md:mb-12 md:mt-0 md:mx-0">
            <Devlinks />
          </div>
          <div className="flex flex-col gap-2 m-spacing md:bg-white md:m-0 rounded-xl md:p-10">
            <div className="mb-10">
              <h2 className="text-2xl text-dark-gray mb-2">Verify </h2>
              <p className="text-base text-gray">
                Please enter the confirmation code sent to your email
              </p>
            </div>

            <form
              onSubmit={handleConfirmationSubmit}
              className="flex flex-col gap-6"
            >
              <div className="relative">
                <label htmlFor="email" className="text-dark-gray text-sm">
                  Confirmation Code
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="confirmationCode"
                    placeholder="123456"
                    className="input border rounded-lg border-borders h-12 pl-6 pr-4 w-full focus:border-purple transition duration-300 focus:shadow-purple-hover focus:shadow-2xl focus:outline-none"
                    value={fields.confirmationCode}
                    onChange={handleFieldChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="button mb-6 bg-purple text-white h-12 rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-purple-hover hover:bg-purple-hover transition duration-300 ease-in-out"
                disabled={!validateConfirmationForm()}
                onClick={navigateToLogin}
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>{newUser === null ? renderForm() : renderConfirmationForm()}</div>
  );
}

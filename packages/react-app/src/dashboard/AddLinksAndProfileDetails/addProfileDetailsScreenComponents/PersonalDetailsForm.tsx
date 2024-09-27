import { useFormFields } from "../../../lib/hooksLib.ts";

export const PersonalDetailsForm = () => {
  const [fields, handleFieldChange] = useFormFields({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <div className="bg-light-gray max-h-[333px] h-full rounded-lg p-5 md:flex md:justify-between md:max-h-[208px]">
      <form className="flex flex-col md:w-full ">
        <div className="md:grid md:grid-cols-[1fr_2.1fr]">
          <label className="mb-1 text-dark-gray text-xs md:self-center md:text-base md:text-gray md:font-light">
            First Name*
          </label>
          <div className="md:w-full md:flex md:justify-end">
            <input
              id={"firstName"}
              value={fields.firstName}
              onChange={handleFieldChange}
              type="text"
              className="input sm:w-full mb-3 h-12 pl-4 border-borders border rounded-lg md:flex-grow md:max-w-[330px] md:w-full xl:max-w-[468.8px]"
              placeholder="e.g. John"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-[1fr_2.1fr]">
          <label className="mb-1 text-dark-gray text-xs md:self-center md:text-base md:text-gray md:font-light">
            Last Name*
          </label>
          <div className="md:w-full md:flex md:justify-end">
            <input
              id={"lastName"}
              value={fields.lastName}
              onChange={handleFieldChange}
              type="text"
              className="input sm:w-full mb-3 h-12 pl-4 border-borders border rounded-lg md:flex-grow md:max-w-[330px] md:w-full xl:max-w-[468.8px] "
              placeholder="e.g. Appleseed"
            />
          </div>
        </div>
        <div className=" md:grid md:grid-cols-[1fr_2.1fr]">
          <label className="mb-1 text-dark-gray text-xs md:self-center md:text-base md:text-gray md:font-light">
            Email
          </label>
          <div className="md:w-full md:flex md:justify-end">
            <input
              id={"email"}
              value={fields.email}
              onChange={handleFieldChange}
              type="text"
              className="input sm:w-full mb-3 h-12 pl-4 border-borders border rounded-lg md:flex-grow md:max-w-[330px] md:w-full xl:max-w-[468.8px] "
              placeholder="e.g. email@example.com"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

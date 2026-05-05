import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router";
import { signupUser } from "../../api/authApi.js";
import type { User } from "../../Types/user";
import { loginUser } from "../../api/authApi.js";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface SignUpFormValues extends User {
  cpass: string;
}

function SignUp() {
  const [showpassword, setShowpassword] = useState(false);

  const navigate = useNavigate();
const handleSignUp = async (values: SignUpFormValues) => {
 try {
    const payload = {
      name: `${values.fname} ${values.lname}`,
      email: values.email,
      password: values.password,
      role: values.role,
    };

    const res = await signupUser(payload);

    console.log("SIGNUP SUCCESS:", res.data);

   
    alert("Signup successful! Please login.");

   

    
    navigate("/login", { replace: true });

  } catch (error: any) {
    const message = error?.response?.data?.message;

    if (message === "User already exists") {
      alert("User already exists. Please login.");
      navigate("/login", { replace: true });
    } else {
      alert(message || "Signup failed");
    }
  }
};

    
  

  const validationSchema = Yup.object({
    fname: Yup.string().required(
      "Required Field"
    ),

    lname: Yup.string().required(
      "Required Field"
    ),

    email: Yup.string()
      .email("Invalid email")
      .required("Required Field"),

    password: Yup.string()
      .min(
        6,
        "must be atleast 6 characters"
      )
      .matches(
        /[@#.]/,
        "must contain @ or # or ."
      )
      .matches(
        /[0-9]/,
        "must contain atleast one number"
      )
      .matches(
        /[a-z]/,
        "must contain atleast one alphabet"
      )
      .required("Required Field"),

    cpass: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "must be same as password"
      )
      .required("Required Field"),

    role: Yup.string().required(
      "Required Field"
    ),
  });

  return (
    <div className="flex items-center justify-center bg-neutral-100/50 min-h-screen px-3">
      <div className="w-full max-w-md">
        <div className="text-center space-y-2 mb-4">
          <h1 className="text-xl sm:text-2xl font-bold">
            Create Your Account!
          </h1>
        </div>

        <Formik<SignUpFormValues>
          initialValues={{
            fname: "",
            lname: "",
            email: "",
            password: "",
            cpass: "",
            role: "member",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          <Form className="flex flex-col bg-white gap-2 rounded-2xl p-5 border border-gray-300 shadow-lg">
            <h1 className="font-bold text-center text-2xl mb-2">
              Sign Up
            </h1>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label className="text-sm">
                  First Name
                </label>

                <Field
                  name="fname"
                  className="border p-1.5 rounded border-gray-400 text-sm"
                />

                <ErrorMessage
                  name="fname"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm">
                  Last Name
                </label>

                <Field
                  name="lname"
                  className="border p-1.5 rounded border-gray-400 text-sm"
                />

                <ErrorMessage
                  name="lname"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm">
                Email Id
              </label>

              <Field
                name="email"
                type="email"
                className="border p-1.5 rounded border-gray-400 text-sm"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col relative">
                <label className="text-sm">
                  Password
                </label>

                <Field
                  name="password"
                  type={
                    showpassword
                      ? "text"
                      : "password"
                  }
                  className="border p-1.5 rounded border-gray-400 text-sm"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowpassword(
                      !showpassword
                    )
                  }
                  className="absolute right-2 top-8 text-gray-700 cursor-pointer"
                >
                  {showpassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm">
                  Confirm Password
                </label>

                <Field
                  name="cpass"
                  type="password"
                  className="border p-1.5 rounded border-gray-400 text-sm"
                />

                <ErrorMessage
                  name="cpass"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </div>

            <Field
              as="select"
              name="role"
              className="border p-1.5 rounded border-gray-400 text-sm"
            >
              <option value="member">
                Member
              </option>

              <option value="admin">
                Admin
              </option>
            </Field>

            <ErrorMessage
              name="role"
              component="div"
              className="text-red-500 text-xs"
            />

            <button
              type="submit"
              className="bg-stone-200 rounded-xl text-gray-800 font-bold p-2.5 hover:bg-stone-300 transition duration-300 text-sm"
            >
              Submit
            </button>

            <div className="flex justify-between text-xs">
              <p>
                Already have an account?
              </p>

              <Link
                to="/login"
                className="underline hover:text-stone-600"
              >
                Login
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
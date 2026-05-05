import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router";
import AuthStore from "../../store/AuthStore";
import { loginUser } from "../../api/authApi";

interface LoginFormValues {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const setAccessToken = AuthStore((state) => state.setAccessToken);
  const setUser = AuthStore((state) => state.setUser);

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const res = await loginUser(values);
      const data = res.data;
      console.log(data);
      

      if (!data.token) {
        throw new Error("Token not received from backend");
      }

      
      setAccessToken(data.token);
      setUser({
        id: data.user._id,
        username: data.user.name,
      });

      
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard", { replace: true });
    } catch (error: any) {
      alert(error?.response?.data?.message || "Invalid credentials");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "At least 6 characters")
      .required("Required"),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <Formik<LoginFormValues>
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className="space-y-4">


            <div>
              <label>Email</label>
              <Field
                name="email"
                type="email"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>


            <div>
              <label>Password</label>
              <Field
                name="password"
                type="password"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>


            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded"
            >
              Login
            </button>

            
            <p className="text-sm text-center">
              Don’t have an account?{" "}
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </p>

          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
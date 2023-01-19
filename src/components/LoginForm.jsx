import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate()

    const handleSubmit = () => navigate("/employees")

    return (
        <form action=""
            className="flex flex-col gap-2 items-center bg-white w-80 mx-auto py-8"
            // onSubmit={(e) => e.preventDefault()}
            onSubmit={handleSubmit}>

            <label htmlFor="employeeId">
                Employee ID
            </label>

            <input type="number"
                name=""
                id=""
                className="bg-slate-200"
            />

            <label htmlFor="password">
                Password
            </label>

            <input type="password"
                name=""
                id=""
                className="bg-slate-200"
            />

            <button className="bg-slate-200 p-2">
                Log in
            </button>

        </form>
    );

}

export default LoginForm;
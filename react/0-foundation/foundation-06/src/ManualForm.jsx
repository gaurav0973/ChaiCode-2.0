import { useState } from "react";

const ROLES = ["Frontend", "Backend", "AI Engineer"];

/**
 *
 * Form handling
 * - data to be send
 * - errors => hona hi hai
 * - submitted => hona hi hai
 */
const ManualForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        role: "Frontend",
        experience: "",
        cover: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function setField(field) {
        return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
    }

    function validate(v) {
        const e = {};
        if (!v.name.trim()) e.name = "Name is required";
        if (!v.email.trim()) e.email = "Email is required";

        return e;
    }

    function submit(ev) {
        ev.preventDefault();
        const e = validate(values);
        setErrors(e);
        if (Object.keys(e).length === 0) setSubmitted(true);
    }

    if (submitted) {
        return (
            <div>
                <h1>Form submitted successully {values.name}</h1>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={submit} noValidate>
                <label>
                    Full Name
                    <input
                        required
                        value={values.name}
                        onChange={setField("name")}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </label>
                <label>
                    Email
                    <input value={values.email} onChange={setField("email")} />
                    {errors.email && <span>{errors.email}</span>}
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ManualForm;

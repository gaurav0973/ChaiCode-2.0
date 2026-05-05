import { useState } from "react";

const ManualForm = () => {
    //1. States => values, error, submitted
    const [values, setValues] = useState({
        name: "",
        email: "",
    })
    const [error, setError] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // 2. 
    function set(field){
        return (e) => setValues((v) => ({...v, [field]: e.target.value}))
    }

    function validate(){
        const err = {}
        if(values.name.trim().length === 0) err.name = "Name is required"
        if(values.email.trim().length === 0) err.email = "Email is required"
        return err
    }

    function submit(e){
        e.preventDefault();
        const err = validate();
        setError(err);
        if(Object.keys(err).length === 0){
            setSubmitted(true);
        }
    }

    if(submitted){
        return (
            <div>
                <h2>Form Submitted Successfully</h2>
                <p>Name: {values.name}</p>
                <p>Email: {values.email}</p>
            </div>
        )
    }




    return (
        <>
        <div className="flex flex-col gap-4">
            <form onSubmit={submit}>
                <label className="flex flex-col gap-1">
                    Name: 
                    <input type="text" value={values.name} onChange={set("name")} className="border border-gray-300 rounded px-3 py-2"/>
                </label>
                <label className="flex flex-col gap-1">
                    Email: 
                    <input type="email" value={values.email} onChange={set("email")} className="border border-gray-300 rounded px-3 py-2"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>

    );
};

export default ManualForm;
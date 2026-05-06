import { useForm } from "react-hook-form";

const HookForm = () => {

    // 1. states => useForm() => values, error, submitted
    const {register, handleSubmit, formState: {
        errors, isSubmitSuccessful, isSubmitting
    }} = useForm({
        defaultValues: {
            name: "",
            email: "",
        },
        mode: "onChange",
    })

    // 2. submit function
    function submit(data){
        console.log(data);
    }

    // 3. Form is submitted successfully
    if(isSubmitSuccessful){
        return (
            <div>
                <h2>Form Submitted Successfully</h2>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    Name: 
                    <input type="text" {...register("name")} />
                </label>
                <label>
                    Email: 
                    <input type="text" {...register("email", { required: "Email is required" })} />
                </label>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default HookForm;
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Client = () => {
    const [success, setSuccess] = useState(false);
    const handleClient = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const address = form.address.value;
        const phone = form.phone.value;
        if (phone.length > 10) {
            alert("invalid Phone number")
        }
        else {
            const newClient = {
                name: name,
                address: address,
                phone: phone
            };
            fetch("http://localhost:3001/client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newClient)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setSuccess(data.success)
                })
        }

    }
    return (
        <div className="hero px-0 md:p-5 md:min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-xl md:text-5xl font-bold">Record new client</h1>
                </div>
                <div className="card md:shrink-0 md:w-full md:max-w-sm md:shadow-2xl bg-base-100">
                    <form onSubmit={handleClient} className="">
                        {/* Client Name */}
                        <div className="form-control">
                            <label className="input input-bordered md:flex md:items-center md:gap-2">
                                Client Name:
                                <input type="text" name="name" className="grow" placeholder="M & M Trading" />
                            </label>
                        </div>

                        {/* Client Address */}
                        <div className="form-control">
                            <label className="input input-bordered md:flex md:items-center md:gap-2">
                                Address:
                                <input type="text" name="address" className="grow" placeholder="172, Khatungonj. Chattogram" />
                            </label>
                        </div>

                        {/* Client Phone */}
                        <div className="form-control">
                            <label className="input input-bordered md:flex md:items-center md:gap-2">
                                Phone: +880
                                <input type="tel" name="phone" className="grow" placeholder="1711******" />
                            </label>
                        </div>

                        {/* submit  */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Record Client</button>
                        </div>

                    </form>
                </div>
            </div>

            {/* toast for success  */}

            {
                !success ? <></> :
                    toast.success('🦄 Wow so easy!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })
            }






        </div>
    );
};


export default Client;
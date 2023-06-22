import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import Spinner from './Spinner/Spinner';


const AddAClass = () => {
    // console.log("here")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [upload, setUpload] = useState(false);
    const { user, setUserRoll, logOut } = useContext(AuthContext)
    const imageHostKey = import.meta.env.VITE_APP_imgbb;
    console.log(user);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleAddProduct = (data) => {
        console.log(data.img[0])
        setUpload(true)

        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {


                if (imageData.success) {

                    const product = {
                        name: data.name,
                        email: user.email,
                        price: data.price,
                        img: imageData.data.url,
                        sellername: user.displayName,

                        seats: data.seats,
                        status: "pending",
                        feedback: "",
                        txnid: ""

                    }

                    fetch('https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/productadd', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => {
                            if (res.status === 403) {
                                setUserRoll('Buyer')
                                logOut()
                                    .then(() => {
                                        localStorage.removeItem("accessToken");
                                        navigate(from, { replace: true })
                                    })
                            }
                            return res.json()
                        })
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            setUpload(false)
                            navigate('/dashboard/myclass')

                        })
                }
            })
    }

    return (
        <div>
            <h1 className='text-6xl bebus my-3 mx-3 font-serif font-medium'>Add A Class</h1>
            {
                upload ? <Spinner></Spinner> :
                    <div className='border rounded-lg  m-3.5 container mx-auto max-w-md p-3'>


                        <form onSubmit={handleSubmit(handleAddProduct)}>


                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">Class Name</span>

                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered w-full "  {...register("name", {
                                    required: "Provide a Name",

                                })} />
                                {errors.name && <p className='text-red-600 py-2' role="alert">{errors.name?.message}</p>}


                            </div>
                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">Price</span>

                                </label>
                                <input type="number" placeholder="Price" className="input input-bordered w-full "  {...register("price", {
                                    required: "Provide a Price",

                                })} />
                                {errors.price && <p className='text-red-600 py-2' role="alert">{errors.price?.message}</p>}

                            </div>
                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">Available seats</span>

                                </label>
                                <input type="number" placeholder="seats" className="input input-bordered w-full "  {...register("seats", {
                                    required: "Provide available seats",

                                })} />
                                {errors.seats && <p className='text-red-600 py-2' role="alert">{errors.seats?.message}</p>}

                            </div>



                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Add a Image </span>
                                </label>
                                <input className="file-input file-input-bordered mb-5 file-input-sm w-full" {...register("img", {
                                    required: "Provide a Image"
                                })} type="file" placeholder="image" />


                            </div>

                            <h1>Instructor : {user.displayName}</h1>
                            <h1>Instructor Email : {user.email}</h1>

                            <div className='w-full text-center my-2'>

                                <input type="submit" className='btn btn-gray   w-full ' value="Add" />
                            </div>
                        </form>

                    </div>
            }

        </div>
    );
};

export default AddAClass;
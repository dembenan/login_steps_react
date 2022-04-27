import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function StepTwo() {
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, watch, formState: { errors, isDirty, isValid } } = useForm({
        mode: 'onChange'
    });
    const onSubmit = data => console.log(data);
    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true)
        }
    }
    console.log(watch("example")); // watch input value by passing the name of it
    const name = watch('name')
    const password = watch('password')
    const selectedValue = watch('selectedValue')

    console.log('name====>', name)
    console.log('name====>', password)
    console.log('name====>', selectedValue)
    return (
        <div className="container-fluid">
            <div className="row auth-wrapper">
                <div className="d-flex flex-column justify-content-center col-12 col-sm-12 col-md-7 col-lg-6 auth-main-col">
                <div class="d-flex flex-row-reverse" style={{ position:'relative',bottom:'115px',left:'150px',padding:'40px' }}>
                <div class="p-2"><i style={{ fontSize:'5px' }} class="fa-solid fa-circle"></i></div>
                        <div class="p-2">
                        <i style={{ fontSize:'5px' }} class="fa-solid fa-circle"></i>
                        </div>
                        <div class="p-2"><i style={{ fontSize:'5px' }} class="fa-solid fa-circle"></i></div>
                        <div class="p-2"  style={{ fontWeight:'bold' }}>Step 2 of 3</div>
                    </div>
                    <form className="auth-form" method="POST" onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
                        <div className="d-flex flex-column justify-content-center ">
                            <div className="p-3">
                                <h1>Let'set up your account</h1>
                            </div>
                            <div className="p-3">
                                <p>Already have an account ? <span><Link to="/login" style={{ textDecoration: 'none',fontWeight:'bold',fontSize:'17px'  }}>Sign in</Link> </span> </p>
                            </div>
                            <div className="p-2">
                                <input type="text"
                                    placeholder="Other name"
                                    className={`w-50  p-3 border bg-light form-control ${errors.name && 'border border-danger '}`}
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'name is required'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: "Min length is 5"
                                        },
                                        pattern: {
                                            value: /[a-zA-Z]+/,
                                            message: 'Please enter only alphabets'
                                        }
                                    })} />
                                <div>
                                    {errors.name &&
                                        <span className='text-danger'>
                                            {errors.name.message}
                                        </span>
                                    }
                                </div>
                            </div>

                            <div className="p-2">
                                <select className="form-select form-control mh-50 p-3 border bg-light input-lg" aria-label="Default select example"                                     {...register("selectedValue", {
                                        required: {
                                            value: true,
                                            message: 'Selected value is required'
                                        }
                                    })}>
                                    <option value="selected">Developper</option>
                                    <option value="option-2">Designer</option>
                                    <option value="option-2">Data Scientist</option>
                                    <option value="option-2">Manager </option>
                                </select>
                                <div>
                                    {errors.selectedValue &&
                                        <span className='text-danger'>
                                            {errors.selectedValue.message}
                                        </span>
                                    }
                                </div>
                            </div>
                            <div className="p-2">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Repeat Password"
                                    className={`w-50 p-3 border bg-light form-control ${errors.password && 'border border-danger'}`}
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "Min length is 8"
                                        },
                                    })} />
                                <button style={{ position: 'relative', left: '480px', bottom: '40px', color: '#000', border: 'none' }} type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'fa-solid fa-eye'} ></i> </button>

                                <div>
                                    {errors.password &&
                                        <span className='text-danger'>
                                            {errors.password.message}
                                        </span>
                                    }
                                </div>
                            </div>
                            <div className="pt-5">
                            <Link to="/step3" style={{ textDecoration: 'none',fontWeight:'bold',fontSize:'17px'  }} >                                <button disabled={!isDirty || !isValid}
                                    className={`w-50  p-3 border bg-light form-control ${!isDirty || !isValid ? 'submit-inactive ' : 'btn bg-primary'}`}
                                    type="submit" value="Submit" > Next</button></Link>

                            </div>
                            <div className="pt-5">
                            <p className='w-50 bg-light '>By clicking the "Next" button,you agree to creating a free account,and to <span><Link to="/" style={{ textDecoration: 'none',fontWeight:'bold',fontSize:'17px'  }}>Terms of service </Link> </span> and  <span><Link to="/" style={{ textDecoration: 'none',fontWeight:'bold',fontSize:'17px'  }}>Privacy Policy </Link> </span></p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-4 h-100 d-flex align-items-center justify-content-center auth-background-col">

                    <div className="auth-background-holder" style={{ color: '#fff',margin:'50px' }}>
                        <div className="d-flex p-5 flex-column justify-content-center ">
                           <div className="p-5" style={{ margin: '0 auto',fontSize:'100px',fontWeight:'bold'}}>
                              <h2>Dummy Heading</h2>
                            </div>
                            <div className="p-4 " style={{ margin: '0 auto',width:'400px',fontSize:'25px' }}>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>                        
                     </div>
                    <div className="auth-background-mask"></div>
                </div>

            </div>
        </div>



    );
}
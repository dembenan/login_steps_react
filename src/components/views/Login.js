import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Login() {
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
    const email = watch('email')
    const password = watch('password')

    console.log('name====>', email)
    console.log('name====>', password)
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
                        <div class="p-2"  style={{ fontWeight:'bold' }}>Step 1 of 3</div>
                    </div>
                    <form className="auth-form" method="POST" onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
                        <div className="d-flex flex-column justify-content-center ">
                            <div className="p-3">
                                <h1>Let'set up your account</h1>
                            </div>
                            <div className="p-3">
                                <p>You dn't have an account ? <span><Link to="/" style={{ textDecoration: 'none',fontWeight:'bold',fontSize:'17px'  }}>Sign up</Link> </span> </p>
                            </div>

                            <div className="p-2">
                                <input type="email"
                                    placeholder="Email address"
                                    className={`w-50  p-3 border bg-light form-control ${errors.name && 'border border-danger '}`}
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email address"
                                        }
                                    })} />
                                <div>
                                    {errors.email &&
                                        <span className='text-danger'>
                                            {errors.email.message}
                                        </span>
                                    }
                                </div>
                            </div>

                            <div className="p-2">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
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
                            <Link to="/step2" >                                <button disabled={!isDirty || !isValid}
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
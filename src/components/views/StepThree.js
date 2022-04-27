import { Link } from "react-router-dom";


export default function StepThree() {

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
                        <div class="p-2"  style={{ fontWeight:'bold' }}>Step 3 of 3</div>
                    </div>
                        <div className="d-flex flex-column justify-content-center ">
                            <div className="p-3">
                                <h1>Successfully created account</h1>
                            </div>
                            <div className="p-3">
                                <p>You can connect to your account with this link  ? <span><Link to="/login" style={{ textDecoration: 'none',fontWeight:'bold',fontSize:'17px'  }}>Sign in</Link> </span> </p>
                            </div>
                        
                        </div>
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
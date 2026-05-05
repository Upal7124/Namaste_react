const SignUp=()=>{
    return (<>
    <div className="bg-image"></div>
        <div className="SignUp-cont">
            <div className="SignUp-form-cont">
                <h4>Log in or Sign Up in seconds</h4>
                <h5>Use your email or another service to continue with Canva (it’s free)!</h5>
                <div className="SignUp-form-btn">
                    <button className="SignUp-form-btn-phn">
                        Continue with phone number
                    </button>
                    <button className="SignUp-form-btn-google">
                        Continue with Google
                    </button>
                    <button className="SignUp-form-btn-email">
                        Continue with email
                    </button>
                </div>
                <button className="SignUp-form-btn-another">
                    Continue another way
                </button>
                <h6>By continuing, you agree to Canva’s Terms of Use. Read our Privacy Policy.</h6>
            </div>
        </div>
        </>
    )
}
export default SignUp;
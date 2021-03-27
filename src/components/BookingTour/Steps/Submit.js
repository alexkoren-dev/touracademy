import React, { useState, useMemo, useRef } from 'react'
import { Formik } from "formik"
import ReCAPTCHA from "react-google-recaptcha";
import ReactSelect from 'react-select'
import countryList from 'react-select-country-list'
import "react-datepicker/dist/react-datepicker.css";

import object from "yup/lib/object"
import string from "yup/lib/string"

const Yup = {
    object,
    string,
    ref: () => {},
}

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    country: "",
    additionalInfo: "",
    coupon: "",
    checkTerms: "",
    captchaVerify: ""
  }
  
const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required"),
    lastName: Yup.string()
      .required("Last Name is required"),
    email: Yup.string()
      .email("Please enter the valid email")
      .required("Email is required"),
    telephone: Yup.string()
      .required("Telephon is required"),
    country: Yup.string(),
    additionalInfo: Yup.string(),
    coupon: Yup.string(),
    checkTerms: Yup.string()
        .required("You should agree with booking terms"),
    captchaVerify: Yup.string()
        .required("reCAPTCHA verification required"),
})

const Submit = ({nextStep}) => {
    const captchObj = useRef(null);
    const [country, setCountry] = useState()
    const [captcha, setCaptcha] = useState()
    const countryOptions = useMemo(() => countryList().getData(), [])

    const handleSubmit = (values) => {
        nextStep(values)
    }
    
    return(
        <div className="submit-form">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ handleSubmit, handleChange, values, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name *"
                                    onChange={handleChange}
                                    className={
                                    errors.firstName && touched.firstName
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                />
                                {errors.firstName && touched.firstName && (
                                    <div className="invalid-feedback">{errors.firstName}</div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name *"
                                    onChange={handleChange}
                                    className={
                                    errors.lastName && touched.lastName
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                />
                                {errors.lastName && touched.lastName && (
                                    <div className="invalid-feedback">{errors.lastName}</div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address *"
                                    onChange={handleChange}
                                    className={
                                    errors.email && touched.email
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                />
                                {errors.email && touched.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
                            </div>

                            <div className="form-group mb-4">
                                <input
                                    type="text"
                                    id="telephone"
                                    name="telephone"
                                    placeholder="Telephone *"
                                    onChange={handleChange}
                                    className={
                                    errors.telephone && touched.telephone
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                />
                                {errors.telephone && touched.telephone && (
                                    <div className="invalid-feedback">{errors.telephone}</div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                                <ReactSelect 
                                    options={countryOptions} 
                                    classNamePrefix={"react-select"}
                                    placeholder="Your country"
                                    value={country}
                                    onChange={(option) => {
                                        setCountry(option || {})
                                        handleChange("country")(option.value);
                                    }}
                                    className={
                                        errors.country && touched.country
                                            ? "is-invalid"
                                            : ""
                                    }
                                />
                                {errors.country && touched.country && (<div className="invalid-feedback">{errors.country}</div>)}
                            </div>

                            <div className="form-group mb-3">
                                <textarea
                                    type="text"
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    placeholder="Additional Information"
                                    onChange={handleChange}
                                    rows={5}
                                    className={
                                    errors.additionalInfo && touched.additionalInfo
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                />
                                {errors.additionalInfo && touched.additionalInfo && (
                                    <div className="invalid-feedback">{errors.additionalInfo}</div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                                <p>If you have a discount coupon, please fill in the number</p>
                                <input
                                    type="text"
                                    id="coupon"
                                    onChange={handleChange}
                                    className={
                                    errors.coupon && touched.coupon
                                        ? "is-invalid form-control"
                                        : "form-control"
                                    }
                                />
                                {errors.coupon && touched.coupon && (
                                    <div className="invalid-feedback">{errors.coupon}</div>
                                )}
                            </div>
                            
                            <div className="form-group mb-3">
                                <ReCAPTCHA
                                    ref={captchObj}
                                    sitekey={"6LcCdJEaAAAAAMcdFH-gEM0X96gBOdlL2NoJMcK1"}
                                    theme="light"
                                    size="normal"
                                    className={
                                        errors.captchaVerify && touched.captchaVerify
                                            ? "is-invalid"
                                            : ""
                                    }
                                    onChange={(captcha) => {
                                        setCaptcha(captcha)
                                        handleChange('captchaVerify')(captcha)
                                    }}
                                    onExpired={() => {setCaptcha('')}}
                                    onErrored={() => {setCaptcha('')}}
                                />
                                {errors.captchaVerify && touched.captchaVerify && (
                                    <div className="invalid-feedback">{errors.captchaVerify}</div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="checkTerms"
                                        name="checkTerms"
                                        onChange={(e) => {
                                            console.log(e.target.checked)
                                            handleChange('checkTerms')(e.target.checked?'true':'')
                                        }}
                                        value="true"
                                        className={
                                            errors.checkTerms && touched.checkTerms
                                                ? "is-invalid custom-control-input"
                                                : "custom-control-input"
                                        }
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="checkTerms"
                                    >
                                        <i>I agree with the <a href="#">booking terms</a> of this site *</i>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="form-group mb-0 text-center">
                                <button
                                    className="btn btn-primary btn-block mx-auto"
                                    type="submit"
                                    style={{width: 200}}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Submit;
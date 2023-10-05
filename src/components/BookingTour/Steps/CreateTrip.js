import React, { useState } from 'react'
import { Formik } from "formik"
import moment from 'moment'
import iziToast from "izitoast"
import CountInput from 'components/CountInput'
import ReactSelect from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import object from "yup/lib/object"
import string from "yup/lib/string"

import people from 'assets/images/landing/people.svg'
import CarIcon from 'assets/images/icons/awesome-car-side.png'
import HikingIcon from 'assets/images/icons/awesome-hiking.png'
import MotorcycleIcon from 'assets/images/icons/awesome-motorcycle.png'
import BikeIcon from 'assets/images/icons/material-directions-bike.png'

const destinationOptions = [
    { value: 'Yerevan', label: 'Yerevan' },
    { value: 'Ashtarak', label: 'Ashtarak' },
    { value: 'Garni', label: 'Garni' },
    { value: 'Kapan', label: 'Kapan' }
]

const mealOptions = [
    { value: 'Meals (10 $ per one pax)', label: 'Meals (10 $ per one pax)' },
    { value: 'Meals (20 $ per one pax)', label: 'Meals (20 $ per one pax)' },
    { value: 'Meals (30 $ per one pax)', label: 'Meals (30 $ per one pax)' },
    { value: 'Meals (40 $ per one pax)', label: 'Meals (40 $ per one pax)' }
]

const TOUR_TYPES = [
    {'name': 'Car', icon: CarIcon, value: 'Car' },
    {'name': 'Motorcycle', icon: MotorcycleIcon, value: 'Motorcycle' },
    {'name': 'Bike', icon: BikeIcon, value: 'Bike' },
    {'name': 'Hiking', icon: HikingIcon, value: 'Hiking' }
]

const Yup = {
    object,
    string,
    ref: () => {},
}

const initialValues = {
    name: "",
    date: moment(new Date()).format('YYYY-MM-DD'),
    destination: '',
    adultCount: 1,
    childCount: 0,
    type: '',
    meal: ''
  }
  
const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required"),
    date: Yup.string()
      .required("Date is required"),
    destination: Yup.string()
      .required("Destination is required"),
    type: Yup.string()
      .required("Type is required"),
    meal: Yup.string()
})

const CreateTrip = ({nextStep}) => {
    const [destination, setDestination] = useState()
    const [meal, setMeals] = useState()
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (values) => {
        nextStep(values)
    }
    
    return(
        <div className="create-trip">
            <div className="row">
                <div className="col-md-6 p-4">
                    <img src={people} className="img-responsive"/>
                </div>
                <div className="col-md-6">
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
                                id="name"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                className={
                                errors.name && touched.name
                                    ? "is-invalid form-control"
                                    : "form-control"
                                }
                            />
                            {errors.name && touched.name && (
                                <div className="invalid-feedback">{errors.name}</div>
                            )}
                            </div>

                            <div className="form-group mb-3">
                            <DatePicker 
                                className={
                                    errors.date && touched.date
                                        ? "is-invalid form-control"
                                        : "form-control"
                                }
                                selected={startDate} 
                                onChange={date => {
                                    setStartDate(date)
                                    handleChange('date')(moment(date).format('YYYY-MM-DD'))
                                }} 
                            />
                            {errors.date && touched.date && (
                                <div className="invalid-feedback">{errors.date}</div>
                            )}
                            </div>

                            <div className="form-group mb-3">
                            <ReactSelect 
                                options={destinationOptions} 
                                classNamePrefix={"react-select"}
                                placeholder="Starting destination"
                                value={destination}
                                onChange={(option) => {
                                    setDestination(option || {})
                                    handleChange("destination")(option.value);
                                }}
                                className={
                                    errors.destination && touched.destination
                                        ? "is-invalid"
                                        : ""
                                }
                            />
                            {errors.destination && touched.destination && (<div className="invalid-feedback">{errors.destination}</div>)}
                            </div>

                            <div className="form-group mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="mr-3" style={{flex: 1}}>
                                        <CountInput label={'Adult'} initValue={1} minValue={1} handleChange={handleChange}/> 
                                    </div>
                                    <div style={{ flex: 1}}>
                                        <CountInput label={'Child'} initValue={0} handleChange={handleChange}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <div className={
                                    errors.type && touched.type
                                        ? "d-flex align-items-center is-invalid"
                                        : "d-flex align-items-center"
                                }>
                                    {/* <label style={{flex: 1}}>Type</label> */}
                                    <div className="d-flex justify-content-center w-100">
                                        { TOUR_TYPES.map((tour, key) => 
                                            <div key={key} className={`type-button ${tour.value === values.type && 'active'}`} onClick={() => handleChange('type')(tour.value)}>
                                                <img src={tour.icon}/>
                                                {tour.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {errors.type && touched.type && (<div className="invalid-feedback text-center">{errors.type}</div>)}
                            </div>

                            <div className="form-group mb-3">
                                <ReactSelect 
                                    options={mealOptions} 
                                    classNamePrefix={"react-select"}
                                    placeholder="Meals (10 $ per one pax)"
                                    value={meal}
                                    onChange={(option) => {
                                        setMeals(option || {})
                                        handleChange("meal")(option.value);
                                    }}
                                    className={
                                        errors.meal && touched.meal
                                            ? "is-invalid"
                                            : ""
                                    }
                                />
                                {errors.meal && touched.meal && (<div className="invalid-feedback">{errors.meal}</div>)}
                            </div>

                            <div className="form-group mb-0 text-center">
                            <button
                                className="btn btn-primary btn-block"
                                type="submit"
                            >
                                CREATE TRIP
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

export default CreateTrip;
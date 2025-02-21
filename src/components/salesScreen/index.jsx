import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPassName, setPassSurname, setPassengerInfo } from '../configure';
import './index.scss';
import './third.css';
import './secondary.css';

function SalesScreen() {
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [babyCount, setBabyCount] = useState(0);
    const flightTicket = useSelector((state) => state.passTicket.flightTicket);
    const passengerInfo = useSelector((state) => state.passInfo.passengerInfo);
    const passName = useSelector((state) => state.passCheck.passName);
    const passSurname = useSelector((state) => state.passCheck.passSurname);

    console.log('passName', passName)

    const totalPassenger = sessionStorage.getItem('totalPassenger');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNameChange = (e, passengerIndex) => {
        const newName = e.target.value;
        const currentPassNames = [...passName];
        currentPassNames[passengerIndex - 1] = newName;
        dispatch(setPassName(currentPassNames));
    };

    const handleSurnameChange = (e, passengerIndex) => {
        const newSurname = e.target.value;
        const currentPassSurnames = [...passSurname];
        currentPassSurnames[passengerIndex - 1] = newSurname;
        dispatch(setPassSurname(currentPassSurnames));
    }

    const handlePayScreenClick = () => {
        navigate('/pay-screen');
    };

    const totalPrice = flightTicket.priceDetail.basePrice.amount * totalPassenger;

    const renderPassengerDetails = () => {
        const passengerDetails = [];
        const passengerCounts = [passengerInfo.adults, passengerInfo.children, passengerInfo.babies];

        for (let i = 0; i < passengerCounts.length; i++) {
            for (let j = 1; j <= passengerCounts[i]; j++) {
                const passengerIndex = passengerCounts.slice(0, i).reduce((acc, count) => acc + count, 0) + j;
                let passengerType = '';
                switch (i) {
                    case 0:
                        passengerType = 'Yetişkin';
                        break;
                    case 1:
                        passengerType = 'Çocuk';
                        break;
                    case 2:
                        passengerType = 'Bebek';
                        break;
                    default:
                        break;
                }

                passengerDetails.push(
                    <div key={passengerIndex} className="flight-container">
                        <div className='passenger-leftInfo'>
                            <h3>{`${j}. ${passengerType}`}</h3>
                        </div>
                        <div className="flight-box">
                            <div className="flight-box">
                                <div className="no-title">First Name:</div>
                                <div className="no"><input OnChange={(e) => handleNameChange(e, passengerIndex)}  type="text" id="first-name" name="first-name" required/></div>
                            </div>
                            <div className="flight-box">
                                <div className="depart-title">Last Name:</div>
                                <div className="depart"><input OnChange={(e) => handleSurnameChange(e, passengerIndex)} type="text" id="last-name" name="last-name" required/></div>
                            </div>
                            {/* <div className="flight-box">
                                <div className="time-title">ID Number:</div>
                                <div className="time"><input type="text" id="id-number" name="id-number" required/></div>
                          </div>
                                <div className="flight-box">
                                <div className="arrive-title">Birth Date:</div>
                                <div className="arrive"><input type="date" id="birth-date" name="birth-date" required/></div>
                            </div> */}
                            
                        </div>

                    </div>
                );
            }
        }
        return passengerDetails;
    };

    // <div className="flight-container">
    //         <div className="flight-box">
    //             <div className="airline-title">Gender:</div>
    //             <div className="airline">
    //                 <select id="gender" name="gender" required>
    //                     <option value="" selected disabled>Select Gender</option>
    //                     <option value="male">Male</option>
    //                     <option value="female">Female</option>
    //                     <option value="other">Other</option>
    //                 </select>

    //             </div>
    //         </div>
    //         <div className="flight-box">
    //             <div className="no-title" onClick={handleNameChange}>First Name:</div>
    //             <div className="no"><input type="text" id="first-name" name="first-name" required/></div>
    //         </div>
    //         <div className="flight-box">
    //             <div className="depart-title" onClick={handleSurnameChange}>Last Name:</div>
    //             <div className="depart"><input type="text" id="last-name" name="last-name" required/></div>
    //         </div>
    //         <div className="flight-box">
    //             <div className="time-title">ID Number:</div>
    //             <div className="time"><input type="text" id="id-number" name="id-number" required/></div>
    //         </div>
    //         <div className="flight-box">
    //             <div className="arrive-title">Birth Date:</div>
    //             <div className="arrive"><input type="date" id="birth-date" name="birth-date" required/></div>
    //         </div>
    //     </div>

    const userTicketAmount = {
        adults: adultCount,
        children: childCount,
        babies: babyCount
    };

    const handleMainPage = () => {
        dispatch(setPassengerInfo(userTicketAmount));
        navigate('/');
    };

    const logo =
        'https://uploads-ssl.webflow.com/605c9d764f1ef938a009ac98/61e01bfbdd8632a72962edc2_Pinsoft_Yatay_Logo_mavi-for%20animation.svg';

    return (
        <>

        <nav>
            <div className="nav_logo">Some Booking Inc.</div>
            <ul className="nav_links">
                <li className="link" onClick={handleMainPage}><a href="#">Home</a></li>
                <li className="link"><a href="#">Book</a></li>
                <li className="link"><a href="#">Blog</a></li>
                <li className="link"><a href="#">Contact Us</a></li>
            </ul>
        </nav>

        <div className="container">
        <div className="section-header">
            <h3>Flight Information</h3>
        </div>
        <div className="flight-info-container">
            <div className="flight-info">
                <div className="info-label">Airline:</div>
                <div className="info-value">{flightTicket.airline}</div>
            </div>
            <div className="flight-info">
                <div className="info-label">Flight Number:</div>
                <div className="info-value">{flightTicket.flightNo}</div>
            </div>
            <div className="flight-info">
                <div className="info-label">Departure Time:</div>
                <div className="info-value">{flightTicket.depTime}</div>
            </div>
            <div className="flight-info">
                <div className="info-label">Arrival Time:</div>
                <div className="info-value">{flightTicket.arrTime}</div>
            </div>
            <div className="flight-info">
                <div className="info-label">Passenger Number:</div>
                <div className="info-value">{totalPassenger}</div>
            </div>
            <div className="flight-info">
                <div className="info-label">Price:</div>
                <div className="info-value">{totalPrice}</div>
            </div>
        </div>
        </div>

        <h3>Passenger Information</h3>
        {renderPassengerDetails()}

        <h3>Contact Information</h3>
        <div className="flight-container larger-container">
            <div claclassNamess="flight-box">
                <div className="airline-title">Phone Number:</div>
                <div className="airline"><input type="text" id="phone-number" name="phone-number" required/></div>
            </div>
            <div className="flight-box">
                <div className="no-title">Email:</div>
                <div className="no"><input type="email" id="email" name="email" required/></div>
            </div>
        </div>

        <h2>Billing Information</h2>
        <div className="flight-container larger-container">
            <div className="flight-box">
                <div className="airline-title">Name:</div>
                <div className="airline"><input type="text" id="billing-name" name="billing-name" required/></div>
            </div>
            <div className="flight-box">
                <div className="no-title">Last Name:</div>
                <div className="no"><input type="text" id="billing-last-name" name="billing-last-name" required/></div>
            </div>
            <div className="flight-box">
                <div className="depart-title">ID Number:</div>
                <div className="depart"><input type="text" id="billing-id-number" name="billing-id-number" required/></div>
            </div>
            </div>

            <h3>Flight Ticket Insurance</h3>
            <div className="flight-container larger-container">
                <div className="flight-box">
                    <div className="airline-title">Insurance:</div>
                    <div className="airline">
                        <label for="insurance">
                            <input type="checkbox" id="insurance" name="insurance"/> 
                            Yes, I want flight ticket insurance
                        </label>
                    </div>
                </div>
            </div>

            <div className="section_container submit-container" onClick={handlePayScreenClick}>
                <button type="submit" class="btn">Payment</button>
            </div>

        </>
    );
}

export default SalesScreen;
import React from 'react';
import slack from '../../images/logos/slack.png'
import google from '../../images/logos/google.png'
import uber from '../../images/logos/uber.png'
import net from '../../images/logos/netflix.png'
import air from '../../images/logos/airbnb.png'

const Sitebar = () => {
    return (
        <div className="md:container ">
        <div className="grid gap-4 grid-cols-5 " style={{marginLeft:"280px"}}>
    <img src={slack} style={{width: "140px",
height: "36px"}}  alt="" />
    <img src={google} style={{width: "140px",
height: "36px"}} alt="" />
    <img src={uber} style={{width: "140px",
height: "36px"}} alt="" />
    <img src={net} style={{width: "140px",
height: "36px"}} alt="" />
    <img src={air}  style={{width: "140px",
height: "36px"}} alt="" />
</div>
</div>
    );
};

export default Sitebar;
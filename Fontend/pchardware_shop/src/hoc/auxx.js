import React,{useState} from 'react';

import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer ArdeTV-4s3R6ZfD2poLDmo9yMWwIgRInF8abCvJCQHGuIw_b_Typ8t3KJbondYll-QKopqhO4xeGDAVarSu6_JiF_ZMTAlLeCxR3mvy7F_HPlwVOXK7WWkLX8AuaYHYx'
    }
});

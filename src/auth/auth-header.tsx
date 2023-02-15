import axios from "axios";
import React from "react";

const authHeader = () => {
  const accessToken = localStorage.getItem("enteredToken");
  if(accessToken) {
    return {
      'Authorization': `Bearer ${accessToken}`
    };
  } else {
    return {
      'Authorization': ""
    };
  }
};

export default authHeader;
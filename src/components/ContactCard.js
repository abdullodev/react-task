import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";
import user from "../images/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  return (
    <div className="item itemElement">
      <div className="content nameEmail">
        <div>
          <img src={user} alt="user" className="imgUser" />
        </div>
        <div className="mt-2">
          <div className="header">
            <p>{contact.name}</p>
          </div>
          <div className="header">
            <h6 style={{ color: "#3293a8" }}>{contact.email}</h6>
          </div>
        </div>
      </div>

      <div className="deleteDiv">
        <RiDeleteBin6Line
          className="deletIcon"
          onClick={() => clickHandler(contact.id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;

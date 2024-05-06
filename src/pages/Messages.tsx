import "../Messages.css";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserMessages() {
  const [messages, setMessages] = useState<any[]>([]);
  const [username, setUsername] = useState("123");

  useEffect(function () {
    axios
      .request({
        headers: {
          Authorization: `Bearer XVIL_OIRoaMLH6G-9mgt2JRjIdDoju5B`,
        },
        method: "GET",
        url: `https://api.test.aqua-delivery.ru/v1/chat/get-messages?id=1230`,
      })
      .then((response) => {
        setMessages(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Messages_Main">
      <div className="Messages_Welcome">
        <h1 className="Messages_Name">Messages</h1>
        <div className="Message_Profile">
          <img
            className="Message_Profile-Image"
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="Your avatar"
          ></img>
          <p className="Messages_Profile-Name">Hi,{username}</p>
        </div>
      </div>
      <div className="Messages_Form">
        <p className="Messages_Naming">DATE</p>
        <p className="Messages_Naming">TYPE</p>
        <p className="Messages_Naming__Message">MESSAGE</p>
      </div>
      <tbody className="Messages_Notification">
        {messages.map((message) => {
          return (
            <tr className="Messages_Row">
              <td className="Messages_Date">{message.created_at}</td>
              <td className="Messages_Type">{message.type}</td>
              <td className="Messages_Message">{message.message}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
}

import React, { useEffect, useState } from 'react'
import './Chat.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import db from './firebase';
import { collection, query, onSnapshot, getDoc, doc } from "firebase/firestore";

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() =>  {
    if(roomId){
        const q = query(doc(db, "rooms",roomId));
    const unsubscribe = onSnapshot( (q) => {setRoomDetails(q.data())
      });
      }
    }, [roomId]);

    console.log(roomDetails);
    

  return (
    <div className="chat">
        <div className="chat__header">
            <div className="chat__headerLeft">
              <h4 className="chat__channelName">
                <strong># {roomDetails?.name}</strong>
                <StarBorderOutlinedIcon />

              </h4>
            </div>

            <div className="chat__headerRight">
                <p>
                    <InfoOutlinedIcon /> Details
                </p>

            </div>
        </div>
    </div>
  )
}

export default Chat
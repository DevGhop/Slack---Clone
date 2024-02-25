import React from 'react'
import "./SidebarOption.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { collection, addDoc } from "firebase/firestore"; 
import db from "./firebase";



function SidebarOption({ Icon, title, id,addChannelOption}) {
  const history = useHistory();

  const selectChannel = () =>{
    if(id) {
      history.push(`/room/${id}`);
    }else{
      history.push(title);
    }
  }

  const addChannel  = async () => {
    const channelName = prompt('Please eneter the channel name');

    if (channelName) {
      await addDoc(collection(db, "rooms"), {
        name: channelName,
      });
    }
  };

  return (
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel }>
        {Icon && <Icon className="sidebarOption__icon"/>}
        {Icon ? (<h3>{title}</h3>): (<h3 className="sidebarOption__channel">
            <span className="sidebarOption__hash">#</span>{title}
            </h3>)}
    </div>
  );
}   

export default SidebarOption;
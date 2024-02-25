import React, {useEffect, useState} from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create"; 
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add"
import db from "./firebase";
import { collection, query, onSnapshot } from "firebase/firestore";


function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() =>  {
    const q = query(collection(db, "rooms"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const tabs = [];
  querySnapshot.forEach((doc) => {
      tabs.push({id: doc.id,
        name: doc.data().name
      });
  });
  setChannels(tabs)
  });
  }, []);

  return (
    <div className="sidebar">
     <div className="sidebar__header">
      <div className="sidebar__info">
        <h2>Dev Programmer</h2>
        <h3>
          <FiberManualRecordIcon />
          Dev Ghop
       </h3>
     </div>
     <CreateIcon />
     </div>
     <SidebarOption Icon={InsertCommentIcon} title="threads" />
     <SidebarOption Icon={InboxIcon} title="Mention & reactions" />
     <SidebarOption Icon={DraftsIcon} title="Saved items"/>
     <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
     <SidebarOption Icon={PeopleAltIcon} title="people & user groups"/>
     <SidebarOption Icon={AppsIcon} title="Apps" />
     <SidebarOption Icon={FileCopyIcon} title="File browser"/>
     <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
     <hr />
     <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
     <hr />
     <SidebarOption Icon={AddIcon} addChannelOption="()" title="Add Channels"/>

     {/* Connect to dB and list all the channels */}
     {/* <SidebarOption . . ./> */}
     {channels.map((channel) => (
      <SidebarOption title={channel.name} id={channel.id} />
     ))}
  </div>
  )
}

export default Sidebar
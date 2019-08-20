import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
const ContextMenu = props => {
  const { idContext } = props;
  debugger;
  return (
    <div>
      {idContext.id > 2 ? (
        <div>
          {" "}
          <InboxIcon />
          <InboxIcon />
          <InboxIcon />
        </div>
      ) : (
        <div>
          <InboxIcon />
        </div>
      )}
    </div>
  );
};

export default ContextMenu;

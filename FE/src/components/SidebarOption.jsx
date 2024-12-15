const SidebarOption = ({ icon: Icon, navShrink, text }) => {
  return (
    <li className="sidebar-option">
      <Icon className="icon-option" />
      {!navShrink && (
        <span
          className={!navShrink ? "text-option text_shrink" : "text-option"}
        >
          {text}
        </span>
      )}
    </li>
  );
};

export default SidebarOption;

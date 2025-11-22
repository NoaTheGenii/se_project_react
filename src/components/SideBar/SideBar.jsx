import "./SideBar.css";
import avatar from "../../images/avatar.svg";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <img src={avatar} alt="Terrence Tegegne" className="sidebar__avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </aside>
  );
}

import "./navItem.scss";

export default function NavItem(props) {
  return (
    <li class="nav__item">
      <a href={"#" + props.id} class={"nav__link " + props.active}>
        {props.id.charAt(0).toUpperCase() + props.id.slice(1)}
        <i class={"uil uil-" + props.icon + " nav__icon"}></i>
      </a>
    </li>
  );
}

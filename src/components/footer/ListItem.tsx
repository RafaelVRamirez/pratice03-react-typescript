interface Props {
  text: string;
}

const ListItem = ({ text }: Props) => {
  return (
    <li>
      <a className="hover:text-cyan-200" href="#">
        {text}
      </a>
    </li>
  );
};

export default ListItem;

import PropTypes from "prop-types";
import { useLocaleStorage } from "../../hooks/useLocaleStorage";
import { Card } from "../Card/Card";

export const CardList = ({ users }) => {
  const [items, setItems] = useLocaleStorage("users", users);

  const onFollow = (id, num) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            followers: item.followers + num,
            follow: !item.follow,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <ul className="grid grid-cols-2 gap-12 max-w-[808px] mx-auto rounded-[20px] py-20">
      {items.map((item) => (
        <Card key={item.id} onFollow={onFollow} {...item} />
      ))}
    </ul>
  );
};

CardList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

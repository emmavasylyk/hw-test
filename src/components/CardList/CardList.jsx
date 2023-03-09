import { Card } from "../Card/Card";

export const CardList = ({ users }) => {
  return (
    <ul className="grid grid-cols-2 gap-12 max-w-[808px] mx-auto rounded-[20px]">
      {users.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </ul>
  );
};

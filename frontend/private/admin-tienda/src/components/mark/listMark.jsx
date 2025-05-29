import MarkCard from './markCard';

const ListMark = ({ marks, onDelete, onEdit }) => {
  return (
    <div className="list-container">
      {marks.map((mark) => (
        <MarkCard key={mark._id} mark={mark} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ListMark;

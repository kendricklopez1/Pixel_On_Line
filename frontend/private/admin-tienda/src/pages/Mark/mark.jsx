import useDataMark from '../../components/mark/hook/useDataMark';
import RegisterMark from '../../components/mark/registerMark';
import ListMark from '../../components/mark/listMark';

const Mark = () => {
  const {
    marks,
    selectedMark,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleCancel,
  } = useDataMark();

  return (
    <div className="container-mark">
      <h2>Gestión de Marcas</h2>
      <RegisterMark
        selectedMark={selectedMark}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      <ListMark marks={marks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Mark;

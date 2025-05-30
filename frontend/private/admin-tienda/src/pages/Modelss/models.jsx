import useDataModel from "../../components/modelss/hook/useDataModel";
import RegisterModel from "../../components/modelss/RegisterModel";
import ListModel from "../../components/modelss/ListModel";

const Models = () => {
  const {
    models,
    selectedModel,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleCancel,
  } = useDataModel();

  return (
    <div className="container-model">
      <h2>Gestión de Modelos</h2>
      <RegisterModel
        selectedModel={selectedModel}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      <ListModel
        models={models}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Models;

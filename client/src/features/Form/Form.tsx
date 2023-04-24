import { Button, Card, Input } from "../../shared/UI/";
import { Upload } from "./DaD/DaD";
import "./Form.scss";

const Form = () => {
  const handleFileChange = () => {};

  const uploadFile = () => {};

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Card className="form">
      <form onSubmit={formHandler}>
        <div>
          <Input label={"Название"} />
          <Input label={"Описание"} />
          <Input label={""} />
          <Upload onUpload={handleFileChange} />
        </div>
        <Button onClick={uploadFile}>Загрузить подкаст</Button>
      </form>
    </Card>
  );
};

export default Form;

import { useState } from "react";
import { useAttachments } from "../../../hooks/attachments";

function AddPostPage() {
  const { load } = useAttachments();

  const [file, setFile] = useState<File | undefined>();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target?.files?.[0];
    setFile(file);
  }

  return (
    <div className="container mx-auto p-2 lg:px-8 flex items-center">
      Добавить запись
      <input id="file" type="file" onChange={handleChange}></input>
      <label htmlFor="file">Добавить</label>
      <button onClick={(e) => (file ? load(file) : null)}>Добавить</button>
    </div>
  );
}

export default AddPostPage;

import React, { useState } from "react";
import InputField from "../atoms/inputField";
import { useEdgeStore } from "@/lib/edgestore";
import useFileStore from "@/app/stores/fileStore";

type Props = {
};

export default function StepThree({}: Props) {
  const { file, setFile } = useFileStore();
  const { edgestore } = useEdgeStore();
  const [profession, setProfession] = useState((): string => {
    if (typeof localStorage !== "undefined") {
      const fromLocalStorage =
        JSON.parse(localStorage.getItem("profession") as string) || "";
      if (fromLocalStorage) return fromLocalStorage;
    }
    return "";
  });
  const handelaChange = (event: any) => {
    setProfession(event.target.value);
    localStorage.setItem("profession", JSON.stringify(event.target.value));
  };
  const [localFile, setLocalFile] = useState<string | ArrayBuffer | null>("");

  const handleFileUpload = async (e: any) => {
    const reader = new FileReader();
    if (e) {
      reader.onload = (onLoadEvent) => {
        if (onLoadEvent.target) {
          localStorage.setItem(
            "cvFile",
            JSON.stringify(onLoadEvent.target.result)
          );
          setLocalFile(onLoadEvent.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    localStorage.setItem("cvFile", JSON.stringify(e.target.files[0]));
    console.log(e.target.files[0]);
    setFile(e.target.files?.[0]);
  };
  console.log("from cpt =>", file);
  return (
    <div className="border mt-4 text-[#5c6873] border-[#25a9e3] rounded-md">
      <h3 className="pl-5 text-white bg-[#25a9e3] py-6"></h3>
      <div className="p-2 text-base flex flex-col">
        <label htmlFor="cv">Joignez votre CV le plus récent</label>
        <input
          onChange={(e) => handleFileUpload(e)}
          type="file"
          name="cv"
          accept=".docx, .pdf, .html, .zip"
          className="border py-2 px-3 mt-3 mb-5"
        />
        <InputField
          value={profession}
          label="Votre profession actuelle"
          inputName="profession"
          type="text"
          onChange={(event) => handelaChange(event)}
        />
      </div>
    </div>
  );
}
function useUserStore(): { file: any; setFile: any } {
  throw new Error("Function not implemented.");
}

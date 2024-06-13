import React, { useState } from "react";

type Props = {};

export default function StepTwo({}: Props) {
  const schoolLevel = localStorage.getItem('niveauEtude') as string || ""
  const [niveaEdude, setNiveauEtude] = useState<string>(schoolLevel)

  const slectOption: string[] = ["Doctorat", "Maitrise", "+2 ou plus license/Bachelor", "Universitaire 1er cycle, 4 ans (License/Bachelor)", "Universitaire 1er cycle, 3 ans (License/Bachelor)", "Universitaire 1er cycle, 2 ans (License/Bachelor)", "Universitaire 1er cycle, 1 an", "Diplôme, certificat (3 ans)", "Diplôme, certificat (2 ans)", "Diplôme, certificat (1 an)", "Diplôme d'études secondaire", "Diplôme, certificat (1 an)"]

  const handleChange = (event: any) => {
    setNiveauEtude(event.target.value)
    localStorage.setItem('niveauEtude', JSON.stringify(event.target.value))
  }
 
  return (
    <div className="border mt-4 text-[#5c6873] border-[#25a9e3] rounded-md">
      <h3 className="pl-5 text-white bg-[#25a9e3] py-6"></h3>
      <div className="p-3 text-base flex flex-col">
        <p className="py-3 ">Votre Education</p>
        <label htmlFor="niveau-étude">
          Quel est votre niveau d'études les plus élevé ?
        </label>
        <select
          className="border mt-1 mb-7 px-1 py-2 w-[95%] md:w-[500px] text-sm bg-transparent outline-none focus:border-[#25a9e3] shadow-sm rounded-md"
          name="niveau-étude"
          // value={schoolLevel}
          onChange={(event) => handleChange(event)}
        >
          <option selected disabled>
            -- Veillez selectionner --
          </option>
          {slectOption.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

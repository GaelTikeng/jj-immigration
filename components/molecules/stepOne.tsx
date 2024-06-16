import React, { useEffect, useState } from "react";
import Select from "react-select";
import InputField from "../atoms/inputField";
import InputCheckBox from "../atoms/checkBox";
import { FormData } from "../domain/formData";

type Props = {};

export default function StepOne({}: Props) {
  const [salutation, setSalutation] = useState<{
    value: string;
    label: string;
  }>();
  const [currentStep, setCurrentStep] = useState(1);

  const [localData, setLocalData] = useState<FormData | null>(() => {
    if (typeof window !== "undefined") {
      const fromLocalStorage =
        JSON.parse(localStorage.getItem("formData") as string) || {};
      if (fromLocalStorage) return fromLocalStorage;
    } else return null;
  });

  const [formData, setFormData] = useState<FormData>({
    programme: localData.programme || '',
    nom: localData?.nom || "",
    telephone: localData?.telephone || "",
    prenom: localData?.prenom || "",
    etatCivil: localData?.etatCivil || "",
    dateDeNaissance: localData?.dateDeNaissance || "",
    country: localData?.country || "",
    currentCountry: localData?.currentCountry || "",
    email: localData?.email || "",
    detail: localData?.detail || "",
    name: undefined
  });
  const [coutries, setCountries] = useState([]);

  const salutaionOptions = [
    { value: "Mr", label: "Mr" },
    { value: "Ms", label: "Ms" },
    { value: "Mrs", label: "Mrs" },
    { value: "Miss", label: "Miss" },
    { value: "Dr", label: "Dr" },
  ];

  const OptionsForCheckox = [
    "Immigrer au Canada",
    "Travailler au Canada",
    "Etudier au Canada",
    "Visiter le Canada",
    "Je ne suis pas sûr",
  ];

  // function to handle the unChange event
  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let data = { ...formData, [event.target.name]: event.target.value };
    console.log("data => ", data);
    localStorage.setItem("formData", JSON.stringify(data));
    localStorage.setItem("salutation", JSON.stringify(salutation));
    setFormData(data);
  };

  const loadCountries = async () => {
    const config = {
      cUrl: "https://api.countrystatecity.in/v1/countries",
      ckey: "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==",
    };

    await fetch(config.cUrl, {
      headers: { "X-CSCAPI-KEY": config.ckey },
    })
      .then((Response) => Response.json())
      .then((data) => {
        console.log("data => ", data);
        setCountries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <div>
      <div className="border mt-4 text-[#5c6873] border-[#25a9e3] rounded-md">
        <h3 className="pl-5 text-white bg-[#25a9e3] py-6"></h3>
        <div className="p-3 text-base flex flex-col">
          <label htmlFor="salutation">Salutation</label>
          <Select
            className="w-[95%] mb-7 md:w-[500px] py-1"
            options={salutaionOptions}
            value={salutation}
            closeMenuOnSelect={true}
            onChange={(selectedOption: any) => setSalutation(selectedOption)}
          />
          <InputField
            value={formData.nom}
            label="Nom"
            inputName="nom"
            type="text"
            onChange={(event) => handleInputChange(event)}
          />
          <InputField
            value={formData.prenom}
            label="Prénom"
            inputName="prenom"
            type="text"
            onChange={(event) => handleInputChange(event)}
          />
          <label htmlFor="etatCivil">Etat civil</label>
          <select
            onChange={(event) => handleInputChange(event)}
            className="border mt-1 mb-7 px-1 py-2 w-[95%] md:w-[500px] text-sm"
            name="etatCivil"
            value={formData.etatCivil}
          >
            <option value="celibataire">Célibataire</option>
            <option value="marié(e)">Marié(e)</option>
            <option value="veuf(e)">Veuf(e)</option>
            <option value="séparé(e)-également">Séparé(e) légalement</option>
            <option value="mariage-annulé">Mariage annulé</option>
            <option value="Divorcé(e)">Divorcé(e)</option>
            <option value="union-de-fait">Union de fait</option>
          </select>
          <InputField
            value={formData.dateDeNaissance}
            label="Date de naissance"
            inputName="dateDeNaissance"
            type="date"
            onChange={(event) => handleInputChange(event)}
          />
          <label htmlFor="country">Pays de citoyenneté</label>
          <select
            value={formData.country}
            name="country"
            onChange={(event) => handleInputChange(event)}
            className="border mt-1 mb-7 p-1 w-[95%] md:w-[500px] bg-transparent outline-none focus:border-[#25a9e3] shadow-sm rounded-md"
          >
            <option selected disabled>
              -- Veillez selectionner --
            </option>
            {coutries?.map((ctry: any) => (
              <option key={ctry.id} value={ctry.name}>
                {ctry.name}
              </option>
            ))}
          </select>
          <label htmlFor="currentCountry">Pays de résidence actuel</label>
          <select
            value={formData.currentCountry}
            name="currentCountry"
            onChange={(event) => handleInputChange(event)}
            className="border mt-1 mb-7 p-1 w-[95%] md:w-[500px] bg-transparent outline-none focus:border-[#25a9e3] shadow-sm rounded-md"
          >
            <option selected disabled>
              -- Veillez selectionner --
            </option>
            {coutries?.map((ctry: any) => (
              <option key={ctry.id} value={ctry.name}>
                {ctry.name}
              </option>
            ))}
          </select>

          <InputField
            value={formData.email}
            label="Couriel"
            inputName="email"
            type="email"
            onChange={(event) => handleInputChange(event)}
          />
          <InputField
            value={formData.telephone}
            label="Telephone"
            inputName="telephone"
            type="tel"
            onChange={(event) => handleInputChange(event)}
          />
          <p className="mb-4">Quel programme vous intéresse?</p>
          {OptionsForCheckox.map((opt, index) => (
            <InputCheckBox
              key={index}
              value={opt}
              label={opt}
              onChange={(event) => handleInputChange(event)}
            />
          ))}
          <label htmlFor="detail">Veuillez founir plus de détails</label>
          <textarea
            name="detail"
            // value={formData.details}
            onChange={(event) => handleInputChange(event)}
            className="border focus:border-[#25a9e3] mt-1 mb-2 p-1 min-h-[100px]  bg-transparent outline-none shadow-sm rounded-md"
          >
            {formData.detail}
          </textarea>
        </div>
      </div>
    </div>
  );
}

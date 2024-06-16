import { create } from 'zustand'
import { FormData, Salutation } from '../../components/domain/formData';

type StoreType = {
  formData: FormData;
  setFormData: (formData: FormData) => void;

  file: any;
  setFile: (file: Object) => void

  salutation: Salutation;
  setSalutation: (salutation: Salutation) => void

  profession: string;
  setProfession: (profession: string) => void

  niveauEtude: string;
  setNiveauEtude: (niveauEtude: string) => void

}

const useFileStore = create<StoreType>((set) => ({
  file: {},
  setFile: (file) => set(() => ({ file: file })),
  formData: {
    name: undefined,
    nom: "",
    prenom: "",
    etatCivil: "",
    dateDeNaissance: "",
    country: "",
    currentCountry: "",
    email: "",
    telephone: "",
    detail: "",
    programme: "",
  },
  setFormData: (formData) => set(() => ({ formData: formData })),

  salutation: { value: "", label: "" },
  setSalutation: (salutation) => set(() => ({ salutation: salutation })),

  profession: "",
  setProfession: (profession) => set(() => ({ profession: profession })),

  niveauEtude: "",
  setNiveauEtude: (niveauEtude) => set(() => ({ niveauEtude: niveauEtude }))

}))
export default useFileStore
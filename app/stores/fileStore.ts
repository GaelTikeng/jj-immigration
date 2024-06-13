import {create} from 'zustand'

type StoreType = {
  file: any;
  setFile: (file: Object) => void
}

const useFileStore = create<StoreType>((set) => ({
  file: {},
  setFile: (file) => set(() => ({file: file}))
}))
export default useFileStore
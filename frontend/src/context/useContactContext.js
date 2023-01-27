import { useContext } from "react";
import { ContactContext } from "./contactContext";

export const useContactContext = () => {
    const context = useContext(ContactContext);

    if(!context) {
        throw Error('useContactContext must be used inside of a ContactsContextProvider')
    }

    return context;
}
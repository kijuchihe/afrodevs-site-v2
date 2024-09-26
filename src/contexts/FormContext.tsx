/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetStateAction, useContext, useState, Dispatch } from "react";
import { createContext } from "react";

export type ContextType = {
	showFormPopup: boolean;
	setShowFormPopup: Dispatch<SetStateAction<boolean>>;
};

const FormContext = createContext<ContextType>({
	showFormPopup: false,
	setShowFormPopup: () => {},
});

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [showFormPopup, setShowFormPopup] = useState(false);

	return (
		<FormContext.Provider value={{ showFormPopup, setShowFormPopup }}>
			{children}
		</FormContext.Provider>
	);
};

export default FormContextProvider;
export const useForm = () => useContext(FormContext);

import { createContext, useState } from 'react';

export const ProgramContext = createContext(null);

export const ProgramContextProvider = ({ children }) => {
    const [program, setProgram] = useState({});

    const updateProgram = (newObject) => {
        setProgram(newObject);
    };

    return (
        <ProgramContext.Provider value={{ program, updateProgram }}>
            {children}
        </ProgramContext.Provider>
    );
};

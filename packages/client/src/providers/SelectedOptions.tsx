import React, { useContext, useState } from 'react';

type SelectedOptionsContextProps = {
  selectedOptions: string[];
  addOption: (optionId: string) => void;
  removeOption: (optionId: string) => void;
  resetOptions: () => void;
};

const SelectedOptionsContext = React.createContext<SelectedOptionsContextProps>(
  {
    selectedOptions: [],
    addOption: () => undefined,
    removeOption: () => undefined,
    resetOptions: () => undefined,
  },
);

type SelectedOptionsProviderProps = {
  preSelectedOptions?: string[];
};

const SelectedOptionsProvider: React.FC<SelectedOptionsProviderProps> = ({
  preSelectedOptions = [],
  children,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(preSelectedOptions);

  const addOption = (optionId: string) => {
    setSelectedOptions(prev => [...prev, optionId]);
  };

  const removeOption = (optionId: string) => {
    setSelectedOptions(prev => prev.filter(id => id !== optionId));
  };

  const resetOptions = () => {
    setSelectedOptions([]);
  };

  return (
    <SelectedOptionsContext.Provider
      value={{ selectedOptions, addOption, removeOption, resetOptions }}>
      {children}
    </SelectedOptionsContext.Provider>
  );
};

const useSelectedOptions = () => useContext(SelectedOptionsContext);

export { SelectedOptionsProvider, useSelectedOptions };

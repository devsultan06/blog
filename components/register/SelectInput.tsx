import Select from 'react-select';

type Option = {
    label: string;
    value: string;
};

type ReactSelectInputProps = {
    label: string;
    name: string;
    value: string;
    options: string[];
    onChange: (field: string, value: any) => void;
    onBlur?: (field: string, touched?: boolean, shouldValidate?: boolean) => void;
    error?: boolean;
    helperText?: string;
};

export default function ReactSelectInput({
    label,
    name,
    value,
    options,
    onChange,
    onBlur,
    error,
    helperText,
}: ReactSelectInputProps) {
    const formattedOptions: Option[] = options.map(opt => ({
        value: opt,
        label: opt,
    }));

    const selectedOption = formattedOptions.find(opt => opt.value === value);

    return (
        <div className="space-y-1 z-[50] relative">
            <label className="block font-medium mb-1 text-white">{label}</label>
            <Select
                options={formattedOptions}
                value={selectedOption}
                onChange={(option) => onChange(name, option?.value)}
                onBlur={() => onBlur?.(name, true)}
                classNamePrefix="react-select"
                styles={{
                    control: (base) => ({
                        ...base,
                        backgroundColor: 'transparent',
                        borderColor: error ? '#FF0000' : '#333',
                        color: '#fff',
                        cursor: 'pointer',
                        padding: '0.5rem 0.5rem ',
                    }),
                    menu: (base) => ({
                        ...base,
                        backgroundColor: '#000',
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: '#fff',
                        
                    }),
                    option: (base, { isFocused }) => ({
                        ...base,
                        backgroundColor: isFocused ? '#444' : '#000',
                        borderRadius: '0.5rem',
                        color: '#fff',
                        cursor: 'pointer',
                    }),
                }}
            />
            {error && helperText && (
                <p className="text-[#d32f2f] text-[11px] ml-[13px]">{helperText}</p>
            )}
        </div>
    );
}

// components/ui/SelectInput.tsx
type SelectInputProps = {
    label: string;
    name: string;
    value: string;
    options: string[];
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
    error?: boolean;
    helperText?: string;
};

export default function SelectInput({
    label,
    name,
    value,
    options,
    handleChange,
    handleBlur,
    error,
    helperText,
}: SelectInputProps) {
    return (
        <div className="space-y-1">
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full py-[17px] px-[10px] cursor-pointer outline-none rounded bg-transparent text-white border ${error ? "border-[#FF0000]" : "border-[#333333]"
                    }`}
            >
                <option value="">Select a niche</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt} className="bg-black text-white cursor-pointer">
                        {opt}
                    </option>
                ))}
            </select>
            {error && helperText && <p className="text-[#d32f2f] text-[11px] ml-[13px]">{helperText}</p>}
        </div>
    );
}

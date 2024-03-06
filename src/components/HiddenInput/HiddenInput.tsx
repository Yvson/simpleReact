import { useFormContext, Controller } from "react-hook-form";

export type TBaseInputProps = {
    definition: {
        name: string,
        label: string,
        default: string,
        required: boolean,
    },
}

export const HiddenInput = (props: TBaseInputProps) => {
    const { definition } = props;
    const { getFieldState } = useFormContext();


    return (
        <div>
            <Controller
                name={definition.name}
                defaultValue={definition.default}
                render={({ field: { onChange, onBlur, value } }) => (
                    <input
                        hidden={true}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        size={12}
                        key={props.definition.name}
                        required={props.definition.required ? true : false}
                        data-testid={'textField'}
                    />
                    
                )} 
            />
        </div>
    )
}
// React
import { useFormContext, Controller } from "react-hook-form";

// Components
import { JsonYamlEditor } from './subcomponents/JsonYamlEditor';


export type TBaseInputProps = {
    definition: {
        name: string,
        label: string,
        default: {},
        required: boolean,
    },
}

export const JsonYamlInput = (props: TBaseInputProps) => {
    const { definition } = props;
    const { setValue } = useFormContext();

    return (
        <div>
            <Controller
                name={definition.name}
                defaultValue={props.definition.default}
                render={({ field: { value } }) => {
                    console.log('formField: ', value);
                    return (
                        <JsonYamlEditor
                            name={definition.name}
                            defaultValue={props.definition.default}
                            setValue={setValue}
                        />
                    );
                }}
            />
        </div>
    )
}
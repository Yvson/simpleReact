// React
import React from 'react';

// Ace Builds
import AceEditor from "react-ace";
import ace from 'ace-builds';
import modeYamlUrl from 'ace-builds/src-noconflict/mode-yaml';
import themeGithub from 'ace-builds/src-noconflict/theme-github';

// Service
import { useJsonYamlEditorService } from './JsonYamlEditor.service';

// Types
import { FieldValues, UseFormSetValue } from 'react-hook-form';


ace.config.setModuleUrl('ace/mode/yaml', modeYamlUrl);
ace.config.setModuleUrl('ace/theme/github', themeGithub);


interface IJsonYamlEditor {
    name: string,
    defaultValue: {},
    setValue: UseFormSetValue<FieldValues>
}

export const JsonYamlEditor = (props: IJsonYamlEditor) => {
    const [ value, setValue ] = React.useState<string>("");

    const { mapFromObjectToString, mapFromStringToObject } = useJsonYamlEditorService();

    const handleChange = (value: string) => {
        props.setValue(props.name, mapFromStringToObject(value));
        setValue(value);
    }

    return (
        <AceEditor
            mode="yaml"
            theme="github"
            value={value}
            defaultValue={mapFromObjectToString(props.defaultValue)}
            onChange={handleChange}
            name={props.name}
            highlightActiveLine={true}
            editorProps={{ $blockScrolling: true }}
            setOptions={{ useWorker: false }}
            data-testid={'aceEditor'}
        />
    );
}
// Utils
import yaml from 'js-yaml';


export const useJsonYamlEditorService = () => {

    const mapFromStringToObject = (value: string): {} => {
        try {
            const newObject = yaml.loadAll(value);
            return newObject;
        } catch (e) {
            return {};
        }
    }

    const mapFromObjectToString = (value: {}): string => {
        try {
            const newString = yaml.dump(value);
            return newString;
        } catch (e) {
            return "";
        }
    }

    return { mapFromStringToObject, mapFromObjectToString };
}
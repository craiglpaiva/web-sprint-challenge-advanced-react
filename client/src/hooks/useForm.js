// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialState, key, submitLogic, notStickyArray) => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    const [values, setValues] = useLocalStorage(
        initialState,
        key,
        notStickyArray
    );

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const clearForm = () => {
        setValues(initialState);
    };

    const handleSubmit = e => {
        e.preventDefault();
        submitLogic();
        clearForm();
    };

    return [values, handleChanges, clearForm, handleSubmit];
};

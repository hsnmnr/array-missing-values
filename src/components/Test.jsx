import { useState } from "react";

const TestComponent = () => {
    const [arrayStr, setArrayStr] = useState("");
    const [missingValues, setMissingValues] = useState([]);

    const findMissingVal = (arr) => {
        arr.sort();

        const missing = [];

        let count = 0;
        for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
            if (i === arr[count]) {
                count++;
            } else {
                missing.push(i);
            }
        }
        return missing;
    };

    const stringToArr = (string) => {
        return string.split(",");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let arr = stringToArr(arrayStr);
        console.log(arr);
        arr = arr.map((i) => Number(i));
        console.log(arr);

        const missing = findMissingVal(arr);
        setMissingValues(missing);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter ARRAY (COMMA SEPERATED e.g. 3,5,9) :
                    <input
                        type="text"
                        value={arrayStr}
                        onChange={(e) => setArrayStr(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
            <label>Missing Values :{JSON.stringify(missingValues)}</label>
        </>
    );
};
export default TestComponent;

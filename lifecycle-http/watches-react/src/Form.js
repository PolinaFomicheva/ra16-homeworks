import Watch from "./Watch";
import { useState } from "react";

export default function Form() {
    let [data, setData] = useState([]);
    let watchList;
    let element;

    function addWatch(event) {
        event.preventDefault();
        let name = event.target[0].value;
        let timeZone = event.target[1].value
        if (name.trim() === '' || timeZone.trim() === '') {
            return
        };
        for (let item of data) {
            if (item.name === name && item.timeZone === timeZone) {
                return
            }
        }

        setData((prevValue) => [...prevValue, { name, timeZone }])
        event.target[0].value = '';
        event.target[1].value = '';
    }

    function removeWatch(event) {
            element = data.splice(+event.target.id, 1);
            setData(data.filter((item) => item !== element))

    }

    const styles = {
        watchsWrapper: {
            display: 'flex',
            flexWrap: 'wrap'

        },
        form: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '1rem',
            alignItems: 'end',
            fontFamily: 'sans-serif',
        },
        formItem: {
            margin: '0 10px',
        },
        input: {
            padding: '5px',
            border: '1px solid black'
        },
        button: {
            margin: '0 10px',
            border: '1px solid black',
            width: '100px',
            height: '27px',
            cursor: 'pointer',
            backgroundColor: 'green',
            color: '#fff'
        },

    }

    return (
        <>
            <form style={styles.form} onSubmit={addWatch}>
                <div name='watchName' style={styles.formItem}>
                    <p>Название</p>
                    <input type='text' name="watchName" placeholder='Название часового пояса' style={styles.input}></input>
                </div>
                <div name='watchZone' style={styles.formItem}>
                    <p>Временная зона GMT</p>
                    <input type='number' name="watchZone" placeholder='GMT +/-' style={styles.input}></input>
                </div>
                <button type='submit' style={styles.button}>Добавить</button>
            </form>
            <div style={styles.watchsWrapper}>{watchList = data.map((item, index) => <Watch key={index} name={item.name} timeZone={item.timeZone} removeWatch={removeWatch} id={index} />)}</div>
        </>
    )
}

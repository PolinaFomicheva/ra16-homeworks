import Note from "./Note";
import { useState, useEffect } from 'react'
import shortid from "shortid";
import NewNote from "./NewNote";


function Notes() {
    let [ar, setAr] = useState([])
    useEffect(() => {
        fetch('http://localhost:7777/notes')
            .then(response => response.json())
            .then(data => setAr(data.map(item => <Note data={item.content} key={shortid.generate()} id={item.id} refresh={refresh} />)))
    }, [])

    function refresh() {
        fetch('http://localhost:7777/notes')
            .then(response => response.json())
            .then(data => setAr(data.map(item => <Note data={item.content} key={shortid.generate()} id={item.id} refresh={refresh} />)))
    }


    const styles = {
        notes: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            margin: '10px'
        },
        mainWrapper: {
            display: 'flex',
            position: 'relative',
            width: '200px',
            margin: '10px'
        },
        title: {
            fontFamily: 'sans-serif'
        },
        button: {
            position: 'absolute',
            right: '70px',
            top: '14px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            backgroundColor: 'green'

        }
    }
    return (
        <>
            <div style={styles.mainWrapper}>
                <h2 style={styles.title}>Notes</h2>
                <button style={styles.button} onClick={refresh}><img src="https://cdn.icon-icons.com/icons2/1883/PNG/512/twocirclingarrows1_120592.png" width={'25px'}></img></button>
            </div>
            <div style={styles.notes}>
                {ar}
            </div>
            <NewNote refresh={refresh} />
        </>
    )
}

export default Notes

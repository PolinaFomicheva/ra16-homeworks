export default function Note({ data, id, refresh }) {
    const styles = {
        note: {
            display: 'flex',
            minWidth: '200px',
            maxWidth: '400px',
            minHeight: '100px',
            border: '1px solid black',
            position: 'relative',
            margin: '20px 20px 20px 0',
            padding: '5px 10px ',
            boxSizing: 'border-box',
            fontFamily: 'sans-serif',
            fontSize: '14px'
            },
        button: {
            position: 'absolute',
            top: '-25px',
            right: '-15px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            border: '1px solid black'            
        }
    }
    async function removeEvent() {
        await fetch(`http://localhost:7777/notes/${id}`, {method: 'DELETE'});
        refresh()
    }

    return (
        <>
            <div style={styles.note}>
                <p>{data}</p>
                <button style={styles.button} onClick={removeEvent}><img src="https://cdn.icon-icons.com/icons2/1380/PNG/512/emblemunreadable_93487.png" width={'27x'}/></button>
            </div>
        </>
    )
}

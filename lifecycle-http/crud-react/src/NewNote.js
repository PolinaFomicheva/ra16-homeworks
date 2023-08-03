function NewNote({refresh}) {

    async function handlerSubmit(event) {
        event.preventDefault();
        let data = {
            'id': 0,
            'content': event.target[0].value
        };

        await fetch('http://localhost:7777/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charser=utf-8'
            },
            body: JSON.stringify(data)
        });
        event.target[0].value = '';
        refresh();
    }

   
    const styles = {
        wrapper: {
            margin: '10px'
        },
        form: {
            display: 'flex',
            position: 'relative',
            width: '400px',
        },
        textarea: {
            minWidth: '400px',
            minHeight: '100px'
        },
        button: {
            position: 'absolute',
            bottom: '0',
            right: '0',
            margin: '10px',
            border: '1px solid black',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            backgroundColor: 'lightGreen'
            

        }
    }
    return (
        <>
            <div style={styles.wrapper}>
                <h4>New Note</h4>
                <form style={styles.form} onSubmit={handlerSubmit}>
                    <textarea style={styles.textarea} type='text' placeholder='Enter text'></textarea>
                    <button style={styles.button} type='submit'><img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-send_97591.png" width={'20px'} /></button>
                </form>
            </div>
        </>
    )
}
export default NewNote

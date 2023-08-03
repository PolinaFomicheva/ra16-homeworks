import React, { useState, useEffect } from "react";



export default function Watch(props) {
    let { name, timeZone, removeWatch, id} = props
    let start = new Date();
    let secTimer;
    let [secArrow, setSecArrowDeg] = useState(start.getSeconds() * 6);
    let [minArrow, setMinArrowDeg] = useState(start.getMinutes() * 6);
    let [hourArrow, setHourArrowDeg] = useState((start.getHours() + Number(timeZone)) * 30);

    useEffect(() => {
        secTimer = setTimeout(() => {
            setSecArrowDeg( (prevArrow) => prevArrow + 6 );
            if (secArrow >= 360) {
                setMinArrowDeg(minArrow + 6);
                setSecArrowDeg(6);
            }
            if (minArrow >= 360) {
                setHourArrowDeg(hourArrow + 30)
                setMinArrowDeg(0);
                setSecArrowDeg(6);
            }
        }, 1000);
    }, [secArrow])
    

    let styles = {
        watch: {
            width: '200px',
            height: '200px',
            border: '1px solid black',
            borderRadius: '100px',
            position: 'relative',
        },
        watchWrapper: {
            width: '250px',
            height: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'sans-serif',
        },
        removeBtn: {
            width: '23px',
            height: '23px',
            border: '1px solid black',
            borderRadius: '12px',
            position: 'absolute',
            right: '0',
            top: '0',
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white'
        },
        secArrow: {
            width: '1px',
            height: '100px',
            backgroundColor: "blue",
            position: 'absolute',
            left: '50%',
            transform: `rotate(${secArrow.toString()}deg)`,
            transformOrigin: 'left bottom',
        },
        minArrow: {
            width: '1px',
            height: '100px',
            backgroundColor: "black",
            position: 'absolute',
            left: '50%',
            transform: `rotate(${minArrow.toString()}deg)`,
            transformOrigin: 'left bottom',
        },

        hourArrow: {
            width: '2px',
            height: '100px',
            backgroundColor: "red",
            position: 'absolute',
            left: '50%',
            transform: `rotate(${hourArrow.toString()}deg)`,
            transformOrigin: 'left bottom',
        }
    };

    return (
        <>
            <section style={styles.watchWrapper}>
                <p>{name}</p>
                <div style={styles.watch}>
                    <button  style={styles.removeBtn} onClick={removeWatch} id={id}>X</button>
                    <div style={styles.secArrow}></div>
                    <div style={styles.minArrow}></div>
                    <div style={styles.hourArrow}></div>
                </div>
            </section>
        </>
    )
}

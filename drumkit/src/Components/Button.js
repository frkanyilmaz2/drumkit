import React, { useEffect } from 'react'

const Button = ({sounds,setSounds,name,setName}) => {

    const set1 = [
        { letter:'Q', id:"81" ,name: "Heater 1", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
        { letter:'W', id:"87" ,name: "Heater 2", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
        { letter:'E',id:"69" ,name: "Heater 3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
        { letter:'A',id:"65" ,name: "Heater 4", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
        { letter:'S',id:"83" ,name: "Heater 5", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
        { letter:'D',id:"68" ,name: "Disco", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
        { letter:'Z',id:"90" ,name: "Kick Hat", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
        { letter:'X',id:"88" ,name: "RP4 Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
        { letter:'C',id:"67" ,name: "Cev", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
    ];
    
    const set2 = [
        { letter:'Q', id:"81", name: "Bounce", src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/10[kb]8bitkit-bounce-2.wav.mp3" },
        { letter:'W', id:"87", name: "Coin", src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/15[kb]8bitkit-coin-10.wav.mp3" },
        { letter:'E',id:"69" , name: "Dr55", src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Boss%20DR%20RHYTHM%2055/15[kb]dr55-sd07.wav.mp3" },
        { letter:'A',id:"65" , name: "Hard Kick", src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Khezie%20Hip%20Hop%20Kit/56[kb]khezie-A-Hard-Kick-drum.wav.mp3" },
        { letter:'S',id:"83" , name: "Khezie Clap", src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Khezie%20Hip%20Hop%20Kit/137[kb]khezie-Clap-Mfana.wav.mp3" },
        { letter:'D',id:"68" , name: "Fire Kick", src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Khezie%20Hip%20Hop%20Kit/39[kb]khezie-Fire-Kick-Drum.wav.mp3" },
        { letter:'Z',id:"90" , name: "Snare", src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Khezie%20Hip%20Hop%20Kit/46[kb]khezie-Hert-Snare.wav.mp3" },
        { letter:'X',id:"88" , name: "Urban Clap", src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Urban%20Trap%20Kit/20[kb]urbantrap-clap-2.wav.mp3" },
        { letter:'C',id:"67" , name: "Tablahit", src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Urban%20Trap%20Kit/119[kb]urbantrap-percussion-tablahit.wav.mp3" }
    ];

   
    useEffect(() => {
        function playSound(event) {
            const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
            const name = (sounds ? set1 : set2).filter(item=> parseInt(item.id) === event.keyCode).map((item)=>item.name);
            setName(name);
            if (!audio) return;
            audio.currentTime = 0;
            audio.play();
            
        }
        window.addEventListener('keydown',playSound);
        return () => window.removeEventListener('keydown',playSound);
    })

    const handleSets = () => {
        setSounds(!sounds);
    }

    const handleClick = item => {
        setName(item.name)
        document.getElementById(item.letter).play();
    }

    return (
        <>
            <div className='button-pads' id='button-pads'>
            <ul>
                {(sounds?set1:set2).map(item=>
                <li key={item.id}>
                    <button className='drum-pad' id='drum-pad' onClick={()=>handleClick(item)} >{item.letter}
                    <audio id={`${item.letter}`} className='clip' data-key={item.id} src={item.src}></audio></button>
                </li>)}
            </ul>
            </div> 
            <div className='bank-container'>
                <h2>Bank</h2>
                <label className="switch">
                    <input type="checkbox" onClick={handleSets} />
                    <span className='slider'></span>
                </label>
                <div className="display" id='display'>
                <h1 >{name}</h1>
                </div>
            </div>
        </>
    );
}

export default Button;
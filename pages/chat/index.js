import { useState } from 'react';


const Chat = () => {

    var localConnection = null;
    var sendChannel = null;

    const [ initBtn, setinitBtn ] = useState(true)
    const [ startBtn, setStartBtn ] = useState(true);
    const [ copyBtn, setCopyBtn ] = useState(false);
    const [ joinBtn, setJoinBtn ] = useState(false);
    const [ code, setCode ] = useState("");
    const [ answer, setAnswer ] = useState("");
    // const [ localConnection, setLc ] = useState(new RTCPeerConnection());
    // const [ sendChannel, setSendChannel ] = useState(localConnection.createDataChannel("Send Channel"));

    const initiateChat = () => {
        console.log(lc);
        setStartBtn(!startBtn);

        localConnection = new RTCPeerConnection();
        sendChannel = localConnection.createDataChannel("Send channel");

        localConnection.onicecandidate = (e) => {
            console.log("New ICE Candidate! Reprinting the SDP ");
            console.log(JSON.stringify(localConnection.localDescription));
            setCode(JSON.stringify(localConnection.localDescription));
        }

        sendChannel.onmessage = (e) => console.log("Message: ", e.data);
        sendChannel.onopen = (e) => console.log("Opened!");
        sendChannel.onclose = (e) => console.log("Closed!");

        localConnection.createOffer().then((o) => {
            localConnection.setLocalDescription(o);
            console.log("Description: ", JSON.stringify(localConnection.localDescription));
            setCopyBtn(!copyBtn);
        });
        console.log(localConnection);

        const accept = (e) => {
            e.preventDefault();
            localConnection.setRemoteDescription(answer).then((a) => console.log("Done"));
        }
    }

    // const accept = (e) => {
    //     e.preventDefault();
    //     localConnection.setRemoteDescription().then((a) => console.log("Done!"));
    // }

    const copyOffer = async () => {
        await navigator.clipboard.writeText(code);
        setCopyBtn(!copyBtn);
        setJoinBtn(!joinBtn);
    }

    const start = (e) => {
        e.preventDefault();
        console.log(answer);
        const remoteDescription = JSON.parse(answer);
        console.log(remoteDescription);

        // debugger
        console.log(localConnection);
        localConnection.setRemoteDescription(remoteDescription).then((a) => console.log("Done"));
    }

    const handleChange = (event) => setAnswer(event.target.value);

    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className={startBtn ? "block" : "hidden"}>
                <button 
                    className="py-2 px-4 uppercase tracking-wide border border-transparent text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={ initiateChat }>
                    Invite
                </button>
            </div>
            <div className={copyBtn ? "block w-full" : "hidden"}>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <p className="w-1/2 h-8 inline-flex items-center whitespace-nowrap overflow-hidden mb-4 px-4 rounded-md text-gray-600 border-2 border-gray-300">{ code }</p>
                    <button 
                        className="py-2 px-4 uppercase tracking-wide border border-transparent text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={copyOffer}>
                        Copy Code
                    </button>
                </div>
            </div>
            <div className={joinBtn ? "block w-full" : "hidden"}>
                <form className="min-h-screen flex flex-col items-center justify-center" onSubmit={ start }>
                    <input 
                        className="appearance-none relative w-4/5 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        type="text" 
                        placeholder="Enter the code from answerer"
                        value={ answer }
                        onChange={ handleChange }/>
                    <button 
                        className="py-2 px-4 uppercase tracking-wide border border-transparent text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                        type="submit">Start Chat</button>
                </form>
            </div>
        </div>
    );
}


export default Chat;
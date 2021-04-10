import { useState } from 'react';


const JoinChat = () => {

    let remoteConnection = null;

    const [ joinBtn, setJoinBtn ] = useState(true);
    const [ copyBtn, setCopyBtn ] = useState(false);
    const [ offer, setOffer ] = useState("");
    const [ answer, setAnswer ] = useState("");

    const join = (e) => {
        e.preventDefault();
        console.log(offer);
        const offerDescription = JSON.parse(offer);
        console.log(offerDescription);

        remoteConnection = new RTCPeerConnection();

        remoteConnection.onicecandidate = (e) => {
            console.log("New ICE Candidate! Reprinting the SDP ");
            console.log(JSON.stringify(remoteConnection.localDescription));
            setAnswer(JSON.stringify(remoteConnection.localDescription));
        }

        remoteConnection.ondatachannel = (e) => {
            const receiveChannel = e.channel;
            receiveChannel.onmessage = (e) => console.log("Message: ", e.data);
            receiveChannel.onopen = (e) => console.log("Open!");
            receiveChannel.onclose = (e) => console.log("Closed!");
            remoteConnection.channel = receiveChannel;
        }

        remoteConnection.setRemoteDescription(offerDescription).then((a) => console.log("Done"));

        remoteConnection.createAnswer()
            .then((a) => remoteConnection.setLocalDescription(a))
            .then((a) => console.log(JSON.stringify(remoteConnection.localDescription)));
        
        setJoinBtn(!joinBtn);
        setCopyBtn(!copyBtn);
    }

    const handleChange = (event) => setOffer(event.target.value);

    const copyAnswer = async () => {
        await navigator.clipboard.writeText(answer);
    }

    return(
        <div>
            <div className={joinBtn ? "block w-full" : "hidden"}>
                <form 
                    className="min-h-screen flex flex-col items-center justify-center"
                    onSubmit={ join }>
                    <input 
                        className="appearance-none relative w-4/5 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        type="text" 
                        placeholder="Enter the code from answerer"
                        value={ offer }
                        onChange={ handleChange }/>
                    <button 
                        className="py-2 px-4 uppercase tracking-wide border border-transparent text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                        type="submit">Join Chat</button>
                </form>
            </div>
            <div className={copyBtn ? "block w-full" : "hidden"}>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <p className="w-1/2 h-8 inline-flex items-center whitespace-nowrap overflow-hidden mb-4 px-4 rounded-md text-gray-600 border-2 border-gray-300">{ answer }</p>
                    <button 
                        className="py-2 px-4 uppercase tracking-wide border border-transparent text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={ copyAnswer }>
                        Copy Code
                    </button>
                </div>
            </div>
        </div>
    );
}


export default JoinChat;

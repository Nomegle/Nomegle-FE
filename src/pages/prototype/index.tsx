import React, { useEffect, useState } from 'react';
// import { connect, createLocalTracks } from 'twilio-video';
import axios from 'axios'
import { createLocalTracks, createLocalVideoTrack } from 'twilio-video';
import { connect } from 'twilio-video';
import { isPropertySignature } from 'typescript';


const Prototype = (props: any) : JSX.Element => {
    const backendURL = 'https://us-central1-nomegle.cloudfunctions.net/widgets';

    const [token, setToken] = useState('')
    const [roomName, setRoomName] = useState('')
    const [error, setError] = useState('')
    const [room, setRoom] = useState<any>(undefined)


    async function getToken(roomName: string) : Promise<void> {
        try {
            console.log('running')
            const res = await axios.post(`${backendURL}/accessToken`, {room: roomName, sid: '', user: props.match.params.user});
            const { data } = res;
            if (data) {
                setToken(data)
            } else {
                setError('Token does not exist')
            }
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    function setLocalVideo() {
        const myVideo : any = document.getElementById('myVideo');
        if (myVideo.children.length === 0) {
            createLocalVideoTrack().then(track => {
                if (myVideo) {
                    myVideo.appendChild(track.attach())
                }
            })
        }
    }

    function isPageLoaded() {
        return document.getElementById('page') !== null ? true : false
    }

    function createRoom(token : string) : void {
        createLocalTracks({
            audio: true,
            video: { width: 640 }
        }).then(localtracks => {
            setLocalVideo()
            return connect(token, {
                name: roomName,
                tracks: localtracks
            }).then(room => {
                setRoom(room)
                })
            })
    }

    useEffect(() => {
        setRoomName('gaming-time')
    }, [])

    useEffect(() => {
        if (roomName && isPageLoaded()) getToken(roomName);
    }, [roomName, isPageLoaded])


    useEffect(() => {
        if (token) {
            createRoom(token)
        }
    }, [token])


    room?.on('participantConnected', (participant : any) => {
        const otherVideo : HTMLElement | null = document.getElementById('otherVideo')
        const name = document.createElement('p')
        name.innerHTML = participant.identity;
        otherVideo?.appendChild(name)
        participant.tracks.forEach((publication : any) => {
            if (publication.isSubscribed) {
              const track : any = publication.track;
              const otherVideo : any = document.getElementById('otherVideo');
              otherVideo.appendChild(track.attach());
            }
          });
        
          participant.on('trackSubscribed', (track : any) => {
            const otherVideo : any = document.getElementById('otherVideo')
            if (otherVideo.children.length === 0) {
                otherVideo.appendChild(track.attach());
            }
        });
    });

    return (
        <div id="page">
            <p>Prototype</p>
            <div id="myVideo">
            </div>
            <div id="otherVideo">
            </div>
        </div>
    )
}

export default Prototype;
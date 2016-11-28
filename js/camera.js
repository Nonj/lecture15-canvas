'use strict';

//YOUR CODE GOES HERE
var video = document.querySelector('video');

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

var localMediaStream;
//how to call

document.querySelector("#record").addEventListener("click", () => {
    navigator.getUserMedia({
        video: { mandatory: { maxWidth: 300, maxHeight: 300 } }
    }, function (mediaStream) {

        //save reference for use outside this function
        localMediaStream = mediaStream; // GLOBAL

        //set the src to be the stream
        video.src = window.URL.createObjectURL(mediaStream)


    }, function (err) {
        console.log(err);
    });
});

document.querySelector('#stop').addEventListener('click', () => {
    video.pause();
    var tracks = playingStream.getTracks();
    tracks.forEach( function (track) {
        track.stop();
    });
});
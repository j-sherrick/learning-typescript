

async function startCam(): Promise<void> {
   const videoElement = document.getElementById('webcam') as HTMLVideoElement | null;
   if (videoElement) {
      try {
         const stream: MediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
         videoElement.srcObject = stream;
      }
      catch(error) {
         videoElement.innerText = 'Some error occurred...';
         console.error('Some error accessing the webcam:', error);
      }
      finally {
         console.log('stream attached to DOM successfully!');
      }
   }
}

   
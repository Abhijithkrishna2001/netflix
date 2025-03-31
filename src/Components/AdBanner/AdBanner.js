import React,{useEffect} from 'react'

function AdBanner() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.onload = () => console.log('Ad script loaded');
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <div>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-0000000000000000 " // Replace with your ad client ID
           data-ad-slot="0000000000"               // Replace with your ad slot ID
           data-ad-format="auto"></ins>
    </div>
  )
}

export default AdBanner

import React, {useEffect} from 'react';
//
const Chatra = () => {
    useEffect(() => {
        chatra(document, window, 'Chatra');
    }, []);

    function chatra(d, w, c) {
        w.ChatraID = 'HC8XmDJsw4db35uHf';
        var s = d.createElement('script');
        w[c] =
            w[c] ||
            function () {
                (w[c].q = w[c].q || []).push(arguments);
            };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    }

    return <></>
};

export default Chatra;

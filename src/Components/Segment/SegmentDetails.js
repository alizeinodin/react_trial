import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "../../axios";

function SegmentDetails() {
    const [htmlContent, setHtmlContent] = useState('');

    const {segmentId} = useParams();

    useEffect(() => {
        axios.get('segment/' + segmentId + '/render')
            .then((response) => {
                setHtmlContent(response.data);
            })
            .catch((error) => console.error('Error fetching HTML:', error));
    }, []);

    return <div dangerouslySetInnerHTML={{__html: htmlContent}}/>;
}

export default SegmentDetails;

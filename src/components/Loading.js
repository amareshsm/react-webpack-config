import React from 'react';
import { Spinner } from "react-js-css-loaders";
import ReactDelayRender from 'react-delay-render';

const Loading = () => <Spinner />;

export default ReactDelayRender({ delay: 300 })(Loading);
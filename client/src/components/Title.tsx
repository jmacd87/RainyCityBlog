import React from 'react';
import '../App.css';

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h4 className="glowing-title titleStyle">{text}</h4>;
};

export default Title;

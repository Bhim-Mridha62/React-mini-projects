import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TextTranslate = () => {
  const [englishText, setEnglishText] = useState('');
  const [hindiText, setHindiText] = useState('');

  useEffect(() => {
    const translateToHindi = async () => {
      try {
        const response = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          null,
          {
            params: {
              q: englishText,
              target: 'hi',
              key: 'AIzaSyCpsXyZG_jaN1fmf31O081IIWTsPDSzyD0',
            },
          }
        );
        setHindiText(response.data.data.translations[0].translatedText);
      } catch (error) {
        console.error('Translation failed:', error);
      }
    };

    if (englishText !== '') {
      translateToHindi();
    }
  }, [englishText]);

  const handleTextExtraction = () => {
    const element = document.getElementById('translate-text');
    if (element) {
      setEnglishText(element.textContent);
    }
  };

  return (
    <>
      <div id="translate-text">
        fhvdksf ofiheiwof ofhoeiqwfhnewklf fewjfopewf
      </div>
      <button onClick={handleTextExtraction}>Extract Text</button>
      <p>Hindi Translation: {hindiText}</p>
    </>
  );
};

export default TextTranslate;

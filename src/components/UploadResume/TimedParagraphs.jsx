import React, { useState, useEffect } from 'react';

function TimedParagraphs() {
  const [visibleParagraph, setVisibleParagraph] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleParagraph((prev) => {
        if (prev < 2) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 2000); // 1000 ms = 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      {visibleParagraph >= 0 && <p>Processing the files...</p>}
      {visibleParagraph >= 1 && <p>Extracting data from the files...</p>}
      {visibleParagraph >= 2 && <p>Extraction done.</p>}
    </div>
  );
}

export default TimedParagraphs;

import React from 'react';
import Dates, { DateType } from 'm78/dates';

const Demo = () => {
  return (
    <div>
      <div>
        <Dates type={DateType.DATE} />
      </div>
      <div className="mt-24">
        <Dates type={DateType.MONTH} />
      </div>
      <div className="mt-24">
        <Dates type={DateType.YEAR} />
      </div>
      <div className="mt-24">
        <Dates type={DateType.DATE} hasTime />
      </div>
      <div className="mt-24">
        <Dates type={DateType.TIME} />
      </div>
    </div>
  );
};

export default Demo;

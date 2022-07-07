import React, { FC, HTMLAttributes } from 'react';
import { Pill } from '../Pill';
import { Card } from '../Card';

export interface PersonProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  imgUrl: string;
  name: string;
  jobTitle: string;
}

// Build out the component based on the props
export const Person: FC<PersonProps> = ({ imgUrl, name, jobTitle }) => {
  return (
    //pull all of our atoms together
    <div className="flex flex-col">
      <Card classes="w-64 h-64 flex flex-col items-center py-10" variant="elevation">
        <img
          src={imgUrl}
          alt="image of person"
          className="h-24 w-24 mb-2 rounded-full object-cover"
        />
        <Pill classes="bg-black text-white text-xl" text={jobTitle} size="sm" />
        <span className="text-xl font-bold mt-3">{name}</span>
      </Card>
    </div>
  );
};

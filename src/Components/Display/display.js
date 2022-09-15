import React from 'react';

export default function Display({ headCount, middleCount, bottomCount }) {
  return (
    <div>{`You have changed the head ${headCount} times, the middle ${middleCount} times, and the bottom ${bottomCount} times.`}</div>
  );
}
import React from 'react';
import Queue from './queue';
import Stack from './stack';

const Display = () => {
  //   const queue = new Queue();
  //   //   queue.dequeue();s
  //   queue.enqueue(10);
  //   queue.enqueue(20);
  //   queue.enqueue(30);
  //   queue.enqueue(40);
  //   queue.enqueue(50);
  //   console.log(queue.dequeue());
  //   console.log(queue);
  const stack = new Stack();
  console.log(stack.isEmpty());

  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.peek();
  console.log(stack.isEmpty());
  return (
    <>
      <div>{}</div>
    </>
  );
};

export default Display;

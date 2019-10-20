import * as React from 'react';

interface ITitle {
  title: string,
}

const Title = (props: ITitle) => {
  const { title } = props;

  return (
    <h1>
      {title}
    </h1>
  );
};

export default Title;

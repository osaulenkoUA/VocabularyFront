import useBreakpoints from 'use-breakpoints-width';

const screen = () => {
  // comment: why is this disabled? I think you can just rename screen function to useScreen, and react will consider it as a valid code
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { breakpoint } = useBreakpoints({
    breakpoints: {
      desktop: 1024,
      laptop: 768,
      mobile: 0,
    },
  });

  return breakpoint;
};

export default screen;

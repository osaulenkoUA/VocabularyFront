import useBreakpoints from 'use-breakpoints-width';

const screen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {breakpoint} = useBreakpoints({
    breakpoints: {
      desktop: 1024,
      laptop: 768,
      mobile: 0,
    },
  });

  return breakpoint;
}

export default screen;
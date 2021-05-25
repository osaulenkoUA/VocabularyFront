import useBreakpoints from 'use-breakpoints-width';

const useScreen = () => {

  const {breakpoint} = useBreakpoints({
    breakpoints: {
      desktop: 1024,
      laptop: 768,
      mobile: 0,
    },
  });

  return breakpoint;
}

export default useScreen;
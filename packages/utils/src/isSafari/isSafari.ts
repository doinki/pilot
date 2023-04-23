const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();

  return ua.includes('safari') && !ua.includes('chrom');
};

export default isSafari;

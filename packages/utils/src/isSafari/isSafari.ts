function isSafari(userAgent = navigator.userAgent) {
  const ua = userAgent.toLowerCase();

  return ua.includes('safari') && !ua.includes('chrom');
}

export default isSafari;

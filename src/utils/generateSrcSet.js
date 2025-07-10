export const generateSrcSet = (images) =>
    images.map(([path, width]) => `${path} ${width}w`).join(', ');

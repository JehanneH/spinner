const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let i = 0; i < animation.length; i++) {
    setTimeout(() => {
      process.stdout.write(animation[i]);
    }, 100 + 100 * i) 
  };
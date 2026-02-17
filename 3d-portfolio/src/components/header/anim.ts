const transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };

export const opacity = {
  initial: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 }
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 }
  }
};

export const height = {
  initial: {
    height: 0
  },
  enter: {
    height: 'auto', // Correct: fits the content of your links
    transition
  },
  exit: {
    height: 0,
    transition
  }
};

// Fixed: Removed 100dvh so it doesn't create a massive empty overlay
export const background = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  },
  closed: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  }
};

// Cleaner Hover: Subtle dimming instead of "all blur"
export const blur = {
  initial: {
    filter: 'blur(0px)',
    opacity: 1
  },
  open: {
    filter: 'blur(1px)', // Barely noticeable blur
    opacity: 0.4,       // Focuses attention on the hovered item by dimming others
    transition: { duration: 0.3 }
  },
  closed: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

// Subtler Entry: Links now slide up slightly rather than flying in from 100%
export const translate = {
  initial: {
    y: 10,
    opacity: 0
  },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: i[0] }
  }),
  exit: (i: number[]) => ({
    y: 10,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: i[1] }
  })
};
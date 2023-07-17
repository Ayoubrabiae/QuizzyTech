import react from "vite-plugin-react";

export default {
  plugins: [react()],

  build: {
    rollupOptions: {
      external: ["he"],
    },
  },
};

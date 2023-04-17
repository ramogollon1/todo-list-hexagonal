import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@adapters": path.resolve(__dirname, "src/adapters"),
      "@domain": path.resolve(__dirname, "src/domain"),
      "@screens": path.resolve(__dirname, "src/screens"),
      "@infrastructure": path.resolve(__dirname, "src/infrastructure"),
      "@application": path.resolve(__dirname, "src/application"),
    },
  },
});

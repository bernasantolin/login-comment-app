import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            "components": path.resolve(__dirname, "src/components"),
            "context": path.resolve(__dirname, "src/context"),
            "assets": path.resolve(__dirname, "src/assets"),
            "router": path.resolve(__dirname, "src/router"),
            "router": path.resolve(__dirname, "src/router"),
            "hooks": path.resolve(__dirname, "src/hooks"),
            "config": path.resolve(__dirname, "config"),
            "data": path.resolve(__dirname, "data")
        }
    }
})

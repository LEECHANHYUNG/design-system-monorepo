import { defineConfig } from "tsup";
import sassPlugin from "esbuild-plugin-sass";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true, // 타입 정의 파일 생성
  clean: true, // 빌드 전 디렉토리 정리
  external: ["react", "react-dom"], // 외부 라이브러리 지정
  esbuildPlugins: [sassPlugin()], // SCSS 처리 플러그인 추가
});

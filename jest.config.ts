import type { Config } from "@jest/types";
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|svg)$": "test/__mocks__/fileMock.ts",
  },
};

export default config;

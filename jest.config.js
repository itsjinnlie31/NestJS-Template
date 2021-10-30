// eslint-disable-next-line no-undef
module.exports = {
	testEnvironment: "node",
	bail: false,
	verbose: true,
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	testMatch: ["**/*.test.ts", "**/*.spec.ts"],
	collectCoverage: true,
	coverageDirectory: "<rootDir>/.coverage",
	coverageReporters: ["json", "lcov", "text", "clover", "html"],
	watchman: false,
};

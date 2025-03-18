const { execSync } = require('child_process')

function getCurrentBranch() {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', {
      encoding: 'utf8',
    }).trim()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error getting current branch:', error.message)
    return null
  }
}

// Define the branches that should trigger a release, with specific handling for pre-release branches
const branches = [
  'main', // The main production release branch
  { name: 'staging', prerelease: true }, // Any branch matching "staging" is treated as a pre-release
]
const branchName =
  process.env.CI_COMMIT_REF_NAME ||
  process.env.GITHUB_REF_NAME ||
  getCurrentBranch()

/**
 * Determines the CI platform (GitHub Actions or GitLab CI) based on the environment variables.
 * Returns the corresponding semantic-release plugin configuration.
 *
 * @returns {string[]} An array containing the appropriate plugin for the CI platform:
 *                     - `["@semantic-release/github"]` if the CI platform is GitHub Actions
 *                     - `["@semantic-release/gitlab"]` if the CI platform is GitLab CI
 *                     - An empty array `[]` for unknown CI platforms or local environments
 */
const getCIPlatformConfiguration = () => {
  if (process.env.GITHUB_ACTIONS) {
    // Use the GitHub plugin when running on GitHub Actions
    return ['@semantic-release/github']
  } else if (process.env.GITLAB_CI) {
    // Use the GitLab plugin when running on GitLab CI
    return ['@semantic-release/gitlab']
  } else {
    // Return an empty array if the CI environment is unknown or a local environment
    return []
  }
}

/**
 * Checks if the current branch is a production release branch.
 * A production branch is either the main "production" branch or any non-pre-release branches in the defined list.
 *
 * @returns {boolean} True if the current branch is a production release branch, otherwise false.
 */
const isProductionBranch = () => {
  return branches.some(
    (b) =>
      (typeof b === 'string' && b === branchName) || // Matches the main production branch
      (b.name === branchName && !b.prerelease) // Matches non-pre-release branches
  )
}

// Define plugins to use for production releases, including generating changelogs and committing release artifacts
const releasePluginsForProduction = [
  '@semantic-release/changelog', // Automatically generates and updates CHANGELOG.md
  '@semantic-release/npm', // Publishes the package to npm (optional step)
  [
    '@semantic-release/git',
    {
      assets: ['CHANGELOG.md'], // Files to commit to the repository
    },
  ], // Commits changelog and package files
]

module.exports = {
  branches,
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular', // Use the Angular commit message format for version analysis
        releaseRules: [
          { type: 'config', release: 'patch' }, // Treat configuration changes as patch releases
          { type: 'feat', release: 'minor' }, // Features trigger a minor release
          { type: 'fix', release: 'patch' }, // Bug fixes trigger a patch release
          { type: 'perf', release: 'patch' }, // Performance improvements trigger patch releases
          { type: 'refactor', release: 'patch' }, // Code refactoring is treated as a patch
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'], // Detect breaking changes using specific keywords
        },
      },
    ], // Analyze commit messages to determine the appropriate version bump
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits', // Use the Conventional Commits format for generating release notes
        presetConfig: {
          types: [
            { type: 'config', section: 'Configuration Updates' }, // Categorize config changes under "Configuration Updates"
            { type: 'feat', section: 'Features' }, // Categorize features under "Features"
            { type: 'fix', section: 'Bug Fixes' }, // Categorize bug fixes under "Bug Fixes"
            { type: 'perf', section: 'Performance Improvements' }, // Categorize performance improvements
            { type: 'chore', hidden: true }, // Hide chore commits in release notes
            { type: 'docs', hidden: true }, // Hide documentation changes
            { type: 'refactor', section: 'Code Refactoring' }, // Categorize refactors under "Code Refactoring"
            { type: 'style', hidden: true }, // Hide style changes
            { type: 'test', hidden: true }, // Hide test-related commits
          ],
        },
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'], // Identify breaking changes in release notes
        },
      },
    ], // Automatically generate release notes based on commit history
    ...(isProductionBranch() ? releasePluginsForProduction : []), // Include production release plugins only if the branch is a production branch
    ...getCIPlatformConfiguration(), // Load CI-specific plugins (GitHub or GitLab) based on the CI platform
  ],
}

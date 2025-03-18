{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.corepack_18
  ];
}

# yarn install -D semantic-release @semantic-release/gitlab @semantic-release/git @semantic-release/changelog conventional-changelog-conventionalcommits
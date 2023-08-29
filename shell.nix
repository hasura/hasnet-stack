with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "hasnet-tools";
  buildInputs = [
    just
    nodejs-18_x
  ];
}
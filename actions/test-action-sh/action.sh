#!/bin/bash
set -e

VERBOSITY=${1:-minimal}
TESTPROJECT=${2}
DOTNET=${3:-10.0.x}
echo "Action using sh script with parameters $VERBOSITY - $DOTNET - $TESTPROJECT"
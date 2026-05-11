#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT_DIR="$ROOT_DIR/backup"
TIMESTAMP="$(date +%Y%m%d_%H%M%S)"
ZIP_NAME="nhat-ky-doi_${TIMESTAMP}.zip"

mkdir -p "$OUTPUT_DIR"

cd "$ROOT_DIR"
zip -r "$OUTPUT_DIR/$ZIP_NAME" index.html style.css app.js HUONG_DAN_CHAY.md HUONG_DAN_LUU_TAI_LIEU.md >/dev/null

echo "Da tao goi luu tru: $OUTPUT_DIR/$ZIP_NAME"

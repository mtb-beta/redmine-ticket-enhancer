#!/usr/bin/env python
"""
SVGからPNGアイコンを生成するスクリプト
必要なサイズ: 16x16, 48x48, 128x128
"""
import os
from cairosvg import svg2png
from PIL import Image, ImageOps

def generate_icon(svg_path, output_path, size):
    """SVGからPNGを生成し、指定したサイズにリサイズする"""
    # SVGからPNGに変換
    svg2png(url=svg_path, write_to=output_path, output_width=size, output_height=size)
    
    # PILを使って画像を読み込み、必要に応じて後処理
    img = Image.open(output_path)
    
    # アイコンは正方形で、サイズ確認
    if img.width != size or img.height != size:
        img = img.resize((size, size), Image.LANCZOS)
    
    # 画像を保存
    img.save(output_path, "PNG")
    print(f"Generated {output_path} ({size}x{size})")

def main():
    # パスの設定
    base_dir = os.path.dirname(os.path.abspath(__file__))
    svg_path = os.path.join(base_dir, "icons", "footprint_icon.svg")
    
    # 各サイズのアイコンを生成
    sizes = [16, 48, 128]
    for size in sizes:
        output_path = os.path.join(base_dir, "icons", f"icon{size}.png")
        generate_icon(svg_path, output_path, size)

if __name__ == "__main__":
    main()
import pathlib, urllib.request, io
from PIL import Image

root=pathlib.Path("public/portfolio/tala-leka")
root.mkdir(parents=True,exist_ok=True)
cdn="https://res.cloudinary.com/gbsz4bq3/"
samples=[
 ("monthly-statement.pdf","raw/upload/v1795689813/tala-leka/reports/unravel-viti-generic-mock-statement-2026.pdf","image/upload/v1795689794/tala-leka/reports/unravel-viti-generic-mock-statement-2026.png"),
 ("proof-of-delivery.pdf","raw/upload/v1795689227/tala-leka/reports/pod-synthetic-2026.pdf","image/upload/v1795689214/tala-leka/reports/pod-synthetic-2026.png.png")
]
def fetch(path):
    req=urllib.request.Request(cdn+path,headers={"User-Agent":"Tokani-public-sample-migration/1.0"})
    with urllib.request.urlopen(req,timeout=40) as response:
        data=response.read(10_000_001)
        if len(data)>10_000_000: raise ValueError("Unexpected asset size")
        return data
for name,pdf,png in samples:
    target=root/name
    try:
        data=fetch(pdf)
        if not data.startswith(b"%PDF-") or b"%%EOF" not in data[-1024:]: raise ValueError("Not a PDF")
        target.write_bytes(data)
        print(name,"original PDF",len(data))
    except Exception as exc:
        print(name,"original unavailable:",type(exc).__name__,str(exc))
        data=fetch(png)
        if not data.startswith(b"\x89PNG\r\n\x1a\n"): raise ValueError("Not the expected PNG")
        with Image.open(io.BytesIO(data)) as im:
            im.load()
            if im.width<800 or im.height<1000: raise ValueError("Unexpected preview dimensions")
            # Preserve full page, proportions and fictional sample exactly as published.
            rgb=Image.new("RGB", im.size, "white")
            rgba=im.convert("RGBA")
            rgb.paste(rgba, mask=rgba.getchannel("A"))
            rgb.save(target,"PDF",resolution=127.0,quality=96,title="Tala Leka — fictional sample document",author="Tokani Technologies")
        print(name,"PDF copy of approved preview",target.stat().st_size)
    assert target.read_bytes().startswith(b"%PDF-")

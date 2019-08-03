import os, sys
from PIL import Image

size = 80, 80

for infile in os.listdir("images"):
    outfile = os.path.splitext(infile)[0] + ".jpeg"
    if infile != outfile:
        try:
            im = Image.open("images//" + infile)
            im.thumbnail(size, Image.ANTIALIAS)
            im.save(outfile, "JPEG")
        except IOError:
            print("cannot create thumbnail for '%s'" % infile)
    else:
        print("Not happening")
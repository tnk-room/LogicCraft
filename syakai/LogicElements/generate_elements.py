from PIL import Image, ImageDraw, ImageFont

# font_path = "/font/ZenAntiqueSoft.ttf"  # 使用するフォントファイルの名前
# font_size = 24
# font = ImageFont.truetype(font_path, font_size) 

# Create a new image with a white background
image = Image.new('RGB', (400, 300), (222, 222, 222))
image2 = Image.new('RGB', (400, 300), (222, 222, 222))
image3 = Image.new('RGB', (400, 300), (222, 222, 222))
image4 = Image.new('RGB', (400, 300), (222, 222, 222))
image5 = Image.new('RGB', (400, 300), (222, 222, 222))
image6 = Image.new('RGB', (400, 300), (222, 222, 222))

image_void = Image.new('RGB', (400, 300), (222, 222, 222))

AND = ImageDraw.Draw(image)
OR = ImageDraw.Draw(image2)
NAND = ImageDraw.Draw(image3)
NOR = ImageDraw.Draw(image4)
XOR = ImageDraw.Draw(image5)
XNOR = ImageDraw.Draw(image6)

VOID = ImageDraw.Draw(image_void)

# Draw a logic element (e.g., AND gate)
AND.line([(50, 50), (220, 50)], fill='black', width=4)
AND.line([(50, 50), (50, 250)], fill='black', width=4)
AND.line([(50, 250), (220, 250)], fill='black', width=4)
AND.arc([(120, 50), (320, 250)], start=270, end=90, fill='black', width=4)
#AND.text((125, 125), 'AND', fill='black')

# Draw a logic element (e.g., OR gate)
OR.arc([(50, 50), (150, 250)], start=270, end=90, fill='black', width=4)
OR.line([(100, 50), (190, 50)], fill='black', width=4)
OR.line([(100, 248), (190, 248)], fill='black', width=4)
OR.arc([(20, -30), (350, 250)], start=17, end=90, fill='black', width=4)
OR.arc([(20, 50), (352, 360)], start=270, end=340, fill='black', width=4)
#OR.text((125, 125), 'OR', fill='black')

# Draw a logic element (e.g., NAND gate)
NAND.line([(50, 50), (220, 50)], fill='black', width=4)
NAND.line([(50, 50), (50, 250)], fill='black', width=4)
NAND.line([(50, 250), (220, 250)], fill='black', width=4)
NAND.arc([(120, 50), (320, 250)], start=270, end=90, fill='black', width=4)
NAND.ellipse([(320, 135), (350, 165)], outline = 'black', width = 3)
#NAND.text((125, 125), 'AND', fill='black')

# Draw a logic element (e.g., NOR gate)
NOR.arc([(50, 50), (150, 250)], start=270, end=90, fill='black', width=4)
NOR.line([(100, 50), (190, 50)], fill='black', width=4)
NOR.line([(100, 248), (190, 248)], fill='black', width=4)
NOR.arc([(20, -30), (350, 250)], start=17, end=90, fill='black', width=4)
NOR.arc([(20, 50), (352, 360)], start=270, end=340, fill='black', width=4)
NOR.ellipse([(340, 135), (370, 165)], outline = 'black', width = 3)
#NOR.text((125, 125), 'OR', fill='black')

# Draw a logic element (e.g., XOR gate)
XOR.arc([(20, 50), (120, 250)], start=270, end=90, fill='black', width=4)
XOR.arc([(50, 50), (150, 250)], start=270, end=90, fill='black', width=4)
XOR.line([(100, 50), (190, 50)], fill='black', width=4)
XOR.line([(100, 248), (190, 248)], fill='black', width=4)
XOR.arc([(20, -30), (350, 250)], start=17, end=90, fill='black', width=4)
XOR.arc([(20, 50), (352, 360)], start=270, end=340, fill='black', width=4)
#XOR.text((125, 125), 'XOR', fill='black')


# Draw a logic element (e.g., XNOR gate)
XNOR.arc([(20, 50), (120, 250)], start=270, end=90, fill='black', width=4)
XNOR.arc([(50, 50), (150, 250)], start=270, end=90, fill='black', width=4)
XNOR.line([(100, 50), (190, 50)], fill='black', width=4)
XNOR.line([(100, 248), (190, 248)], fill='black', width=4)
XNOR.arc([(20, -30), (350, 250)], start=17, end=90, fill='black', width=4)
XNOR.arc([(20, 50), (352, 360)], start=270, end=340, fill='black', width=4)
XNOR.ellipse([(340, 135), (370, 165)], outline = 'black', width = 3)
#XNOR.text((200, 265), 'XNOR', fill='black')


# Draw input lines
AND.line([(0, 100), (50, 100)], fill='black', width=2)
AND.line([(0, 200), (50, 200)], fill='black', width=2)
OR.line([(0, 100), (140, 100)], fill='black', width=2)
OR.line([(0, 200), (140, 200)], fill='black', width=2)
NAND.line([(0, 100), (50, 100)], fill='black', width=2)
NAND.line([(0, 200), (50, 200)], fill='black', width=2) 
NOR.line([(0, 100), (140, 100)], fill='black', width=2)
NOR.line([(0, 200), (140, 200)], fill='black', width=2)
XOR.line([(0, 100), (110, 100)], fill='black', width=2)
XOR.line([(0, 200), (110, 200)], fill='black', width=2)
XNOR.line([(0, 100), (110, 100)], fill='black', width=2)
XNOR.line([(0, 200), (110, 200)], fill='black', width=2)


# Draw output line
AND.line([(320, 150), (400, 150)], fill='black', width=2)
OR.line([(340, 150), (400, 150)], fill='black', width=2)
NAND.line([(350, 150), (400, 150)], fill='black', width=2)
NOR.line([(370, 150), (400, 150)], fill='black', width=2)
XOR.line([(340, 150), (400, 150)], fill='black', width=2)
XNOR.line([(370, 150), (400, 150)], fill='black', width=2)

#Draw a frame
AND.rectangle([(0, 0), (400, 300)], outline='#646464', width=9)
OR.rectangle([(0, 0), (400, 300)], outline='#646464', width=9)
NAND.rectangle([(0, 0), (400, 300)], outline='#646464', width=9)
NOR.rectangle([(0, 0), (400, 300)], outline='#646464', width=9)
XOR.rectangle([(0, 0), (400, 300)], outline='#646464', width=9)
XNOR.rectangle([(0, 0), (400, 300)], outline='#646464', width=9)
VOID.rectangle([(0, 0), (400, 300)], outline='#646464', width=9)


# Save the image as a JPG file
image.save('syakai/img/AND.png', quality=95)
image2.save('syakai/img/OR.png', quality=95)
image3.save('syakai/img/NAND.png', quality=95)
image4.save('syakai/img/NOR.png', quality=95)
image5.save('syakai/img/XOR.png', quality=95)
image6.save('syakai/img/XNOR.png', quality=95)
image_void.save('syakai/img/void.png', quality=95)

# Display the image
# image.show()
# image2.show()
# image3.show()
# image4.show()
# image5.show()
# image6.show()
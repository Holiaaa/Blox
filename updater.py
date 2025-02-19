import requests
import json
import os

# Blox Updater
# by Téo JAUFFRET
# https://github.com/Holiaaa/Blox

ROBLOXLUA_FILE = "https://github.com/Holiaaa/Blox/raw/refs/heads/main/src/generators/robloxlua.ts"
TEXTTS_FILE = "https://github.com/Holiaaa/Blox/raw/refs/heads/main/src/blocks/text.ts"
TOOLBOX_FILE = "https://github.com/Holiaaa/Blox/raw/refs/heads/main/src/toolbox.ts"

VERSION = "https://raw.githubusercontent.com/Holiaaa/Blox/refs/heads/main/package.json"
INSTALLED_VERSION = "./package.json"

response_version = requests.get(VERSION)
if response_version.status_code == 200:
    data_1 = json.loads(response_version.content)
else:
    print(f"Failed to retrieve version info: {response_version.status_code}")
    exit()

try:
    with open(INSTALLED_VERSION, "r") as f:
        data_2 = json.load(f)
        f.close()
except FileNotFoundError:
    print(f"{INSTALLED_VERSION} not found.")
    exit()

print("Blox Updater.")
print(f"Blox actual version: {data_1['version']}")
print(f"Your Blox version: {data_2['version']}")

if str(data_1['version']) == str(data_2['version']):
    print("You have the latest version of Blox installed!")
    input()
    exit()
else:
    print("You have a different version installed!")
    input("Press enter to install the latest version...")

os.remove("./src/blocks/text.ts")
os.remove("./src/generators/robloxlua.ts")
os.remove("./src/toolbox.ts")
os.remove("./package.json")

ROBLOXLUA_CODE = requests.get(ROBLOXLUA_FILE).content.decode("utf-8")
TEXTTS_CODE = requests.get(TEXTTS_FILE).content.decode("utf-8")
TOOLBOX_CODE = requests.get(TOOLBOX_FILE).content.decode("utf-8")
PACKAGE_JOSN = response_version.content.decode("utf-8")

with open("./package.json", "w") as f:
    f.write(PACKAGE_JOSN)
    f.close()

with open("./src/blocks/text.ts", "w") as f:
    f.write(TEXTTS_CODE)
    f.close()

with open("./src/generators/robloxlua.ts", "w") as f:
    f.write(ROBLOXLUA_CODE)
    f.close()

with open("./src/toolbox.ts", "w") as f:
    f.write(TOOLBOX_CODE)
    f.close()

print(f"Your Blox version has been updated to {data_1['version']}")

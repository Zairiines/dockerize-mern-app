import yaml

with open('docker-compose.yml', 'r') as file:
    try:
        yaml.safe_load(file)
        print("YAML is valid")
    except yaml.YAMLError as exc:
        print("YAML is invalid", exc)

# Define the image to use
image:
  file: .gitpod.Dockerfile

# Initialize the environment
tasks:
  - name: Start Expo Dev Server
    command: |
      npm install -g expo-cli
      npm install
      expo install
      expo start --tunnel

ports:
  - port: 19000 # Metro bundler (Expo Dev Tools)
    onOpen: open-browser
  - port: 19001 # Expo WebSocket connection
    onOpen: ignore
  - port: 19002 # Expo Web interface
    onOpen: open-preview

# Start Expo CLI automatically
onStart:
  tasks:
    - name: Start Expo
      command: expo start --tunnel
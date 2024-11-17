FROM gitpod/workspace-full:latest

# Install Node.js and Yarn (already included in gitpod/workspace-full by default)
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn

# Install Expo CLI globally
RUN npm install -g expo-cli
type PostCSSConfig = {
  plugins: Record<string, any>;
};

const config: PostCSSConfig = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
};

export default config;
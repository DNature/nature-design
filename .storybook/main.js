module.exports = {
  stories: ['../packages/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('babel-preset-react-app')],
          },
        },
        require.resolve('react-docgen-typescript-loader'),
      ],
    });
    config.module.rules.push(
      {
        test: /\.css$/i,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
        ],
      },
      {
        test: /\.css$/,
        use: {
          loader: require.resolve('css-loader'),
          options: {
            modules: true,
          },
        },
      },
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

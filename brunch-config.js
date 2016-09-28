// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },

  paths: {
    watched: [
      "src"
    ],
    public: "static"
  },

  plugins: {
    bucklescriptBrunch: {
      // binPaths: {}, // If empty it will look in the node_modules then the global path
      bscCwd: "src",
      tempOutputFolder: "tmp",
      compileAllAtOnce: false,
      bscParameters: [
        "-bs-cross-module-opt"
      ],
      verbosity: 1
    }
  },

  modules: {
    autoRequire: {
      'app.js': ['src/main_entry.ml'],
    },
  },

  npm: {
    enabled: true,
    whitelist: [
      "bs-platform"
    ]
  }
};

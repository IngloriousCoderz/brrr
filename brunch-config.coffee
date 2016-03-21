module.exports =
  files:
    javascripts:
      joinTo:
        'vendor.js': /^(?!app)/
        'core.js': /^app\/(?!(tags|components))/
        'components.js': /^app\/components/
        'tags.js': /^app\/tags\/.*\.js/

    stylesheets: joinTo: 'app.css'

  plugins:
    babel: presets: ['es2015', 'react']

    # on: ['riot']
    # riot:
    #   extension: 'tag'   # pattern overrides extension
    #   pattern: /\.tag$/  # default

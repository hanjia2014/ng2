System.config({
    defaultJSExtensions: true,
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    map: {
        'ng-forward': 'https://gist.githubusercontent.com/timkindberg/d93ab6e17fc07b4db7e9/raw/b311a63e0e96078774e69f26d8e8805b7c8b0dd2/ng-forward.0.0.1-alpha.10.js',
        'typescript': 'https://raw.githubusercontent.com/Microsoft/TypeScript/master/lib/typescript.js',
    },
    paths: {
        app: 'src'
    },
    packages: {
        app: {
            main: 'app.ts',
            defaultExtension: 'ts',
        }
    }
});
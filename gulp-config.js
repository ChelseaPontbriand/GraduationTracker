const env = require('./gulp-env')();

module.exports = () => {
    const config = {
        html: {
            source: `${env.srcPath}/**/*.html`,
            lintPath: `${env.srcPath}/`,
            build: `${env.buildPath}/`
        },
        styles: {
            source: `${env.srcPath}/styles/**/*.{scss,sass,css}`,
            lintPath: `${env.srcPath}/styles/`,
            build: `${env.buildPath}/styles/`
        },
        scripts: {
            source: `${env.srcPath}/scripts/**/*.js`,
            lintPath: `${env.srcPath}/scripts/`,
            build: `${env.buildPath}/scripts/`
        },
        images: {
            source: `${env.srcPath}/images/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF,svg}`,
            build: `${env.buildPath}/images/`
        },
        browserSync: {
            port: env.port,
            ghostMode: {
                clicks: true,
                location: true,
                forms: true,
                scroll: true
            },
            injectChanges: true,
            notify: true,
            reloadDelay: 0
        },
        options: {
            autoPrefixerOptions: ['last 4 versions', '> 9%'],
            babelEnvOptions: {
                presets: [
                    ['env', {
                        targets: {
                            browsers: ['last 4 versions']
                        }
                    }]
                ],
                plugins: ['transform-object-rest-spread']
            },
            sass: {
                outputStyle: 'compressed' // 'expanded'
            },
            formatting: {
                'indent_size': 4,
                'indent_char': ' ',
                'indent_with_tabs': false,
                'preserve_newlines': true,
                'max_preserve_newlines': 5,
                'space_after_anon_function': true,
                'brace_style': 'collapse',
                'break_chained_methods': false,
                'keep_array_indentation': true,
                'end_with_newline': true,
                'operator_position': 'before-newline',
                'indent_inner_html': false,
                'indent_scripts': 'normal',
                'wrap_line_length': 0,
                css: {
                    'selector_separator_newline': false
                }
            },
            lint: {
                js: {
                    rules: {
                        'comma-dangle': 2,
                        'no-cond-assign': 2,
                        'no-eval': 2,
                        'no-script-url': 2,
                        'no-self-compare': 2,
                        'no-with': 2,
                        'no-shadow-restricted-names': 2,
                        'no-delete-var': 2,
                        'no-undefined': 2,

                        'wrap-iife': [1, 'inside'],
                        'quotes': [1, 'single'],
                        'no-console': 1,
                        'no-debugger': 1,
                        'no-dupe-keys': 1,
                        'no-empty': 1,
                        'no-empty-character-class': 1,
                        'no-extra-semi': 1,
                        'no-inner-declarations': 1,
                        'no-invalid-regexp': 1,
                        'no-irregular-whitespace': 1,
                        'no-obj-calls': 1,
                        'no-sparse-arrays': 1,
                        'no-unreachable': 1,
                        'use-isnan': 1,
                        'valid-typeof': 1,
                        'curly': 1,
                        'default-case': 1,
                        'dot-notation': 1,
                        'no-alert': 1,
                        'no-else-return': 1,
                        'no-eq-null': 1,
                        'no-iterator': 1,
                        'no-multi-spaces': 1,
                        'no-multi-str': 1,
                        'no-native-reassign': 1,
                        'no-new': 1,
                        'no-new-func': 1,
                        'no-new-wrappers': 1,
                        'no-proto': 1,
                        'no-redeclare': 1,
                        'no-return-assign': 1,
                        'no-sequences': 1,
                        'no-unused-expressions': 1,
                        'no-catch-shadow': 1,
                        'no-label-var': 1,
                        'no-shadow': 1,
                        'no-undef-init': 1,
                        'no-unused-vars': 1,
                        'brace-style': 1,
                        'camelcase': 1,
                        'comma-spacing': 1,
                        'comma-style': 1,
                        'consistent-this': 1,
                        'eol-last': 1,
                        'vars-on-top': 1,
                        'key-spacing': 1,
                        'max-nested-callbacks': 1,
                        'new-cap': 1,
                        'new-parens': 1,
                        'no-array-constructor': 1,
                        'no-inline-comments': 1,
                        'no-lonely-if': 1,
                        'no-mixed-spaces-and-tabs': 1,
                        'no-multiple-empty-lines': 1,
                        'no-nested-ternary': 1,
                        'no-new-object': 1,
                        'semi-spacing': 1,
                        'no-spaced-func': 1,
                        'no-trailing-spaces': 1,
                        'no-underscore-dangle': 1,
                        'no-extra-parens': 1,
                        'operator-assignment': 1,
                        'semi': 1,
                        'keyword-spacing': 1,
                        'space-before-blocks': 1,
                        'object-curly-spacing': 1,
                        'space-in-parens': 1,
                        'space-infix-ops': 1,
                        'space-unary-ops': 1,
                        'spaced-comment': 1,
                        'wrap-regex': 1,
                        'generator-star-spacing': 1,

                        'no-var': 0, // this one i am on the fence about. maybe we can set a flag for evergreen browsers
                        'no-use-before-define': 0,
                        'no-func-assign': 0,
                        'one-var': 0,
                        'eqeqeq': 0,
                        'guard-for-in': 0,
                        'no-loop-func': 0,
                        'func-names': 0,
                        'func-style': 0,
                        'no-ternary': 0,
                        'padded-blocks': 0,
                        'quote-props': 0,
                        'sort-vars': 0,
                        'space-before-function-paren': 0
                    },
                    globals: ['jQuery', '$', 'TweenLite', 'TweenMax', 'TimelineLite', 'TimelineMax'],
                    envs: ['browser', 'es6']
                },
                sass: {
                    options: {
                        formatter: 'stylish',
                        'merge-default-rules': true
                    },
                    rules: {
                        'indentation': [1, {
                            size: 4
                        }],
                        'nesting-depth': [1, {
                            'max-depth': 4
                        }], // this would be something i want to flag, i like three deep
                        'no-transition-all': 0,
                        'no-color-literals': 0,
                        'final-newline': 0,
                        'class-name-format': [1, {
                            convention: 'hyphenatedbem'
                        }],
                        'no-duplicate-properties': [1, {
                            exclude: ['display', 'font-size', 'line-height', 'text-decoration']
                        }],
                        'mixins-before-declarations': 0,
                        'empty-line-between-blocks': 0,
                        'property-sort-order': 0,
                        'space-around-operator': 0,
                        'pseudo-element': 0,
                        'no-url-domains': 0,
                        'no-url-protocols': 0,
                        'quotes': 0,
                        'leading-zero': [1, {
                            include: true
                        }],
                        'single-line-per-selector': 0,
                        'force-pseudo-nesting': 0
                    }
                },
                html: {
                    rules: {
                        "attr-bans": 0,
                        "attr-name-ignore-regex": 0,
                        "attr-name-style": 0,
                        "attr-new-line": 0,
                        "attr-no-dup": 0,
                        "attr-no-unsafe-char": 0,
                        "attr-order": 0,
                        "attr-quote-style": 0,
                        "attr-req-value": 0,
                        "class-no-dup": 0,
                        "class-style": 0,
                        "doctype-first": 0,
                        "doctype-html5": 0,
                        "fig-req-figcaption": 0,
                        "focusable-tabindex-style": 0,
                        "head-req-title": 0,
                        "head-valid-content-model": 0,
                        "href-style": 0,
                        "html-req-lang": 0,
                        "html-valid-content-model": 0,
                        "id-class-ignore-regex": 0,
                        "id-class-no-ad": 0,
                        "id-class-style": 0,
                        "id-no-dup": 0,
                        "img-req-alt": 0,
                        "img-req-src": 0,
                        "indent-style": 0,
                        "indent-width": 0,
                        "indent-width-cont": 0,
                        "input-radio-req-name": 0,
                        "input-req-label": 0,
                        "label-req-for": 0,
                        "lang-style": 0,
                        "line-end-style": 0,
                        "line-max-len": 0,
                        "line-max-len-ignore-regex": 0,
                        "spec-char-escape": 0,
                        "table-req-caption": 0,
                        "table-req-header": 0,
                        "tag-bans": 0,
                        "tag-close": 0,
                        "tag-name-lowercase": 0,
                        "tag-name-match": 0,
                        "tag-self-close": 0,
                        "title-max-len": 0,
                        "title-no-dup": 0
                    }
                }
            }
        }
    }

    return config;
};
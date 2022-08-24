'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-c29646fd1fe959ae5f53f5ffe0c726f96eaaff56b40c134f559931414dfe18550f40ee825a8b01f132bd6712aa1ab2c325ab0c8e393189d94bf4f3a332b9fe28"' : 'data-target="#xs-controllers-links-module-AuthModule-c29646fd1fe959ae5f53f5ffe0c726f96eaaff56b40c134f559931414dfe18550f40ee825a8b01f132bd6712aa1ab2c325ab0c8e393189d94bf4f3a332b9fe28"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c29646fd1fe959ae5f53f5ffe0c726f96eaaff56b40c134f559931414dfe18550f40ee825a8b01f132bd6712aa1ab2c325ab0c8e393189d94bf4f3a332b9fe28"' :
                                            'id="xs-controllers-links-module-AuthModule-c29646fd1fe959ae5f53f5ffe0c726f96eaaff56b40c134f559931414dfe18550f40ee825a8b01f132bd6712aa1ab2c325ab0c8e393189d94bf4f3a332b9fe28"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-c29646fd1fe959ae5f53f5ffe0c726f96eaaff56b40c134f559931414dfe18550f40ee825a8b01f132bd6712aa1ab2c325ab0c8e393189d94bf4f3a332b9fe28"' : 'data-target="#xs-injectables-links-module-AuthModule-c29646fd1fe959ae5f53f5ffe0c726f96eaaff56b40c134f559931414dfe18550f40ee825a8b01f132bd6712aa1ab2c325ab0c8e393189d94bf4f3a332b9fe28"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c29646fd1fe959ae5f53f5ffe0c726f96eaaff56b40c134f559931414dfe18550f40ee825a8b01f132bd6712aa1ab2c325ab0c8e393189d94bf4f3a332b9fe28"' :
                                        'id="xs-injectables-links-module-AuthModule-c29646fd1fe959ae5f53f5ffe0c726f96eaaff56b40c134f559931414dfe18550f40ee825a8b01f132bd6712aa1ab2c325ab0c8e393189d94bf4f3a332b9fe28"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' : 'data-target="#xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' :
                                        'id="xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TodoModule.html" data-type="entity-link" >TodoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TodoModule-24992e47dc8fa26fa6f0e40c20b886452cb46a2f962185327db580eb4199bbadccbd9a923ed258690d9b8aee8d20449a498008f0b3cb03543c598a998a7ffeee"' : 'data-target="#xs-controllers-links-module-TodoModule-24992e47dc8fa26fa6f0e40c20b886452cb46a2f962185327db580eb4199bbadccbd9a923ed258690d9b8aee8d20449a498008f0b3cb03543c598a998a7ffeee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TodoModule-24992e47dc8fa26fa6f0e40c20b886452cb46a2f962185327db580eb4199bbadccbd9a923ed258690d9b8aee8d20449a498008f0b3cb03543c598a998a7ffeee"' :
                                            'id="xs-controllers-links-module-TodoModule-24992e47dc8fa26fa6f0e40c20b886452cb46a2f962185327db580eb4199bbadccbd9a923ed258690d9b8aee8d20449a498008f0b3cb03543c598a998a7ffeee"' }>
                                            <li class="link">
                                                <a href="controllers/TodoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TodoModule-24992e47dc8fa26fa6f0e40c20b886452cb46a2f962185327db580eb4199bbadccbd9a923ed258690d9b8aee8d20449a498008f0b3cb03543c598a998a7ffeee"' : 'data-target="#xs-injectables-links-module-TodoModule-24992e47dc8fa26fa6f0e40c20b886452cb46a2f962185327db580eb4199bbadccbd9a923ed258690d9b8aee8d20449a498008f0b3cb03543c598a998a7ffeee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TodoModule-24992e47dc8fa26fa6f0e40c20b886452cb46a2f962185327db580eb4199bbadccbd9a923ed258690d9b8aee8d20449a498008f0b3cb03543c598a998a7ffeee"' :
                                        'id="xs-injectables-links-module-TodoModule-24992e47dc8fa26fa6f0e40c20b886452cb46a2f962185327db580eb4199bbadccbd9a923ed258690d9b8aee8d20449a498008f0b3cb03543c598a998a7ffeee"' }>
                                        <li class="link">
                                            <a href="injectables/TodoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-814bf25d2f7ad7ac8439f1123f401f0e859eda83be945d9ce62acd69c12123f84b32dbf7dc9b577161b164d9c40564aad84edf5f06bdd03ccb470550b6a7ba26"' : 'data-target="#xs-controllers-links-module-UserModule-814bf25d2f7ad7ac8439f1123f401f0e859eda83be945d9ce62acd69c12123f84b32dbf7dc9b577161b164d9c40564aad84edf5f06bdd03ccb470550b6a7ba26"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-814bf25d2f7ad7ac8439f1123f401f0e859eda83be945d9ce62acd69c12123f84b32dbf7dc9b577161b164d9c40564aad84edf5f06bdd03ccb470550b6a7ba26"' :
                                            'id="xs-controllers-links-module-UserModule-814bf25d2f7ad7ac8439f1123f401f0e859eda83be945d9ce62acd69c12123f84b32dbf7dc9b577161b164d9c40564aad84edf5f06bdd03ccb470550b6a7ba26"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-814bf25d2f7ad7ac8439f1123f401f0e859eda83be945d9ce62acd69c12123f84b32dbf7dc9b577161b164d9c40564aad84edf5f06bdd03ccb470550b6a7ba26"' : 'data-target="#xs-injectables-links-module-UserModule-814bf25d2f7ad7ac8439f1123f401f0e859eda83be945d9ce62acd69c12123f84b32dbf7dc9b577161b164d9c40564aad84edf5f06bdd03ccb470550b6a7ba26"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-814bf25d2f7ad7ac8439f1123f401f0e859eda83be945d9ce62acd69c12123f84b32dbf7dc9b577161b164d9c40564aad84edf5f06bdd03ccb470550b6a7ba26"' :
                                        'id="xs-injectables-links-module-UserModule-814bf25d2f7ad7ac8439f1123f401f0e859eda83be945d9ce62acd69c12123f84b32dbf7dc9b577161b164d9c40564aad84edf5f06bdd03ccb470550b6a7ba26"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTodoDto.html" data-type="entity-link" >CreateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoEntity.html" data-type="entity-link" >TodoEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoDto.html" data-type="entity-link" >UpdateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
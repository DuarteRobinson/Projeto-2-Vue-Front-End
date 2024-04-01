<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    Loja Online Projeto 2 Vue
                </div>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true">a</span>
                    <span aria-hidden="true">a</span>
                    <span aria-hidden="true">a</span>
                    <span aria-hidden="true">a</span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">    
                    <RouterLink class="navbar-item" active-class="is-active" to="/">Apontamentos</RouterLink>
                    <RouterLink class="navbar-item" active-class="is-active" to="/stats">Estatísticas</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>
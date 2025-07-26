<template>
    <div>
        <nav id="nav">
            <a href="#services">Services</a>
            <a href="#wood">Wood</a>
            <a href="#desc">Who we Are</a>
            <a href="#contacts">Contact Us</a>
        </nav>
    </div>
</template>

<style scoped>
#nav {
    background-color: darkgreen;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

#nav > * {
    padding: 0 15px;
    padding-top: 7px;
    color: #ddd;
    height: 100%;
    transition: background-color 0.3s ease;
}

#nav > *:hover {
    transition: background-color 0.3s ease;
    background-color: #5e462a;
}
</style>